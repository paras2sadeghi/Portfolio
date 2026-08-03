export const metadata = {
  title: "Connected Health Platform — Parastoo Sadeghi",
  description:
    "Series A investor pitch deck for a connected health platform. Client details anonymized under NDA.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

.pitch-page{
  --bg:#03070b;
  --ink:#f3f6f5;
  --ink-dim:rgba(243,246,245,.55);
  --rule:rgba(255,255,255,.1);
  --teal:#00d4a8;
  background:var(--bg); color:var(--ink);
  font-family:'Inter', -apple-system, sans-serif;
  overflow-x:hidden;
}
.pitch-page *{box-sizing:border-box;}
.pitch-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.pitch-page a{color:inherit;}

.pitch-page nav{position:sticky; top:0; z-index:10; background:rgba(3,7,11,.92); border-bottom:1px solid var(--rule);}
.pitch-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.pitch-page .brand{font-weight:700; font-size:1.05rem; letter-spacing:-0.01em;}
.pitch-page .brand span{color:var(--teal);}
.pitch-page .tag{font-family:'JetBrains Mono', monospace; font-size:0.64rem; letter-spacing:0.08em; color:var(--teal); border:1px solid rgba(0,212,168,.35); padding:6px 14px; border-radius:99px; text-transform:uppercase;}

.pitch-page header.hero{padding:80px 0 0;}
.pitch-page .eyebrow{font-family:'JetBrains Mono', monospace; font-size:0.72rem; letter-spacing:0.1em; color:var(--teal); margin-bottom:20px; font-weight:600; text-transform:uppercase;}
.pitch-page h1.title{font-weight:800; font-size:clamp(2.3rem,5vw,3.6rem); line-height:1.08; letter-spacing:-0.02em; max-width:760px;}
.pitch-page .sub{margin-top:22px; font-size:1.05rem; color:var(--ink-dim); max-width:640px; line-height:1.65;}
.pitch-page .nda{margin-top:24px; display:inline-flex; align-items:center; gap:8px; font-family:'JetBrains Mono', monospace; font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--teal); border:1px solid rgba(0,212,168,.3); padding:8px 14px; border-radius:99px;}

.pitch-page .meta-row{margin-top:40px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--rule);}
.pitch-page .meta-cell{padding:16px 20px 0 0; border-right:1px solid var(--rule);}
.pitch-page .meta-cell:last-child{border-right:none;}
.pitch-page .meta-cell .k{font-family:'JetBrains Mono', monospace; font-size:0.64rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px;}
.pitch-page .meta-cell .v{font-size:0.95rem; font-weight:700;}

.pitch-page section{padding:64px 0;}
.pitch-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:34px;}
.pitch-page .num{font-family:'JetBrains Mono', monospace; font-size:0.8rem; color:var(--teal);}
.pitch-page h2{font-weight:800; font-size:1.5rem; letter-spacing:-0.01em;}

.pitch-page .overview p{color:var(--ink-dim); font-size:1rem; line-height:1.75; max-width:760px;}
.pitch-page .overview p + p{margin-top:14px;}

.pitch-page .frames{display:grid; grid-template-columns:repeat(2,1fr); gap:24px;}
.pitch-page .frame{border:1px solid var(--rule); border-radius:14px; overflow:hidden; background:rgba(255,255,255,.02);}
.pitch-page .frame img{display:block; width:100%; height:auto;}
.pitch-page .frame-cap{padding:16px 18px; border-top:1px solid var(--rule);}
.pitch-page .frame-cap .t{font-weight:700; font-size:0.95rem; margin-bottom:4px;}
.pitch-page .frame-cap .d{color:var(--ink-dim); font-size:0.82rem; line-height:1.5;}

.pitch-page .reflect{border:1px solid var(--rule); border-radius:16px; padding:44px; background:rgba(255,255,255,.02);}
.pitch-page .reflect p{color:var(--ink-dim); font-size:1rem; line-height:1.8; max-width:720px;}
.pitch-page .reflect p + p{margin-top:14px;}

.pitch-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}

@media(max-width:900px){
  .pitch-page .meta-row{grid-template-columns:1fr 1fr;}
  .pitch-page .meta-cell:nth-child(2){border-right:none;}
  .pitch-page .frames{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <a class="brand" href="/work">connected health<span>.</span></a>
    <div class="tag">Under NDA</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">Product design · Investor pitch · Healthcare</div>
    <h1 class="title">A Series A narrative for a connected health platform.</h1>
    <p class="sub">A scroll-driven investor pitch deck designed to communicate platform vision, clinical AI, distributed care infrastructure, and go-to-market strategy — built for a confidential healthcare client.</p>
    <div class="nda">● Client &amp; product details anonymized</div>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Lead Product Designer</div></div>
      <div class="meta-cell"><div class="k">Deliverable</div><div class="v">Investor pitch deck</div></div>
      <div class="meta-cell"><div class="k">Year</div><div class="v">2026</div></div>
      <div class="meta-cell"><div class="k">Format</div><div class="v">Web · Scroll deck</div></div>
    </div>
  </div>
</header>

<section id="overview">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>Overview</h2></div>
    <div class="overview">
      <p>The brief was to turn a complex healthcare platform story into a pitch investors could follow in one sitting: market opportunity, product ecosystem, clinical AI layer, physical distribution, and the team behind it.</p>
      <p>The deck uses full-viewport sections, scroll-snap pacing, and a dark clinical aesthetic so each chapter lands before the next begins. Motion and data visualizations support the narrative without overwhelming it.</p>
    </div>
  </div>
</section>

<section id="frames">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Selected frames</h2></div>
    <div class="frames">
      <div class="frame">
        <img src="/assets/connected-health-pitch/ai-clinical-assistant.png" alt="AI clinical assistant interface concept">
        <div class="frame-cap"><div class="t">Clinical AI layer</div><div class="d">Positioning the AI assistant as the clinical brain of the platform — mobile-first, premium, trustworthy.</div></div>
      </div>
      <div class="frame">
        <img src="/assets/connected-health-pitch/care-network.png" alt="Distributed care network visualization">
        <div class="frame-cap"><div class="t">Distributed care network</div><div class="d">Visualizing physical touchpoints and how software connects to real-world care delivery.</div></div>
      </div>
      <div class="frame">
        <img src="/assets/connected-health-pitch/wearable-health.png" alt="Wearable health platform dashboard">
        <div class="frame-cap"><div class="t">Wearable integration</div><div class="d">Connecting patient signals from devices into a unified health profile.</div></div>
      </div>
      <div class="frame">
        <img src="/assets/connected-health-pitch/patient-signals.png" alt="Verified patient signals dashboard">
        <div class="frame-cap"><div class="t">Verified patient signals</div><div class="d">Data integrity and clinical trust as a design problem, not just an engineering one.</div></div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>Reflection</h2></div>
    <div class="reflect">
      <p>Pitch decks are editorial products. The hardest design decisions were what to leave out — every section had to earn its place in a 12-minute investor read.</p>
      <p>Client and product names are withheld under NDA. Frames shown here are representative of the visual system and narrative structure, not a public reproduction of the deck.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">Connected Health Platform — investor pitch design, 2026. Details anonymized under NDA.</div>
</footer>
`;

export default function ConnectedHealthPitchCaseStudy() {
  return (
    <div className="pitch-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
