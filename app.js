import { SanctuaryThreeScene } from "./sanctuary-scene.js?v=accessibility-2";
import { iconSvg, feastProcedureIcons } from "./content/icons.js";
import { articles, articleEnhancements, phases } from "./content/articles.js";
import { offerings, specialCeremonies, serviceStudies, ministryViews } from "./content/ministry.js";
import { attireGroups, priestlyAttire } from "./content/attire.js";
import { feasts } from "./content/feasts.js";
import { chroniclePerspectiveInfo, chronicleStories, chronicleCompanionNotes, documentChronicleStories, documentChronicleCompanionNotes } from "./content/chronicles.js";
import { focusTimeline, focusStudyCards, focusHeroChain, focusLogicSteps, focusDanielLinkSteps, focusChartSegments, focusAssuranceCards } from "./content/focus-1844.js";
import { faqArticles, polishedFaqArticles } from "./content/faq.js";
import { siteCopy } from "./content/site-copy.js";
import { explorerAiEndpoint } from "./content/ai-config.js?v=render-api-1";
import { appendExplorerAiHistory, createExplorerAiPayload } from "./content/ai-request.js?v=gemini-history-1";


Object.entries(articleEnhancements).forEach(([id, enhancement]) => {
  if (articles[id]) {
    Object.assign(articles[id], enhancement);
  }
});


const attireById = Object.fromEntries(priestlyAttire.map(item => [item.id, item]));


const chronicleStoryMap = Object.fromEntries(chronicleStories.map(story => [story.id, story]));


function getChronicleCompanion(storyId, sceneIndex) {
  const storyNotes = chronicleCompanionNotes[storyId] || [];
  return storyNotes[sceneIndex] || {
    promise: "God meets the moment with mercy stronger than the burden it reveals.",
    meaning: "The sanctuary scene teaches how God brings sinners from guilt into assurance."
  };
}


chronicleStories.splice(0, chronicleStories.length, ...documentChronicleStories);
Object.keys(chronicleStoryMap).forEach(key => delete chronicleStoryMap[key]);
chronicleStories.forEach(story => {
  chronicleStoryMap[story.id] = story;
});
Object.keys(chronicleCompanionNotes).forEach(key => delete chronicleCompanionNotes[key]);
Object.assign(chronicleCompanionNotes, documentChronicleCompanionNotes);


const faqArticleMap = Object.fromEntries(polishedFaqArticles.map(article => [article.id, article]));

const CUBIT_MODEL = {
  court: { length: 100, width: 50, fenceHeight: 5, gateWidth: 20 },
  tabernacle: { length: 30, width: 10, height: 10, holyPlaceLength: 20, mostHolyLength: 10 },
  altar: { length: 5, width: 5, height: 3 },
  ark: { length: 2.5, width: 1.5, height: 1.5 },
  table: { length: 2, width: 1, height: 1.5 },
  incense: { length: 1, width: 1, height: 2 },
  laver: { diameter: 2.2, height: 1.2, approximate: true },
  lampstand: { width: 1.4, depth: 1.1, height: 2.8, approximate: true }
};

const courtBounds = {
  west: -CUBIT_MODEL.court.length / 2,
  east: CUBIT_MODEL.court.length / 2,
  north: -CUBIT_MODEL.court.width / 2,
  south: CUBIT_MODEL.court.width / 2
};

const tabernacleBounds = {
  west: courtBounds.west + 5,
  east: courtBounds.west + 5 + CUBIT_MODEL.tabernacle.length,
  north: -CUBIT_MODEL.tabernacle.width / 2,
  south: CUBIT_MODEL.tabernacle.width / 2
};
tabernacleBounds.veil = tabernacleBounds.west + CUBIT_MODEL.tabernacle.mostHolyLength;

const sceneObjects = [
  { id: "gate", label: "The Courtyard Gate", x: courtBounds.east, z: 0, w: 0.8, d: CUBIT_MODEL.court.gateWidth, h: CUBIT_MODEL.court.fenceHeight, color: "#d98f34", gate: true, exact: true },
  { id: "posts", label: "Courtyard Posts and Linen Fence", x: 0, z: courtBounds.south, w: CUBIT_MODEL.court.length, d: 0.5, h: CUBIT_MODEL.court.fenceHeight, color: "#e8e3d5", hidden: true, exact: true },
  { id: "altar", label: "Altar of Burnt Offering", x: 25, z: 0, w: CUBIT_MODEL.altar.length, d: CUBIT_MODEL.altar.width, h: CUBIT_MODEL.altar.height, color: "#9f5a25", fire: true, exact: true },
  { id: "laver", label: "The Laver", x: 5, z: 0, w: CUBIT_MODEL.laver.diameter, d: CUBIT_MODEL.laver.diameter, h: CUBIT_MODEL.laver.height, color: "#87b8cf", round: true, approximate: true },
  { id: "lampstand", label: "Golden Lampstand", x: -24, z: 2.8, w: CUBIT_MODEL.lampstand.width, d: CUBIT_MODEL.lampstand.depth, h: CUBIT_MODEL.lampstand.height, color: "#e2b83b", approximate: true },
  { id: "shewbread", label: "Table of Shewbread", x: -24, z: -2.8, w: CUBIT_MODEL.table.length, d: CUBIT_MODEL.table.width, h: CUBIT_MODEL.table.height, color: "#c38b37", exact: true },
  { id: "incense", label: "Altar of Incense", x: tabernacleBounds.veil + 1.1, z: 0, w: CUBIT_MODEL.incense.length, d: CUBIT_MODEL.incense.width, h: CUBIT_MODEL.incense.height, color: "#d4a543", exact: true },
  { id: "ark", label: "Ark of the Covenant", x: tabernacleBounds.west + CUBIT_MODEL.tabernacle.mostHolyLength / 2, z: 0, w: CUBIT_MODEL.ark.length, d: CUBIT_MODEL.ark.width, h: CUBIT_MODEL.ark.height, color: "#d6ad39", exact: true }
];

let currentView = "structure";
let scene;
const ministryLegacyViews = new Set(ministryViews.map(view => view.id));
let ministryState = {
  active: "sacrifices"
};
let attireState = {
  group: "high",
  garmentId: "breastplate"
};
let chronicleState = {
  perspective: null,
  storyId: null,
  sceneIndex: 0
};
let faqState = {
  articleId: "feasts-keep"
};
const aiExamples = [
  "What does the laver teach about cleansing?",
  "How does Daniel 8:14 connect to the Day of Atonement?",
  "What happened during the daily sanctuary service?",
  "How does the sanctuary point to Christ?"
];
let aiState = {
  messages: [],
  history: [],
  draft: "",
  asking: false,
  error: ""
};
let aiRequestController = null;

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function focusAfterRender(selector) {
  requestAnimationFrame(() => qs(selector)?.focus({ preventScroll: true }));
}

function html(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (values[i] ?? ""), "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatAiAnswer(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
    .split(/\n{2,}/)
    .filter(Boolean)
    .map(paragraph => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`)
    .join("");
}

function renderAiCitations(citations = []) {
  if (!citations.length) return "";
  return html`
    <details class="ai-citations">
      <summary>${citations.length} ${citations.length === 1 ? "source" : "sources"}</summary>
      <ol>
        ${citations
          .map(citation => {
            const pages = citation.pages?.length
              ? ` · ${citation.pages.length === 1 ? "page" : "pages"} ${citation.pages.join(", ")}`
              : "";
            return `<li><span>${escapeHtml(citation.name)}</span>${escapeHtml(pages)}</li>`;
          })
          .join("")}
      </ol>
    </details>
  `;
}

function renderExplorerAi() {
  const root = qs("#ai-root");
  if (!root) return;

  const transcript = aiState.messages.length
    ? aiState.messages
        .map(
          message => html`
            <article class="ai-message ai-message--${message.role}">
              <span class="ai-message-label">${message.role === "user" ? "You" : "Explorer AI"}</span>
              <div class="ai-message-content">${formatAiAnswer(message.content)}</div>
              ${message.role === "assistant" ? renderAiCitations(message.citations) : ""}
            </article>
          `
        )
        .join("")
    : html`
        <div class="ai-empty-state">
          <div class="ai-welcome">
            <span class="ai-welcome-mark" aria-hidden="true">✦</span>
            <h2>Where would you like to begin?</h2>
          </div>
          <div class="ai-example-bubbles" aria-label="Example questions">
            <span class="ai-example-bubbles-label">Try asking</span>
            ${aiExamples.map(example => `<button type="button" data-ai-example="${escapeHtml(example)}">${escapeHtml(example)}</button>`).join("")}
          </div>
        </div>
      `;

  root.innerHTML = html`
    <section id="ai-transcript" class="ai-transcript" aria-live="polite" aria-busy="${aiState.asking}">
      ${transcript}
      ${
        aiState.asking
          ? `<article class="ai-message ai-message--assistant ai-message--loading"><span class="ai-message-label">Explorer AI</span><p><span></span><span></span><span></span><span class="visually-hidden">Thinking</span></p></article>`
          : ""
      }
    </section>
    <div class="ai-composer-shell">
      ${
        aiState.messages.length
          ? `<button class="ai-clear-button" type="button" data-ai-clear>Start a new conversation</button>`
          : ""
      }
      <form id="ai-form" class="ai-form">
        <label class="visually-hidden" for="ai-question">Ask Explorer AI</label>
        <textarea id="ai-question" name="question" rows="2" maxlength="1200" placeholder="Ask a sanctuary question…">${escapeHtml(aiState.draft)}</textarea>
        <button class="ai-submit-button" type="submit" ${aiState.asking || !aiState.draft.trim() ? "disabled" : ""} aria-label="Send question">
          <span aria-hidden="true">↑</span>
        </button>
      </form>
      <p class="ai-note">AI can make mistakes. Verify important claims with Scripture and the cited sources.</p>
      ${aiState.error ? `<p class="ai-error" role="alert">${escapeHtml(aiState.error)}</p>` : ""}
    </div>
  `;

  requestAnimationFrame(() => {
    const transcriptElement = qs("#ai-transcript");
    if (transcriptElement) transcriptElement.scrollTop = transcriptElement.scrollHeight;
  });
}

async function askExplorerAi(question) {
  const content = String(question || "").trim();
  if (!content || aiState.asking) return;
  const requestHistory = aiState.history;
  const requestPayload = createExplorerAiPayload(content, requestHistory);
  if (!requestPayload) return;
  const controller = new AbortController();
  aiRequestController = controller;

  aiState = {
    ...aiState,
    messages: [...aiState.messages, { role: "user", content }],
    draft: "",
    asking: true,
    error: ""
  };
  renderExplorerAi();

  try {
    if (!explorerAiEndpoint) {
      throw new Error("Explorer AI needs its backend URL configured before it can answer.");
    }
    const response = await fetch(explorerAiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestPayload),
      signal: controller.signal
    });
    const data = await response.json().catch(() => ({}));
    if (controller !== aiRequestController) return;
    const responseError = typeof data.error === "string"
      ? data.error
      : typeof data.detail === "string"
        ? data.detail
        : "Explorer AI is temporarily unavailable.";
    if (!response.ok) throw new Error(responseError);
    const reply = data.reply || data.answer || data.response;
    if (typeof reply !== "string" || !reply.trim()) {
      throw new Error("Explorer AI returned an empty answer. Please try again.");
    }
    const normalizedReply = reply.trim();
    const history = appendExplorerAiHistory(requestHistory, content, normalizedReply);
    if (!history) throw new Error("Explorer AI could not preserve this conversation. Please try again.");

    aiState = {
      ...aiState,
      messages: [
        ...aiState.messages,
        {
          role: "assistant",
          content: normalizedReply,
          citations: Array.isArray(data.citations) ? data.citations : []
        }
      ],
      history,
      asking: false,
      error: ""
    };
  } catch (error) {
    if (controller !== aiRequestController) return;
    aiState = {
      ...aiState,
      asking: false,
      error: error instanceof Error ? error.message : "Explorer AI is temporarily unavailable."
    };
  } finally {
    if (controller === aiRequestController) aiRequestController = null;
  }
  renderExplorerAi();
}

function setEditableText(element, value) {
  const leadingIcon = element.firstElementChild?.getAttribute("aria-hidden") === "true" ? element.firstElementChild : null;
  if (!leadingIcon) {
    element.textContent = value;
    return;
  }
  [...element.childNodes].forEach(node => {
    if (node !== leadingIcon) node.remove();
  });
  element.append(document.createTextNode(` ${value}`));
}

function refreshDynamicFooterText() {
  document.querySelectorAll("[data-mbe-year]").forEach(node => {
    node.textContent = new Date().getFullYear();
  });
}

function applySiteCopy() {
  if (siteCopy.document?.title) document.title = siteCopy.document.title;
  const description = qs('meta[name="description"]');
  if (description && siteCopy.document?.description) {
    description.setAttribute("content", siteCopy.document.description);
  }

  siteCopy.attributes?.forEach(({ selector, name, value }) => {
    qsa(selector).forEach(element => element.setAttribute(name, value));
  });

  siteCopy.html?.forEach(({ selector, value }) => {
    qsa(selector).forEach(element => {
      element.innerHTML = value;
    });
  });

  siteCopy.text?.forEach(({ selector, value }) => {
    qsa(selector).forEach(element => setEditableText(element, value));
  });

  siteCopy.buttonLabels?.forEach(({ selector, value }) => {
    qsa(selector).forEach(element => setEditableText(element, value));
  });

  refreshDynamicFooterText();
}

function renderPhases() {
  qs("#phase-list").innerHTML = phases
    .map(
      phase => html`
        <section class="phase-section" id="${phase.id}">
          <p class="eyebrow">${phase.label}</p>
          <h2>${phase.title}</h2>
          <p class="phase-summary">${phase.summary}</p>
          <div class="article-card-grid article-card-grid--${phase.layout}">
            ${phase.articles
              .map(id => {
                const article = articles[id];
                return html`
                  <button class="article-card" type="button" data-open-article="${id}">
                    <span class="card-symbol" style="--symbol-bg: ${article.color}">${article.icon}</span>
                    <span>
                      <h3>${article.title}</h3>
                      <p>${article.subtitle}</p>
                    </span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function renderRitualStudyDetail(targetSelector, item) {
  qs(targetSelector).innerHTML = html`
    <header>
      <div>
        <span class="offering-badge">${item.badge}</span>
        <h2>${item.title}</h2>
        <p class="source-line">${item.text}</p>
        <p class="offering-summary">${item.summary}</p>
      </div>
      <span class="offering-icon" aria-hidden="true">${item.icon}</span>
    </header>
    <div class="offering-columns">
      ${item.columns.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
    </div>
    <div class="offering-ritual">
      <h3>Ritual Form: Distinctive Logic</h3>
      <div class="ritual-grid">
        ${item.ritualForm.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
      </div>
    </div>
  `;
}

function renderMinistry(activeId = "sacrifices") {
  const activeView = ministryViews.find(view => view.id === activeId) || ministryViews[0];
  ministryState.active = activeView.id;

  qs("#ministry-content").innerHTML = html`
    <div class="ministry-switcher" role="group" aria-label="Sanctuary ministry sections">
      ${ministryViews
        .map(view => {
          return html`
            <button
              type="button"
              class="ministry-switch-card ${view.id === activeView.id ? "active" : ""}"
              data-ministry-view="${view.id}"
              aria-pressed="${view.id === activeView.id ? "true" : "false"}"
            >
              <span class="ministry-icon ministry-icon--${view.id}" aria-hidden="true"></span>
              <strong>${view.title}</strong>
              <small>${view.subtitle}</small>
            </button>
          `;
        })
        .join("")}
    </div>

    <div class="ministry-panel" data-active-ministry="${activeView.id}">
      ${
        activeView.id === "sacrifices"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Leviticus 1-7</p>
                <h2>The Sacrificial System</h2>
                <p>Understanding the types, shadows, and modern application of the five major offerings.</p>
              </div>
              <div id="offering-tabs" class="offering-tabs" role="group" aria-label="Sacrificial offerings"></div>
              <article id="offering-detail" class="offering-detail"></article>
            `
          : ""
      }
      ${
        activeView.id === "specialCeremonies"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Special rites and restorations</p>
                <h2>Special Sacrifices and Ceremonies</h2>
                <p>Unusual sanctuary rites that reveal cleansing, consecration, restoration, covenant identity, and belonging to God.</p>
              </div>
              <div id="special-ceremony-tabs" class="offering-tabs special-ceremony-tabs" role="group" aria-label="Special sacrifices and ceremonies"></div>
              <article id="special-ceremony-detail" class="offering-detail special-ceremony-detail"></article>
            `
          : ""
      }
      ${
        activeView.id === "services"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Daily and yearly ministry</p>
                <h2>Services of the Sanctuary</h2>
                <p>The sanctuary rhythm teaches confession, mediation, transfer of sin, cleansing, judgment, and final restoration.</p>
              </div>
              <div id="services-content"></div>
            `
          : ""
      }
    </div>
  `;

  if (activeView.id === "sacrifices") renderOfferingTabs();
  if (activeView.id === "specialCeremonies") renderSpecialCeremonyTabs();
  if (activeView.id === "services") renderServices();
}

function renderOfferingTabs(activeId = offerings[0].id) {
  qs("#offering-tabs").innerHTML = offerings
    .map(
      offering => `<button type="button" class="${offering.id === activeId ? "active" : ""}" data-offering="${offering.id}" aria-pressed="${offering.id === activeId ? "true" : "false"}">${offering.tab}</button>`
    )
    .join("");
  renderOfferingDetail(activeId);
}

function renderOfferingDetail(id) {
  const offering = offerings.find(item => item.id === id) || offerings[0];
  renderRitualStudyDetail("#offering-detail", offering);
}

function renderSpecialCeremonyTabs(activeId = specialCeremonies[0].id) {
  qs("#special-ceremony-tabs").innerHTML = specialCeremonies
    .map(
      ceremony =>
        `<button type="button" class="${ceremony.id === activeId ? "active" : ""}" data-special-ceremony="${ceremony.id}" aria-pressed="${ceremony.id === activeId ? "true" : "false"}">${ceremony.tab}</button>`
    )
    .join("");
  renderSpecialCeremonyDetail(activeId);
}

function renderSpecialCeremonyDetail(id) {
  const ceremony = specialCeremonies.find(item => item.id === id) || specialCeremonies[0];
  renderRitualStudyDetail("#special-ceremony-detail", ceremony);
}

function renderServices(activeId = serviceStudies[0].id || "daily") {
  const activeService = serviceStudies.find(service => service.id === activeId) || serviceStudies[0];
  qs("#services-content").innerHTML = html`
    <div class="service-tabs" role="group" aria-label="Sanctuary services">
      ${serviceStudies.map(service => `<button type="button" class="${service.id === activeService.id ? "active" : ""}" data-service="${service.id}" aria-pressed="${service.id === activeService.id ? "true" : "false"}">${service.tab}</button>`).join("")}
    </div>
    <article class="service-study-card">
      <header>
        <span class="offering-badge">${activeService.label}</span>
        <h2>${activeService.title}</h2>
        <p>${activeService.summary}</p>
      </header>
      <div class="service-study-layout">
        <div class="service-flow">
          <h3>What Happened</h3>
          ${activeService.steps
            .map(([title, text], index) => `<section><span>${String(index + 1).padStart(2, "0")}</span><div><h4>${title}</h4><p>${text}</p></div></section>`)
            .join("")}
        </div>
        <aside class="service-typology">
          <h3>The Typology</h3>
          ${activeService.typology.map(([title, text]) => `<div><h4>${title}</h4><p>${text}</p></div>`).join("")}
          <p class="source-line">${activeService.texts}</p>
        </aside>
      </div>
    </article>
  `;
}

function renderAttireFigure(group, items, activeGarment) {
  return html`
    <div
      class="attire-figure attire-figure--${group.id} attire-figure--active-${activeGarment.zone}"
      style="--active-garment-accent: ${activeGarment.accent};"
      aria-label="${group.label} garment silhouette"
    >
      <div class="attire-selected-chip">
        <span>Selected garment</span>
        <strong>${activeGarment.name}</strong>
      </div>
      <div class="attire-person" aria-hidden="true">
        <span class="attire-person__halo"></span>
        <span class="attire-person__turban"></span>
        <span class="attire-person__plate"></span>
        <span class="attire-person__head"></span>
        <span class="attire-person__face"></span>
        <span class="attire-person__beard"></span>
        <span class="attire-person__neck"></span>
        <span class="attire-person__shoulders"></span>
        <span class="attire-person__arm attire-person__arm--left"></span>
        <span class="attire-person__arm attire-person__arm--right"></span>
        <span class="attire-person__hand attire-person__hand--left"></span>
        <span class="attire-person__hand attire-person__hand--right"></span>
        <span class="attire-person__inner-tunic"></span>
        <span class="attire-person__robe"></span>
        <span class="attire-person__ephod"></span>
        <span class="attire-person__ephod-strap attire-person__ephod-strap--left"></span>
        <span class="attire-person__ephod-strap attire-person__ephod-strap--right"></span>
        <span class="attire-person__shoulder-stone attire-person__shoulder-stone--left"></span>
        <span class="attire-person__shoulder-stone attire-person__shoulder-stone--right"></span>
        <span class="attire-person__breastplate"></span>
        <span class="attire-person__urim-thummim"></span>
        <span class="attire-person__breastplate-cords"></span>
        <span class="attire-person__sash"></span>
        <span class="attire-person__hem"></span>
        <span class="attire-person__legs"></span>
        <span class="attire-person__feet"></span>
      </div>
      <div class="attire-hotspot-layer">
        ${items
          .map(
            garment => html`
              <button
                type="button"
                class="attire-hotspot attire-hotspot--${garment.zone} ${garment.id === activeGarment.id ? "active" : ""}"
                data-attire-garment="${garment.id}"
                style="--garment-accent: ${garment.accent};"
                aria-label="Select ${garment.name}"
              >
                <span>${garment.name}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <p class="attire-figure-hint">Hover or click the garment itself, or use the study list.</p>
    </div>
  `;
}

function renderAttireDetail(garment, group) {
  const detailSections = [
    ["What It Was", garment.description],
    ["What It Meant", garment.meaning],
    ["How It Points to Christ", garment.typology],
    ["Application for Us", garment.application]
  ];

  return html`
    <aside class="attire-detail-panel" aria-live="polite">
      <header>
        <span class="offering-badge">${group.label}</span>
        <h2>${garment.name}</h2>
        <p>${garment.shortMeaning}</p>
      </header>
      <div class="attire-detail-grid">
        ${detailSections
          .map(
            ([title, text]) => html`
              <article>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <section class="attire-source-note">
        <h3>Scripture References</h3>
        <p class="source-line">${garment.scripture}</p>
      </section>
    </aside>
  `;
}

function renderPriestlyAttire(groupId = attireState.group, garmentId = attireState.garmentId) {
  const group = attireGroups.find(item => item.id === groupId) || attireGroups.find(item => item.id === "high") || attireGroups[0];
  const items = priestlyAttire.filter(item => item.group === group.id);
  const activeGarment = items.find(item => item.id === garmentId) || attireById[group.defaultGarment] || items[0];
  attireState = {
    group: group.id,
    garmentId: activeGarment.id
  };

  qs("#attire-content").innerHTML = html`
    <article class="attire-intro-card">
      <div>
        <span class="offering-badge">Why clothing matters</span>
        <h2>Garments were theology, not costume.</h2>
      </div>
      <p>
        Priestly clothing taught Israel how a holy God could be approached: through appointed
        mediation, cleansing, representation, judgment, beauty, service, and consecrated access.
        The garments helped worshipers see that priestly ministry was not casual performance; it was
        a visible sermon about the work Christ would fulfill.
      </p>
    </article>

    <div class="attire-toggle-row" role="group" aria-label="Priestly attire groups">
      ${attireGroups
        .map(
          item => html`
            <button
              type="button"
              class="${item.id === group.id ? "active" : ""}"
              data-attire-group="${item.id}"
              aria-pressed="${item.id === group.id ? "true" : "false"}"
            >
              <strong>${item.label}</strong>
              <span>${item.summary}</span>
            </button>
          `
        )
        .join("")}
    </div>

    <div class="attire-layout">
      <section class="attire-wardrobe-card">
        <div class="attire-wardrobe-heading">
          <span>${group.label}</span>
          <h2>Interactive wardrobe</h2>
          <p>Click a garment zone or choose from the list below.</p>
        </div>
        <div class="attire-wardrobe-body">
          ${renderAttireFigure(group, items, activeGarment)}
          <div class="attire-garment-list" role="list" aria-label="${group.label} garments">
            ${items
              .map(
                garment => html`
                  <button
                    type="button"
                    class="${garment.id === activeGarment.id ? "active" : ""}"
                    data-attire-garment="${garment.id}"
                    role="listitem"
                    style="--garment-accent: ${garment.accent};"
                  >
                    <span></span>
                    <strong>${garment.name}</strong>
                    <small>${garment.shortMeaning}</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      ${renderAttireDetail(activeGarment, group)}
    </div>
  `;
}

function renderFeastTabs(activeId = feasts[0].id) {
  qs("#feast-tabs").innerHTML = feasts
    .map(feast => `<button type="button" class="${feast.id === activeId ? "active" : ""}" data-feast="${feast.id}" aria-pressed="${feast.id === activeId ? "true" : "false"}">${feast.name}</button>`)
    .join("");
  renderFeastDetail(activeId);
}

function renderFeastProcedure(feast) {
  return html`
    <section class="feast-procedure-visual">
      <div class="feast-section-heading">
        <span>Ritual sequence</span>
        <h3>Procedure Flow</h3>
        <p>${feast.procedure}</p>
      </div>
      <div class="procedure-flow">
        ${feast.procedureSteps
          .map(
            (step, index) => html`
              <article class="procedure-step">
                <span class="procedure-step-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="procedure-step-icon" aria-hidden="true">${feastProcedureIcons[step.icon] || iconSvg.shield}</span>
                <h4>${step.title}</h4>
                <p>${step.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFeastDetail(id) {
  const feast = feasts.find(item => item.id === id) || feasts[0];
  const scholarQuotes = Array.isArray(feast.scholar?.quotes)
    ? feast.scholar.quotes
    : [{ quote: feast.scholar.quote, source: feast.scholar.source, insight: feast.scholar.note }];
  const feastRoot = qs("#feast-detail");
  feastRoot.style.setProperty("--feast-accent", feast.accent || "#d79b2f");

  feastRoot.innerHTML = html`
    <header class="feast-hero">
      <div>
        <span class="feast-season">${feast.season}</span>
        <h2>${feast.name}</h2>
        <p class="feast-movement">${feast.movement}</p>
        <div class="feast-meta">
          <span>${feast.date}</span>
          <span>${feast.texts}</span>
        </div>
      </div>
      <span class="feast-icon" aria-hidden="true">${iconSvg.calendar || iconSvg.clock}</span>
    </header>
    ${renderFaqContextLink(
      "feasts-keep",
      "Should Christians keep the feasts?",
      "Study the balanced Adventist answer: not binding as covenant law, still rich as Christ-centered sanctuary teaching."
    )}
    ${
      feast.id === "atonement"
        ? html`
            ${renderStudyContextLink(
              "1844 Focus",
              "Open the Daniel 8:14 study",
              "See how the Day of Atonement pattern becomes the antitypical cleansing of the heavenly sanctuary.",
              "focus1844"
            )}
            ${renderFaqContextLink(
              "investigative-judgment",
              "How does this connect to the investigative judgment?",
              "Trace the Day of Atonement pattern into Daniel 8:14, Hebrews, and Christ's present heavenly ministry."
            )}
          `
        : ""
    }
    ${renderFeastProcedure(feast)}
    <div class="feast-meaning-grid">
      <section class="feast-meaning-card">
        <span class="feast-card-kicker">Why it mattered</span>
        <h3>Special Significance</h3>
        <p>${feast.significance}</p>
      </section>
      <section class="feast-meaning-card feast-fulfillment">
        <span class="feast-card-kicker">Where it points</span>
        <h3>Typology and Fulfillment</h3>
        <p>${feast.fulfillment}</p>
      </section>
    </div>
    <section class="scholar-note feast-scholar">
      <span class="scholar-kicker">Curated scholarly insights</span>
      <div class="scholar-quote-list">
        ${scholarQuotes
          .map(
            item => html`
              <figure>
                <blockquote>"${item.quote}"</blockquote>
                <figcaption>${item.source}</figcaption>
                <p>${item.insight}</p>
              </figure>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFaqContextLink(id, title, text) {
  return html`
    <aside class="faq-context-link">
      <div>
        <span>Related FAQ</span>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
      <button type="button" data-faq-open="${id}">Read Study</button>
    </aside>
  `;
}

function renderStudyContextLink(kicker, title, text, view) {
  return html`
    <aside class="faq-context-link">
      <div>
        <span>${kicker}</span>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
      <button type="button" data-view="${view}">Open Study</button>
    </aside>
  `;
}

function renderFaq(activeId = faqState.articleId || "feasts-keep") {
  const root = qs("#faq-root");
  if (!root) return;
  const activeArticle = faqArticleMap[activeId] || polishedFaqArticles[0];
  faqState.articleId = activeArticle.id;

  root.innerHTML = html`
    <div class="faq-picker" aria-label="FAQ article selector">
      <div class="faq-picker-copy">
        <span>Choose a study</span>
        <strong>${activeArticle.title}</strong>
      </div>
      <label class="faq-picker-control">
        <span>Question</span>
        <select data-faq-select aria-label="Choose FAQ article">
          ${polishedFaqArticles
            .map(
              article => html`
                <option value="${article.id}" ${article.id === activeArticle.id ? "selected" : ""}>
                  ${article.category}: ${article.title}
                </option>
              `
            )
            .join("")}
        </select>
      </label>
    </div>
    <div class="faq-layout faq-layout--dropdown">
      ${renderFaqArticle(activeArticle)}
    </div>
  `;
}

function faqSectionId(articleId, index) {
  return `faq-${articleId}-section-${index + 1}`;
}

function renderFaqArticle(article) {
  const tocItems = article.sections.map((section, index) => ({
    id: faqSectionId(article.id, index),
    number: String(index + 1).padStart(2, "0"),
    heading: section.heading.replace(/^\d+\.\s*/, "")
  }));

  return html`
    <article class="faq-reader faq-article-shell">
      <header class="faq-reader-header">
        <span class="faq-category">${article.category}</span>
        <h2 tabindex="-1">${article.title}</h2>
        <p>${article.subtitle}</p>
        <div class="faq-key-texts" aria-label="Key Bible passages">
          ${article.keyTexts.map(text => `<span>${text}</span>`).join("")}
        </div>
      </header>

      <section class="faq-short-answer">
        <span>Short answer</span>
        <p>${article.summary}</p>
      </section>

      ${
        article.quickAnswer
          ? html`
              <section class="faq-at-glance" aria-label="At a glance">
                <h3>At a glance</h3>
                <div>
                ${article.quickAnswer
                  .map(
                    point => html`
                      <article>
                        <span>${point.label}</span>
                        <p>${point.text}</p>
                      </article>
                    `
                  )
                  .join("")}
                </div>
              </section>
            `
          : ""
      }

      <div class="faq-article-main">
        <nav class="faq-article-toc" aria-label="In this article">
          <span>In this article</span>
          ${tocItems
            .map(
              item => html`
                <button type="button" data-faq-jump="${item.id}">
                  <small>${item.number}</small>
                  ${item.heading}
                </button>
              `
            )
            .join("")}
        </nav>

        <div class="faq-article-body">
          ${article.sections
            .map(
              (section, index) => html`
                <section class="faq-article-section" id="${faqSectionId(article.id, index)}">
                  <div class="faq-section-marker">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${section.heading.replace(/^\d+\.\s*/, "")}</h3>
                  <p>${section.body}</p>
                </section>
              `
            )
            .join("")}
        </div>
      </div>

      ${renderFaqRelatedLinks(article)}
    </article>
  `;
}

function renderFaqRelatedLinks(article) {
  if (!article.relatedLinks?.length) return "";
  return html`
    <section class="faq-related-links" aria-label="Related study links">
      <span>Related studies</span>
      <div>
        ${article.relatedLinks
          .map(link => {
            const attrs = link.faq
              ? `data-faq-open="${link.faq}"`
              : link.feast
                ? `data-view="${link.view}" data-feast-link="${link.feast}"`
                : `data-view="${link.view}"`;
            return `<button type="button" ${attrs}>${link.label}</button>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderChronicles() {
  const root = qs("#chronicles-root");
  if (!root) return;

  if (chronicleState.storyId) {
    renderChronicleDeck(root);
    return;
  }

  if (chronicleState.perspective) {
    renderChronicleServiceChoice(root);
    return;
  }

  renderChroniclePerspectiveChoice(root);
}

function renderChroniclePerspectiveChoice(root) {
  root.innerHTML = html`
    <div class="chronicle-opening chronicle-opening--choices">
      <div class="chronicle-choice-grid chronicle-choice-grid--perspectives">
        ${Object.entries(chroniclePerspectiveInfo)
          .map(
            ([id, item]) => html`
              <button type="button" class="chronicle-choice-card chronicle-choice-card--${id}" data-chronicle-perspective="${id}">
                <span class="chronicle-choice-icon" aria-hidden="true">${id === "priest" ? iconSvg.flame : iconSvg.users}</span>
                <span class="chronicle-card-kicker">${item.label}</span>
                <strong>${item.title}</strong>
                <small>${item.text}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderChronicleServiceChoice(root) {
  const perspective = chroniclePerspectiveInfo[chronicleState.perspective];
  const stories = chronicleStories.filter(story => story.perspective === chronicleState.perspective);
  root.innerHTML = html`
    <div class="chronicle-service-select">
      <button type="button" class="chronicle-back-link" data-chronicle-back="perspectives">
        <span aria-hidden="true">${iconSvg.chevronLeft}</span>
        Back to perspectives
      </button>
      <div class="chronicle-opening-copy">
        <span class="offering-badge">${perspective.label}</span>
        <h2>Choose the service</h2>
        <p>${perspective.text}</p>
      </div>
      <div class="chronicle-choice-grid chronicle-choice-grid--services">
        ${stories
          .map(story => {
            const isDaily = story.serviceType === "daily";
            const serviceTitle = isDaily ? "The Daily Ministry" : "Yom Kippur";
            const serviceText = isDaily
              ? "The routine of grace and blood."
              : "The Day of Atonement.";
            return html`
              <button type="button" class="chronicle-choice-card chronicle-choice-card--service chronicle-choice-card--${isDaily ? "daily" : "atonement"}" data-chronicle-story="${story.id}">
                <span class="chronicle-choice-icon" aria-hidden="true">${isDaily ? iconSvg.sun : iconSvg.clock}</span>
                <span class="chronicle-card-kicker">${story.serviceLabel}</span>
                <strong>${serviceTitle}</strong>
                <small>${serviceText}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderChronicleDeck(root) {
  const story = chronicleStoryMap[chronicleState.storyId];
  if (!story) {
    chronicleState.storyId = null;
    renderChronicles();
    return;
  }

  const index = Math.max(0, Math.min(story.scenes.length - 1, chronicleState.sceneIndex));
  chronicleState.sceneIndex = index;
  const sceneData = story.scenes[index];
  const companion = getChronicleCompanion(story.id, index);
  const progress = Math.round(((index + 1) / story.scenes.length) * 100);
  const previousDisabled = index === 0 ? "disabled" : "";
  const nextDisabled = index === story.scenes.length - 1 ? "disabled" : "";

  root.innerHTML = html`
    <article class="chronicle-deck" style="--chronicle-progress: ${progress}%">
      <header class="chronicle-deck-header">
        <div>
          <span class="offering-badge">${story.serviceLabel}</span>
          <h2>${story.title}</h2>
          <p>${story.subtitle}</p>
        </div>
        <button type="button" class="ghost-button" data-chronicle-back="services">Choose another path</button>
      </header>

      <div class="chronicle-progress-rail" aria-label="Story progress">
        <div class="chronicle-progress-track" aria-hidden="true"></div>
        <div class="chronicle-progress-markers">
          ${story.scenes
            .map(
              (item, markerIndex) => html`
                <button
                  type="button"
                  class="${markerIndex === index ? "active" : ""}"
                  data-chronicle-scene="${markerIndex}"
                  aria-label="Open scene ${markerIndex + 1}: ${item.title}"
                >
                  ${markerIndex + 1}
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="chronicle-scene-layout">
        <button type="button" class="chronicle-side-arrow chronicle-side-arrow--prev" data-chronicle-prev aria-label="Previous scene" ${previousDisabled}>
          ${iconSvg.chevronLeft}
        </button>
        <section class="chronicle-story-panel chronicle-story-panel--text-only">
          <p class="chronicle-time">${sceneData.timeLabel} <span>Scene ${index + 1} of ${story.scenes.length}</span></p>
          <h3 tabindex="-1">${sceneData.title}</h3>
          <p class="chronicle-narrative">${sceneData.narrative}</p>
          <div class="chronicle-companion-notes">
            <aside class="chronicle-companion chronicle-companion--promise">
              <strong>Promise in this moment</strong>
              <p>${companion.promise}</p>
            </aside>
            <aside class="chronicle-companion chronicle-companion--meaning">
              <strong>Sanctuary meaning</strong>
              <p>${companion.meaning}</p>
            </aside>
          </div>
          <p class="chronicle-scripture">${sceneData.scripture}</p>
        </section>
        <button type="button" class="chronicle-side-arrow chronicle-side-arrow--next" data-chronicle-next aria-label="Next scene" ${nextDisabled}>
          ${iconSvg.chevronRight}
        </button>
      </div>
    </article>
  `;
}

function setChronicleScene(index) {
  const story = chronicleStoryMap[chronicleState.storyId];
  if (!story) return;
  chronicleState.sceneIndex = Math.max(0, Math.min(story.scenes.length - 1, index));
  renderChronicles();
  focusAfterRender(`[data-chronicle-scene="${chronicleState.sceneIndex}"]`);
}

function renderFocusHeroChain() {
  return html`
    <div class="focus-hero-chain" aria-label="Sanctuary cleansing logic chain">
      ${focusHeroChain
        .map(
          (item, index) => html`
            <div class="focus-chain-step">
              <span>${index + 1}</span>
              <strong>${item.title}</strong>
              <small>${item.text}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFocusLogicFlow() {
  return html`
    <section class="focus-logic-section" aria-labelledby="focus-logic-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Sanctuary logic flow</span>
        <h3 id="focus-logic-title">Why a sanctuary needs cleansing</h3>
        <p>
          The daily service solved the sinner's guilt, but it also taught that sin leaves a record
          that God must finally remove. Daniel 8:14 uses that Day-of-Atonement logic and lifts it
          to Christ's heavenly ministry.
        </p>
      </div>
      <div class="focus-logic-grid">
        ${focusLogicSteps
          .map(
            step => html`
              <article class="focus-logic-card">
                <div class="focus-logic-icon" aria-hidden="true">${iconSvg[step.icon] || iconSvg.shield}</div>
                <span>${step.kicker}</span>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFocusDanielLink() {
  return html`
    <section class="focus-daniel-link-section" aria-labelledby="focus-daniel-link-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Daniel 8 and Daniel 9</span>
        <h3 id="focus-daniel-link-title">Why both prophecies begin in 457 BC</h3>
        <p>
          Daniel 8 gives the problem and the long time period. Daniel 9 gives the missing starting
          point. Read together, they form one explanation: the 70 weeks are the first portion cut
          off from the 2,300 years.
        </p>
      </div>

      <div class="focus-daniel-bridge" aria-label="Daniel 8 to Daniel 9 explanation bridge">
        <article>
          <span>Daniel 8</span>
          <h4>Vision given, time unresolved</h4>
          <p>
            Daniel hears about 2,300 days and the cleansing of the sanctuary, but he ends the chapter
            saying he still does not understand the vision.
          </p>
        </article>
        <div class="focus-bridge-connector" aria-hidden="true">
          <span>Gabriel returns</span>
          <strong>same vision explained</strong>
        </div>
        <article>
          <span>Daniel 9</span>
          <h4>Starting point supplied</h4>
          <p>
            Gabriel tells Daniel to consider the vision, then gives the 70 weeks and names the decree
            to restore Jerusalem as the beginning marker.
          </p>
        </article>
      </div>

      <div class="focus-link-grid">
        ${focusDanielLinkSteps
          .map(
            (step, index) => html`
              <article class="focus-link-step">
                <span>${index + 1}</span>
                <small>${step.reference}</small>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <article class="focus-shared-start-card">
        <span>Same starting date</span>
        <h4>The 70 weeks are the first explained portion of the 2,300 years</h4>
        <p>
          Daniel 9:24 says the 70 weeks are determined for Daniel's people. In this Adventist reading,
          "determined" carries the idea of being cut off or allotted from the larger time vision.
          Since Daniel 9:25 gives the start as the decree to restore and rebuild Jerusalem, that same
          457 BC decree starts both clocks: 490 years to AD 34, and 2,300 years to 1844.
        </p>
      </article>
    </section>
  `;
}

function renderFocusProphecyChart(activeMilestone) {
  return html`
    <section class="focus-timeline-section" aria-labelledby="focus-timeline-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Prophecy date chart</span>
        <h3 id="focus-timeline-title">From 457 BC to Christ's final ministry</h3>
        <p>
          Daniel 8 gives the 2,300 years. Daniel 9 gives the shared starting point. Jesus confirms
          the 70-week portion, giving confidence that the full timeline reaches 1844.
        </p>
      </div>

      <div class="focus-prophecy-chart focus-prophecy-chart--visual" aria-label="Prophecy date chart">
        ${focusChartSegments
          .map(
            segment => html`
              <div class="focus-chart-row">
                <span class="focus-chart-label">${segment.label}</span>
                <div
                  class="focus-chart-bar"
                  style="--bar-left: ${segment.left}; --bar-width: ${segment.width}; --bar-fill: ${segment.fill};"
                >
                  <span>${segment.range}</span>
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="focus-timeline" role="group" aria-label="Daniel 8:14 prophecy timeline">
        ${focusTimeline
          .map(
            item => html`
              <button
                type="button"
                class="${item.id === activeMilestone.id ? "active" : ""}"
                data-focus-milestone="${item.id}"
                aria-pressed="${item.id === activeMilestone.id ? "true" : "false"}"
              >
                <i aria-hidden="true"></i>
                <strong>${item.date}</strong>
                <span>${item.label}</span>
              </button>
            `
          )
          .join("")}
      </div>

      <article class="focus-milestone-detail">
        <span>${activeMilestone.date}</span>
        <h4>${activeMilestone.title}</h4>
        <p>${activeMilestone.explanation}</p>
        <p><strong>Why it matters:</strong> ${activeMilestone.meaning}</p>
        <small>${activeMilestone.scripture}</small>
      </article>
    </section>
  `;
}

function renderFocusAssuranceDashboard() {
  return html`
    <section class="focus-assurance-section" aria-labelledby="focus-assurance-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Assurance dashboard</span>
        <h3 id="focus-assurance-title">The judgment is serious, but it is good news in Christ</h3>
        <p>
          The sanctuary message does not ask beginners to stare at themselves until they are afraid.
          It invites them to look at Jesus, the Lamb who died and the Priest who lives for them.
        </p>
      </div>
      <div class="focus-assurance-grid">
        ${focusAssuranceCards
          .map(
            card => html`
              <article class="focus-aid-card">
                <div class="focus-assurance-icon" aria-hidden="true">${iconSvg[card.icon] || iconSvg.shield}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFocus1844(activeId = "1844") {
  const root = qs("#focus-content");
  if (!root) return;

  const activeMilestone = focusTimeline.find(item => item.id === activeId) || focusTimeline.find(item => item.id === "1844") || focusTimeline[0];
  root.innerHTML = html`
    <div class="focus-study-hero focus-study-hero--visual">
      <div class="focus-hero-copy">
        <span class="offering-badge">Beginner study</span>
        <h2>Daniel 8:14 in plain language</h2>
        <p>
          "Then shall the sanctuary be cleansed" means that Jesus is not finished with the sin
          problem at forgiveness alone. The cross provides the sacrifice; His heavenly ministry
          applies that victory, cleanses the record, and prepares His people for restoration.
        </p>
      </div>
      <aside class="focus-verse-card" aria-label="Daniel 8:14 KJV phrase">
        <span>Daniel 8:14</span>
        <strong>"then shall the sanctuary be cleansed."</strong>
        <small>KJV phrase</small>
      </aside>
      ${renderFocusHeroChain()}
    </div>

    ${renderFocusLogicFlow()}
    ${renderFocusDanielLink()}
    ${renderFocusProphecyChart(activeMilestone)}
    ${renderFocusAssuranceDashboard()}
    ${renderFaqContextLink(
      "investigative-judgment",
      "Is the investigative judgment biblical?",
      "See the full Bible study connecting Daniel 7, Daniel 8:14, Daniel 9, Leviticus 16, Hebrews, and Revelation 14."
    )}
  `;
}

function articleKeyTexts(article) {
  if (article.keyTexts) return article.keyTexts;
  return article.citations.trim();
}

function articleGlanceItems(article) {
  return article.atAGlance || [
    { label: "Phase", value: article.phase },
    { label: "Focus", value: article.subtitle },
    { label: "Study", value: "Structure, ritual use, fulfillment, and response." }
  ];
}

function articleSectionIcon(name) {
  const icons = {
    structure: html`
      <svg viewBox="0 0 24 24" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    `,
    layers: html`
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="m12.83 2.18 8.58 3.9a1 1 0 0 1 0 1.83l-8.58 3.91a2 2 0 0 1-1.66 0L2.6 7.91a1 1 0 0 1 0-1.83l8.58-3.9a2 2 0 0 1 1.66 0Z"></path>
        <path d="m22 12.5-9.17 4.17a2 2 0 0 1-1.66 0L2 12.5"></path>
        <path d="m22 17.5-9.17 4.17a2 2 0 0 1-1.66 0L2 17.5"></path>
      </svg>
    `,
    route: html`
      <svg viewBox="0 0 24 24" focusable="false">
        <circle cx="6" cy="19" r="3"></circle>
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
        <circle cx="18" cy="5" r="3"></circle>
      </svg>
    `,
    cross: html`
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2Z"></path>
      </svg>
    `,
    check: html`
      <svg viewBox="0 0 24 24" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="m8 12 2.5 2.5L16 9"></path>
      </svg>
    `
  };

  return icons[name] || icons.structure;
}

function articleSection(title, icon, content, extraClass = "") {
  return html`
    <section class="article-section ${extraClass}">
      <h2><span class="section-glyph" aria-hidden="true">${articleSectionIcon(icon)}</span>${title}</h2>
      ${content}
    </section>
  `;
}

function articleStepList(items, className = "") {
  return html`
    <ol class="article-step-list ${className}">
      ${items.map((item, index) => `<li><span>${index + 1}</span><p>${item}</p></li>`).join("")}
    </ol>
  `;
}

function articleTemplate(article) {
  const meaningSection = article.meaning
    ? articleSection(
        "Color and Material Meaning",
        "layers",
        html`
        <div class="meaning-grid">
          ${article.meaning
            .map(
              item => html`
                <article class="meaning-card">
                  <strong>${item.term}</strong>
                  <p>${item.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `,
        "article-section-wide"
      )
    : "";
  const summary = article.summary || `${article.title} belongs to the ${article.phase} and teaches ${article.subtitle.toLowerCase()} within the sanctuary path.`;
  const glance = articleGlanceItems(article);

  return html`
    <article class="article-reader" style="--article-gradient: ${article.color};">
      <header class="article-compact-header">
        <div class="article-title-lockup">
          <span class="article-header-icon" aria-hidden="true">${article.icon}</span>
          <div>
            <p class="article-eyebrow">${article.phase}</p>
            <h1 id="dialog-title">${article.title}</h1>
            <p class="article-subtitle">${article.subtitle}</p>
          </div>
        </div>
        <p class="article-key-texts"><strong>Key texts:</strong> ${articleKeyTexts(article)}</p>
      </header>

      <div class="article-body">
        <section class="article-summary-row">
          <article class="article-summary-card">
            <span>Why This Article Matters</span>
            <p>${summary}</p>
          </article>
          <div class="article-glance-list" aria-label="At a glance">
            ${glance
              .map(item => `<span><strong>${item.label}</strong>${item.value}</span>`)
              .join("")}
          </div>
        </section>

        <div class="article-study-grid">
      ${articleSection(
        `Structure of ${article.title}`,
        "structure",
        articleStepList(article.structure, "article-detail-list")
      )}
      ${meaningSection}
      ${articleSection(
        "Ritual Process",
        "route",
        articleStepList(article.process, "process-list")
      )}
      ${articleSection(
        "Typological Fulfillment in Christ",
        "cross",
        html`
        <div class="quote-stack">${article.fulfillment.map(item => `<blockquote class="quote-card">${item}</blockquote>`).join("")}</div>
      `,
        "article-section-wide"
      )}
      ${articleSection(
        "Practical Application",
        "check",
        html`
        <div class="application-grid">
          ${article.applications
            .map((item, index) => `<article class="application-card"><strong>${String(index + 1).padStart(2, "0")}</strong><p>${item}</p></article>`)
            .join("")}
        </div>
      `,
        "article-section-wide"
      )}
        </div>
      </div>
    </article>
  `;
}

function openArticle(id) {
  const article = articles[id];
  if (!article) return;
  qs("#article-content").innerHTML = articleTemplate(article);
  const dialog = qs("#article-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeArticle() {
  const dialog = qs("#article-dialog");
  if (dialog.open && typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function openFaqArticle(id) {
  if (!faqArticleMap[id]) return;
  faqState.articleId = id;
  setView("faq");
  renderFaq(id);
}

function normalizeViewRequest(view) {
  if (ministryLegacyViews.has(view)) {
    return { view: "ministry", ministryView: view };
  }
  if (view === "ministry") {
    return { view: "ministry", ministryView: "sacrifices" };
  }
  return { view, ministryView: null };
}

function setView(requestedView) {
  const { view, ministryView } = normalizeViewRequest(requestedView);
  if (!qs(`#${view}`)) return;

  if (view === "ministry") {
    renderMinistry(ministryView);
  }
  if (view === "faq") {
    renderFaq(faqState.articleId);
  }

  currentView = view;
  qsa(".view-panel").forEach(panel => {
    const active = panel.id === view;
    panel.classList.toggle("active", active);
  });
  qsa(".nav-tab").forEach(tab => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const aiLauncher = qs("[data-ai-launcher]");
  if (aiLauncher) aiLauncher.hidden = view === "ai";
  requestAnimationFrame(() => {
    const activeTab = qs(`.nav-tab[data-view="${view}"]`);
    const nav = activeTab?.closest(".tab-nav");
    if (activeTab && nav) {
      nav.scrollLeft = Math.max(0, activeTab.offsetLeft - (nav.clientWidth - activeTab.offsetWidth) / 2);
    }
  });
  history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "auto" });
  if (view === "map") {
    requestAnimationFrame(() => scene?.resize());
  }
}

function syncViewFromHash() {
  const hashView = location.hash.replace("#", "");
  if (ministryLegacyViews.has(hashView)) {
    setView(hashView);
    return;
  }
  if (hashView && qs(`#${hashView}`) && hashView !== currentView) {
    setView(hashView);
  }
}

function bindUi() {
  document.addEventListener("input", event => {
    const questionField = event.target.closest("#ai-question");
    if (!questionField) return;

    aiState.draft = questionField.value;
    const sendButton = questionField.form?.querySelector(".ai-submit-button");
    if (sendButton) sendButton.disabled = aiState.asking || !aiState.draft.trim();
  });

  document.addEventListener("keydown", event => {
    const questionField = event.target.closest("#ai-question");
    if (!questionField || event.key !== "Enter" || event.shiftKey || event.isComposing) return;

    event.preventDefault();
    questionField.form?.requestSubmit();
  });

  document.addEventListener("submit", event => {
    const aiForm = event.target.closest("#ai-form");
    if (!aiForm) return;
    event.preventDefault();
    const question = aiState.draft.trim();
    if (question) askExplorerAi(question);
  });

  document.addEventListener("change", event => {
    const faqSelect = event.target.closest("[data-faq-select]");
    if (faqSelect) {
      openFaqArticle(faqSelect.value);
      focusAfterRender("[data-faq-select]");
    }
  });

  document.addEventListener("click", event => {
    const aiLauncher = event.target.closest("[data-ai-launcher]");
    if (aiLauncher) {
      setView("ai");
      focusAfterRender("#ai-question");
      return;
    }

    const aiExample = event.target.closest("[data-ai-example]");
    if (aiExample) {
      askExplorerAi(aiExample.dataset.aiExample);
      return;
    }

    const aiClear = event.target.closest("[data-ai-clear]");
    if (aiClear) {
      aiRequestController?.abort();
      aiRequestController = null;
      aiState = { messages: [], history: [], draft: "", asking: false, error: "" };
      renderExplorerAi();
      focusAfterRender("#ai-question");
      return;
    }

    const faqTrigger = event.target.closest("[data-faq-open]");
    if (faqTrigger) {
      openFaqArticle(faqTrigger.dataset.faqOpen);
      focusAfterRender(".faq-reader-header h2");
      return;
    }

    const faqJump = event.target.closest("[data-faq-jump]");
    if (faqJump) {
      const target = document.getElementById(faqJump.dataset.faqJump);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const articleTrigger = event.target.closest("[data-open-article]");
    if (articleTrigger) {
      openArticle(articleTrigger.dataset.openArticle);
      return;
    }

    const chroniclePerspective = event.target.closest("[data-chronicle-perspective]");
    if (chroniclePerspective) {
      chronicleState = {
        perspective: chroniclePerspective.dataset.chroniclePerspective,
        storyId: null,
        sceneIndex: 0
      };
      renderChronicles();
      focusAfterRender("[data-chronicle-story]");
      return;
    }

    const chronicleStory = event.target.closest("[data-chronicle-story]");
    if (chronicleStory) {
      const story = chronicleStoryMap[chronicleStory.dataset.chronicleStory];
      if (story) {
        chronicleState = {
          perspective: story.perspective,
          storyId: story.id,
          sceneIndex: 0
        };
        renderChronicles();
        focusAfterRender(".chronicle-story-panel h3");
      }
      return;
    }

    const chronicleBack = event.target.closest("[data-chronicle-back]");
    if (chronicleBack) {
      if (chronicleBack.dataset.chronicleBack === "perspectives") {
        chronicleState = { perspective: null, storyId: null, sceneIndex: 0 };
      } else {
        chronicleState = { ...chronicleState, storyId: null, sceneIndex: 0 };
      }
      renderChronicles();
      focusAfterRender(chronicleBack.dataset.chronicleBack === "perspectives" ? "[data-chronicle-perspective]" : "[data-chronicle-story]");
      return;
    }

    const chronicleMarker = event.target.closest("[data-chronicle-scene]");
    if (chronicleMarker) {
      setChronicleScene(Number(chronicleMarker.dataset.chronicleScene));
      return;
    }

    const chroniclePrevious = event.target.closest("[data-chronicle-prev]");
    if (chroniclePrevious) {
      setChronicleScene(chronicleState.sceneIndex - 1);
      return;
    }

    const chronicleNext = event.target.closest("[data-chronicle-next]");
    if (chronicleNext) {
      setChronicleScene(chronicleState.sceneIndex + 1);
      return;
    }

    const focusMilestone = event.target.closest("[data-focus-milestone]");
    if (focusMilestone) {
      const milestoneId = focusMilestone.dataset.focusMilestone;
      renderFocus1844(milestoneId);
      focusAfterRender(`[data-focus-milestone="${milestoneId}"]`);
      return;
    }

    const feastLink = event.target.closest("[data-feast-link]");
    if (feastLink) {
      const viewId = feastLink.dataset.view || "calendar";
      const feastId = feastLink.dataset.feastLink;
      setView(viewId);
      renderFeastTabs(feastId);
      focusAfterRender(`[data-feast="${feastId}"]`);
      return;
    }

    const navTrigger = event.target.closest("[data-view]");
    if (navTrigger) {
      const viewId = navTrigger.dataset.view;
      setView(viewId);
      focusAfterRender(`.nav-tab[data-view="${normalizeViewRequest(viewId).view}"]`);
      return;
    }

    const ministryTrigger = event.target.closest("[data-ministry-view]");
    if (ministryTrigger) {
      const ministryId = ministryTrigger.dataset.ministryView;
      renderMinistry(ministryId);
      currentView = "ministry";
      qsa(".view-panel").forEach(panel => {
        const active = panel.id === "ministry";
        panel.classList.toggle("active", active);
      });
      qsa(".nav-tab").forEach(tab => {
        const active = tab.dataset.view === "ministry";
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", active ? "true" : "false");
      });
      history.replaceState(null, "", "#ministry");
      focusAfterRender(`[data-ministry-view="${ministryId}"]`);
      return;
    }

    const scrollTrigger = event.target.closest("[data-scroll-to]");
    if (scrollTrigger) {
      qs(`#${scrollTrigger.dataset.scrollTo}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const offeringTrigger = event.target.closest("[data-offering]");
    if (offeringTrigger) {
      qsa("#offering-tabs button").forEach(button => {
        const active = button === offeringTrigger;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      renderOfferingDetail(offeringTrigger.dataset.offering);
      return;
    }

    const specialCeremonyTrigger = event.target.closest("[data-special-ceremony]");
    if (specialCeremonyTrigger) {
      qsa("#special-ceremony-tabs button").forEach(button => {
        const active = button === specialCeremonyTrigger;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      renderSpecialCeremonyDetail(specialCeremonyTrigger.dataset.specialCeremony);
      return;
    }

    const serviceTrigger = event.target.closest("[data-service]");
    if (serviceTrigger) {
      const serviceId = serviceTrigger.dataset.service;
      renderServices(serviceId);
      focusAfterRender(`[data-service="${serviceId}"]`);
      return;
    }

    const attireGroupTrigger = event.target.closest("[data-attire-group]");
    if (attireGroupTrigger) {
      const groupId = attireGroupTrigger.dataset.attireGroup;
      const group = attireGroups.find(item => item.id === groupId);
      renderPriestlyAttire(group?.id, group?.defaultGarment);
      focusAfterRender(`[data-attire-group="${groupId}"]`);
      return;
    }

    const attireGarmentTrigger = event.target.closest("[data-attire-garment]");
    if (attireGarmentTrigger) {
      const garmentId = attireGarmentTrigger.dataset.attireGarment;
      renderPriestlyAttire(attireState.group, garmentId);
      focusAfterRender(`[data-attire-garment="${garmentId}"]`);
      return;
    }

    const feastTrigger = event.target.closest("[data-feast]");
    if (feastTrigger) {
      qsa("#feast-tabs button").forEach(button => {
        const active = button === feastTrigger;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      renderFeastDetail(feastTrigger.dataset.feast);
    }
  });

  qs(".dialog-close").addEventListener("click", closeArticle);
  qs("#article-dialog").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeArticle();
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") closeArticle();
    if (currentView === "chronicles" && chronicleState.storyId && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      const target = event.target;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      event.preventDefault();
      setChronicleScene(chronicleState.sceneIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  window.addEventListener("hashchange", syncViewFromHash);

  syncViewFromHash();
}

function mixColor(hex, amount) {
  const value = hex.replace("#", "");
  const num = parseInt(value, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (num & 255) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

class SanctuaryScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.tooltip = qs("#scene-tooltip");
    this.setSideView();
    this.pointerMode = null;
    this.pointers = new Map();
    this.hovered = null;
    this.hitRegions = [];
    this.needsDraw = true;
    this.bind();
    this.resize();
    this.animate();
  }

  setSideView() {
    this.yaw = -0.48;
    this.pitch = 0.72;
    this.zoom = 9.1;
    this.panX = 14;
    this.panY = 88;
  }

  minPitch() {
    return 0.14;
  }

  maxPitch() {
    return Math.PI / 2;
  }

  minZoom() {
    return 4.6;
  }

  maxZoom() {
    return 72;
  }

  clampPitch(value) {
    return Math.max(this.minPitch(), Math.min(this.maxPitch(), value));
  }

  clampZoom(value) {
    return Math.max(this.minZoom(), Math.min(this.maxZoom(), value));
  }

  bind() {
    window.addEventListener("resize", () => this.resize());
    this.canvas.addEventListener("contextmenu", event => event.preventDefault());
    this.canvas.addEventListener("pointerdown", event => this.pointerDown(event));
    this.canvas.addEventListener("pointermove", event => this.pointerMove(event));
    this.canvas.addEventListener("pointerup", event => this.pointerUp(event));
    this.canvas.addEventListener("pointercancel", event => this.pointerUp(event));
    this.canvas.addEventListener("wheel", event => this.wheel(event), { passive: false });
    this.canvas.addEventListener("click", event => this.click(event));
    window.addEventListener("keydown", event => this.key(event));
    qs("#reset-scene").addEventListener("click", () => this.reset());
    qs("#fullscreen-scene").addEventListener("click", () => qs(".scene-frame").requestFullscreen?.());
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    this.canvas.width = Math.max(1, Math.round(rect.width * ratio));
    this.canvas.height = Math.max(1, Math.round(rect.height * ratio));
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.needsDraw = true;
  }

  reset() {
    this.setSideView();
    this.needsDraw = true;
  }

  pointerDown(event) {
    this.canvas.setPointerCapture(event.pointerId);
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    this.pointerMode = event.button === 2 || event.shiftKey ? "pan" : "rotate";
  }

  pointerMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const local = { x: event.clientX - rect.left, y: event.clientY - rect.top };

    if (this.pointers.has(event.pointerId)) {
      const previous = this.pointers.get(event.pointerId);
      this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (this.pointers.size === 2) {
        const points = [...this.pointers.values()];
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        if (this.lastPinchDistance) {
          const delta = distance - this.lastPinchDistance;
          this.zoom = this.clampZoom(this.zoom + delta * 0.055);
          if (delta > 0 && this.zoom > 18) this.pitch = this.clampPitch(this.pitch - delta * 0.0009);
        }
        this.lastPinchDistance = distance;
      } else if (this.pointerMode === "pan") {
        this.panX += event.clientX - previous.x;
        this.panY += event.clientY - previous.y;
      } else {
        this.yaw += (event.clientX - previous.x) * 0.008;
        this.pitch = this.clampPitch(this.pitch + (event.clientY - previous.y) * 0.004);
      }
      this.needsDraw = true;
    }

    this.updateHover(local.x, local.y);
  }

  pointerUp(event) {
    this.pointers.delete(event.pointerId);
    this.lastPinchDistance = null;
    if (this.pointers.size === 0) this.pointerMode = null;
  }

  wheel(event) {
    event.preventDefault();
    const previousZoom = this.zoom;
    this.zoom = this.clampZoom(this.zoom - event.deltaY * 0.022);
    if (this.zoom > 18 && this.zoom > previousZoom) {
      const zoomGain = this.zoom - previousZoom;
      this.pitch = this.clampPitch(this.pitch - zoomGain * 0.012);
      this.panY += zoomGain * 1.6;
    }
    this.needsDraw = true;
  }

  key(event) {
    if (currentView !== "map") return;
    const step = 18;
    const moves = {
      ArrowUp: [0, step],
      ArrowDown: [0, -step],
      ArrowLeft: [step, 0],
      ArrowRight: [-step, 0]
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    this.panX += move[0] || 0;
    this.panY += move[1] || 0;
    this.needsDraw = true;
  }

  click(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const region = this.hitRegionAt(x, y);
    if (region) {
      openArticle(region.id);
      return;
    }

    const priest = this.priestPickRegion;
    if (priest && x >= priest.x && x <= priest.x + priest.w && y >= priest.y && y <= priest.y + priest.h) {
      openArticle("priest");
    }
  }

  updateHover(x, y) {
    const hit = this.hitRegionAt(x, y);
    const priestHit =
      !hit &&
      this.priestPickRegion &&
      x >= this.priestPickRegion.x &&
      x <= this.priestPickRegion.x + this.priestPickRegion.w &&
      y >= this.priestPickRegion.y &&
      y <= this.priestPickRegion.y + this.priestPickRegion.h;
    this.hovered = hit?.id || (priestHit ? "priest" : null);
    if (hit || priestHit) {
      this.tooltip.hidden = true;
      this.canvas.style.cursor = "pointer";
    } else {
      this.tooltip.hidden = true;
      this.canvas.style.cursor = this.pointerMode ? "grabbing" : "grab";
    }
    this.needsDraw = true;
  }

  project(point) {
    const rect = this.canvas.getBoundingClientRect();
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    const x = point.x * cos - point.z * sin;
    const z = point.x * sin + point.z * cos;
    const y = point.y || 0;
    const heightScale = 0.34 + (1 - Math.sin(this.pitch)) * 0.68;
    return {
      x: rect.width / 2 + this.panX + x * this.zoom,
      y: rect.height / 2 + this.panY + (z * Math.sin(this.pitch) - y * heightScale) * this.zoom,
      depth: z + y * 0.5
    };
  }

  polygon(points, fill, stroke = null, width = 1) {
    const ctx = this.ctx;
    ctx.beginPath();
    points.forEach((p, index) => {
      if (index === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
  }

  cuboid({ x, z, y = 0, w, d, h, color, id, label }) {
    const x0 = x - w / 2;
    const x1 = x + w / 2;
    const z0 = z - d / 2;
    const z1 = z + d / 2;
    const p = {
      b1: this.project({ x: x0, y, z: z0 }),
      b2: this.project({ x: x1, y, z: z0 }),
      b3: this.project({ x: x1, y, z: z1 }),
      b4: this.project({ x: x0, y, z: z1 }),
      t1: this.project({ x: x0, y: y + h, z: z0 }),
      t2: this.project({ x: x1, y: y + h, z: z0 }),
      t3: this.project({ x: x1, y: y + h, z: z1 }),
      t4: this.project({ x: x0, y: y + h, z: z1 })
    };
    this.polygon([p.b1, p.b2, p.t2, p.t1], mixColor(color, -42));
    this.polygon([p.b2, p.b3, p.t3, p.t2], mixColor(color, -18));
    this.polygon([p.b3, p.b4, p.t4, p.t3], mixColor(color, -32));
    this.polygon([p.b4, p.b1, p.t1, p.t4], mixColor(color, -56));
    this.polygon([p.t1, p.t2, p.t3, p.t4], mixColor(color, 24), "rgba(255,255,255,.25)", 0.75);

    if (id) {
      const pts = [p.t1, p.t2, p.t3, p.t4, p.b1, p.b2, p.b3, p.b4];
      const minX = Math.min(...pts.map(item => item.x));
      const maxX = Math.max(...pts.map(item => item.x));
      const minY = Math.min(...pts.map(item => item.y));
      const maxY = Math.max(...pts.map(item => item.y));
      this.hitRegions.push({ id, label, x: minX - 10, y: minY - 10, w: maxX - minX + 20, h: maxY - minY + 20, cx: (minX + maxX) / 2 });
    }
  }

  addFlatHitRegion(id, label, corners, pad = 8) {
    const points = corners.map(point => this.project(point));
    const minX = Math.min(...points.map(point => point.x));
    const maxX = Math.max(...points.map(point => point.x));
    const minY = Math.min(...points.map(point => point.y));
    const maxY = Math.max(...points.map(point => point.y));
    this.hitRegions.push({
      id,
      label,
      x: minX - pad,
      y: minY - pad,
      w: maxX - minX + pad * 2,
      h: maxY - minY + pad * 2,
      cx: (minX + maxX) / 2
    });
  }

  addPolygonHitRegion(id, label, corners) {
    const points = corners.map(point => this.project(point));
    const minX = Math.min(...points.map(point => point.x));
    const maxX = Math.max(...points.map(point => point.x));
    const minY = Math.min(...points.map(point => point.y));
    const maxY = Math.max(...points.map(point => point.y));
    this.hitRegions.push({
      id,
      label,
      points,
      x: minX,
      y: minY,
      w: maxX - minX,
      h: maxY - minY,
      cx: (minX + maxX) / 2
    });
  }

  pointInPolygon(x, y, points) {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const pi = points[i];
      const pj = points[j];
      const intersects = pi.y > y !== pj.y > y && x < ((pj.x - pi.x) * (y - pi.y)) / (pj.y - pi.y) + pi.x;
      if (intersects) inside = !inside;
    }
    return inside;
  }

  containsHit(hit, x, y) {
    if (x < hit.x || x > hit.x + hit.w || y < hit.y || y > hit.y + hit.h) return false;
    return hit.points ? this.pointInPolygon(x, y, hit.points) : true;
  }

  hitRegionAt(x, y) {
    return [...this.hitRegions].reverse().find(hit => this.containsHit(hit, x, y));
  }

  addObjectHitRegion({ id, label, x, z, y = 0, w, d, h = 0 }, pad = 10) {
    const x0 = x - w / 2;
    const x1 = x + w / 2;
    const z0 = z - d / 2;
    const z1 = z + d / 2;
    this.addFlatHitRegion(
      id,
      label,
      [
        { x: x0, y, z: z0 },
        { x: x1, y, z: z0 },
        { x: x1, y: y + h, z: z1 },
        { x: x0, y: y + h, z: z1 }
      ],
      pad
    );
  }

  drawGround() {
    const ctx = this.ctx;
    const rect = this.canvas.getBoundingClientRect();
    const sky = ctx.createLinearGradient(0, 0, 0, rect.height);
    sky.addColorStop(0, "#cba273");
    sky.addColorStop(0.45, "#e2c393");
    sky.addColorStop(1, "#f5e4bb");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const horizon = ctx.createLinearGradient(0, rect.height * 0.14, 0, rect.height * 0.55);
    horizon.addColorStop(0, "rgba(255,255,255,.22)");
    horizon.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = horizon;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const corners = [
      this.project({ x: courtBounds.west, y: 0, z: courtBounds.north }),
      this.project({ x: courtBounds.east, y: 0, z: courtBounds.north }),
      this.project({ x: courtBounds.east, y: 0, z: courtBounds.south }),
      this.project({ x: courtBounds.west, y: 0, z: courtBounds.south })
    ];
    this.polygon(corners, "rgba(239, 205, 143, .24)", "rgba(137, 95, 46, .16)", 0.7);
  }

  drawTent(x, z, scale = 1) {
    const base = [
      this.project({ x: x - 1.3 * scale, y: 0, z: z - 0.9 * scale }),
      this.project({ x: x + 1.3 * scale, y: 0, z: z - 0.9 * scale }),
      this.project({ x: x + 1.3 * scale, y: 0, z: z + 0.9 * scale }),
      this.project({ x: x - 1.3 * scale, y: 0, z: z + 0.9 * scale })
    ];
    const peak = this.project({ x, y: 1.25 * scale, z });
    this.polygon([base[0], base[1], peak], "rgba(255,255,255,.62)");
    this.polygon([base[1], base[2], peak], "rgba(241,232,211,.72)");
    this.polygon([base[2], base[3], peak], "rgba(226,214,190,.55)");
  }

  drawCampTents() {
    const scale = 0.74;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        this.drawTent(-36 + col * 4.1, -52 - row * 3.1, scale);
        this.drawTent(-36 + col * 4.1, 52 + row * 3.1, scale);
      }
    }
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 5; col++) {
        this.drawTent(-74 - col * 3.6, -18 + row * 4, scale);
        this.drawTent(74 + col * 3.6, -18 + row * 4, scale);
      }
    }
  }

  drawFencePanel(a, b, low = 0.2, high = CUBIT_MODEL.court.fenceHeight) {
    const panel = [
      this.project({ x: a.x, y: low, z: a.z }),
      this.project({ x: b.x, y: low, z: b.z }),
      this.project({ x: b.x, y: high, z: b.z }),
      this.project({ x: a.x, y: high, z: a.z })
    ];
    this.polygon(panel, "rgba(255,255,255,.08)", "rgba(248,239,218,.26)", 0.65);

    for (let i = 0; i < 5; i++) {
      const y = 0.9 + i * 0.82;
      const p1 = this.project({ x: a.x, y, z: a.z });
      const p2 = this.project({ x: b.x, y, z: b.z });
      this.ctx.save();
      this.ctx.strokeStyle = "rgba(255,255,255,.72)";
      this.ctx.lineWidth = 1.15;
      this.ctx.lineCap = "round";
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
      this.ctx.restore();
    }

  }

  drawCourtyard() {
    const court = { left: courtBounds.west, right: courtBounds.east, top: courtBounds.north, bottom: courtBounds.south };
    const gateHalf = CUBIT_MODEL.court.gateWidth / 2;
    const posts = [];
    const addPost = (x, z) => {
      const key = `${x.toFixed(3)}:${z.toFixed(3)}`;
      if (!posts.some(post => post.key === key)) posts.push({ key, x, z });
    };
    const addLinePosts = (start, end, count, mapPoint) => {
      for (let index = 0; index < count; index++) {
        const t = count === 1 ? 0 : index / (count - 1);
        const value = start + (end - start) * t;
        const point = mapPoint(value);
        addPost(point.x, point.z);
      }
    };

    // Pillar counts follow Exodus 27: twenty on each long side, ten on the west, and three/four/three around the gate.
    addLinePosts(court.left, court.right, 20, x => ({ x, z: court.top }));
    addLinePosts(court.left, court.right, 20, x => ({ x, z: court.bottom }));
    addLinePosts(court.top, court.bottom, 10, z => ({ x: court.left, z }));
    addLinePosts(court.top, -gateHalf, 3, z => ({ x: court.right, z }));
    addLinePosts(-gateHalf, gateHalf, 4, z => ({ x: court.right, z }));
    addLinePosts(gateHalf, court.bottom, 3, z => ({ x: court.right, z }));
    posts.forEach(post => {
      this.cuboid({
        x: post.x,
        z: post.z,
        w: 0.2,
        d: 0.2,
        h: CUBIT_MODEL.court.fenceHeight,
        color: "#b87836",
        id: "posts",
        label: "Courtyard Posts and Linen Fence"
      });
      this.cuboid({ x: post.x, z: post.z, y: CUBIT_MODEL.court.fenceHeight, w: 0.38, d: 0.38, h: 0.2, color: "#d2d1c8" });
    });

    [
      [{ x: court.left, z: court.top }, { x: court.right, z: court.top }],
      [{ x: court.right, z: court.bottom }, { x: court.left, z: court.bottom }],
      [{ x: court.left, z: court.bottom }, { x: court.left, z: court.top }],
      [{ x: court.right, z: court.top }, { x: court.right, z: -gateHalf }],
      [{ x: court.right, z: gateHalf }, { x: court.right, z: court.bottom }]
    ].forEach(([a, b]) => this.drawFencePanel(a, b));

    [
      { x: court.right, z: -gateHalf },
      { x: court.right, z: gateHalf }
    ].forEach(post => {
      this.cuboid({ x: post.x, z: post.z, w: 0.28, d: 0.28, h: CUBIT_MODEL.court.fenceHeight, color: "#c17a35" });
      this.cuboid({ x: post.x, z: post.z, y: CUBIT_MODEL.court.fenceHeight, w: 0.44, d: 0.44, h: 0.22, color: "#d9d7ce" });
    });

    this.drawGate(court.right, gateHalf);
  }

  drawGate(x, gateHalf) {
    const stripes = [
      { z0: -gateHalf, z1: -gateHalf * 0.33, color: "rgba(70, 105, 190, .72)" },
      { z0: -gateHalf * 0.33, z1: gateHalf * 0.33, color: "rgba(154, 78, 138, .72)" },
      { z0: gateHalf * 0.33, z1: gateHalf, color: "rgba(197, 75, 52, .72)" }
    ];
    stripes.forEach(stripe => {
      const panel = [
        this.project({ x, y: 0.05, z: stripe.z0 }),
        this.project({ x, y: CUBIT_MODEL.court.fenceHeight, z: stripe.z0 }),
        this.project({ x, y: CUBIT_MODEL.court.fenceHeight, z: stripe.z1 }),
        this.project({ x, y: 0.05, z: stripe.z1 })
      ];
      this.polygon(panel, stripe.color, "rgba(255,255,255,.35)", 0.75);
    });
    [-gateHalf, gateHalf].forEach(z => this.cuboid({ x, z, w: 0.2, d: 0.2, h: CUBIT_MODEL.court.fenceHeight, color: "#eadfcf" }));
    this.addFlatHitRegion("gate", "The Courtyard Gate", [
      { x, y: 0, z: -gateHalf },
      { x, y: CUBIT_MODEL.court.fenceHeight, z: -gateHalf },
      { x, y: CUBIT_MODEL.court.fenceHeight, z: gateHalf },
      { x, y: 0, z: gateHalf }
    ], 18);
  }

  drawTabernacle() {
    const tent = {
      left: tabernacleBounds.west,
      right: tabernacleBounds.east,
      top: tabernacleBounds.north,
      bottom: tabernacleBounds.south,
      veil: tabernacleBounds.veil
    };
    const height = CUBIT_MODEL.tabernacle.height;
    const centerX = (tent.left + tent.right) / 2;

    this.cuboid({ x: centerX, z: 0, w: CUBIT_MODEL.tabernacle.length, d: CUBIT_MODEL.tabernacle.width, h: 0.22, color: "#c7a86a" });

    const farWall = { z: tent.top + 0.12, d: 0.24 };
    this.cuboid({ x: centerX, z: farWall.z, w: CUBIT_MODEL.tabernacle.length, d: farWall.d, h: height, color: "#d2a33a" });
    this.cuboid({ x: tent.left, z: 0, w: 0.24, d: CUBIT_MODEL.tabernacle.width, h: height, color: "#b98131" });

    for (let x = tent.left + 0.7; x < tent.right; x += 1.45) {
      this.drawModelLine(
        [
          { x, y: 0.35, z: tent.top + 0.02 },
          { x, y: height - 0.15, z: tent.top + 0.02 }
        ],
        "rgba(120, 75, 23, .34)",
        0.9
      );
    }

    const coveringBack = [
      { x: tent.left - 1.0, y: height + 0.55, z: tent.top - 0.95 },
      { x: tent.right + 1.0, y: height + 0.55, z: tent.top - 0.95 },
      { x: tent.right + 1.0, y: 0.25, z: tent.top - 1.2 },
      { x: tent.left - 1.0, y: 0.25, z: tent.top - 1.2 }
    ];
    this.polygon(coveringBack.map(point => this.project(point)), "rgba(69, 45, 35, .76)", "rgba(38, 26, 22, .35)", 1);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", coveringBack);

    const redLayer = [
      { x: tent.left - 0.7, y: height + 0.45, z: tent.top - 0.45 },
      { x: tent.right + 0.7, y: height + 0.45, z: tent.top - 0.45 },
      { x: tent.right + 0.7, y: 1.0, z: tent.top - 0.5 },
      { x: tent.left - 0.7, y: 1.0, z: tent.top - 0.5 }
    ];
    this.polygon(redLayer.map(point => this.project(point)), "rgba(150, 59, 50, .8)", "rgba(255,255,255,.16)", 0.8);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", redLayer);

    const linenRoof = [
      { x: tent.left - 0.65, y: height + 0.8, z: tent.top - 0.15 },
      { x: tent.right + 0.65, y: height + 0.8, z: tent.top - 0.15 },
      { x: tent.right + 0.55, y: height + 0.25, z: tent.bottom - 1.2 },
      { x: tent.left - 0.55, y: height + 0.25, z: tent.bottom - 1.2 }
    ];
    this.polygon(linenRoof.map(point => this.project(point)), "rgba(245, 224, 185, .9)", "rgba(92, 55, 30, .2)", 0.9);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", linenRoof);

    const blueTrim = [
      { x: tent.left - 0.55, y: height + 0.42, z: tent.bottom - 1.0 },
      { x: tent.right + 0.55, y: height + 0.42, z: tent.bottom - 1.0 },
      { x: tent.right + 0.45, y: height - 0.05, z: tent.bottom - 0.72 },
      { x: tent.left - 0.45, y: height - 0.05, z: tent.bottom - 0.72 }
    ];
    this.polygon(blueTrim.map(point => this.project(point)), "rgba(54, 105, 181, .82)", "rgba(255,255,255,.18)", 0.7);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", blueTrim);

    this.drawModelLine(
      [
        { x: tent.left, y: 0.3, z: tent.bottom },
        { x: tent.right, y: 0.3, z: tent.bottom }
      ],
      "rgba(139, 92, 39, .75)",
      2
    );

    for (let x = tent.left + 2; x < tent.right; x += 2) {
      this.cuboid({ x, z: tent.bottom, w: 0.16, d: 0.16, h: height, color: "#d6a33d" });
    }

    const veilStripes = [
      { z0: tent.top, z1: -1.65, color: "rgba(49, 93, 178, .65)" },
      { z0: -1.65, z1: 1.65, color: "rgba(124, 68, 138, .7)" },
      { z0: 1.65, z1: tent.bottom, color: "rgba(181, 72, 50, .68)" }
    ];
    veilStripes.forEach(stripe => {
      const panel = [
        { x: tent.veil, y: 0.15, z: stripe.z0 },
        { x: tent.veil, y: height - 0.2, z: stripe.z0 },
        { x: tent.veil, y: height - 0.2, z: stripe.z1 },
        { x: tent.veil, y: 0.15, z: stripe.z1 }
      ];
      this.polygon(panel.map(point => this.project(point)), stripe.color, "rgba(255,255,255,.2)", 0.5);
    });
    this.addPolygonHitRegion("innerVeil", "The Inner Veil", [
      { x: tent.veil, y: 0.15, z: tent.top },
      { x: tent.veil, y: height - 0.2, z: tent.top },
      { x: tent.veil, y: height - 0.2, z: tent.bottom },
      { x: tent.veil, y: 0.15, z: tent.bottom }
    ]);

    const entranceStripes = [
      { z0: tent.top, z1: -1.65, color: "rgba(55, 103, 184, .72)" },
      { z0: -1.65, z1: 1.65, color: "rgba(146, 82, 139, .75)" },
      { z0: 1.65, z1: tent.bottom, color: "rgba(201, 82, 54, .74)" }
    ];
    entranceStripes.forEach(stripe => {
      const panel = [
        { x: tent.right + 0.1, y: 0, z: stripe.z0 },
        { x: tent.right + 0.1, y: height, z: stripe.z0 },
        { x: tent.right + 0.1, y: height, z: stripe.z1 },
        { x: tent.right + 0.1, y: 0, z: stripe.z1 }
      ];
      this.polygon(panel.map(point => this.project(point)), stripe.color, "rgba(255,255,255,.22)", 0.65);
    });
    this.addPolygonHitRegion("entranceVeil", "The Entrance Veil", [
      { x: tent.right + 0.1, y: 0, z: tent.top },
      { x: tent.right + 0.1, y: height, z: tent.top },
      { x: tent.right + 0.1, y: height, z: tent.bottom },
      { x: tent.right + 0.1, y: 0, z: tent.bottom }
    ]);

    [-4, -2, 0, 2, 4].forEach(z => this.cuboid({ x: tent.right + 0.08, z, w: 0.2, d: 0.2, h: height, color: "#c89036" }));
    [-3.5, -1.2, 1.2, 3.5].forEach(z => this.cuboid({ x: tent.veil, z, w: 0.18, d: 0.18, h: height, color: "#c89036" }));
  }

  drawSmoke(x, z, baseY, drift = 0) {
    const ctx = this.ctx;
    ctx.save();
    for (let i = 0; i < 9; i++) {
      const p = this.project({ x: x + drift * i * 0.18, y: baseY + i * 1.6, z: z - i * 0.3 });
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, 11 + i * 2.6, 7 + i * 1.8, -0.35, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(238, 232, 216, ${0.24 - i * 0.018})`;
      ctx.fill();
    }
    ctx.restore();
  }

  drawFire(x, z) {
    const center = this.project({ x, y: 2.0, z });
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(center.x - 12, center.y + 12);
    ctx.quadraticCurveTo(center.x - 4, center.y - 26, center.x + 4, center.y - 5);
    ctx.quadraticCurveTo(center.x + 15, center.y - 28, center.x + 12, center.y + 12);
    ctx.closePath();
    ctx.fillStyle = "rgba(239, 111, 32, .88)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(center.x - 5, center.y + 9);
    ctx.quadraticCurveTo(center.x, center.y - 18, center.x + 7, center.y + 9);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 218, 82, .95)";
    ctx.fill();
    ctx.restore();
  }

  drawModelLine(points, color, width = 2.4) {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    points.map(point => this.project(point)).forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  }

  drawProjectedEllipse(point, rx, ry, fill, stroke = null, width = 1) {
    const center = this.project(point);
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(center.x, center.y, rx, ry, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
    ctx.restore();
  }

  drawObjectFocusGlow(obj) {
    if (this.hovered !== obj.id) return;

    const baseY = Math.max(0.04, obj.y || 0);
    const topY = baseY + (obj.h || 1.5) + 0.45;
    const center = this.project({ x: obj.x, y: baseY, z: obj.z });
    const top = this.project({ x: obj.x, y: topY, z: obj.z });
    const footprint = Math.max(obj.w || 1, obj.d || 1);
    const floorRx = Math.max(18, this.zoom * footprint * 0.72);
    const floorRy = Math.max(7, this.zoom * Math.max(obj.d || 1, 0.9) * 0.28);
    const bloomRadius = Math.max(22, floorRx * 0.8);
    const ctx = this.ctx;

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.shadowColor = "rgba(255, 201, 96, 0.34)";
    ctx.shadowBlur = Math.max(16, floorRx * 0.28);
    ctx.beginPath();
    ctx.ellipse(center.x, center.y, floorRx, floorRy, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 216, 128, 0.18)";
    ctx.fill();

    const bloom = ctx.createRadialGradient(top.x, top.y, 2, top.x, top.y, bloomRadius);
    bloom.addColorStop(0, "rgba(255, 239, 178, 0.2)");
    bloom.addColorStop(0.5, "rgba(255, 204, 103, 0.08)");
    bloom.addColorStop(1, "rgba(255, 204, 103, 0)");
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.ellipse(top.x, top.y, bloomRadius * 0.85, bloomRadius * 0.55, -0.12, 0, Math.PI * 2);
    ctx.fillStyle = bloom;
    ctx.fill();
    ctx.restore();
  }

  drawAltar(obj) {
    this.cuboid({ ...obj, color: "#9d542a", id: obj.id, label: obj.label });
    const inset = 0.75;
    const top = [
      this.project({ x: obj.x - obj.w / 2 + inset, y: obj.h + 0.06, z: obj.z - obj.d / 2 + inset }),
      this.project({ x: obj.x + obj.w / 2 - inset, y: obj.h + 0.06, z: obj.z - obj.d / 2 + inset }),
      this.project({ x: obj.x + obj.w / 2 - inset, y: obj.h + 0.06, z: obj.z + obj.d / 2 - inset }),
      this.project({ x: obj.x - obj.w / 2 + inset, y: obj.h + 0.06, z: obj.z + obj.d / 2 - inset })
    ];
    this.polygon(top, "rgba(67, 34, 21, .84)", "rgba(246, 177, 75, .7)", 1.1);
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * (obj.w / 2 - 0.35),
          z: obj.z + dz * (obj.d / 2 - 0.35),
          y: obj.h,
          w: 0.42,
          d: 0.42,
          h: 0.55,
          color: "#c97634"
        });
      });
    });
    this.drawFire(obj.x, obj.z);
  }

  drawLaver(obj) {
    this.addObjectHitRegion({ ...obj, w: 2.7, d: 2.7, h: 1.6 }, 12);
    this.drawProjectedEllipse(
      { x: obj.x, y: 0.1, z: obj.z },
      Math.max(7, this.zoom * 0.62),
      Math.max(3, this.zoom * 0.26),
      "#8f622f",
      "rgba(255, 230, 166, .46)",
      1
    );
    this.cuboid({ x: obj.x, z: obj.z, y: 0.12, w: 0.42, d: 0.42, h: 0.76, color: "#a66a2e" });

    const ctx = this.ctx;
    const top = this.project({ x: obj.x, y: 1.34, z: obj.z });
    const bottom = this.project({ x: obj.x, y: 0.72, z: obj.z });
    const rxTop = Math.max(15, this.zoom * obj.w * 0.58);
    const ryTop = Math.max(5.5, this.zoom * obj.d * 0.2);
    const rxBottom = rxTop * 0.52;
    const ryBottom = ryTop * 0.68;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(top.x - rxTop, top.y);
    ctx.bezierCurveTo(top.x - rxTop * 0.9, top.y + ryTop * 1.25, bottom.x - rxBottom, bottom.y + ryBottom * 0.2, bottom.x - rxBottom, bottom.y);
    ctx.quadraticCurveTo(bottom.x, bottom.y + ryBottom, bottom.x + rxBottom, bottom.y);
    ctx.bezierCurveTo(bottom.x + rxBottom, bottom.y + ryBottom * 0.2, top.x + rxTop * 0.9, top.y + ryTop * 1.25, top.x + rxTop, top.y);
    ctx.quadraticCurveTo(top.x, top.y + ryTop * 0.8, top.x - rxTop, top.y);
    ctx.closePath();
    ctx.fillStyle = "#b87934";
    ctx.strokeStyle = "rgba(92, 54, 25, .5)";
    ctx.lineWidth = 1.2;
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    this.drawProjectedEllipse(
      { x: obj.x, y: 1.36, z: obj.z },
      rxTop,
      ryTop,
      "#cf8b3b",
      "rgba(255, 237, 184, .8)",
      1.35
    );
    this.drawProjectedEllipse(
      { x: obj.x, y: 1.39, z: obj.z },
      rxTop * 0.72,
      ryTop * 0.56,
      "rgba(137, 205, 225, .92)",
      "rgba(255,255,255,.78)",
      0.95
    );
    this.drawProjectedEllipse(
      { x: obj.x - 0.25, y: 1.42, z: obj.z - 0.08 },
      rxTop * 0.28,
      ryTop * 0.2,
      "rgba(238, 255, 255, .38)"
    );
  }

  drawLampstand(obj) {
    this.addObjectHitRegion(obj, 14);
    this.cuboid({ x: obj.x, z: obj.z, y: 0, w: 0.8, d: 0.5, h: 0.18, color: "#c99123" });
    this.drawModelLine(
      [
        { x: obj.x, y: 0.16, z: obj.z },
        { x: obj.x, y: obj.h, z: obj.z }
      ],
      "#dca52d",
      2.6
    );
    [-0.65, -0.43, -0.22, 0.22, 0.43, 0.65].forEach(offset => {
      const side = Math.sign(offset);
      const startY = 0.95 + Math.abs(offset) * 0.55;
      this.drawModelLine(
        [
          { x: obj.x, y: startY, z: obj.z },
          { x: obj.x + side * Math.abs(offset) * 0.72, y: startY + 0.52, z: obj.z },
          { x: obj.x + offset, y: obj.h - Math.abs(offset) * 0.18, z: obj.z }
        ],
        "#e1b43d",
        2.25
      );
    });
    [-0.72, -0.48, -0.24, 0, 0.24, 0.48, 0.72].forEach(offset => {
      this.drawProjectedEllipse(
        { x: obj.x + offset, y: obj.h + 0.08, z: obj.z },
        3.6,
        2.3,
        "#fff0a8",
        "#b97718",
        0.8
      );
    });
  }

  drawShewbreadTable(obj) {
    this.cuboid({ ...obj, color: "#b77a2d", id: obj.id, label: obj.label });
    [-0.62, -0.36, -0.1, 0.16, 0.42, 0.68].forEach((offset, index) => {
      [-0.22, 0.22].forEach(row => {
        this.drawProjectedEllipse(
          { x: obj.x + offset, y: obj.h + 0.12, z: obj.z + row },
          2.2,
          1.3,
          index % 2 ? "#f0ce78" : "#f4dc92",
          "rgba(124, 80, 28, .35)",
          0.55
        );
      });
    });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * 0.72,
          z: obj.z + dz * 0.28,
          y: -0.05,
          w: 0.12,
          d: 0.12,
          h: 0.85,
          color: "#8c571f"
        });
      });
    });
  }

  drawIncenseAltar(obj) {
    this.cuboid({ ...obj, color: "#c9932e", id: obj.id, label: obj.label });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * 0.36,
          z: obj.z + dz * 0.36,
          y: obj.h,
          w: 0.16,
          d: 0.16,
          h: 0.28,
          color: "#f0c85a"
        });
      });
    });
    this.drawProjectedEllipse(
      { x: obj.x, y: obj.h + 0.2, z: obj.z },
      4.2,
      2.4,
      "rgba(80, 54, 34, .35)",
      "rgba(248, 223, 150, .55)",
      0.8
    );
    this.drawSmoke(obj.x, obj.z, obj.h + 0.15, -0.12);
  }

  drawArk(obj) {
    this.cuboid({ ...obj, color: "#c69524", id: obj.id, label: obj.label });
    const seat = [
      this.project({ x: obj.x - obj.w / 2 - 0.08, y: obj.h + 0.16, z: obj.z - obj.d / 2 - 0.08 }),
      this.project({ x: obj.x + obj.w / 2 + 0.08, y: obj.h + 0.16, z: obj.z - obj.d / 2 - 0.08 }),
      this.project({ x: obj.x + obj.w / 2 + 0.08, y: obj.h + 0.16, z: obj.z + obj.d / 2 + 0.08 }),
      this.project({ x: obj.x - obj.w / 2 - 0.08, y: obj.h + 0.16, z: obj.z + obj.d / 2 + 0.08 })
    ];
    this.polygon(seat, "#f3cc58", "rgba(255,255,255,.45)", 0.8);
    [-0.55, 0.55].forEach(offset => {
      this.drawModelLine(
        [
          { x: obj.x + offset, y: obj.h + 0.18, z: obj.z },
          { x: obj.x + offset * 0.55, y: obj.h + 0.88, z: obj.z - 0.16 },
          { x: obj.x, y: obj.h + 0.55, z: obj.z }
        ],
        "#fff0aa",
        1.8
      );
    });
  }

  drawSlaughterTable(x, z) {
    this.cuboid({ x, z, y: 0.5, w: 3.8, d: 1.65, h: 0.22, color: "#c49449" });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({ x: x + dx * 1.45, z: z + dz * 0.58, w: 0.18, d: 0.18, h: 0.52, color: "#8b5b2b" });
      });
    });
  }

  drawPriest(x, z) {
    const hitPoints = [
      { x: x - 1.15, y: 0, z: z - 0.95 },
      { x: x + 1.15, y: 0, z: z - 0.95 },
      { x: x + 1.15, y: 0, z: z + 0.95 },
      { x: x - 1.15, y: 0, z: z + 0.95 },
      { x: x - 1.15, y: 4.15, z: z - 0.95 },
      { x: x + 1.15, y: 4.15, z: z - 0.95 },
      { x: x + 1.15, y: 4.15, z: z + 0.95 },
      { x: x - 1.15, y: 4.15, z: z + 0.95 }
    ].map(point => this.project(point));
    const minX = Math.min(...hitPoints.map(point => point.x));
    const maxX = Math.max(...hitPoints.map(point => point.x));
    const minY = Math.min(...hitPoints.map(point => point.y));
    const maxY = Math.max(...hitPoints.map(point => point.y));
    this.hitRegions.push({
      id: "priest",
      label: "The Priest in the Sanctuary",
      x: minX - 22,
      y: minY - 22,
      w: maxX - minX + 44,
      h: maxY - minY + 44,
      cx: (minX + maxX) / 2
    });
    this.priestPickRegion = {
      x: minX - 44,
      y: minY - 44,
      w: maxX - minX + 88,
      h: maxY - minY + 88
    };

    const ctx = this.ctx;
    const shadow = this.project({ x, y: 0.03, z });
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(shadow.x, shadow.y, Math.max(8, this.zoom * 0.8), Math.max(3, this.zoom * 0.28), -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(64, 43, 22, .18)";
    ctx.fill();
    ctx.restore();

    this.polygon(
      [
        this.project({ x: x - 0.42, y: 3.05, z }),
        this.project({ x: x + 0.42, y: 3.05, z }),
        this.project({ x: x + 0.72, y: 0.08, z: z + 0.05 }),
        this.project({ x: x - 0.72, y: 0.08, z: z + 0.05 })
      ],
      "rgba(250, 247, 237, .96)",
      "rgba(165, 126, 72, .38)",
      0.85
    );
    this.polygon(
      [
        this.project({ x: x - 0.1, y: 2.96, z: z + 0.01 }),
        this.project({ x: x + 0.14, y: 2.96, z: z + 0.01 }),
        this.project({ x: x + 0.18, y: 0.16, z: z + 0.04 }),
        this.project({ x: x - 0.16, y: 0.16, z: z + 0.04 })
      ],
      "rgba(50, 91, 166, .78)"
    );
    this.drawModelLine(
      [
        { x: x - 0.48, y: 2.62, z },
        { x: x - 0.96, y: 1.6, z: z + 0.12 }
      ],
      "rgba(232, 222, 202, .95)",
      2.4
    );
    this.drawModelLine(
      [
        { x: x + 0.48, y: 2.62, z },
        { x: x + 0.9, y: 1.6, z: z - 0.08 }
      ],
      "rgba(232, 222, 202, .95)",
      2.4
    );

    const head = this.project({ x, y: 3.5, z });
    const radius = Math.max(5.2, this.zoom * 0.34);
    ctx.save();
    ctx.beginPath();
    ctx.arc(head.x, head.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#b97743";
    ctx.fill();
    ctx.strokeStyle = "rgba(83, 45, 25, .26)";
    ctx.stroke();
    const turban = this.project({ x, y: 3.8, z });
    ctx.beginPath();
    ctx.ellipse(turban.x, turban.y, radius * 1.15, radius * 0.42, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "#f4eee0";
    ctx.fill();
    ctx.strokeStyle = "rgba(126, 94, 58, .28)";
    ctx.stroke();
    ctx.restore();
  }

  drawCourtyardFurniture() {
    const tablePositions = [
      [15, -9],
      [15, 9],
      [33, -11],
      [33, 11],
      [41, -6],
      [41, 6]
    ];
    tablePositions.forEach(([x, z]) => this.drawSlaughterTable(x, z));
    this.drawSmoke(25, 0, 2.2, 0.35);
    this.drawPriest(10.5, 3.6);
  }

  drawObjects() {
    const sorted = [...sceneObjects].sort((a, b) => this.project({ x: a.x, z: a.z }).depth - this.project({ x: b.x, z: b.z }).depth);
    sorted.forEach(obj => {
      if (obj.hidden || obj.gate) return;
      this.drawObjectFocusGlow(obj);
      if (obj.id === "altar") this.drawAltar(obj);
      else if (obj.id === "laver") this.drawLaver(obj);
      else if (obj.id === "lampstand") this.drawLampstand(obj);
      else if (obj.id === "shewbread") this.drawShewbreadTable(obj);
      else if (obj.id === "incense") this.drawIncenseAltar(obj);
      else if (obj.id === "ark") this.drawArk(obj);
      else this.cuboid({ ...obj, id: obj.id, label: obj.label });
    });
  }

  roundRect(x, y, w, h, r) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  draw() {
    this.hitRegions = [];
    this.priestPickRegion = null;
    this.drawGround();
    this.drawCampTents();
    this.drawCourtyard();
    this.drawTabernacle();
    this.drawCourtyardFurniture();
    this.drawObjects();
  }

  animate() {
    if (this.needsDraw) {
      this.draw();
      this.needsDraw = false;
    }
    requestAnimationFrame(() => this.animate());
  }
}

function init() {
  applySiteCopy();
  renderPhases();
  renderMinistry();
  renderPriestlyAttire();
  renderFeastTabs();
  renderChronicles();
  renderFocus1844();
  renderFaq();
  renderExplorerAi();
  bindUi();
  scene = new SanctuaryThreeScene(qs("#sanctuary-canvas"), {
    openArticle,
    isActive: () => currentView === "map"
  });
}

init();
