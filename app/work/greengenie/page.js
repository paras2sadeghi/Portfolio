export const metadata = {
  title: "GreenGenie — Parastoo Sadeghi",
  description:
    "A plant care companion and the first app Parastoo Sadeghi designed end to end.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

.greengenie-page{
  --bg:#f7faf5;
  --ink:#16261c;
  --ink-dim:#5c6b5f;
  --rule:#dde6d8;
  --panel:#ffffff;
  --green:#2f6b4f;
  --green-dark:#12251a;
  background:var(--bg); color:var(--ink);
  font-family:'Quicksand', -apple-system, sans-serif;
  overflow-x:hidden;
}
.greengenie-page *{box-sizing:border-box;}
.greengenie-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.greengenie-page a{color:inherit;}
.greengenie-page nav{position:sticky; top:0; z-index:10; background:rgba(247,250,245,0.9); border-bottom:1px solid var(--rule);}
.greengenie-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.greengenie-page .brand{font-weight:700; font-size:1.1rem;}
.greengenie-page .brand span{color:var(--green);}
.greengenie-page .tag{font-size:0.68rem; letter-spacing:0.08em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 14px; border-radius:99px; text-transform:uppercase;}
.greengenie-page header.hero{padding:80px 0 0;}
.greengenie-page .eyebrow{font-size:0.72rem; letter-spacing:0.12em; color:var(--green); margin-bottom:20px; font-weight:700; text-transform:uppercase;}
.greengenie-page h1.title{font-weight:700; font-size:clamp(2.3rem,5vw,3.6rem); line-height:1.1; letter-spacing:-0.01em; max-width:700px;}
.greengenie-page .sub{margin-top:22px; font-size:1.05rem; color:var(--ink-dim); max-width:600px; line-height:1.65;}
.greengenie-page .meta-row{margin-top:40px; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--rule);}
.greengenie-page .meta-cell{padding:16px 20px 0 0; border-right:1px solid var(--rule);}
.greengenie-page .meta-cell:last-child{border-right:none;}
.greengenie-page .meta-cell .k{font-size:0.64rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px; font-weight:700;}
.greengenie-page .meta-cell .v{font-size:0.95rem; font-weight:700;}
.greengenie-page section{padding:64px 0;}
.greengenie-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:34px;}
.greengenie-page .num{font-size:0.8rem; color:var(--green); font-weight:700;}
.greengenie-page h2{font-weight:700; font-size:1.5rem; letter-spacing:-0.01em;}
.greengenie-page .overview p{color:var(--ink-dim); font-size:1rem; line-height:1.75; max-width:760px;}
.greengenie-page .overview p + p{margin-top:14px;}
.greengenie-page .screens{display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:8px;}
.greengenie-page .screen-col{display:flex; flex-direction:column; align-items:center; gap:16px;}
.greengenie-page .screen-label{text-align:center;}
.greengenie-page .screen-label .t{font-weight:700; font-size:0.98rem;}
.greengenie-page .screen-label .d{color:var(--ink-dim); font-size:0.82rem; margin-top:4px; line-height:1.5;}
.greengenie-page .device-stage{position:relative; padding:18px 14px 30px;}
.greengenie-page .device-stage::after{content:""; position:absolute; left:50%; bottom:6px; transform:translateX(-50%); width:150px; height:20px; background:radial-gradient(ellipse, rgba(20,40,25,0.18), transparent 70%); filter:blur(6px); z-index:0;}
.greengenie-page .shot{width:220px; border-radius:30px; position:relative; z-index:1; overflow:hidden; box-shadow:0 40px 60px -26px rgba(20,40,25,0.35);}
.greengenie-page .shot img{display:block; width:100%; height:auto;}
.greengenie-page .reflect{border:1px solid var(--rule); border-radius:16px; padding:44px; background:var(--panel);}
.greengenie-page .reflect p{color:var(--ink-dim); font-size:1rem; line-height:1.8; max-width:720px;}
.greengenie-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}
@media(max-width:900px){
  .greengenie-page .meta-row{grid-template-columns:1fr;}
  .greengenie-page .meta-cell{border-right:none; border-bottom:1px solid var(--rule); padding-bottom:14px; margin-bottom:14px;}
  .greengenie-page .screens{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <a class="brand" href="/work">greengenie<span>.</span></a>
    <div class="tag">Real project · First app</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">Product design · Personal project · Mobile</div>
    <h1 class="title">The app that taught me how to actually design an app.</h1>
    <p class="sub">GreenGenie is a plant care companion, and the first real app I ever designed end to end: scan or search a plant, get told exactly how to keep it alive, and get gently nudged before you forget to water it.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Type</div><div class="v">Personal project</div></div>
      <div class="meta-cell"><div class="k">Platform</div><div class="v">iOS</div></div>
    </div>
  </div>
</header>

<section id="overview">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>Overview</h2></div>
    <div class="overview">
      <p>Before this, I had never taken a product from a blank page through onboarding, a core loop, and a real edge case: what happens when you do not know what plant you own?</p>
      <p>GreenGenie became the project where I learned that lesson. Identify a plant by scanning or searching it, get simple, specific care instructions, and get reminded of what it needs before it wilts.</p>
    </div>
  </div>
</section>

<section id="screens">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Key screens</h2></div>
    <div class="screens">
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/greengenie/onboarding-hero.png" alt="GreenGenie onboarding screen with fern photography and a get started button"></div></div>
        <div class="screen-label"><div class="t">Onboarding</div><div class="d">Full-bleed plant photography up front, so the app feels like plants before it feels like software.</div></div>
      </div>
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/greengenie/home-dashboard.png" alt="GreenGenie home dashboard showing plants that need attention and fertilizer reminders"></div></div>
        <div class="screen-label"><div class="t">Home</div><div class="d">Leads with what needs attention today, not a static list of every plant you own.</div></div>
      </div>
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/greengenie/plant-scan-result.png" alt="GreenGenie plant identification result screen for a ZZ Plant with care instructions"></div></div>
        <div class="screen-label"><div class="t">Plant ID result</div><div class="d">Scanning an unknown plant returns care instructions immediately, not just a name.</div></div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>Reflection</h2></div>
    <div class="reflect">
      <p>Looking back at this one is a little humbling, and that is the point of keeping it in the portfolio. The gap between GreenGenie and the work I do now is the clearest evidence I have that the process matters more than any single screen.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">GreenGenie, a personal project and my first app.</div>
</footer>
`;

export default function GreenGenieCaseStudy() {
  return (
    <div className="greengenie-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
