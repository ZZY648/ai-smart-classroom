const navViewMap = {
  "课程总览": "overview",
  "课堂实施": "live",
  "学情分析": "analysis",
  "教学评价": "review",
  "成果报告": "report",
  "系统平台": "platform"
};

views.analysis = {
  nav: "学情分析",
  tag: "学情画像",
  title: "多维学情分析",
  subtitle: "汽车金融实务 · 知识、能力、行为与成果四维诊断",
  activeStage: 3,
  insightTitle: "学情结论",
  voice: "语音待命",
  metrics: [
    ["优秀学生", "12人", "能力达成", "90%以上", "award", ""],
    ["稳定达成", "27人", "主要区间", "75%-89%", "circle-check-big", ""],
    ["待补强", "3人", "已匹配", "个性任务", "user-round-search", "warning"],
    ["异常行为", "2项", "均已完成", "教学干预", "shield-alert", "risk"]
  ],
  insights: [
    "全班数据采集能力稳定，经营风险识别的个体差异较大",
    "三名学生在证据组织环节持续迟疑，需要降低首步难度",
    "高水平学生已进入综合决策表达任务，可增加开放性要求"
  ],
  render: renderAnalysis
};

const coursePlatforms = [
  { name: "常州新能源产教联合体", desc: "产教融合 · 区域资源共享平台", url: "https://czcjlht.ciit.edu.cn/union/home", host: "czcjlht.ciit.edu.cn", tag: "直接访问", icon: "network", status: "ready" },
  { name: "超星教学系统", desc: "学习通 · 课上互动与课程资源", url: "https://passport2.chaoxing.com/login?newversion=true&loginType=4&fid=1502&refer=http://i.chaoxing.com", host: "passport2.chaoxing.com", tag: "账号登录", icon: "graduation-cap", status: "ready" },
  { name: "智能信贷风控审批系统", desc: "校企共建 · 上课内容确定后上线", url: "", host: "暂未开放", tag: "建设中", icon: "shield-check", status: "building" },
  { name: "比亚迪车险智能报价系统", desc: "校企共建 · 上课内容确定后上线", url: "", host: "暂未开放", tag: "建设中", icon: "calculator", status: "building" },
  { name: "比亚迪汽金业务系统", desc: "比亚迪汽车金融 · 业务展示", url: "https://www.bydafc.com.cn/default/product/19060510qs0lM.html", host: "www.bydafc.com.cn", tag: "官网直达", icon: "car", status: "ready" },
  { name: "机动车鉴定评估与定损理赔系统", desc: "鉴定评估 · 定损理赔全流程实训", url: "http://123.56.71.62:178/#/login", host: "123.56.71.62:178", tag: "实训登录", icon: "car-front", status: "ready" }
];

views.platform = {
  nav: "系统平台",
  tag: "系统平台",
  title: "系统平台 · 课程平台入口",
  subtitle: "课程配套平台一键直达 · 新窗口打开不影响课堂",
  activeStage: 6,
  insightTitle: "使用建议",
  voice: "语音待命",
  metrics: [
    ["平台入口", "6个", "课程配套", "已接入", "layout-grid", ""],
    ["可直接使用", "4个", "点击卡片", "新窗口打开", "circle-check-big", ""],
    ["建设中", "2项", "课程内容", "确定后上线", "hard-drive", "warning"],
    ["数据服务", "在线", "六类数据源", "已连接", "database", ""]
  ],
  insights: [
    "超星教学系统支持手机号、机构账号与扫码登录",
    "校外平台均在新窗口打开，课堂演示页面不会被覆盖",
    "信贷审批与车险报价平台建设中，上线后自动接入"
  ],
  render: renderPlatform
};

views.report = {
  nav: "成果报告",
  tag: "成果报告",
  title: "教学成果证据报告",
  subtitle: "项目二 · 过程数据、学生作品与能力增值综合归档",
  activeStage: 5,
  insightTitle: "报告摘要",
  voice: "语音待命",
  metrics: [
    ["报告完整度", "100%", "证据模块", "6/6", "file-check-2", ""],
    ["过程证据", "286条", "课堂行为", "已归档", "database", ""],
    ["学生作品", "42份", "成果提交", "100%", "folder-check", "warning"],
    ["增值幅度", "+21%", "核心知识", "显著提升", "trending-up", ""]
  ],
  insights: [
    "教学目标、课堂任务和评价证据已形成完整对应关系",
    "核心知识掌握度提升21%，能力达成度稳定在89%",
    "报告可直接用于教学成果比赛的过程说明和现场佐证"
  ],
  render: renderReport
};

const assistantResponses = {
  wake: "您好，我是小薇。请问有什么可以帮您？",
  greeting: "您好，我在呢。很高兴见到您，请问有什么可以帮您？",
  identity: "您好，我是小薇，汽车金融实务课程的课堂助手。",
  thanks: "不客气，这是我应该做的。",
  acknowledgement: "好的，我在听。您可以继续说。",
  overview: "当前课堂共有42名学生在线，课堂参与度92%，任务完成率86%，知识掌握度84%。整体进展正常，三名学生需要重点关注。",
  students: "目前有三名学生需要关注。陈雨桐在应收账款周转分析中存在概念混淆，周子涵的现金流判断证据不足，李嘉宁正在持续提升。",
  group2: "第二组当前任务进度为68%。主要问题是经营活动现金流分类存在偏差，系统建议增加应收账款情境追问，并展示对比案例。",
  outcomes: "本节课核心知识掌握度达到91%，较课前提升21%；能力达成度89%，课堂参与度94%，42份学习成果已全部提交。",
  unknown: "抱歉，我没有听清您的问题，请您再说一遍。"
};

const appState = {
  view: "overview",
  assistantAwake: false,
  listening: false,
  recognition: null,
  currentAudio: null,
  speechTimer: null,
  bubbleTimer: null,
  lastCommand: "",
  lastProcessedAt: 0,
  voiceEnabled: false,
  recognitionRestartTimer: null,
  suppressRecognitionUntil: 0,
  recognitionPausedForSpeech: false,
  recognitionNetworkErrors: 0,
  networkNoticeShown: false,
  microphoneStream: null,
  microphoneContext: null,
  microphoneFrame: null,
  microphoneStartedAt: 0,
  lastSoundAt: 0,
  lastTranscriptAt: 0,
  localRecognition: false,
  localRecognitionAvailability: "unknown",
  localRecognitionError: "",
  lastRecognitionError: "",
  awaitingQuestion: true,
  activeScenario: ""
};

function renderPlatform() {
  const cards = coursePlatforms.map((platform, index) => {
    if (platform.status === "building") {
      return `
        <div class="platform-card building">
          <div class="platform-card-head">
            <span class="platform-icon"><i data-lucide="${platform.icon}"></i></span>
            <div><strong>${platform.name}</strong><small>${platform.desc}</small></div>
          </div>
          <div class="platform-card-foot">
            <span class="platform-url">${platform.host}</span>
            <span class="platform-tag building">${platform.tag}</span>
          </div>
        </div>`;
    }
    return `
      <a class="platform-card" href="${platform.url}" target="_blank" rel="noopener" title="打开 ${platform.name}">
        <div class="platform-card-head">
          <span class="platform-icon"><i data-lucide="${platform.icon}"></i></span>
          <div><strong>${platform.name}</strong><small>${platform.desc}</small></div>
        </div>
        <div class="platform-card-foot">
          <span class="platform-url">${platform.host}</span>
          <span class="platform-tag ready">${platform.tag}</span>
        </div>
      </a>`;
  }).join("");
  return `
    <div class="platform-board">
      <section class="panel platform-main">
        ${panelHeader("课程平台入口", "点击卡片在新窗口打开对应平台", `<button class="tiny-select">全部平台</button>`)}
        <div class="platform-grid">${cards}</div>
      </section>
      <section class="panel platform-notes">
        ${panelHeader("使用说明", "各平台登录方式与开通状态")}
        <div class="evidence-strip">
          ${evidence("超星教学系统", "支持手机号、机构账号与扫码登录", "学习通")}
          ${evidence("免登录访问", "产教联合体与比亚迪官网可直接打开", "2个")}
          ${evidence("实训系统", "鉴定评估平台账号由授课教师发放", "课堂开通")}
          ${evidence("建设中", "信贷审批与车险报价平台待课程确定", "2项")}
        </div>
      </section>
    </div>`;
}

function renderAnalysis() {
  const cells = [
    ["数据采集", "94%", "good"], ["凭证识别", "91%", "good"], ["成本计算", "88%", "good"], ["现金流", "73%", "warn"], ["周转效率", "82%", ""], ["风险判断", "79%", ""],
    ["图表表达", "86%", "good"], ["证据组织", "76%", "warn"], ["小组协作", "92%", "good"], ["任务坚持", "89%", "good"], ["决策表达", "83%", ""], ["岗位规范", "90%", "good"],
    ["陈雨桐", "62%", "warn"], ["周子涵", "71%", "warn"], ["李嘉宁", "83%", ""], ["第1组", "92%", "good"], ["第2组", "68%", "warn"], ["第3组", "81%", ""],
    ["第4组", "86%", "good"], ["第5组", "79%", ""], ["第6组", "73%", "warn"], ["课前", "70%", ""], ["课中", "84%", "good"], ["课后", "91%", "good"]
  ];
  return `
    <div class="analysis-board">
      <section class="panel board-wide">
        ${panelHeader("知识与能力矩阵", "颜色与文字共同标识达成状态", `<button class="tiny-select">四维画像</button>`)}
        <div class="knowledge-grid">${cells.map(([label, value, tone]) => `<div class="knowledge-cell ${tone}"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
      </section>
      <section class="panel board-side">
        ${panelHeader("重点学生画像", "干预规则匹配结果")}
        <div class="objective-list">
          ${objective("01", "陈雨桐", "应收账款周转概念混淆", "补强中")}
          ${objective("02", "周子涵", "现金流判断证据不足", "待追问")}
          ${objective("03", "李嘉宁", "成本动因识别持续提升", "已达标")}
        </div>
      </section>
      <section class="panel board-bottom">
        ${panelHeader("学习行为证据", "全过程行为记录与教学干预闭环")}
        <div class="evidence-strip">
          ${evidence("有效互动", "语音、答题与任务反馈", "128次")}
          ${evidence("小组协作", "六组均形成过程记录", "100%")}
          ${evidence("教师干预", "针对共性偏差追加追问", "4次")}
          ${evidence("个性补强", "三名学生已匹配任务", "3份")}
        </div>
      </section>
    </div>`;
}

function renderReport() {
  return `
    <div class="report-board">
      <section class="panel board-wide">
        ${panelHeader("成果报告总览", "六类证据已完成关联", `<button class="tiny-select">导出报告</button>`)}
        <div class="report-summary">
          <div class="objective-list">
            ${objective("01", "目标达成证据", "知识、能力、素养三维对应", "完整")}
            ${objective("02", "课堂过程证据", "任务、互动、干预全过程归档", "完整")}
            ${objective("03", "学生成长证据", "课前课后增值与典型作品", "完整")}
          </div>
          <div class="report-score"><div><strong>91</strong><span>综合达成指数</span></div></div>
        </div>
      </section>
      <section class="panel board-side">
        ${panelHeader("报告目录", "比赛现场展示顺序")}
        <div class="objective-list">
          ${objective("01", "教学设计", "目标、内容与任务链", "已归档")}
          ${objective("02", "实施过程", "课堂数据与联动记录", "已归档")}
          ${objective("03", "评价改进", "成效、反思与优化", "已归档")}
        </div>
      </section>
      <section class="panel board-bottom">
        ${panelHeader("关键成果证据", "评委可快速核验的四项结论")}
        <div class="evidence-strip">
          ${evidence("知识增值", "核心知识掌握度提升", "+21%")}
          ${evidence("能力达成", "业财融合分析能力", "89%")}
          ${evidence("课堂参与", "全过程有效参与", "94%")}
          ${evidence("成果提交", "42份成果全部归档", "100%")}
        </div>
      </section>
    </div>`;
}

function objective(index, title, description, status) {
  return `<div class="objective-item"><span>${index}</span><div><strong>${title}</strong><small>${description}</small></div><b>${status}</b></div>`;
}

function evidence(title, description, value) {
  return `<article class="evidence-item"><strong>${title}</strong><span>${description}</span><b>${value}</b></article>`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function renderReadyMetrics() {
  const items = [
    ["教学班级", "42人", "2025级金融服务与管理1班", "users-round"],
    ["教学周次", "第3周", "汽车金融实务", "calendar-range"],
    ["课堂任务", "5项", "业财数据分析", "list-checks"],
    ["课堂状态", "进行中", "课程数据已接入", "radio-tower"]
  ];
  return items.map(([label, value, detail, icon]) => `<article class="metric ready-metric"><span class="metric-label">${label}</span><span class="metric-icon"><i data-lucide="${icon}"></i></span><strong class="metric-value">${value}</strong><span class="metric-delta">${detail}</span></article>`).join("");
}

function renderReadyState() {
  return `
    <div class="ready-board">
      <section class="panel ready-context">
        <div class="ready-context-copy"><span>SMART CLASSROOM</span><h2>经营数据诊断</h2><p>汽车金融实务 · 项目二 业财数据分析</p></div>
        <div class="ready-data-map">
          <article><i data-lucide="database"></i><span>经营数据</span><strong>已同步</strong></article>
          <article><i data-lucide="calculator"></i><span>财务指标</span><strong>已关联</strong></article>
          <article><i data-lucide="file-check-2"></i><span>成果证据</span><strong>已归档</strong></article>
        </div>
      </section>
      <section class="panel ready-sources">
        <div class="panel-header"><div class="panel-title"><h2>课堂数据源</h2><span>课程、任务与学习成果实时关联</span></div><div class="ready-pulse"><span></span>运行正常</div></div>
        <div class="ready-source-list">
          <article><i data-lucide="users-round"></i><div><strong>学习小组</strong><span>六组课堂任务已连接</span></div></article>
          <article><i data-lucide="clipboard-check"></i><div><strong>任务数据</strong><span>五项核心任务已接入</span></div></article>
          <article><i data-lucide="folder-check"></i><div><strong>成果证据</strong><span>课堂过程记录已归档</span></div></article>
        </div>
      </section>
    </div>`;
}

function setView(key, updateUrl = true, guided = false) {
  const view = views[key] || views.overview;
  appState.view = views[key] ? key : "overview";
  const awaiting = appState.awaitingQuestion && appState.view === "overview";
  document.title = `${view.title} - AI智慧办课综合系统`;
  document.getElementById("view-tag").textContent = view.tag;
  document.getElementById("page-title").textContent = view.title;
  document.getElementById("page-subtitle").textContent = view.subtitle;
  document.getElementById("insight-title").textContent = awaiting ? "课堂状态" : view.insightTitle;
  document.getElementById("voice-label").textContent = appState.assistantAwake ? "小薇已唤醒" : view.voice;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.nav === view.nav));

  const metrics = document.getElementById("metrics");
  metrics.className = "metrics-grid";
  if (appState.activeScenario) metrics.classList.add(`scenario-${appState.activeScenario}`);
  metrics.innerHTML = awaiting ? renderReadyMetrics() : view.metrics.map(([label, value, deltaLabel, delta, icon, tone]) => `
    <article class="metric ${tone}"><span class="metric-label">${label}</span><span class="metric-icon"><i data-lucide="${icon}"></i></span><strong class="metric-value">${value}</strong><span class="metric-delta">${deltaLabel} <strong>${delta}</strong></span></article>
  `).join("");

  const insights = awaiting ? [
    "课程任务、学生作品与评价证据已完成关联",
    "六个学习小组课堂数据已同步",
    "数字人课堂助手已进入待机状态"
  ] : view.insights;
  document.getElementById("insights").innerHTML = insights.map((text, index) => `<button class="insight-item" type="button" data-index="0${index + 1}">${text}</button>`).join("");
  const insightRail = document.querySelector(".insight-rail");
  insightRail.className = "insight-rail";
  if (appState.activeScenario) insightRail.classList.add(`scenario-${appState.activeScenario}`);
  document.querySelector(".text-action").hidden = awaiting;
  const content = document.getElementById("main-content");
  content.className = "main-content";
  if (appState.activeScenario) content.classList.add(`scenario-${appState.activeScenario}`);
  content.classList.add("changing");
  content.innerHTML = awaiting ? renderReadyState() : view.render();
  requestAnimationFrame(() => {
    content.classList.remove("changing");
    animateStagedContent(guided);
    animateNumericValues(guided);
  });
  bindDynamicControls();
  refreshIcons();

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", appState.view);
    history.replaceState({ view: appState.view }, "", url);
  }
}

function animateStagedContent(guided = false) {
  const panelStep = guided ? 210 : 80;
  const dataStep = guided ? 75 : 45;
  const targets = [
    document.querySelector(".digital-human-space"),
    ...document.querySelectorAll("#metrics > .metric"),
    ...document.querySelectorAll("#main-content .panel"),
    document.querySelector(".insight-panel")
  ].filter(Boolean);
  targets.forEach((element, index) => {
    element.classList.remove("staged-reveal");
    element.style.setProperty("--stagger", `${Math.min(index, 10) * panelStep}ms`);
    requestAnimationFrame(() => element.classList.add("staged-reveal"));
  });

  document.querySelectorAll("#main-content .panel").forEach((panel) => {
    const items = panel.querySelectorAll(".task-row, .flow-node, .matrix-cell, .knowledge-cell, .objective-item, .resource-item, .evidence-item, .platform-card, .mini-table tbody tr, .donut-wrap, .report-score");
    items.forEach((item, index) => {
      item.classList.remove("data-reveal");
      item.style.setProperty("--data-stagger", `${Math.min(index, 10) * dataStep}ms`);
      requestAnimationFrame(() => item.classList.add("data-reveal"));
    });
  });
}

function animateNumericValues(guided = false) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const elements = document.querySelectorAll("#metrics .metric-value, #main-content .donut-center strong, #main-content .report-score strong, #main-content .evidence-item b");
  elements.forEach((element, index) => {
    const original = element.textContent.trim();
    const match = original.match(/[+-]?\d+/);
    if (!match) return;
    const target = Number(match[0]);
    const prefix = original.slice(0, match.index);
    const suffix = original.slice(match.index + match[0].length);
    const delay = (guided ? 180 : 70) * index;
    const duration = 620;
    window.setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(Math.abs(target) * eased) * Math.sign(target || 1);
        element.textContent = `${prefix}${target > 0 && match[0].startsWith("+") ? "+" : ""}${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  });
}

function revealStudentModule() {
  const metrics = document.getElementById("metrics");
  const content = document.getElementById("main-content");
  const rail = document.querySelector(".insight-rail");
  metrics.classList.remove("scenario-overview");
  content.classList.remove("scenario-overview");
  rail.classList.remove("scenario-overview");
  metrics.classList.add("scenario-students");
  content.classList.add("scenario-students");
  rail.classList.add("scenario-students");

  const targets = [
    metrics.querySelector(".metric.risk"),
    content.querySelector(".panel-bottom-left"),
    document.querySelector(".insight-item:nth-child(3)")
  ].filter(Boolean);
  targets.forEach((element, index) => {
    element.classList.remove("module-reveal");
    element.style.setProperty("--module-stagger", `${index * 120}ms`);
    requestAnimationFrame(() => element.classList.add("module-reveal"));
  });

  content.querySelectorAll(".panel-bottom-left tbody tr").forEach((row, index) => {
    row.classList.remove("data-reveal");
    row.style.setProperty("--data-stagger", `${index * 80}ms`);
    requestAnimationFrame(() => row.classList.add("data-reveal"));
  });
}

function bindDynamicControls() {
  document.querySelectorAll(".tiny-select").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent.includes("导出")) {
        showToast("成果报告已生成，可在成果报告页查看。", "file-down");
      } else {
        showToast(`已切换：${button.textContent.trim()}`, "sliders-horizontal");
      }
    });
  });
  document.querySelectorAll(".resource-item").forEach((button) => button.addEventListener("click", () => showToast(`${button.querySelector("strong").textContent}已载入`, "circle-check-big")));
  document.querySelectorAll(".insight-item").forEach((button) => button.addEventListener("click", () => openDetail("分析依据", `<div class="detail-list"><article><strong>结论</strong>${button.textContent}</article><article><strong>数据来源</strong>课堂任务、互动响应、学生作品与评价量规。</article></div>`)));
}

function showToast(message, icon = "circle-check-big") {
  const now = Date.now();
  showToast.recent = showToast.recent || new Map();
  const previous = showToast.recent.get(message) || 0;
  if (now - previous < 6000) return;
  showToast.recent.set(message, now);
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
  document.getElementById("toast-region").appendChild(toast);
  refreshIcons();
  window.setTimeout(() => toast.remove(), 3600);
}

function clearVoiceToasts() {
  document.querySelectorAll("#toast-region .toast").forEach((toast) => {
    if (/(麦克风|语音服务|语音识别|浏览器语音)/.test(toast.textContent)) toast.remove();
  });
}

function openDetail(title, content) {
  const dialog = document.getElementById("detail-dialog");
  document.getElementById("detail-title").textContent = title;
  document.getElementById("detail-content").innerHTML = content;
  if (!dialog.open) dialog.showModal();
  refreshIcons();
}

function wakeAssistant(message = assistantResponses.wake, audioId = "wake_v2") {
  appState.assistantAwake = true;
  const stage = document.getElementById("assistant-stage");
  stage.classList.add("active");
  document.querySelector(".digital-human-space").classList.add("assistant-active");
  document.getElementById("voice-label").textContent = "小薇已唤醒";
  showAssistantMessage(message, audioId);
}

function showAssistantMessage(message, audioId) {
  wakeWithoutSpeech();
  const bubble = document.getElementById("assistant-bubble");
  bubble.textContent = message;
  bubble.hidden = false;
  window.clearTimeout(appState.bubbleTimer);
  appState.bubbleTimer = window.setTimeout(() => { bubble.hidden = true; }, 9000);
  playPresetAudio(audioId, message);
}

function wakeWithoutSpeech() {
  appState.assistantAwake = true;
  document.getElementById("assistant-stage").classList.add("active");
  document.querySelector(".digital-human-space").classList.add("assistant-active");
  document.getElementById("voice-label").textContent = "小薇已唤醒";
}

function sleepAssistant() {
  stopSpeech(true);
  appState.assistantAwake = false;
  document.getElementById("assistant-stage").classList.remove("active", "speaking");
  document.querySelector(".digital-human-space").classList.remove("assistant-active");
  document.getElementById("assistant-bubble").hidden = true;
  document.getElementById("voice-label").textContent = "语音待命";
}

function pauseRecognitionForSpeech() {
  if (!appState.voiceEnabled || !appState.recognition) return;
  appState.recognitionPausedForSpeech = true;
  window.clearTimeout(appState.recognitionRestartTimer);
  try { appState.recognition.stop(); } catch (error) { /* Recognition may already be idle. */ }
}

function resumeRecognitionAfterSpeech(delay = 1000) {
  appState.suppressRecognitionUntil = Date.now() + delay;
  if (!appState.voiceEnabled || !appState.recognition) {
    appState.recognitionPausedForSpeech = false;
    return;
  }
  window.clearTimeout(appState.recognitionRestartTimer);
  appState.recognitionRestartTimer = window.setTimeout(() => {
    appState.recognitionPausedForSpeech = false;
    try { appState.recognition.start(); } catch (error) { /* Chrome may still be closing the previous session. */ }
  }, delay);
}

function playPresetAudio(id, fallbackText) {
  stopSpeech(false);
  pauseRecognitionForSpeech();
  const stage = document.getElementById("assistant-stage");
  stage.classList.add("speaking");
  appState.suppressRecognitionUntil = Number.MAX_SAFE_INTEGER;
  const audio = new Audio(`assets/audio/${id}.mp3`);
  appState.currentAudio = audio;
  audio.addEventListener("ended", () => {
    stage.classList.remove("speaking");
    resumeRecognitionAfterSpeech();
  }, { once: true });
  audio.addEventListener("error", () => {
    if (!("speechSynthesis" in window)) {
      stage.classList.remove("speaking");
      resumeRecognitionAfterSpeech(400);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(fallbackText);
    utterance.lang = "zh-CN";
    utterance.rate = 0.98;
    utterance.pitch = 1.04;
    utterance.onend = () => {
      stage.classList.remove("speaking");
      resumeRecognitionAfterSpeech();
    };
    window.speechSynthesis.speak(utterance);
  }, { once: true });
  audio.play().catch(() => audio.dispatchEvent(new Event("error")));
}

function stopSpeech(shouldResume = false) {
  if (appState.currentAudio) {
    appState.currentAudio.pause();
    appState.currentAudio = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  document.getElementById("assistant-stage").classList.remove("speaking");
  appState.suppressRecognitionUntil = Date.now() + 200;
  if (shouldResume) resumeRecognitionAfterSpeech(350);
}

function normalizeSpeech(rawText) {
  return rawText
    .replace(/[，。！？、,.!?\s]/g, "")
    .replace(/小[魏薇微唯维威]/g, "小薇")
    .replace(/请问|麻烦|能不能|可以|帮我|请你|一下|呀|呢|啊|吗/g, "");
}

function detectIntent(text) {
  const groups = {
    overview: ["整体课堂", "课堂整体", "课堂表现", "课堂状态", "课堂情况", "参与度", "完成率", "课堂进度", "进展", "课堂怎么样", "课堂如何"],
    students: ["重点学生", "重点对象", "学生状况", "学生情况", "学生状态", "学情", "关注谁", "需要关注", "需要帮助", "风险学生", "薄弱学生", "困难学生", "待干预", "哪些学生", "哪个学生"],
    group2: ["第二组", "第二小组", "第2组", "第2小组", "二组", "2组", "现金流问题", "现金流判断", "经营活动", "小组问题"],
    outcomes: ["教学成效", "教学效果", "课程效果", "课后复盘", "成果", "达成度", "提升情况", "评价结果", "教学结果"]
  };
  const scores = Object.entries(groups).map(([intent, terms]) => [intent, terms.reduce((score, term) => score + (text.includes(term) ? Math.max(1, term.length / 4) : 0), 0)]);
  scores.sort((a, b) => b[1] - a[1]);
  if (scores[0][1] > 0) return scores[0][0];
  if (/(第?[二2].*组|组.*[二2])/.test(text)) return "group2";
  if (/(学生|同学)/.test(text) && /(重点|关注|风险|困难|帮助|状态|状况|情况|谁)/.test(text)) return "students";
  if (/(效果|成效|成果|达成|提升|评价|课后)/.test(text)) return "outcomes";
  if (/(课堂|上课|本节课)/.test(text) && /(整体|表现|情况|状态|进度|参与|完成|怎么样|如何)/.test(text)) return "overview";
  if (/(你好|您好|嗨|哈喽|早上好|下午好|晚上好|在吗|听得到吗)/.test(text)) return "greeting";
  if (/(你是谁|介绍自己|自我介绍|叫什么)/.test(text)) return "identity";
  if (/(谢谢|感谢|辛苦了)/.test(text)) return "thanks";
  if (/(好的|好呀|明白了|知道了|收到)/.test(text)) return "acknowledgement";
  return "unknown";
}

function processCommand(rawText) {
  const text = normalizeSpeech(rawText);
  const now = Date.now();
  if (text === appState.lastCommand && now - appState.lastProcessedAt < 4500) return;
  appState.lastCommand = text;
  appState.lastProcessedAt = now;
  const wakeMentioned = text.includes("小薇");
  const wakeOnly = /^(小薇同学?|小薇)$/.test(text);
  if (wakeMentioned) wakeWithoutSpeech();
  if (!appState.assistantAwake && !appState.voiceEnabled && !wakeMentioned) {
    showToast("请先说出唤醒词“小薇同学”", "mic-off");
    return;
  }

  if (wakeOnly) {
    showAssistantMessage(assistantResponses.wake, "wake_v2");
    return;
  }

  const intent = detectIntent(text);
  if (intent === "overview") {
    appState.awaitingQuestion = false;
    appState.activeScenario = "overview";
    setView("overview", true, true);
    showAssistantMessage(assistantResponses.overview, "overview");
    highlightPanel(".panel-wide");
  } else if (intent === "students") {
    const extendOverview = appState.view === "overview" && appState.activeScenario === "overview" && !appState.awaitingQuestion;
    appState.awaitingQuestion = false;
    appState.activeScenario = "students";
    if (extendOverview) revealStudentModule();
    else setView("overview", true, true);
    showAssistantMessage(assistantResponses.students, "students");
    highlightPanel(".panel-bottom-left");
  } else if (intent === "group2") {
    appState.awaitingQuestion = false;
    appState.activeScenario = "group2";
    setView("live", true, true);
    showAssistantMessage(assistantResponses.group2, "group2");
    highlightPanel(".flow-node:nth-child(2)");
  } else if (intent === "outcomes") {
    appState.awaitingQuestion = false;
    appState.activeScenario = "outcomes";
    setView("review", true, true);
    showAssistantMessage(assistantResponses.outcomes, "outcomes");
    highlightPanel(".panel-wide");
  } else if (intent === "greeting") {
    showAssistantMessage(assistantResponses.greeting, "greeting_v2");
  } else if (intent === "identity") {
    showAssistantMessage(assistantResponses.identity, "identity_v2");
  } else if (intent === "thanks") {
    showAssistantMessage(assistantResponses.thanks, "thanks_v2");
  } else if (intent === "acknowledgement") {
    showAssistantMessage(assistantResponses.acknowledgement, "acknowledgement_v2");
  } else if (/(结束|退出|休息|隐藏)/.test(text)) {
    sleepAssistant();
    appState.awaitingQuestion = true;
    appState.activeScenario = "";
    setView("overview");
    showToast("小薇已返回待机状态", "power");
  } else if (wakeMentioned) {
    showAssistantMessage(assistantResponses.wake, "wake_v2");
  } else {
    showAssistantMessage(assistantResponses.unknown, "unknown_v2");
  }
}

function highlightPanel(selector) {
  window.setTimeout(() => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.add("scenario-focus");
    window.setTimeout(() => element.classList.remove("scenario-focus"), 3600);
  }, 80);
}

function setVoiceDetail(message) {
  const detail = document.getElementById("voice-detail");
  if (detail) detail.textContent = message;
}

function updateVoiceLevel(level) {
  const bars = document.querySelectorAll(".voice-level span");
  bars.forEach((bar, index) => {
    const variation = [0.7, 1, 0.82, 0.58][index];
    bar.style.transform = `scaleY(${Math.max(0.22, Math.min(1, level * variation))})`;
  });
}

async function startMicrophoneMonitor() {
  if (appState.microphoneStream) return true;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setVoiceDetail("当前浏览器无法访问麦克风");
    return false;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const analyser = context.createAnalyser();
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.72;
    source.connect(analyser);
    if (context.state === "suspended") await context.resume();

    appState.microphoneStream = stream;
    appState.microphoneContext = context;
    appState.microphoneStartedAt = Date.now();
    appState.lastSoundAt = 0;
    const samples = new Uint8Array(analyser.fftSize);
    const monitor = () => {
      analyser.getByteTimeDomainData(samples);
      let sum = 0;
      for (const sample of samples) {
        const normalized = (sample - 128) / 128;
        sum += normalized * normalized;
      }
      const rms = Math.sqrt(sum / samples.length);
      const level = Math.min(1, Math.max(0, (rms - 0.008) * 16));
      updateVoiceLevel(level);
      if (level > 0.12) {
        appState.lastSoundAt = Date.now();
        if (appState.voiceEnabled && !appState.recognitionPausedForSpeech && Date.now() - appState.lastTranscriptAt > 350) {
          setVoiceDetail("已检测到声音，正在识别");
        }
      } else if (appState.voiceEnabled && !appState.recognitionPausedForSpeech && !appState.lastSoundAt && Date.now() - appState.microphoneStartedAt > 2200) {
        setVoiceDetail("麦克风已连接，等待声音");
      }
      appState.microphoneFrame = requestAnimationFrame(monitor);
    };
    monitor();
    setVoiceDetail("麦克风已连接，请开始说话");
    return true;
  } catch (error) {
    const denied = error && (error.name === "NotAllowedError" || error.name === "SecurityError");
    setVoiceDetail(denied ? "麦克风权限未开启" : "未检测到可用麦克风");
    showToast(denied ? "请允许浏览器访问麦克风后重试。" : "未检测到可用麦克风，请检查设备连接。", "mic-off");
    return false;
  }
}

function stopMicrophoneMonitor() {
  if (appState.microphoneFrame) cancelAnimationFrame(appState.microphoneFrame);
  if (appState.microphoneStream) appState.microphoneStream.getTracks().forEach((track) => track.stop());
  if (appState.microphoneContext) appState.microphoneContext.close().catch(() => {});
  appState.microphoneStream = null;
  appState.microphoneContext = null;
  appState.microphoneFrame = null;
  appState.lastSoundAt = 0;
  updateVoiceLevel(0);
}

async function waitForLocalRecognition(Recognition, options) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const availability = await Recognition.available(options);
      appState.localRecognitionAvailability = availability;
      if (availability === "available") return true;
      if (availability === "unavailable") return false;
    } catch (error) {
      return false;
    }
    await new Promise((resolve) => window.setTimeout(resolve, 500));
  }
  return false;
}

async function prepareLocalRecognition(Recognition) {
  if (typeof Recognition.available !== "function") return false;
  const options = { langs: ["zh-CN"], processLocally: true };
  let eagerInstall = null;
  let eagerInstallRejected = false;
  if (typeof Recognition.install === "function") {
    try {
      eagerInstall = Promise.resolve(Recognition.install(options)).catch(() => {
        eagerInstallRejected = true;
        return false;
      });
    } catch (error) {
      eagerInstall = Promise.resolve(false);
    }
  }
  try {
    let availability = await Recognition.available(options);
    appState.localRecognitionAvailability = availability;
    if (availability === "available") return true;
    if ((availability === "downloadable" || availability === "downloading") && typeof Recognition.install === "function") {
      setListeningState(false, "正在准备语音识别");
      setVoiceDetail(availability === "downloading" ? "本地语音组件正在准备" : "正在准备本地语音组件");
      await (eagerInstall || Promise.resolve(false));
      if (eagerInstallRejected) return false;
      return await waitForLocalRecognition(Recognition, options);
    }
  } catch (error) {
    appState.localRecognitionAvailability = "unavailable";
    appState.localRecognitionError = error && `${error.name || "Error"}: ${error.message || ""}`;
  }
  return false;
}

function createRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) return null;
  const recognition = new Recognition();
  recognition.lang = "zh-CN";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.maxAlternatives = 1;
  if ("processLocally" in recognition) recognition.processLocally = appState.localRecognition;
  if (!appState.localRecognition && "phrases" in recognition && "SpeechRecognitionPhrase" in window) {
    try {
      recognition.phrases = ["小薇同学", "小魏同学", "课堂情况", "重点学生", "第二小组", "教学成效"].map((phrase) => new SpeechRecognitionPhrase(phrase, 8));
    } catch (error) { /* Contextual biasing is optional. */ }
  }
  recognition.onstart = () => {
    appState.lastRecognitionError = "";
    setListeningState(true, "正在聆听");
    if (appState.localRecognition) setVoiceDetail("本地语音识别已开启，请开始说话");
  };
  recognition.onresult = (event) => {
    if (appState.recognitionPausedForSpeech || Date.now() < appState.suppressRecognitionUntil || document.getElementById("assistant-stage").classList.contains("speaking")) return;
    let transcript = "";
    let finalText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
      if (event.results[index].isFinal) finalText += event.results[index][0].transcript;
    }
    const status = document.getElementById("voice-status");
    const detail = document.getElementById("voice-detail");
    if (status && transcript) status.setAttribute("data-transcript", transcript);
    if (detail && transcript) {
      appState.lastTranscriptAt = Date.now();
      detail.textContent = `已听到：${transcript}`;
    }
    if (finalText) {
      appState.recognitionNetworkErrors = 0;
      appState.networkNoticeShown = false;
      appState.lastRecognitionError = "";
      clearVoiceToasts();
      processCommand(finalText);
    }
  };
  recognition.onerror = (event) => {
    const messages = {
      "not-allowed": "麦克风权限未开启，请允许浏览器访问麦克风。",
      "service-not-allowed": "浏览器语音服务被禁用，请在站点设置中允许麦克风与语音服务。",
      "no-speech": "没有识别到语音，请靠近麦克风后重试。",
      "audio-capture": "未检测到可用麦克风。"
    };
    appState.lastRecognitionError = event.error;
    if (event.error === "no-speech") {
      const microphoneHeardSound = Date.now() - appState.lastSoundAt < 2500;
      setListeningState(false, microphoneHeardSound ? "重新识别" : "未听到语音");
      setVoiceDetail(microphoneHeardSound ? "麦克风已收到声音，正在重新识别" : "麦克风未检测到有效声音");
      return;
    }
    if (event.error === "aborted") return;
    if (event.error === "language-not-supported" && appState.localRecognition) {
      appState.localRecognition = false;
      appState.localRecognitionAvailability = "unavailable";
      if ("processLocally" in recognition) recognition.processLocally = false;
      setListeningState(false, "正在切换识别服务");
      setVoiceDetail("本地识别不可用，正在切换在线识别");
      return;
    }
    if (event.error === "phrases-not-supported") {
      try { recognition.phrases = []; } catch (error) { /* Phrase biasing is optional. */ }
      setListeningState(false, "正在重新识别");
      setVoiceDetail("正在重新建立语音识别");
      return;
    }
    if (event.error === "network") {
      appState.recognitionNetworkErrors += 1;
      setListeningState(false, "语音服务重试中");
      setVoiceDetail(Date.now() - appState.lastSoundAt < 2500 ? "麦克风正常，识别服务正在重连" : "正在重新连接语音服务");
      if (appState.recognitionNetworkErrors >= 3 && !appState.networkNoticeShown) {
        appState.networkNoticeShown = true;
        showToast("语音服务正在重连，请保持页面开启后再说一次。", "refresh-cw");
      }
      return;
    }
    showToast(messages[event.error] || "语音服务连接失败，系统将在下一轮自动重试。", "triangle-alert");
    if (event.error === "not-allowed" || event.error === "service-not-allowed" || event.error === "audio-capture") {
      appState.voiceEnabled = false;
      stopMicrophoneMonitor();
    }
  };
  recognition.onend = () => {
    if (appState.recognitionPausedForSpeech) {
      setListeningState(false, "小薇正在回答");
      return;
    }
    const reconnecting = appState.lastRecognitionError === "network";
    setListeningState(false, appState.voiceEnabled ? (reconnecting ? "识别服务重连中" : "重新连接") : "语音待命");
    if (!appState.voiceEnabled) return;
    window.clearTimeout(appState.recognitionRestartTimer);
    const retryDelay = reconnecting
      ? Math.min(6000, 600 * (2 ** Math.min(appState.recognitionNetworkErrors, 4)))
      : 260;
    appState.recognitionRestartTimer = window.setTimeout(() => {
      try { recognition.start(); } catch (error) { /* Chrome may still be closing the previous session. */ }
    }, retryDelay);
  };
  return recognition;
}

async function startListening() {
  appState.voiceEnabled = true;
  appState.recognitionPausedForSpeech = false;
  appState.recognitionNetworkErrors = 0;
  appState.networkNoticeShown = false;
  appState.lastRecognitionError = "";
  clearVoiceToasts();
  setListeningState(false, "正在连接麦克风");
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!appState.recognition && Recognition) appState.localRecognition = await prepareLocalRecognition(Recognition);
  if (!appState.voiceEnabled) return;
  const microphoneReady = await startMicrophoneMonitor();
  if (!appState.voiceEnabled) {
    if (microphoneReady) stopMicrophoneMonitor();
    return;
  }
  if (!microphoneReady) {
    appState.voiceEnabled = false;
    setListeningState(false, "语音待命");
    return;
  }
  if (!appState.recognition) {
    if (Recognition && !appState.localRecognition) setVoiceDetail("正在连接在线语音识别");
    appState.recognition = createRecognition();
  }
  if (!appState.recognition) {
    appState.voiceEnabled = false;
    showToast("当前浏览器不支持语音识别，请使用 Chrome 或 Edge。", "info");
    setVoiceDetail("麦克风正常，但浏览器不支持语音转文字");
    stopMicrophoneMonitor();
    return;
  }
  try {
    appState.recognition.start();
  } catch (error) {
    setListeningState(true, "正在聆听");
  }
}

function stopListening() {
  appState.voiceEnabled = false;
  appState.recognitionPausedForSpeech = false;
  window.clearTimeout(appState.recognitionRestartTimer);
  if (appState.recognition) {
    try { appState.recognition.stop(); } catch (error) { /* Recognition may already be idle. */ }
  }
  stopMicrophoneMonitor();
  clearVoiceToasts();
  setListeningState(false, "语音待命");
}

function setListeningState(listening, label) {
  appState.listening = listening;
  const voiceStatus = document.getElementById("voice-status");
  const voiceButton = document.getElementById("voice-open");
  const voiceLabel = document.getElementById("voice-label");
  const voiceDetail = document.getElementById("voice-detail");
  if (voiceStatus) {
    voiceStatus.classList.toggle("listening", appState.voiceEnabled);
    voiceStatus.classList.toggle("responding", appState.recognitionPausedForSpeech);
  }
  if (voiceButton) {
    voiceButton.classList.toggle("listening", appState.voiceEnabled);
    const buttonLabel = voiceButton.querySelector("span");
    if (buttonLabel) buttonLabel.textContent = appState.voiceEnabled ? "停止聆听" : "开启语音";
  }
  if (voiceLabel) voiceLabel.textContent = label;
  if (voiceDetail) {
    const details = {
      "正在连接麦克风": "正在请求麦克风权限",
      "正在聆听": "请开始说话",
      "未听到语音": "未检测到有效语音",
      "重新识别": "麦克风已收到声音，正在重试",
      "语音服务重试中": "正在重新连接语音服务",
      "识别服务重连中": "麦克风已连接，正在恢复语音识别",
      "正在准备语音识别": "正在准备本地语音组件",
      "正在切换识别服务": "正在切换语音识别方式",
      "正在重新识别": "正在重新建立语音识别",
      "重新连接": "正在重新建立监听",
      "小薇正在回答": "问题已识别，正在回答",
      "语音待命": "语音服务已就绪"
    };
    if (details[label]) voiceDetail.textContent = details[label];
  }
}

function applySidebarState(collapsed) {
  document.documentElement.classList.toggle("nav-collapsed", collapsed);
  const toggle = document.getElementById("sidebar-toggle");
  if (!toggle) return;
  toggle.innerHTML = `<i data-lucide="${collapsed ? "chevrons-right" : "chevrons-left"}"></i>`;
  const label = collapsed ? "展开导航栏" : "收起导航栏";
  toggle.title = label;
  toggle.setAttribute("aria-label", label);
  refreshIcons();
}

function initializeSidebarToggle() {
  const toggle = document.getElementById("sidebar-toggle");
  if (!toggle) return;
  applySidebarState(document.documentElement.classList.contains("nav-collapsed"));
  toggle.addEventListener("click", () => {
    const collapsed = !document.documentElement.classList.contains("nav-collapsed");
    try { localStorage.setItem("navCollapsed", collapsed ? "1" : "0"); } catch (error) { /* Storage may be unavailable. */ }
    applySidebarState(collapsed);
  });
}

const VIEWPORT_FIT = { designHeight: 940, designWidth: 1280, minZoom: 0.5, stackedBreakpoint: 1100 };

function applyViewportFit() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width <= VIEWPORT_FIT.stackedBreakpoint) {
    document.documentElement.style.zoom = "";
    return;
  }
  const zoom = Math.max(VIEWPORT_FIT.minZoom, Math.min(1, height / VIEWPORT_FIT.designHeight, width / VIEWPORT_FIT.designWidth));
  document.documentElement.style.zoom = zoom >= 0.995 ? "" : zoom.toFixed(3);
}

function initializeInteraction() {
  const initialKey = new URLSearchParams(window.location.search).get("view") || "overview";
  setView(initialKey, false);

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      appState.awaitingQuestion = false;
      appState.activeScenario = "";
      setView(navViewMap[item.dataset.nav] || "overview");
    });
  });
  document.getElementById("voice-open").addEventListener("click", () => {
    if (appState.voiceEnabled) stopListening();
    else startListening();
  });
  document.getElementById("date-filter").addEventListener("click", () => showToast("日期已切换为2026年7月18日", "calendar-check"));
  document.querySelector(".text-action").addEventListener("click", () => {
    const view = views[appState.view];
    openDetail("分析依据", `<div class="detail-list">${view.insights.map((item, index) => `<article><strong>依据 ${index + 1}</strong>${item}</article>`).join("")}</div>`);
  });
  document.querySelector(".sidebar-foot .icon-button").addEventListener("click", () => openDetail("系统设置", `<div class="detail-list"><article><strong>课程数据</strong>教学任务、学情指标与成果证据已完成配置。</article><article><strong>语音交互</strong>唤醒词为“小薇同学”，支持四类课堂查询指令。</article></div>`));
  document.querySelectorAll("dialog .dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
  document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }));
  window.addEventListener("popstate", (event) => setView(event.state?.view || new URLSearchParams(window.location.search).get("view") || "overview", false));
  initializeSidebarToggle();
  window.addEventListener("resize", applyViewportFit);
  applyViewportFit();
  refreshIcons();
}

initializeInteraction();
