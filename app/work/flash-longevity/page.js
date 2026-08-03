export const metadata = {
  title: "Flash Longevity — Parastoo Sadeghi",
  description:
    "Landing page design for Flash Pharmacy's longevity and biological-age program.",
};

const LIVE_URL = "https://longevity-pk75.vercel.app/#longevity";

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

.longevity-page{
  --bg:#eef6fc;
  --ink:#0f2940;
  --ink-dim:#4a6a85;
  --rule:rgba(15,41,64,.12);
  --sky:#7eb8e8;
  background:var(--bg); color:var(--ink);
  font-family:'DM Sans', -apple-system, sans-serif;
  overflow-x:hidden;
}
.longevity-page *{box-sizing:border-box;}
.longevity-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.longevity-page a{color:inherit;}

.longevity-page nav{position:sticky; top:0; z-index:10; background:rgba(238,246,252,.92); backdrop-filter:blur(12px); border-bottom:1px solid var(--rule);}
.longevity-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.longevity-page .brand{font-weight:700; font-size:1.05rem; letter-spacing:-0.01em;}
.longevity-page .brand span{color:var(--sky);}
.longevity-page .tag{font-size:0.68rem; letter-spacing:0.08em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 14px; border-radius:99px; text-transform:uppercase;}
.longevity-page .live-link{font-size:0.85rem; font-weight:600; color:var(--sky); text-decoration:none;}
.longevity-page .live-link:hover{text-decoration:underline;}

.longevity-page header.hero{padding:72px 0 40px;}
.longevity-page .eyebrow{font-size:0.72rem; letter-spacing:0.12em; color:var(--sky); margin-bottom:20px; font-weight:700; text-transform:uppercase;}
.longevity-page h1.title{font-weight:700; font-size:clamp(2.3rem,5vw,3.4rem); line-height:1.1; letter-spacing:-0.02em; max-width:720px;}
.longevity-page .sub{margin-top:22px; font-size:1.05rem; color:var(--ink-dim); max-width:600px; line-height:1.65;}

.longevity-page .meta-row{margin-top:36px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--rule);}
.longevity-page .meta-cell{padding:16px 20px 0 0; border-right:1px solid var(--rule);}
.longevity-page .meta-cell:last-child{border-right:none;}
.longevity-page .meta-cell .k{font-size:0.64rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px; font-weight:700;}
.longevity-page .meta-cell .v{font-size:0.95rem; font-weight:700;}

.longevity-page section{padding:48px 0 64px;}
.longevity-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:24px;}
.longevity-page .num{font-size:0.8rem; color:var(--sky); font-weight:700;}
.longevity-page h2{font-weight:700; font-size:1.5rem; letter-spacing:-0.01em;}

.longevity-page .overview p{color:var(--ink-dim); font-size:1rem; line-height:1.75; max-width:760px;}
.longevity-page .overview p + p{margin-top:14px;}

.longevity-page .preview-wrap{border:1px solid var(--rule); border-radius:16px; overflow:hidden; background:#fff; box-shadow:0 40px 80px -40px rgba(15,41,64,.2);}
.longevity-page .preview-bar{display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 16px; border-bottom:1px solid var(--rule); background:rgba(255,255,255,.8); font-size:0.78rem; color:var(--ink-dim);}
.longevity-page .preview-frame{position:relative; width:100%; height:min(85vh,900px); background:#e8f4fc;}
.longevity-page .preview-frame iframe{position:absolute; inset:0; width:100%; height:100%; border:0;}

.longevity-page .pill-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px;}
.longevity-page .pill{border:1px solid var(--rule); border-radius:12px; padding:20px; background:rgba(255,255,255,.6);}
.longevity-page .pill .t{font-weight:700; font-size:0.95rem; margin-bottom:6px;}
.longevity-page .pill .d{color:var(--ink-dim); font-size:0.82rem; line-height:1.5;}

.longevity-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}

@media(max-width:900px){
  .longevity-page .meta-row{grid-template-columns:1fr 1fr;}
  .longevity-page .meta-cell:nth-child(2){border-right:none;}
  .longevity-page .pill-grid{grid-template-columns:1fr;}
  .longevity-page .preview-frame{height:70vh;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <a class="brand" href="/work">flash longevity<span>.</span></a>
    <div style="display:flex;align-items:center;gap:16px;">
      <a class="live-link" href="${LIVE_URL}" target="_blank" rel="noopener">Open live site ↗</a>
      <div class="tag">Real project · Flash Pharmacy</div>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">Product design · Healthcare · Web</div>
    <h1 class="title">A longevity landing page built to feel calm, clinical, and clear.</h1>
    <p class="sub">Flash Longevity is a biological-age program for employees and individuals. The landing page uses glassmorphism, ambient motion, and a sky-toned palette to make complex health data feel approachable.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Lead Product Designer</div></div>
      <div class="meta-cell"><div class="k">Client</div><div class="v">Flash Pharmacy</div></div>
      <div class="meta-cell"><div class="k">Year</div><div class="v">2026</div></div>
      <div class="meta-cell"><div class="k">Stack</div><div class="v">React · Vite · Motion</div></div>
    </div>
  </div>
</header>

<section id="overview">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>Overview</h2></div>
    <div class="overview">
      <p>The page walks users from emotional hook to clinical trust: hero with ambient particles, biomarker marquee, 40+ marker explorer, pinned how-it-works, testimonial wall, pricing, and comparison table.</p>
      <p>Built with Framer Motion and Lenis smooth scroll. The visual language is bright glass over continuous sky — spa-calm, not clinical-cold.</p>
    </div>
  </div>
</section>

<section id="preview">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Live preview</h2></div>
    <div class="preview-wrap">
      <div class="preview-bar">
        <span>longevity-pk75.vercel.app</span>
        <a class="live-link" href="${LIVE_URL}" target="_blank" rel="noopener">Open full screen ↗</a>
      </div>
      <div class="preview-frame">
        <iframe src="${LIVE_URL}" title="Flash Longevity landing page preview" loading="lazy"></iframe>
      </div>
    </div>

    <div class="pill-grid">
      <div class="pill"><div class="t">Biomarker explorer</div><div class="d">40+ markers presented as an interactive panel, not a static list.</div></div>
      <div class="pill"><div class="t">Pinned storytelling</div><div class="d">Scroll-driven how-it-works section that holds attention through the flow.</div></div>
      <div class="pill"><div class="t">Trust &amp; pricing</div><div class="d">Clinical credibility, social proof, and a clear $25/mo entry point.</div></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">Flash Longevity — product design for Flash Pharmacy, 2026.</div>
</footer>
`;

export default function FlashLongevityCaseStudy() {
  return (
    <div className="longevity-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
