// One footer for every page. Edit here and every page follows.
(function () {
  const C = Object.assign({ email: "" }, window.LCINO || {});
  const y = new Date().getFullYear();
  const home = location.pathname.endsWith("index.html") || location.pathname === "/" ? "" : "/";
  document.getElementById("site-footer").innerHTML = `
  <footer class="foot"><div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="logo" href="/"><img src="/assets/logo-mark.svg" alt="">Lcino<b>Outreach</b></a>
        <p class="about">Audit-first cold outreach for freelancers, marketers and agencies. Find leads, audit them, send a sample and run the follow-ups, from your own Mac.</p>
        <a class="byline" href="https://lcino.com" target="_blank" rel="noopener">A product of <b>Lcino</b> ↗</a>
      </div>
      <div><h5>Product</h5><ul>
        <li><a href="${home}#features">Features</a></li><li><a href="${home}#how">How it works</a></li>
        <li><a href="${home}#compare">Compare</a></li><li><a href="${home}#pricing">Pricing</a></li><li><a href="${home}#faq">FAQ</a></li></ul></div>
      <div><h5>Legal</h5><ul>
        <li><a href="/terms">Terms &amp; Conditions</a></li><li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/refund">Refund Policy</a></li><li><a href="/acceptable-use">Acceptable Use &amp; Anti-spam</a></li></ul></div>
      <div><h5>Company</h5><ul>
        <li><a href="https://lcino.com" target="_blank" rel="noopener">Lcino.com ↗</a></li>
        <li><a href="/affiliate">Affiliate program · 20%</a></li>
        <li><a href="${C.email ? "mailto:" + C.email : "https://lcino.com"}" ${C.email ? "" : 'target="_blank" rel="noopener"'}>Contact &amp; support</a></li></ul></div>
    </div>
    <div class="foot-bottom">
      <span>© ${y} <a href="https://lcino.com" target="_blank" rel="noopener">Lcino</a>. All rights reserved. Lcino Outreach is developed and published by Lcino.</span>
      <span><a href="/terms">Terms</a> · <a href="/privacy">Privacy</a> · <a href="/refund">Refunds</a></span>
    </div>
    <p class="disclaimer">YouTube and Google Maps are trademarks of Google LLC; Facebook, Instagram and WhatsApp are trademarks of Meta Platforms, Inc.; LinkedIn, TikTok, Upwork and the other names shown are trademarks of their respective owners. Lcino Outreach is an independent product and is not affiliated with, endorsed by or sponsored by any of them. Competitor names and prices are used for factual comparison only.</p>
  </div></footer>`;
})();
