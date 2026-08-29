const fs = require("fs");
const path = require("path");
const { chromium } = require("C:/Users/ZY/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const baseUrl = "http://127.0.0.1:8765/";
const outputDir = path.resolve(__dirname, "..", "outputs", "qa");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"]
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    permissions: ["microphone"]
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });

  await page.goto(`${baseUrl}?view=overview`, { waitUntil: "networkidle" });
  await page.waitForSelector(".nav-item.active");
  assert(await page.evaluate(() => typeof (window.SpeechRecognition || window.webkitSpeechRecognition) === "function"), "Chrome SpeechRecognition API is unavailable");
  assert(await page.evaluate(() => typeof window.Vosk !== "undefined"), "Offline Vosk engine is unavailable");
  const modelParts = await page.evaluate(async () => (await Promise.all(["assets/models/vosk-cn.part1", "assets/models/vosk-cn.part2", "assets/models/vosk-cn.part3"].map(async (url) => (await fetch(url, { method: "HEAD" })).ok))).every(Boolean));
  assert(modelParts, "Offline model parts are missing");
  assert(await page.locator(".ready-board").count() === 1, "Initial overview should wait in the neutral course state");
  assert(!(await page.locator("body").innerText()).includes("重点学生任务状态"), "Student answer appeared before a question");
  assert(await page.locator(".text-action").evaluate((element) => element.hidden), "Analysis link should stay hidden before a question");
  assert(!(await page.locator("body").innerText()).includes("课堂情况 · 重点学生"), "Test phrases leaked into the product UI");
  const semanticIntents = await page.evaluate(() => [
    detectIntent(normalizeSpeech("小魏同学，那当前课堂表现怎么样呀？")),
    detectIntent(normalizeSpeech("我想看看哪些同学需要重点关注")),
    detectIntent(normalizeSpeech("第二小组现在卡在哪里")),
    detectIntent(normalizeSpeech("这堂课最后效果如何"))
  ]);
  assert(semanticIntents.join(",") === "overview,students,group2,outcomes", `Semantic intent matching failed: ${semanticIntents.join(",")}`);

  const destinations = [
    ["课程总览", "汽车金融实务"],
    ["课堂实施", "课堂实时分析"],
    ["学情分析", "多维学情分析"],
    ["教学评价", "课后教学复盘"],
    ["成果报告", "教学成果证据报告"],
    ["系统平台", "课程平台入口"]
  ];

  for (const [nav, title] of destinations) {
    await page.locator(`.nav-item[data-nav="${nav}"]`).click();
    await page.waitForTimeout(120);
    const actual = (await page.locator("#page-title").textContent()).trim();
    assert(actual.includes(title), `${nav} did not render the expected page: ${actual}`);
  }

  assert(await page.locator('.stage-strip').count() === 0, "Teaching flow strip is still visible");
  assert(await page.locator('#voice-trigger').count() === 0, "Secondary voice trigger is still visible");
  await page.locator('#voice-open').click();
  await page.waitForFunction(() => appState.asrMode === "wasm", null, { timeout: 90000 });
  assert(await page.locator('#voice-status').evaluate((element) => element.classList.contains("listening")), "Page-level voice listening did not start");
  assert((await page.locator('#voice-open').innerText()).includes("停止"), "Voice button did not switch to the listening state");
  const voiceLevelLayout = await page.locator('.voice-level').evaluate((element) => {
    const parent = element.getBoundingClientRect();
    const bars = [...element.querySelectorAll('span')].map((bar) => bar.getBoundingClientRect());
    return {
      display: getComputedStyle(element).display,
      direction: getComputedStyle(element).flexDirection,
      contained: bars.every((bar) => bar.left >= parent.left && bar.right <= parent.right && bar.top >= parent.top && bar.bottom <= parent.bottom)
    };
  });
  assert(voiceLevelLayout.display === "flex" && voiceLevelLayout.direction === "row", "Voice level bars are not arranged horizontally");
  assert(voiceLevelLayout.contained, "Voice level bars overflow their container");
  await page.evaluate(() => processCommand("第二组出现了什么问题"));
  await page.waitForTimeout(500);
  const processedAt = await page.evaluate(() => appState.lastProcessedAt);
  await page.evaluate(() => processCommand("第二组出现了什么问题"));
  assert(await page.evaluate(() => appState.lastProcessedAt) === processedAt, "Duplicate recognition result was processed twice");
  assert((await page.locator("#page-title").textContent()).includes("课堂实时分析"), "Voice command did not switch to live view");
  assert(await page.locator("#assistant-stage").evaluate((element) => element.classList.contains("active")), "Assistant did not enter active state");
  assert(await page.locator("#xiaowei").evaluate((image) => image.complete && image.naturalWidth > 0), "Assistant image did not load");
  assert(Number(await page.locator("#xiaowei").evaluate((image) => getComputedStyle(image).opacity)) > 0.9, "Assistant image is not visible");
  assert(!(await page.locator("#xiaowei").evaluate((image) => { const a = image.getBoundingClientRect(); const b = document.querySelector("#assistant-bubble").getBoundingClientRect(); return !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top); })), "Assistant bubble overlaps the character");
  assert(await page.locator("#main-content .staged-reveal").count() > 0, "Staged content animation did not start");

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert(desktopOverflow <= 1, `Desktop has horizontal overflow: ${desktopOverflow}px`);
  await page.screenshot({ path: path.join(outputDir, "desktop-voice-command.png"), fullPage: false });

  assert(await page.locator("#voice-panel").count() === 0, "Voice command modal should not be present");
  const productCopy = await page.locator("body").innerText();
  assert(!/(演示|预制)/.test(productCopy), "Product copy exposes implementation wording");

  const tablet = await context.newPage();
  await tablet.setViewportSize({ width: 1024, height: 768 });
  await tablet.goto(`${baseUrl}?view=analysis`, { waitUntil: "networkidle" });
  await tablet.waitForSelector(".analysis-board");
  const tabletOverflow = await tablet.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert(tabletOverflow <= 1, `Tablet has horizontal overflow: ${tabletOverflow}px`);
  assert(await tablet.evaluate(() => document.documentElement.scrollHeight > window.innerHeight), "Tablet layout is not vertically scrollable");
  await tablet.screenshot({ path: path.join(outputDir, "tablet-analysis.png"), fullPage: false });

  await browser.close();
  if (errors.length) throw new Error(errors.join("\n"));
  console.log("QA passed: 6 navigation views (pre-class design removed, system platform added), page-level microphone listening, staged assistant response, and responsive layout.");
})();
