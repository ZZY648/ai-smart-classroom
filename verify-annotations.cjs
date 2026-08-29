const path = require("path");
const { chromium } = require("C:/Users/ZY/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const baseUrl = "http://127.0.0.1:8765/";
const outputDir = path.resolve(__dirname, "..", "outputs", "qa");

function assert(condition, message) {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`PASS: ${message}`);
}

(async () => {
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

  // ---- 第一轮:6 条批注回归 ----
  await page.goto(`${baseUrl}?view=overview`, { waitUntil: "networkidle" });
  assert((await page.locator(".product-title").textContent()).trim() === "AI智慧办课综合系统", "系统名保持「AI智慧办课综合系统」");
  assert((await page.locator(".crumb span").textContent()).trim() === "金融服务与管理", "面包屑专业保持「金融服务与管理」");
  assert((await page.locator(".crumb strong").textContent()).trim() === "汽车金融实务", "面包屑课程保持「汽车金融实务」");
  assert(await page.locator(".top-actions .icon-button").count() === 0, "顶栏保持无铃铛");
  assert(await page.locator(".user-avatar").count() === 0, "顶栏保持无头像");
  assert(await page.locator('.nav-item[data-nav="课前设计"]').count() === 0, "课前设计保持移除");

  // ---- 第二轮:系统平台 = 课程平台入口(按 平台修改.docx) ----
  await page.locator('.nav-item[data-nav="系统平台"]').click();
  await page.waitForTimeout(1200);
  assert((await page.locator("#page-title").textContent()).includes("课程平台入口"), "系统平台页标题为「课程平台入口」");
  assert(await page.locator(".platform-card").count() === 6, "展示 6 个课程平台卡片");
  assert(await page.locator("a.platform-card").count() === 4, "4 个平台可直接打开");
  assert(await page.locator(".platform-card.building").count() === 2, "2 个建设中平台以虚线卡片标注");
  const hrefs = await page.locator("a.platform-card").evaluateAll((links) => links.map((a) => a.href));
  assert(hrefs.some((h) => h.includes("czcjlht.ciit.edu.cn")), "常州新能源产教联合体链接正确");
  assert(hrefs.some((h) => h.includes("passport2.chaoxing.com")), "超星教学系统链接正确");
  assert(hrefs.some((h) => h.includes("bydafc.com.cn")), "比亚迪汽金业务系统链接正确");
  assert(hrefs.some((h) => h.includes("123.56.71.62:178")), "机动车鉴定评估与定损理赔系统链接正确");
  const targets = await page.locator("a.platform-card").evaluateAll((links) => links.map((a) => a.target));
  assert(targets.every((t) => t === "_blank"), "所有平台链接均在新窗口打开");
  const cardNames = await page.locator(".platform-card strong").allInnerTexts();
  assert(cardNames.some((n) => n.includes("智能信贷风控审批")), "智能信贷风控审批系统(建设中)在列");
  assert(cardNames.some((n) => n.includes("比亚迪车险智能报价")), "比亚迪车险智能报价系统(建设中)在列");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outputDir, "verify2-platform.png") });

  // ---- 第二轮:侧边栏收放栏 ----
  assert(await page.locator("#sidebar-toggle").count() === 1, "侧边栏存在收放按钮");
  const expandedWidth = await page.locator(".sidebar").evaluate((el) => el.getBoundingClientRect().width);
  await page.locator("#sidebar-toggle").click();
  await page.waitForTimeout(300);
  assert(await page.evaluate(() => document.documentElement.classList.contains("nav-collapsed")), "点击后进入收起态");
  const collapsedWidth = await page.locator(".sidebar").evaluate((el) => el.getBoundingClientRect().width);
  assert(collapsedWidth < expandedWidth - 60, `收起后侧边栏变窄(${expandedWidth}px -> ${collapsedWidth}px)`);
  assert(await page.locator(".nav-item span").first().isHidden(), "收起态下导航文字隐藏");
  assert(await page.locator(".nav-item").first().isVisible(), "收起态下图标仍可见可点");
  assert(await page.evaluate(() => localStorage.getItem("navCollapsed")) === "1", "收起状态已写入 localStorage");
  await page.screenshot({ path: path.join(outputDir, "verify2-collapsed.png") });
  await page.locator("#sidebar-toggle").click();
  await page.waitForTimeout(300);
  assert(!(await page.evaluate(() => document.documentElement.classList.contains("nav-collapsed"))), "再次点击恢复展开态");
  // 收起态下点击图标仍可切换页面
  await page.locator("#sidebar-toggle").click();
  await page.waitForTimeout(250);
  await page.locator('.nav-item[data-nav="课堂实施"]').click();
  await page.waitForTimeout(400);
  assert((await page.locator("#page-title").textContent()).includes("课堂实时分析"), "收起态下图标点击可正常切换页面");
  await page.locator("#sidebar-toggle").click();
  await page.waitForTimeout(250);
  await page.evaluate(() => localStorage.removeItem("navCollapsed"));

  // ---- 第二轮:矮视口自适应(等效用户手动 Ctrl+-) ----
  const small = await context.newPage();
  await small.setViewportSize({ width: 1150, height: 672 }); // 模拟用户被裁切的环境
  await small.goto(`${baseUrl}?view=overview`, { waitUntil: "networkidle" });
  await small.waitForTimeout(800);
  const zoom = await small.evaluate(() => parseFloat(document.documentElement.style.zoom || "1"));
  assert(zoom > 0.6 && zoom < 0.85, `矮视口自动缩放生效 zoom=${zoom}`);
  const dhRect = await small.locator(".digital-human-space").evaluate((el) => { const r = el.getBoundingClientRect(); return { top: r.top, bottom: r.bottom, height: r.height }; });
  const vp = { w: 1150, h: 672 };
  assert(dhRect.bottom <= vp.h + 2, `数字人模块完整呈现在视口内(bottom=${Math.round(dhRect.bottom)} <= ${vp.h})`);
  assert(dhRect.height > 150, `数字人模块保留足够高度(${Math.round(dhRect.height)}px)`);
  const shellWidth = await small.locator(".app-shell").evaluate((el) => el.getBoundingClientRect().width);
  assert(Math.abs(shellWidth - vp.w) <= 2, `缩放后应用仍铺满视口宽度(app=${Math.round(shellWidth)}px / viewport=${vp.w}px)`);
  await small.screenshot({ path: path.join(outputDir, "verify2-small-viewport.png") });

  // ---- 功能回归:语音 / 数字人 / 无报错 ----
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${baseUrl}?view=live`, { waitUntil: "networkidle" });
  await page.locator("#voice-open").click();
  await page.waitForFunction(() => appState.asrMode === "wasm", null, { timeout: 120000 });
  assert(await page.locator("#voice-status").evaluate((el) => el.classList.contains("listening")), "语音监听正常(回归)");
  assert(await page.evaluate(() => appState.asrMode === "wasm"), "回归路径仍使用离线识别");
  await page.waitForTimeout(400);
  await page.evaluate(() => processCommand("第二组出现了什么问题"));
  await page.waitForTimeout(600);
  assert(await page.locator("#assistant-stage").evaluate((el) => el.classList.contains("active")), "数字人唤醒正常(回归)");
  assert(errors.length === 0, `全程无 JS 报错${errors.length ? ": " + errors.join("; ") : ""}`);

  await browser.close();
  console.log("\n验证全部通过: 平台入口页 / 收放栏 / 视口自适应 / 功能回归。");
})().catch((error) => { console.error(error.message); process.exit(1); });
