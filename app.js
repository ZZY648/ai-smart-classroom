const views = {
  overview: {
    nav: "课程总览",
    tag: "课程驾驶舱",
    title: "汽车金融实务 · 项目二 业财数据分析",
    subtitle: "2025级金融服务与管理1班 · 42人 · 第3教学周",
    activeStage: 2,
    insightTitle: "教学洞察",
    voice: "语音待命",
    metrics: [
      ["课堂参与度", "92%", "较上次课", "+6%", "activity", ""],
      ["任务完成率", "86%", "已完成", "36人", "list-checks", ""],
      ["知识掌握度", "84%", "诊断提升", "+18%", "brain-circuit", "warning"],
      ["风险学生", "3人", "需重点关注", "2项", "triangle-alert", "risk"]
    ],
    insights: [
      "成本动因识别正确率达到88%，高于预设目标6个百分点",
      "第2组现金流判断出现共性偏差，建议增加对比案例",
      "三名学生在应收账款周转任务中需要个性化补强"
    ],
    render: renderOverview
  },
  live: {
    nav: "课堂实施",
    tag: "实时课堂",
    title: "课堂实时分析",
    subtitle: "汽车金融实务 · 任务三 经营数据诊断 · 42人在线",
    activeStage: 3,
    insightTitle: "实时教学洞察",
    voice: "语音待命",
    metrics: [
      ["在线学生", "42/42", "设备连接率", "100%", "users", ""],
      ["互动响应", "128次", "本环节新增", "+37次", "message-square-more", ""],
      ["任务进度", "76%", "预计剩余", "8分钟", "gauge", "warning"],
      ["待干预", "3人", "系统已定位", "3项", "user-round-search", "risk"]
    ],
    insights: [
      "成本差异识别正确率提升至88%，多数小组已形成证据链",
      "第2组现金流判断存在偏差，错误集中在经营活动分类",
      "建议追加应收账款情境追问，验证学生迁移应用能力"
    ],
    render: renderLive
  },
  review: {
    nav: "教学评价",
    tag: "成果评价",
    title: "课后教学复盘",
    subtitle: "汽车金融实务 · 项目二学习成果分析 · 数据已归档",
    activeStage: 5,
    insightTitle: "教学成效",
    voice: "语音待命",
    metrics: [
      ["知识掌握度", "91%", "较课前诊断", "+21%", "brain", ""],
      ["能力达成度", "89%", "高阶任务", "达标", "badge-check", ""],
      ["课堂参与度", "94%", "全过程参与", "+8%", "hand", "warning"],
      ["成果提交率", "100%", "42份成果", "已归档", "folder-check", ""]
    ],
    insights: [
      "核心知识掌握度提升21%，课前薄弱点得到有效改善",
      "业财融合分析达成率89%，形成可验证的能力成长证据",
      "个性化补强任务已推送3人，后续跟踪节点已设定"
    ],
    render: renderReview
  }
};

function panelHeader(title, subtitle, tools = "") {
  return `<div class="panel-header"><div class="panel-title"><h2>${title}</h2><span>${subtitle}</span></div><div class="panel-tools">${tools}</div></div>`;
}

function renderOverview() {
  return `
    <section class="panel panel-wide">
      ${panelHeader("学习任务达成趋势", "课前诊断至课堂任务的实时变化", `<div class="legend"><span><i></i>本班达成度</span><span><i></i>预设目标</span></div><button class="tiny-select">按任务查看</button>`)}
      <div class="chart-area">
        <svg viewBox="0 0 760 245" role="img" aria-label="学习任务达成趋势折线图">
          <line class="grid-line" x1="54" y1="32" x2="728" y2="32"/><line class="grid-line" x1="54" y1="88" x2="728" y2="88"/><line class="grid-line" x1="54" y1="144" x2="728" y2="144"/><line class="grid-line" x1="54" y1="200" x2="728" y2="200"/>
          <text class="chart-label" x="17" y="35">100%</text><text class="chart-label" x="24" y="91">80%</text><text class="chart-label" x="24" y="147">60%</text><text class="chart-label" x="24" y="203">40%</text>
          <polyline class="line-gold" points="72,88 234,88 398,88 562,88 710,88"/>
          <polyline class="line-teal" points="72,176 234,148 398,111 562,76 710,59"/>
          <circle class="point-teal" cx="72" cy="176" r="5"/><circle class="point-teal" cx="234" cy="148" r="5"/><circle class="point-teal" cx="398" cy="111" r="5"/><circle class="point-teal" cx="562" cy="76" r="5"/><circle class="point-teal" cx="710" cy="59" r="5"/>
          <text class="chart-value" x="61" y="162">48%</text><text class="chart-value" x="223" y="134">58%</text><text class="chart-value" x="387" y="97">71%</text><text class="chart-value" x="551" y="62">84%</text><text class="chart-value" x="699" y="45">90%</text>
          <text class="chart-label" x="52" y="226">课前诊断</text><text class="chart-label" x="215" y="226">情境导入</text><text class="chart-label" x="378" y="226">任务一</text><text class="chart-label" x="542" y="226">任务二</text><text class="chart-label" x="688" y="226">任务三</text>
        </svg>
      </div>
    </section>
    <section class="panel panel-side">
      ${panelHeader("任务完成分布", "按核心学习任务统计", `<button class="tiny-select">全部小组</button>`)}
      <div class="task-bars">
        ${taskRow("数据清洗", 96)}${taskRow("成本动因识别", 88)}${taskRow("现金流判断", 73)}${taskRow("经营诊断报告", 84)}${taskRow("决策表达", 79)}
      </div>
    </section>
    <section class="panel panel-bottom-left">
      ${panelHeader("重点学生任务状态", "系统根据课堂学习数据标记需关注对象", `<button class="tiny-select">查看全部</button>`)}
      <table class="mini-table"><thead><tr><th>学生</th><th>当前任务</th><th>诊断标签</th><th>完成度</th></tr></thead><tbody>
        <tr><td>陈雨桐</td><td>应收账款周转分析</td><td><span class="tag coral">概念混淆</span></td><td>62%</td></tr>
        <tr><td>周子涵</td><td>经营现金流判断</td><td><span class="tag gold">证据不足</span></td><td>71%</td></tr>
        <tr><td>李嘉宁</td><td>成本动因识别</td><td><span class="tag">持续提升</span></td><td>83%</td></tr>
      </tbody></table>
    </section>
    <section class="panel panel-bottom-right">
      ${panelHeader("课堂任务结构", "42名学生 · 5项任务")}
      <div class="donut-wrap"><div class="donut"><div class="donut-center"><strong>86%</strong><span>整体完成</span></div></div><div class="donut-legend"><div><i></i><span>已完成</span><strong>36人</strong></div><div><i></i><span>进行中</span><strong>4人</strong></div><div><i></i><span>需干预</span><strong>2人</strong></div></div></div>
    </section>`;
}

function renderLive() {
  return `
    <section class="panel panel-wide">
      ${panelHeader("小组任务协同", "任务三 · 经营数据诊断", `<div class="legend"><span><i></i>进展正常</span><span><i></i>需要提示</span></div>`)}
      <div class="team-flow">
        <div class="flow-column">
          ${flowNode("01", "第1组", "成本差异识别", "92%")}
          ${flowNode("02", "第2组", "现金流判断", "68%")}
          ${flowNode("03", "第3组", "应收账款分析", "81%")}
        </div>
        <div class="flow-core"><div class="core-icon"><i data-lucide="scan-search"></i></div><strong>经营数据诊断</strong><span>证据采集 → 指标计算 → 风险判断</span><progress value="76" max="100"></progress></div>
        <div class="flow-column">
          ${flowNode("04", "第4组", "成本差异识别", "86%")}
          ${flowNode("05", "第5组", "现金流判断", "79%")}
          ${flowNode("06", "第6组", "经营建议表达", "73%")}
        </div>
      </div>
    </section>
    <section class="panel panel-side">
      ${panelHeader("学生状态矩阵", "绿色正常 · 金色迟疑 · 红色待干预", `<button class="tiny-select">实时</button>`)}
      <div class="matrix">${Array.from({length: 42}, (_, i) => `<div class="matrix-cell ${[8, 25, 36].includes(i) ? "risk" : [5, 14, 19, 31, 39].includes(i) ? "warn" : ""}">${String(i + 1).padStart(2, "0")}</div>`).join("")}</div>
    </section>
    <section class="panel panel-bottom-left">
      ${panelHeader("课堂互动趋势", "最近18分钟 · 语音与任务反馈", `<div class="legend"><span><i></i>有效响应</span><span><i></i>系统提示</span></div>`)}
      <div class="chart-area"><svg viewBox="0 0 760 120" role="img" aria-label="课堂互动趋势">
        <line class="grid-line" x1="35" y1="22" x2="730" y2="22"/><line class="grid-line" x1="35" y1="60" x2="730" y2="60"/><line class="grid-line" x1="35" y1="98" x2="730" y2="98"/>
        <polyline class="line-teal" points="42,89 112,78 182,84 252,54 322,61 392,39 462,47 532,26 602,41 672,19 725,31"/>
        <polyline class="line-gold" points="42,96 112,93 182,88 252,91 322,84 392,87 462,72 532,82 602,76 672,70 725,73"/>
        <text class="chart-label" x="36" y="115">14:14</text><text class="chart-label" x="208" y="115">14:20</text><text class="chart-label" x="382" y="115">14:26</text><text class="chart-label" x="690" y="115">14:32</text>
      </svg></div>
    </section>
    <section class="panel panel-bottom-right">
      ${panelHeader("答题分布", "经营活动现金流判断")}
      <div class="donut-wrap"><div class="donut" style="background:conic-gradient(var(--teal) 0 88%, var(--gold) 88% 95%, var(--coral) 95% 100%)"><div class="donut-center"><strong>88%</strong><span>回答正确</span></div></div><div class="donut-legend"><div><i></i><span>正确</span><strong>37人</strong></div><div><i></i><span>迟疑</span><strong>3人</strong></div><div><i></i><span>错误</span><strong>2人</strong></div></div></div>
    </section>`;
}

function renderReview() {
  return `
    <section class="panel panel-wide">
      ${panelHeader("课前与课后能力对比", "项目二核心能力达成变化", `<div class="legend"><span><i></i>课后测评</span><span><i></i>课前诊断</span></div><button class="tiny-select">全班</button>`)}
      <div class="chart-area">
        <svg viewBox="0 0 760 245" role="img" aria-label="课前课后能力对比柱状图">
          <line class="grid-line" x1="55" y1="30" x2="726" y2="30"/><line class="grid-line" x1="55" y1="85" x2="726" y2="85"/><line class="grid-line" x1="55" y1="140" x2="726" y2="140"/><line class="grid-line" x1="55" y1="195" x2="726" y2="195"/>
          ${barPair(95, 72, 95, "数据采集")}${barPair(255, 64, 91, "财务分析")}${barPair(415, 58, 87, "风险识别")}${barPair(575, 69, 89, "决策表达")}
          <text class="chart-label" x="20" y="33">100%</text><text class="chart-label" x="27" y="88">80%</text><text class="chart-label" x="27" y="143">60%</text><text class="chart-label" x="27" y="198">40%</text>
        </svg>
      </div>
    </section>
    <section class="panel panel-side">
      ${panelHeader("专业能力画像", "课前诊断 / 课后测评", `<div class="legend"><span><i></i>课后</span><span><i></i>课前</span></div>`)}
      <div class="radar-wrap"><svg viewBox="0 0 330 265" role="img" aria-label="专业能力雷达图">
        <polygon class="radar-grid" points="165,28 272,97 231,221 99,221 58,97"/><polygon class="radar-grid" points="165,57 245,109 214,201 116,201 85,109"/><polygon class="radar-grid" points="165,86 218,121 198,181 132,181 112,121"/>
        <line class="radar-axis" x1="165" y1="132" x2="165" y2="28"/><line class="radar-axis" x1="165" y1="132" x2="272" y2="97"/><line class="radar-axis" x1="165" y1="132" x2="231" y2="221"/><line class="radar-axis" x1="165" y1="132" x2="99" y2="221"/><line class="radar-axis" x1="165" y1="132" x2="58" y2="97"/>
        <polygon class="radar-before" points="165,71 224,113 201,181 124,188 94,109"/><polygon class="radar-after" points="165,39 259,102 224,211 106,211 68,100"/>
        <text class="chart-label" x="143" y="18">数据采集</text><text class="chart-label" x="276" y="98">财务分析</text><text class="chart-label" x="221" y="239">风险识别</text><text class="chart-label" x="75" y="239">决策表达</text><text class="chart-label" x="8" y="98">业财融合</text>
      </svg></div>
    </section>
    <section class="panel panel-bottom-left">
      ${panelHeader("学生成长证据", "典型学习者的能力提升记录", `<button class="tiny-select">导出报告</button>`)}
      <table class="mini-table"><thead><tr><th>学生</th><th>成长证据</th><th>能力变化</th><th>达成度</th></tr></thead><tbody>
        <tr><td>陈雨桐</td><td>完成应收账款补强任务</td><td><span class="tag">显著提升</span></td><td>86%</td></tr>
        <tr><td>周子涵</td><td>现金流证据链完整度提升</td><td><span class="tag">稳定达成</span></td><td>89%</td></tr>
        <tr><td>李嘉宁</td><td>形成经营诊断可视化报告</td><td><span class="tag gold">成果突出</span></td><td>96%</td></tr>
      </tbody></table>
    </section>
    <section class="panel panel-bottom-right">
      ${panelHeader("成果构成", "42份学习成果已归档")}
      <div class="donut-wrap"><div class="donut" style="background:conic-gradient(var(--teal) 0 64%, var(--sky) 64% 86%, var(--gold) 86% 100%)"><div class="donut-center"><strong>100%</strong><span>提交完成</span></div></div><div class="donut-legend"><div><i></i><span>诊断报告</span><strong>27份</strong></div><div><i style="background:var(--sky)"></i><span>数据看板</span><strong>9份</strong></div><div><i></i><span>展示作品</span><strong>6份</strong></div></div></div>
    </section>`;
}

function taskRow(label, value) {
  return `<div class="task-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div><strong>${value}%</strong></div>`;
}

function flowNode(index, team, task, value) {
  return `<div class="flow-node"><span>${index}</span><div><strong>${team}</strong><small>${task}</small></div><b>${value}</b></div>`;
}

function barPair(x, before, after, label) {
  const scale = 2.1;
  const beforeHeight = before * scale - 75;
  const afterHeight = after * scale - 75;
  return `<rect x="${x}" y="${195 - beforeHeight}" width="32" height="${beforeHeight}" rx="3" fill="var(--gold)" opacity="0.72"/><rect x="${x + 40}" y="${195 - afterHeight}" width="32" height="${afterHeight}" rx="3" fill="var(--teal)"/><text class="chart-value" x="${x + 3}" y="${186 - beforeHeight}">${before}%</text><text class="chart-value" x="${x + 43}" y="${186 - afterHeight}">${after}%</text><text class="chart-label" x="${x + 2}" y="222">${label}</text>`;
}

function mount() {
  const key = new URLSearchParams(window.location.search).get("view") || "overview";
  const view = views[key] || views.overview;
  document.title = `${view.title} - AI智慧办课综合系统`;
  document.getElementById("view-tag").textContent = view.tag;
  document.getElementById("page-title").textContent = view.title;
  document.getElementById("page-subtitle").textContent = view.subtitle;
  document.getElementById("insight-title").textContent = view.insightTitle;
  document.getElementById("voice-label").textContent = view.voice;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.nav === view.nav));

  document.getElementById("metrics").innerHTML = view.metrics.map(([label, value, deltaLabel, delta, icon, tone]) => `
    <article class="metric ${tone}"><span class="metric-label">${label}</span><span class="metric-icon"><i data-lucide="${icon}"></i></span><strong class="metric-value">${value}</strong><span class="metric-delta">${deltaLabel} <strong>${delta}</strong></span></article>
  `).join("");

  document.getElementById("insights").innerHTML = view.insights.map((text, index) => `<div class="insight-item" data-index="0${index + 1}">${text}</div>`).join("");
  document.getElementById("main-content").innerHTML = view.render();
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

mount();
