// Lògica interactiva per a "Laboratori Polític 2026 (Model DUA Multinivell: Insegur, Segur, Agosarat)"

let userScore = 0;
let currentDuaLevel = "insegur"; // 'insegur', 'segur', 'agosarat'

function addScore(points) {
  userScore += points;
  const el = document.getElementById("user-score");
  if (el) {
    el.textContent = userScore;
    el.parentElement.style.transform = "scale(1.15)";
    setTimeout(() => {
      el.parentElement.style.transform = "scale(1)";
    }, 220);
  }
}

// 1. Selector Global de Nivell DUA (Insegur / Segur / Agosarat)
function setGlobalDuaLevel(level) {
  currentDuaLevel = level;
  const info = DUA_LEVELS[level];

  document.querySelectorAll(".dua-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.dualevel === level);
  });

  const descEl = document.getElementById("dua-active-desc");
  if (descEl && info) {
    descEl.textContent = `${info.icon} ${info.subtitle}`;
  }

  // Actualitzem les seccions segons el nivell DUA
  renderDuaProjectGuide();
  renderPartyDetail();
  filterCampaignGame(level);
  setActualitatLevel(level);
  renderDictionary();

  // Adaptem també l'escenari de la Llei d'Hondt segons el nivell
  const dhondtSelect = document.getElementById("dhondt-preset");
  if (dhondtSelect) {
    if (level === "insegur") dhondtSelect.value = "aula";
    else if (level === "segur") dhondtSelect.value = "barcelona";
    else dhondtSelect.value = "madrid";
    loadDhondtPreset(dhondtSelect.value);
  }
}

function renderDuaProjectGuide() {
  const box = document.getElementById("dua-project-guide");
  if (!box) return;

  if (currentDuaLevel === "insegur") {
    box.innerHTML = `
      <h3>🌱 Guia Nivell Insegur (Pas a pas i visual)</h3>
      <ul class="timeline-list">
        <li><span class="time-badge">Pas 1</span><div><strong>Nom, Color i Símbol:</strong> Trieu un nom curt i un color (vermell, blau, verd, morat...) que us representi.</div></li>
        <li><span class="time-badge">Pas 2</span><div><strong>Eslògan curt:</strong> Creeu una frase de 3 a 5 paraules al <em>Creador de Cartell</em>.</div></li>
        <li><span class="time-badge">Pas 3</span><div><strong>3 Propostes Joves:</strong> Escolliu 3 temes de sota (ex. lloguers, beques, salut mental) i escriviu una idea per a cadascun.</div></li>
        <li><span class="time-badge">Pas 4</span><div><strong>Practiqueu als Jocs 🌱:</strong> Jugueu als reptes de nivell Insegur per guanyar confiança!</div></li>
      </ul>
    `;
  } else if (currentDuaLevel === "segur") {
    box.innerHTML = `
      <h3>🛡️ Guia Nivell Segur (Autònom per al projecte)</h3>
      <ul class="timeline-list">
        <li><span class="time-badge">Pas 1</span><div><strong>Identitat i Eix Ideològic:</strong> Situeu el vostre partit a l'eix Esquerra-Dreta i justifiqueu la psicologia del vostre color i logotip.</div></li>
        <li><span class="time-badge">Pas 2</span><div><strong>Campanya 2026 (Cartell i TikTok):</strong> Dissenyeu el cartell i un guió de vídeo de 30 segons adreçat als vostres votants.</div></li>
        <li><span class="time-badge">Pas 3</span><div><strong>Programa amb Dades:</strong> Redacteu propostes sobre habitatge, educació i clima amb dades verificables.</div></li>
        <li><span class="time-badge">Pas 4</span><div><strong>Pactes d'Investidura:</strong> Utilitzeu el Pactòmetre per decidir amb quins grups pactaríeu en 1a o 2a volta.</div></li>
      </ul>
    `;
  } else {
    box.innerHTML = `
      <h3>🚀 Guia Nivell Agosarat (Estratègia i anàlisi crítica)</h3>
      <ul class="timeline-list">
        <li><span class="time-badge">Pas 1</span><div><strong>Estratègia de Coalicions 2026:</strong> Analitzeu si al vostre partit li convé anar en solitari o en coalició (com <em>Frente Amplio</em> o <em>ERC+Podem</em>) segons la Llei d'Hondt.</div></li>
        <li><span class="time-badge">Pas 2</span><div><strong>Memòria Econòmica:</strong> Expliqueu com finançareu les vostres mesures (impostos progressius, fons europeus, rebaixes fiscals) sense caure en demagògia.</div></li>
        <li><span class="time-badge">Pas 3</span><div><strong>Debat i Desmuntatge de Fal·làcies:</strong> Entreneu-vos per detectar fal·làcies d'Home de Palla i <em>fake news</em> als debats.</div></li>
        <li><span class="time-badge">Pas 4</span><div><strong>Aritmètica del Congrés i Senat:</strong> Simuleu escenaris de bloqueig, vot útil i llistes conjuntes al Senat.</div></li>
      </ul>
    `;
  }
}

// 2. Navegació per Pestanyes
function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `tab-${tabId}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-tab").forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

function switchSimulator(simName) {
  document.querySelectorAll(".sub-tab-btn").forEach((btn, idx) => {
    const isPacto = simName === "pactometre" && idx === 0;
    const isDhondt = simName === "dhondt" && idx === 1;
    btn.classList.toggle("active", isPacto || isDhondt);
  });
  document.getElementById("sim-pactometre").classList.toggle("hidden", simName !== "pactometre");
  document.getElementById("sim-dhondt").classList.toggle("hidden", simName !== "dhondt");
}

// 3. Compte Enrere cap a les Eleccions de Novembre de 2026
function updateCountdown() {
  const electionDate = new Date("2026-11-27T09:00:00+01:00").getTime();
  const now = new Date().getTime();
  const diff = electionDate - now;
  const display = document.getElementById("countdown-display");
  if (!display) return;

  if (diff <= 0) {
    display.textContent = "🗳️ Dia d'Eleccions!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  display.textContent = `Falten ${days} dies i ${hours}h`;
}

// 4. Secció 2: Partits, Coalicions i Logos 2026 (Adaptat DUA)
let selectedPartyId = PARTIES_DATA[0].id;

function renderPartiesSection() {
  const track = document.getElementById("spectrum-track");
  const grid = document.getElementById("parties-grid");
  if (!track || !grid) return;

  track.innerHTML = "";
  grid.innerHTML = "";

  PARTIES_DATA.forEach((p) => {
    const pct = 50 + (p.axisX / 10) * 43;
    const node = document.createElement("button");
    node.className = `spectrum-node ${p.id === selectedPartyId ? "active" : ""}`;
    node.style.left = `${pct}%`;
    node.style.borderColor = p.color;
    node.style.color = p.color;
    node.textContent = p.acronym;
    node.title = `${p.name}`;
    node.addEventListener("click", () => selectParty(p.id));
    track.appendChild(node);

    const card = document.createElement("div");
    card.className = `party-mini-card ${p.id === selectedPartyId ? "active" : ""}`;
    card.innerHTML = `
      <div class="party-mini-logo">${p.logoSvg}</div>
      <strong style="font-size:0.88rem">${p.acronym}</strong>
      <span class="small-muted" style="font-size:0.74rem">${p.leader2026.split("(")[0]}</span>
    `;
    card.addEventListener("click", () => selectParty(p.id));
    grid.appendChild(card);
  });

  renderPartyDetail();
}

function selectParty(partyId) {
  selectedPartyId = partyId;
  renderPartiesSection();
}

function renderPartyDetail() {
  const container = document.getElementById("party-detail-view");
  const p = PARTIES_DATA.find((item) => item.id === selectedPartyId);
  if (!container || !p) return;

  const duaInfo = DUA_LEVELS[currentDuaLevel];
  const levelSummary = p.duaSummary[currentDuaLevel] || p.duaSummary.segur;

  const slogansHtml = p.slogans
    .map(
      (s) => `
      <div class="slogan-item" style="border-left-color: ${p.color}">
        <div class="slogan-quote">«${s.text}»</div>
        <div class="slogan-sub">🎯 ${s.focus}</div>
      </div>
    `
    )
    .join("");

  const issuesHtml = p.campaignStyle.keyIssues2026.map((i) => `<li>${i}</li>`).join("");

  container.innerHTML = `
    <div class="detail-header">
      <div class="detail-logo-wrap">${p.logoSvg}</div>
      <div class="detail-meta">
        <h3>${p.name}</h3>
        <span class="ideology-badge" style="background:${p.secondaryColor}; color:#0f172a">
          🧭 ${p.ideology} · 👤 Líder: ${p.leader2026}
        </span>
        <p class="small-muted" style="margin-top:0.4rem">
          <strong>🎨 Logotip i símbol:</strong> ${p.symbolName}
        </p>
      </div>
    </div>

    <div class="dua-highlight-callout" style="border-left-color:${p.color}">
      <strong>${duaInfo.icon} Explicació adaptada (${duaInfo.name}):</strong><br>
      ${levelSummary}
      <div style="margin-top:0.45rem; font-size:0.85rem; color:#334155">
        <strong>🤝 Agrupament / Coalició Novembre 2026:</strong> ${p.coalitionStatus2026}
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-box">
        <h4>💬 Eslògans de Campanya 2026</h4>
        ${slogansHtml}
      </div>

      <div class="detail-box">
        <h4>🎨 Per què fan servir aquest Color i Logo?</h4>
        <p style="font-size:0.9rem; margin-bottom:0.65rem">${p.colorPsychology}</p>
        <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.82rem; font-weight:700">
          <span style="display:inline-block; width:22px; height:22px; border-radius:6px; background:${p.color}"></span>
          Color corporatiu: ${p.color}
        </div>
      </div>

      <div class="detail-box">
        <h4>📱 Com fan campanya a TikTok i Debats?</h4>
        <p style="font-size:0.88rem; margin-bottom:0.45rem"><strong>To del discurs:</strong> ${p.campaignStyle.tone}</p>
        <p style="font-size:0.88rem"><strong>Xarxes socials:</strong> ${p.campaignStyle.socialMedia}</p>
      </div>

      <div class="detail-box">
        <h4>📌 Propostes Estrella del seu Programa</h4>
        <ul class="proposals-list">
          ${issuesHtml}
        </ul>
      </div>
    </div>
  `;
}

// 5. Secció 3: Joc Caçadors de Campanyes Multinivell (🌱 Insegur, 🛡️ Segur, 🚀 Agosarat)
let currentCampMode = "insegur";
let filteredCampQuestions = [];
let currentCampIndex = 0;

function filterCampaignGame(mode) {
  currentCampMode = mode;
  document.querySelectorAll("[data-campmode]").forEach((b) => {
    b.classList.toggle("active", b.dataset.campmode === mode);
  });
  filteredCampQuestions =
    mode === "all"
      ? [...CAMPAIGN_CHALLENGES]
      : CAMPAIGN_CHALLENGES.filter((q) => q.level === mode);
  currentCampIndex = 0;
  renderCampaignQuestion();
}

document.querySelectorAll("[data-campmode]").forEach((btn) => {
  btn.addEventListener("click", () => filterCampaignGame(btn.dataset.campmode));
});

function renderCampaignQuestion() {
  const q = filteredCampQuestions[currentCampIndex];
  if (!q) return;

  document.getElementById("camp-badge").textContent = q.badge;
  document.getElementById("camp-progress").textContent = `Repte ${currentCampIndex + 1} de ${filteredCampQuestions.length}`;
  document.getElementById("camp-question").textContent = q.prompt;
  document.getElementById("camp-hint").textContent = `💡 ${q.visualHint}`;

  const optionsContainer = document.getElementById("camp-options");
  const feedbackBox = document.getElementById("camp-feedback");
  const nextBtn = document.getElementById("camp-next-btn");

  optionsContainer.innerHTML = "";
  feedbackBox.className = "feedback-box hidden";
  nextBtn.classList.add("hidden");

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optText;
    btn.addEventListener("click", () => handleCampaignAnswer(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleCampaignAnswer(selectedIndex, clickedBtn) {
  const q = filteredCampQuestions[currentCampIndex];
  const allBtns = document.querySelectorAll("#camp-options .option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const feedbackBox = document.getElementById("camp-feedback");
  const nextBtn = document.getElementById("camp-next-btn");

  const xpPoints = q.level === "agosarat" ? 25 : q.level === "segur" ? 15 : 10;

  if (selectedIndex === q.correct) {
    clickedBtn.classList.add("correct");
    feedbackBox.className = "feedback-box ok";
    feedbackBox.innerHTML = `<strong>✅ Correcte! (+${xpPoints} XP)</strong><br>${q.explanation}`;
    addScore(xpPoints);
  } else {
    clickedBtn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    feedbackBox.className = "feedback-box err";
    feedbackBox.innerHTML = `<strong>❌ Resposta correcta: ${q.options[q.correct]}</strong><br>${q.explanation}`;
  }

  nextBtn.classList.remove("hidden");
}

document.getElementById("camp-next-btn")?.addEventListener("click", () => {
  currentCampIndex = (currentCampIndex + 1) % filteredCampQuestions.length;
  renderCampaignQuestion();
});

// Simulador Creatiu de Cartell i Eslògan
function updatePosterPreview() {
  const name = document.getElementById("lab-party-name").value.trim() || "EL NOSTRE PARTIT";
  const slogan = document.getElementById("lab-slogan").value.trim() || "El nostre futur comença avui";
  const colorSelect = document.getElementById("lab-color");
  const color = colorSelect.value;
  const psychText = colorSelect.options[colorSelect.selectedIndex].dataset.psych;
  const symbol = document.getElementById("lab-symbol").value;
  const proposal = document.getElementById("lab-proposal").value.trim() || "Proposta clau per als joves";

  document.getElementById("poster-title").textContent = name.toUpperCase();
  document.getElementById("poster-slogan").textContent = `«${slogan}»`;
  document.getElementById("poster-symbol").textContent = symbol;
  document.getElementById("poster-proposal").textContent = `✅ ${proposal}`;

  const poster = document.getElementById("poster-preview");
  poster.style.background = `linear-gradient(145deg, ${color} 0%, #0f172a 135%)`;

  const wordCount = slogan.split(/\s+/).filter(Boolean).length;
  const sloganTip =
    wordCount <= 6
      ? `🔥 <strong>Molt bon eslògan (${wordCount} paraules):</strong> és curt, fàcil de recordar i funciona tant en cartell com a TikTok!`
      : `⚠️ <strong>Eslògan una mica llarg (${wordCount} paraules):</strong> proveu de resumir-lo a màxim 6 paraules perquè tingui més força.`;

  document.getElementById("poster-analysis").innerHTML = `
    <strong>💡 Consell de Campanya per al vostre grup:</strong><br>
    • <strong>Significat del vostre color:</strong> ${psychText}<br>
    • <strong>Anàlisi de l'eslògan:</strong> ${sloganTip}
  `;
}

["lab-party-name", "lab-slogan", "lab-color", "lab-symbol", "lab-proposal"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updatePosterPreview);
});

// 6. Secció 4A: Pactòmetre i Hemicicle de 350 Escons (Amb nous partits 2026)
let pactoState = [];

function initPactometre() {
  pactoState = PARTIES_DATA.map((p) => ({
    id: p.id,
    acronym: p.acronym,
    name: p.name,
    color: p.color,
    seats: p.seats2026,
    vote: "abs"
  }));

  pactoState.push({
    id: "aula",
    acronym: "PARTIT D'AULA",
    name: "El Nostre Partit (4t ESO)",
    color: "#7C4DFF",
    seats: 0,
    vote: "abs"
  });

  renderPactometre();
}

function renderPactometre() {
  const listEl = document.getElementById("pacto-parties-list");
  if (!listEl) return;

  listEl.innerHTML = "";

  pactoState.forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = "pacto-party-row";
    row.innerHTML = `
      <div class="pacto-party-info">
        <span class="color-dot" style="background:${p.color}"></span>
        <div>
          <strong style="font-size:0.88rem">${p.acronym}</strong>
          <div class="small-muted" style="font-size:0.72rem">${p.seats} escons</div>
        </div>
      </div>
      <div>
        <label class="small-muted" style="font-size:0.72rem; margin-right:4px">Escons:</label>
        <input type="number" min="0" max="350" value="${p.seats}" class="pacto-seats-input" data-idx="${idx}" />
      </div>
      <div class="pacto-vote-btns">
        <button class="vote-btn ${p.vote === "yes" ? "active-yes" : ""}" data-idx="${idx}" data-v="yes">SÍ</button>
        <button class="vote-btn ${p.vote === "abs" ? "active-abs" : ""}" data-idx="${idx}" data-v="abs">ABST</button>
        <button class="vote-btn ${p.vote === "no" ? "active-no" : ""}" data-idx="${idx}" data-v="no">NO</button>
      </div>
    `;
    listEl.appendChild(row);
  });

  listEl.querySelectorAll(".pacto-seats-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.dataset.idx, 10);
      pactoState[i].seats = Math.max(0, parseInt(e.target.value, 10) || 0);
      updatePactoCalculations();
    });
  });

  listEl.querySelectorAll(".vote-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(e.target.dataset.idx, 10);
      pactoState[i].vote = e.target.dataset.v;
      renderPactometre();
    });
  });

  updatePactoCalculations();
}

function updatePactoCalculations() {
  let yesSeats = 0;
  let absSeats = 0;
  let noSeats = 0;

  const yesParties = [];
  pactoState.forEach((p) => {
    if (p.vote === "yes") {
      yesSeats += p.seats;
      if (p.seats > 0) yesParties.push(p.id);
    } else if (p.vote === "no") {
      noSeats += p.seats;
    } else {
      absSeats += p.seats;
    }
  });

  document.getElementById("pacto-yes-count").textContent = yesSeats;
  document.getElementById("pacto-abs-count").textContent = absSeats;
  document.getElementById("pacto-no-count").textContent = noSeats;

  drawHemicycle(yesSeats, absSeats, noSeats);

  // Avisos pedagògics de compatibilitat política 2026
  let warningMsg = "";
  const hasRightRad = yesParties.includes("vox") || yesParties.includes("salf");
  const hasLeftOrIndep =
    yesParties.includes("psoe") ||
    yesParties.includes("frente-amplio") ||
    yesParties.includes("podemos") ||
    yesParties.includes("erc") ||
    yesParties.includes("junts") ||
    yesParties.includes("territorials");

  if (hasRightRad && hasLeftOrIndep) {
    warningMsg = "⚠️ <strong>Alerta de Politòleg:</strong> Heu posat al bloc del 'SÍ' a Vox o SALF juntament amb partits d'esquerra o nacionalistes catalans/bascos. Tenen programes oposats i a la realitat no pacten mai!";
  } else if (yesParties.includes("pp") && (yesParties.includes("frente-amplio") || yesParties.includes("podemos") || yesParties.includes("erc"))) {
    warningMsg = "⚠️ <strong>Alerta de Politòleg:</strong> El PP i els partits d'esquerra (Frente Amplio, Podem o ERC) tenen projectes econòmics i territorials contraris.";
  } else if (yesParties.includes("frente-amplio") && yesParties.includes("podemos") && yesParties.includes("psoe")) {
    warningMsg = "💡 <strong>Bloc Progressista Reunificat al Congrés:</strong> Tot i presentar-se per separat a les eleccions (PSOE, Frente Amplio i Podem/ERC), al Congrés necessiten sumar els seus escons per investir un govern d'esquerres.";
  }

  const verdictEl = document.getElementById("investidura-verdict");
  if (yesSeats >= 176) {
    verdictEl.style.background = "#f0fdf4";
    verdictEl.style.borderColor = "#86efac";
    verdictEl.innerHTML = `
      <strong>🎉 INVESTIDURA APROVADA EN 1a VOLTA (Majoria Absoluta: ${yesSeats} SÍ)!</strong><br>
      Supera els 176 diputats necessaris. Hi ha nou Govern a la primera votació!
      ${warningMsg ? `<div style="margin-top:0.5rem; color:#92400e">${warningMsg}</div>` : ""}
    `;
  } else if (yesSeats > noSeats && yesSeats > 0) {
    verdictEl.style.background = "#eff6ff";
    verdictEl.style.borderColor = "#93c5fd";
    verdictEl.innerHTML = `
      <strong>⚖️ INVESTIDURA APROVADA EN 2a VOLTA (Majoria Simple, 48h després)!</strong><br>
      No arriba a 176, però té <strong>més SÍ (${yesSeats}) que NO (${noSeats})</strong> gràcies a les abstencions (${absSeats}).
      ${warningMsg ? `<div style="margin-top:0.5rem; color:#92400e">${warningMsg}</div>` : ""}
    `;
  } else {
    verdictEl.style.background = "#fef2f2";
    verdictEl.style.borderColor = "#fca5a5";
    verdictEl.innerHTML = `
      <strong>❌ INVESTIDURA REBUTJADA (Més o iguals NO que SÍ)</strong><br>
      Cal seguir negociant amb altres partits perquè votin SÍ o s'abstinguin.
    `;
  }
}

function drawHemicycle(yesSeats, absSeats, noSeats) {
  const svg = document.getElementById("hemicycle-svg");
  if (!svg) return;

  const total = Math.max(1, yesSeats + absSeats + noSeats);
  const yesAngle = (yesSeats / total) * Math.PI;
  const absAngle = (absSeats / total) * Math.PI;
  const cx = 200;
  const cy = 195;

  function arcPath(startAngle, endAngle, rInner, rOuter) {
    if (endAngle - startAngle <= 0.001) return "";
    const x1 = cx - rOuter * Math.cos(startAngle);
    const y1 = cy - rOuter * Math.sin(startAngle);
    const x2 = cx - rOuter * Math.cos(endAngle);
    const y2 = cy - rOuter * Math.sin(endAngle);
    const x3 = cx - rInner * Math.cos(endAngle);
    const y3 = cy - rInner * Math.sin(endAngle);
    const x4 = cx - rInner * Math.cos(startAngle);
    const y4 = cy - rInner * Math.sin(startAngle);
    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
  }

  const a0 = 0;
  const a1 = yesAngle;
  const a2 = yesAngle + absAngle;
  const a3 = Math.PI;

  svg.innerHTML = `
    <path d="${arcPath(a0, a1, 65, 165)}" fill="#16a34a" />
    <path d="${arcPath(a1, a2, 65, 165)}" fill="#94a3b8" />
    <path d="${arcPath(a2, a3, 65, 165)}" fill="#dc2626" />
    <line x1="${cx}" y1="${cy - 55}" x2="${cx}" y2="${cy - 180}" stroke="#0f172a" stroke-width="3" stroke-dasharray="5,4" />
    <text x="${cx}" y="14" text-anchor="middle" fill="#0f172a" font-family="Outfit" font-weight="800" font-size="12">176 (Majoria)</text>
    <text x="${cx}" y="${cy - 18}" text-anchor="middle" fill="#0f172a" font-family="Outfit" font-weight="800" font-size="18">${yesSeats + absSeats + noSeats} Escons</text>
  `;
}

document.getElementById("reset-pacto-btn")?.addEventListener("click", initPactometre);

// 7. Secció 4B: Simulador de la Llei d'Hondt
let currentDhondtParties = [];

function loadDhondtPreset(presetKey) {
  const preset = DHONDT_PRESETS[presetKey];
  if (!preset) return;

  document.getElementById("dhondt-seats").value = preset.seats;
  document.getElementById("dhondt-blank").value = preset.blankVotes;
  document.getElementById("dhondt-explanation").innerHTML = `<strong>${preset.name}:</strong> ${preset.explanation}`;

  currentDhondtParties = preset.parties.map((p) => ({ ...p }));
  renderDhondtPartyInputs();
  calculateDhondt();
}

function renderDhondtPartyInputs() {
  const container = document.getElementById("dhondt-party-inputs");
  if (!container) return;
  container.innerHTML = "";

  currentDhondtParties.forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = "dhondt-party-row";
    row.innerHTML = `
      <span class="color-dot" style="background:${p.color}"></span>
      <input type="text" value="${p.name}" data-idx="${idx}" class="dh-name-inp" />
      <input type="number" min="0" step="100" value="${p.votes}" data-idx="${idx}" class="dh-votes-inp" />
    `;
    container.appendChild(row);
  });

  container.querySelectorAll(".dh-name-inp").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      currentDhondtParties[e.target.dataset.idx].name = e.target.value;
      calculateDhondt();
    });
  });

  container.querySelectorAll(".dh-votes-inp").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      currentDhondtParties[e.target.dataset.idx].votes = Math.max(0, parseInt(e.target.value, 10) || 0);
      calculateDhondt();
    });
  });
}

function calculateDhondt() {
  const totalSeats = Math.min(50, Math.max(1, parseInt(document.getElementById("dhondt-seats").value, 10) || 1));
  const blankVotes = Math.max(0, parseInt(document.getElementById("dhondt-blank").value, 10) || 0);

  const partyVotesSum = currentDhondtParties.reduce((acc, p) => acc + p.votes, 0);
  const totalValidVotes = partyVotesSum + blankVotes;
  const minThresholdVotes = totalValidVotes * 0.03;

  const allQuotients = [];
  currentDhondtParties.forEach((p, pIdx) => {
    p.passesThreshold = p.votes >= minThresholdVotes && p.votes > 0;
    p.seatsWon = 0;
    if (p.passesThreshold) {
      for (let div = 1; div <= totalSeats; div++) {
        allQuotients.push({
          partyIdx: pIdx,
          divisor: div,
          value: p.votes / div,
          partyVotes: p.votes
        });
      }
    }
  });

  allQuotients.sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    return b.partyVotes - a.partyVotes;
  });

  const winningCells = new Map();
  const winners = allQuotients.slice(0, totalSeats);
  winners.forEach((w, orderIdx) => {
    currentDhondtParties[w.partyIdx].seatsWon++;
    winningCells.set(`${w.partyIdx}-${w.divisor}`, orderIdx + 1);
  });

  const barsContainer = document.getElementById("dhondt-summary-bars");
  barsContainer.innerHTML = "";

  currentDhondtParties.forEach((p) => {
    const votePct = totalValidVotes > 0 ? ((p.votes / totalValidVotes) * 100).toFixed(1) : "0.0";
    const seatPct = totalSeats > 0 ? (p.seatsWon / totalSeats) * 100 : 0;
    const statusTag = !p.passesThreshold && p.votes > 0 ? `<span style="color:#dc2626; font-size:0.75rem">(Menys del 3%: fora)</span>` : "";

    const item = document.createElement("div");
    item.className = "dhondt-bar-item";
    item.innerHTML = `
      <div class="dhondt-bar-top">
        <span>${p.name} <small class="small-muted">(${p.votes.toLocaleString("ca-ES")} vots · ${votePct}%)</small> ${statusTag}</span>
        <span><strong>${p.seatsWon}</strong> escons</span>
      </div>
      <div class="dhondt-bar-track">
        <div class="dhondt-bar-fill" style="width:${seatPct}%; background:${p.color}"></div>
      </div>
    `;
    barsContainer.appendChild(item);
  });

  const colsToShow = Math.min(totalSeats, 10);
  let tableHtml = `<table class="dhondt-table"><thead><tr><th>Partit</th><th>Vots (% vàlids)</th>`;
  for (let d = 1; d <= colsToShow; d++) {
    tableHtml += `<th>÷ ${d}</th>`;
  }
  tableHtml += `</tr></thead><tbody>`;

  currentDhondtParties.forEach((p, pIdx) => {
    const pct = totalValidVotes > 0 ? ((p.votes / totalValidVotes) * 100).toFixed(1) : "0.0";
    tableHtml += `<tr class="${!p.passesThreshold ? "dhondt-excluded-row" : ""}">`;
    tableHtml += `<td style="text-align:left; font-weight:700"><span class="color-dot" style="display:inline-block; width:10px; height:10px; background:${p.color}; margin-right:6px"></span>${p.name}</td>`;
    tableHtml += `<td>${p.votes.toLocaleString("ca-ES")} (${pct}%)</td>`;

    for (let d = 1; d <= colsToShow; d++) {
      const qVal = Math.round(p.votes / d).toLocaleString("ca-ES");
      const winOrder = winningCells.get(`${pIdx}-${d}`);
      if (winOrder) {
        tableHtml += `<td class="dhondt-winner-cell">${qVal} <br><small>🏅 Escó #${winOrder}</small></td>`;
      } else {
        tableHtml += `<td>${qVal}</td>`;
      }
    }
    tableHtml += `</tr>`;
  });

  tableHtml += `</tbody></table>`;
  document.getElementById("dhondt-matrix-container").innerHTML = tableHtml;
}

document.getElementById("dhondt-preset")?.addEventListener("change", (e) => loadDhondtPreset(e.target.value));
document.getElementById("dhondt-seats")?.addEventListener("input", calculateDhondt);
document.getElementById("dhondt-blank")?.addEventListener("input", calculateDhondt);

// 8. Secció 5: Trivial i Detector de Debats Multinivell (🌱 Insegur, 🛡️ Segur, 🚀 Agosarat)
let currentActLevel = "insegur";
let filteredTrivial = [];
let trivIndex = 0;
let filteredDetector = [];
let detIndex = 0;

function setActualitatLevel(level) {
  currentActLevel = level;
  document.querySelectorAll("[data-actlevel]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.actlevel === level);
  });

  filteredTrivial =
    level === "all"
      ? [...TRIVIAL_QUESTIONS]
      : TRIVIAL_QUESTIONS.filter((q) => q.level === level);
  trivIndex = 0;

  filteredDetector =
    level === "all"
      ? [...DETECTOR_CASES]
      : DETECTOR_CASES.filter((c) => c.level === level);
  detIndex = 0;

  renderTrivialQuestion();
  renderDetectorCase();
}

function renderTrivialQuestion() {
  const q = filteredTrivial[trivIndex];
  if (!q) return;

  document.getElementById("triv-category").textContent = q.category;
  document.getElementById("triv-progress").textContent = `Pregunta ${trivIndex + 1} / ${filteredTrivial.length}`;
  document.getElementById("triv-question").textContent = q.question;

  const optsEl = document.getElementById("triv-options");
  const fbEl = document.getElementById("triv-feedback");
  const nextBtn = document.getElementById("triv-next-btn");

  optsEl.innerHTML = "";
  fbEl.className = "feedback-box hidden";
  nextBtn.classList.add("hidden");

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      optsEl.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));
      if (idx === q.correct) {
        btn.classList.add("correct");
        fbEl.className = "feedback-box ok";
        fbEl.innerHTML = `<strong>✅ Exacte! (+15 XP)</strong><br>${q.explanation}`;
        addScore(15);
      } else {
        btn.classList.add("wrong");
        optsEl.querySelectorAll(".option-btn")[q.correct].classList.add("correct");
        fbEl.className = "feedback-box err";
        fbEl.innerHTML = `<strong>❌ Resposta correcta: ${q.options[q.correct]}</strong><br>${q.explanation}`;
      }
      nextBtn.classList.remove("hidden");
    });
    optsEl.appendChild(btn);
  });
}

document.getElementById("triv-next-btn")?.addEventListener("click", () => {
  trivIndex = (trivIndex + 1) % filteredTrivial.length;
  renderTrivialQuestion();
});

function renderDetectorCase() {
  const c = filteredDetector[detIndex];
  if (!c) return;

  document.getElementById("det-speaker").textContent = c.speaker;
  document.getElementById("det-progress").textContent = `Cas ${detIndex + 1} / ${filteredDetector.length}`;
  document.getElementById("det-quote").textContent = c.quote;

  const fbEl = document.getElementById("det-feedback");
  const nextBtn = document.getElementById("det-next-btn");
  fbEl.className = "feedback-box hidden";
  nextBtn.classList.add("hidden");

  document.querySelectorAll("#det-options .btn-detector").forEach((btn) => {
    btn.disabled = false;
    btn.className = "btn-detector";
    btn.style.background = "";
    btn.style.borderColor = "";
    btn.onclick = () => {
      document.querySelectorAll("#det-options .btn-detector").forEach((b) => (b.disabled = true));
      if (btn.dataset.choice === c.correctCategory) {
        btn.style.background = "#dcfce7";
        btn.style.borderColor = "#16a34a";
        fbEl.className = "feedback-box ok";
        fbEl.innerHTML = `<strong>🎯 Molt ben vist! (+15 XP) · ${c.type}</strong><br>${c.explanation}`;
        addScore(15);
      } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#dc2626";
        fbEl.className = "feedback-box err";
        fbEl.innerHTML = `<strong>⚠️ Era: ${c.type}</strong><br>${c.explanation}`;
      }
      nextBtn.classList.remove("hidden");
    };
  });
}

document.getElementById("det-next-btn")?.addEventListener("click", () => {
  detIndex = (detIndex + 1) % filteredDetector.length;
  renderDetectorCase();
});

// 9. Secció 6: Diccionari Polític Multinivell (DUA)
let currentDictCat = "all";

function renderDictionary() {
  const query = (document.getElementById("dict-search")?.value || "").toLowerCase().trim();
  const grid = document.getElementById("dictionary-grid");
  if (!grid) return;

  const filtered = DICTIONARY_TERMS.filter((item) => {
    const matchesCat = currentDictCat === "all" || item.category === currentDictCat;
    const matchesText =
      item.term.toLowerCase().includes(query) ||
      item.simpleDef.toLowerCase().includes(query) ||
      item.definition.toLowerCase().includes(query) ||
      item.example2026.toLowerCase().includes(query);
    return matchesCat && matchesText;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="small-muted">No s'ha trobat cap terme amb aquesta cerca.</p>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (item) => `
      <article class="dict-card">
        <span class="pill-tag" style="margin-bottom:0.2rem">${item.category}</span>
        <h3>${item.term}</h3>
        <div class="dict-simple-box">${item.simpleDef}</div>
        <p style="font-size:0.9rem"><strong>🛡️/🚀 Ampliació:</strong> ${item.definition}</p>
        <div class="dict-example">
          <strong>💡 Exemple 2026:</strong> ${item.example2026}
        </div>
      </article>
    `
    )
    .join("");
}

document.getElementById("dict-search")?.addEventListener("input", renderDictionary);
document.querySelectorAll("#dict-filters .filter-pill").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentDictCat = btn.dataset.cat;
    document.querySelectorAll("#dict-filters .filter-pill").forEach((b) => b.classList.toggle("active", b === btn));
    renderDictionary();
  });
});

// Inicialització global
window.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 30000);
  renderPartiesSection();
  updatePosterPreview();
  initPactometre();
  setGlobalDuaLevel("insegur"); // Comença per defecte en el mode més accessible i guiat
});
