// Feature cards (each with its own looping mini-clip), pricing, hover tilt, reveal on scroll.
const CFG = Object.assign({ dmg: "", contact: "", appUrl: "" }, window.LCINO || {});

// 48x48 line glyphs
const G = {
  users: '<circle cx="19" cy="17" r="6"/><path d="M7 39c0-8 5-12 12-12s12 4 12 12"/><circle cx="34" cy="15" r="4.5"/><path d="M33 26c6 0 10 4 10 11"/>',
  pin: '<path d="M24 43S10 30 10 20a14 14 0 0 1 28 0c0 10-14 23-14 23z"/><circle cx="24" cy="20" r="5"/>',
  play: '<rect x="5" y="10" width="38" height="28" rx="8"/><path d="M20 17l11 7-11 7z" fill="currentColor"/>',
  profile: '<rect x="8" y="6" width="32" height="36" rx="7"/><circle cx="24" cy="19" r="5"/><path d="M14 36c1-6 5-8 10-8s9 2 10 8"/>',
  tag: '<path d="M6 24V8a2 2 0 0 1 2-2h16l18 18-18 18z"/><circle cx="15" cy="15" r="3"/>',
  bookmark: '<path d="M12 6h24v36l-12-9-12 9z"/>',
  target: '<circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3" fill="currentColor"/>',
  gauge: '<path d="M6 34a18 18 0 1 1 36 0"/><path d="M24 34l8-12"/><circle cx="24" cy="34" r="3" fill="currentColor"/>',
  globe: '<circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c-8 9-8 27 0 36M24 6c8 9 8 27 0 36"/>',
  bolt: '<path d="M27 4L10 27h12l-3 17 19-25H26z"/>',
  brain: '<path d="M18 8a7 7 0 0 0-7 8 7 7 0 0 0-1 12 7 7 0 0 0 8 8 5 5 0 0 0 6-3V11a5 5 0 0 0-6-3z"/><path d="M30 8a7 7 0 0 1 7 8 7 7 0 0 1 1 12 7 7 0 0 1-8 8"/><path d="M24 14v22"/>',
  page: '<rect x="9" y="5" width="30" height="38" rx="5"/><path d="M16 16h16M16 24h16M16 32h9"/>',
  eye: '<path d="M3 24s8-14 21-14 21 14 21 14-8 14-21 14S3 24 3 24z"/><circle cx="24" cy="24" r="6"/>',
  mail: '<rect x="5" y="10" width="38" height="28" rx="6"/><path d="M6 14l18 13 18-13"/>',
  clock: '<circle cx="24" cy="24" r="18"/><path d="M24 12v13l9 5"/>',
  brand: '<circle cx="16" cy="18" r="9"/><circle cx="32" cy="18" r="9"/><circle cx="24" cy="32" r="9"/>',
  filter: '<path d="M5 8h38L29 26v14l-10-5V26z"/>',
  inbox: '<path d="M6 26l6-18h24l6 18v12H6z"/><path d="M6 26h11l2 5h10l2-5h11"/>',
  bell: '<path d="M10 34V22a14 14 0 0 1 28 0v12l4 4H6z"/><path d="M20 42a4 4 0 0 0 8 0"/>',
  chat: '<path d="M6 10h36v24H22l-10 8v-8H6z"/><path d="M15 19h18M15 26h11"/>',
  shield: '<path d="M24 4l16 6v12c0 11-7 18-16 22C15 40 8 33 8 22V10z"/><path d="M16 24l6 6 11-12"/>',
  check: '<circle cx="24" cy="24" r="18"/><path d="M15 25l7 7 12-14"/>',
  heart: '<path d="M24 41S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 24-18 24z"/><path d="M12 24h7l3-6 5 12 3-6h6"/>',
  send: '<path d="M43 5L5 21l14 6 6 14z"/><path d="M19 27L43 5"/>',
  kanban: '<rect x="5" y="7" width="11" height="34" rx="3"/><rect x="19" y="7" width="11" height="22" rx="3"/><rect x="33" y="7" width="10" height="28" rx="3"/>',
  dollar: '<circle cx="24" cy="24" r="18"/><path d="M29 17c-1-3-9-4-10 1s10 5 10 10-9 5-10 1M24 10v28"/>',
  laptop: '<rect x="9" y="9" width="30" height="21" rx="3"/><path d="M4 38h40l-3-8H7z"/>',
  lock: '<rect x="9" y="21" width="30" height="22" rx="5"/><path d="M15 21v-6a9 9 0 0 1 18 0v6"/><circle cx="24" cy="32" r="3" fill="currentColor"/>',
  cloud: '<path d="M14 36a9 9 0 0 1-1-18 11 11 0 0 1 21 3 7 7 0 0 1 0 15z"/><path d="M24 22v14M18 28l6-6 6 6"/>',
  chart: '<path d="M6 6v36h36"/><path d="M13 32l9-10 7 6 11-16"/>',
};

// fx: orbit | ripple | tick | scan | fly | bars
const FEATURES = [
  { g: "Find", t: "Find leads everywhere", sub: "Four lead sources and the tools to organise them.", items: [
    ["users", "People bank", "454,000+ business contacts. Filter by country, industry, size and review state.", ["orbit"]],
    ["pin", "Local · Google Maps", "Businesses by category and city, with ratings, reviews and missing website or social gaps.", ["ripple"]],
    ["play", "Creators · YouTube", "Channels by niche and size, with upload rhythm, views and contact info.", ["orbit"]],
    ["profile", "Social profiles", "Facebook, Instagram, TikTok, LinkedIn and more: inactive or low-engagement accounts that need help.", ["tick"]],
    ["tag", "Categories & niches", "Browse ready-made niches so you never start from a blank search box.", ["orbit"]],
    ["bookmark", "Saved searches & leads", "Keep searches, build lists, and never email the same person twice.", ["tick"]],
    ["target", "Opportunity detection", "Each lead is tagged with the service they most likely need: website, SEO, video, automation, app.", ["bars"]],
  ]},
  { g: "Audit", t: "Audit before you pitch", sub: "Proof you looked is what gets replies.", items: [
    ["gauge", "Channel Audit", "Thumbnail style, view ratio, Shorts, metadata and upload rhythm, scored and explained.", ["scan"]],
    ["globe", "Website Audit", "Measured HTTPS, mobile, speed, builder, SEO, tracking, booking and social signals.", ["scan"]],
    ["bolt", "Industry app ideas", "For each business type, concrete web app, SaaS and automation ideas to offer.", ["tick"]],
    ["brain", "Your own AI", "Plug in your AI providers. Your keys, your model, no markup.", ["orbit"]],
  ]},
  { g: "Pitch", t: "Show, don't tell", sub: "A sample page that does the selling for you.", items: [
    ["page", "Sample & pitch pages", "Turn an audit into a shareable page with your sample work and a clear next step.", ["tick"]],
    ["eye", "View tracking", "See who opened the page and add them to a follow-up campaign in one click.", ["ripple"]],
  ]},
  { g: "Send", t: "Campaigns that keep going", sub: "A 4-email sequence with the safe defaults built in.", items: [
    ["mail", "4-email sequence", "Day 0 (no link), 3, 7 and 14. Templates per brand, opt-out line included.", ["fly"]],
    ["clock", "Smart sending", "Sending windows, a slow daily ramp and a gap between emails from each mailbox.", ["tick"]],
    ["brand", "Multiple brands", "Separate signatures, addresses and templates for each of your brands or clients.", ["orbit"]],
    ["filter", "Rules & dry run", "Skip over-contacted and already-emailed leads. Preview the whole run before it sends.", ["scan"]],
  ]},
  { g: "Reply", t: "Replies, handled", sub: "One inbox, nothing falls through.", items: [
    ["inbox", "Unibox", "Every reply in one place with statuses: Interested, Meeting booked, Won, Not interested and more.", ["tick"]],
    ["bell", "Auto-detection", "Replies, bounces and unsubscribes are spotted and handled automatically.", ["ripple"]],
    ["chat", "WhatsApp, notes, reminders", "Jump to WhatsApp in one click, keep notes and set follow-up reminders.", ["fly"]],
  ]},
  { g: "Protect", t: "Protect your domain", sub: "Cold email lives or dies on reputation.", items: [
    ["shield", "Auto-pause on bounces", "A campaign stops itself when bounces climb past the safe line, before it hurts you.", ["ripple"]],
    ["check", "Email verification", "Check addresses before sending with your own verification provider.", ["tick"]],
    ["heart", "Deliverability health", "DNS checker, seed-inbox tests and a health score for every mailbox.", ["bars"]],
    ["send", "Instant alerts", "Get notified by email or Telegram about interested replies and problems.", ["fly"]],
  ]},
  { g: "Close", t: "Close your way", sub: "From first reply to paid project.", items: [
    ["kanban", "Pipeline", "Move leads from contacted to won on a simple board.", ["bars"]],
    ["dollar", "Get paid", "Close over WhatsApp, a bank transfer (ACH), Upwork or YouTube Jobs.", ["orbit"]],
  ]},
  { g: "Own", t: "Yours to keep", sub: "Software that runs on your computer, not ours.", items: [
    ["laptop", "Native Mac app", "Closes to the menu bar and keeps sending. Opens at login if you like.", ["tick"]],
    ["lock", "Private by design", "Your leads and mailboxes stay on your Mac. Secrets are encrypted on disk.", ["ripple"]],
    ["cloud", "Automatic backups", "Daily snapshots of your workspace so one mistake never costs you your list.", ["tick"]],
    ["chart", "Reports", "Reply rate, positive replies and results by step, in one dashboard.", ["bars"]],
  ]},
];

function fxSvg(list) {
  let s = "";
  for (const f of list) {
    if (f === "orbit") s += '<g class="orbit fx"><circle cx="60" cy="14" r="3.5" fill="#9187f5"/><circle cx="60" cy="76" r="2.5" fill="#c4b5fd"/><circle cx="104" cy="45" r="3" fill="#6d5ef3"/></g>';
    if (f === "ripple") s += '<circle class="ripple fx" cx="60" cy="45" r="22" fill="none" stroke="#9187f5" stroke-width="2"/><circle class="ripple d2 fx" cx="60" cy="45" r="22" fill="none" stroke="#9187f5" stroke-width="2"/>';
    if (f === "tick") s += '<g class="fx"><circle class="tick" cx="94" cy="22" r="8" fill="#34d399"/><path class="tick" d="M90 22l3 3 5-6" stroke="#06281d" stroke-width="2.4" fill="none"/><circle class="tick d2" cx="26" cy="66" r="7" fill="#34d399"/><circle class="tick d3" cx="98" cy="68" r="6" fill="#34d399"/></g>';
    if (f === "scan") s += '<rect class="scan fx" x="22" y="4" width="76" height="3" rx="1.5" fill="#34d399" opacity=".9"/>';
    if (f === "fly") s += '<g class="fly fx"><rect x="40" y="38" width="24" height="16" rx="3" fill="#9187f5"/><path d="M40 40l12 8 12-8" stroke="#fff" stroke-width="1.8" fill="none"/></g>';
    if (f === "bars") s += '<g class="bars fx"><rect x="86" y="46" width="6" height="30" rx="2" fill="#6d5ef3"/><rect x="95" y="40" width="6" height="36" rx="2" fill="#9187f5"/><rect x="104" y="52" width="6" height="24" rx="2" fill="#c4b5fd"/><rect x="77" y="58" width="6" height="18" rx="2" fill="#4b3dc0"/></g>';
  }
  return s;
}

function clip(glyph, fx) {
  return `<svg viewBox="0 0 120 90" fill="none" aria-hidden="true">
    <ellipse class="glow" cx="60" cy="48" rx="30" ry="24" fill="#6d5ef3" opacity=".28"/>
    <ellipse cx="60" cy="80" rx="22" ry="4" fill="#000" opacity=".35"/>
    ${fxSvg(fx)}
    <g transform="translate(29 14) scale(1.3)"><g class="gl"><g color="#fff" stroke="#c4b5fd" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="rgba(109,94,243,.35)">${G[glyph]}</g></g></g>
  </svg>`;
}

function build() {
  const root = document.getElementById("features-root");
  root.innerHTML = FEATURES.map((grp) => `
    <div class="group rv">
      <h3>${grp.g}</h3>
      <h2 style="font-size:clamp(24px,3vw,34px);text-align:center;margin-bottom:6px">${grp.t}</h2>
      <p>${grp.sub}</p>
      <div class="cards">
        ${grp.items.map(([g, t, d, fx]) => `<article class="card"><div class="clip">${clip(g, fx)}</div><h4>${t}</h4><p>${d}</p></article>`).join("")}
      </div>
    </div>`).join("");
}

// ---- pricing ----
const TIERS = [
  { id: "free", name: "Free", price: 0, tg: "Try the whole flow on your own Mac", f: ["1 mailbox", "300 emails / month", "10 audits / month", "1 active campaign", "People bank browsing (masked emails)", "Unibox"] },
  { id: "starter", name: "Starter", price: 19, tg: "Freelancers landing their first clients", vs: ["Instantly Growth", 47], f: ["3 mailboxes", "3,000 emails / month", "50 audits / month", "5 active campaigns", "500 People-bank unlocks / month", "Pitch pages", "Safety guard + bounce brakes"] },
  { id: "pro", name: "Pro", price: 34, hot: true, tg: "Marketers and small agencies, weekly outreach", vs: ["Lemlist Email", 69], f: ["10 mailboxes", "15,000 emails / month", "300 audits (channel + website)", "Unlimited campaigns", "Email verification", "Deliverability dashboard + seed tests", "Email / Telegram alerts"] },
  { id: "agency", name: "Agency", price: 69, tg: "Several brands, one outreach engine", vs: ["Smartlead Smart", 144], f: ["30 mailboxes", "60,000 emails / month", "Unlimited audits", "Multiple brands + signatures", "Daily backups", "3 team seats", "Priority support"] },
];
let yearly = true;
const money = (m) => (yearly ? Math.round((m * 10) / 12) : m);

function renderPlans() {
  document.getElementById("plans").innerHTML = TIERS.map((t) => {
    const cta = t.id === "free"
      ? `<a class="btn primary dl" href="#download">Download for Mac</a>`
      : `<a class="btn ${t.hot ? "primary" : "ghost"} early" href="#contact">Get early access</a>`;
    const vs = t.vs ? `${Math.round((1 - t.price / t.vs[1]) * 100)}% less than ${t.vs[0]} ($${t.vs[1]})` : "No card, no time limit";
    return `<div class="plan ${t.hot ? "hot" : ""}">
      ${t.hot ? '<span class="badge">Most popular</span>' : ""}
      <h3>${t.name}</h3><div class="tg">${t.tg}</div>
      <div class="price">$${money(t.price)}<small> / month</small></div>
      <div class="vs" style="${t.vs ? "" : "color:#6f789a"}">${vs}</div>
      <ul>${t.f.map((x) => `<li>${x}</li>`).join("")}</ul>${cta}</div>`;
  }).join("");
  wireLinks();
}

const BRAND_URL = "https://lcino.com";
function wireLinks() {
  // Until the installer is published, Download goes to the Lcino brand site.
  document.querySelectorAll("a.dl, a[href='#download']").forEach((a) => { a.href = CFG.dmg || BRAND_URL; if (!CFG.dmg) { a.target = "_blank"; a.rel = "noopener"; } });
  document.querySelectorAll("a.early, a[href='#contact']").forEach((a) => { a.href = CFG.contact || BRAND_URL; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("a.login").forEach((a) => { if (CFG.appUrl) a.href = CFG.appUrl; else a.style.display = "none"; });
}

// ---- behaviours ----
function tilt() {
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--cry", ((x - 0.5) * 16).toFixed(2) + "deg");
    c.style.setProperty("--crx", ((0.5 - y) * 14).toFixed(2) + "deg");
    c.style.setProperty("--gx", (x * 100).toFixed(0) + "%");
    c.style.setProperty("--gy", (y * 100).toFixed(0) + "%");
  });
  document.addEventListener("pointerout", (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (c && !c.contains(e.relatedTarget)) { c.style.setProperty("--cry", "0deg"); c.style.setProperty("--crx", "0deg"); }
  });
  const stage = document.querySelector(".stage"), world = document.querySelector(".world");
  if (stage && world) {
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      world.style.setProperty("--ry", (((e.clientX - r.left) / r.width - 0.5) * 34).toFixed(1) + "deg");
      world.style.setProperty("--rx", (8 - ((e.clientY - r.top) / r.height - 0.5) * 22).toFixed(1) + "deg");
    });
    stage.addEventListener("pointerleave", () => { world.style.setProperty("--ry", "-14deg"); world.style.setProperty("--rx", "8deg"); });
  }
}

function observe() {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    e.target.classList.toggle("on", e.isIntersecting);
    if (e.isIntersecting) e.target.classList.add("in");
  }), { threshold: 0.15 });
  document.querySelectorAll(".rv, .card").forEach((el) => io.observe(el));
}

build();
renderPlans();
wireLinks();
document.querySelectorAll(".toggle button").forEach((b) => b.addEventListener("click", () => {
  yearly = b.dataset.y === "1";
  document.querySelectorAll(".toggle button").forEach((x) => x.classList.toggle("on", x === b));
  renderPlans();
}));
tilt();
observe();
document.getElementById("yr").textContent = new Date().getFullYear();
