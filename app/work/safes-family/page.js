export const metadata = {
  title: "Safes Family — Parastoo Sadeghi",
  description:
    "Helping parents balance a child's independence with their safety — a real shipped parental control app.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800&display=swap');

.safes-page{
  --bg:#0d1530;
  --ink:#f2f4fa;
  --ink-dim:#9aa3c0;
  --rule:#232c52;
  --panel:#151f46;
  --gold:#f8b400;
  --navy:#04132c;
  background:var(--bg); color:var(--ink);
  font-family:'Mulish', -apple-system, sans-serif;
  overflow-x:hidden;
}
.safes-page *{box-sizing:border-box;}
.safes-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.safes-page a{color:inherit;}

.safes-page nav{position:sticky; top:0; z-index:10; background:rgba(13,21,48,0.9); border-bottom:1px solid var(--rule);}
.safes-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.safes-page .brand{font-weight:800; font-size:1.05rem; letter-spacing:-0.01em; text-transform:uppercase;}
.safes-page .brand span{color:var(--gold);}
.safes-page .tag{font-size:0.68rem; letter-spacing:0.08em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 14px; border-radius:99px; text-transform:uppercase;}

.safes-page header.hero{padding:80px 0 0;}
.safes-page .eyebrow{font-size:0.72rem; letter-spacing:0.12em; color:var(--gold); margin-bottom:20px; font-weight:700; text-transform:uppercase;}
.safes-page h1.title{font-weight:800; font-size:clamp(2.3rem,5vw,3.6rem); line-height:1.08; letter-spacing:-0.01em; max-width:760px;}
.safes-page .sub{margin-top:22px; font-size:1.05rem; color:var(--ink-dim); max-width:640px; line-height:1.65;}

.safes-page .link-row{display:flex; flex-wrap:wrap; gap:10px; margin-top:26px;}
.safes-page .store-link{
  display:inline-flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700;
  border:1px solid var(--rule); background:var(--panel); padding:10px 16px; border-radius:99px;
  text-decoration:none; transition:border-color 0.2s ease;
}
.safes-page .store-link:hover{border-color:var(--gold);}
.safes-page .store-link svg{flex-shrink:0;}

.safes-page .meta-row{margin-top:40px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--rule);}
.safes-page .meta-cell{padding:16px 20px 0 0; border-right:1px solid var(--rule);}
.safes-page .meta-cell:last-child{border-right:none;}
.safes-page .meta-cell .k{font-size:0.64rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px; font-weight:700;}
.safes-page .meta-cell .v{font-size:0.95rem; font-weight:700;}

.safes-page .hero-shot{margin-top:36px; border-radius:14px; overflow:hidden; box-shadow:0 40px 80px -30px rgba(0,0,0,0.6);}
.safes-page .hero-shot img{display:block; width:100%; height:auto;}

.safes-page section{padding:64px 0;}
.safes-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:34px;}
.safes-page .num{font-size:0.8rem; color:var(--gold); font-weight:800;}
.safes-page h2{font-weight:800; font-size:1.5rem; letter-spacing:-0.01em;}

.safes-page .stat-row{display:grid; grid-template-columns:repeat(5,1fr); gap:14px;}
.safes-page .stat-card{background:var(--panel); border:1px solid var(--rule); border-radius:16px; padding:22px 12px; text-align:center;}
.safes-page .stat-card .big{font-weight:800; font-size:1.9rem; font-variant-numeric:tabular-nums;}
.safes-page .stat-card .lbl{color:var(--ink-dim); font-size:0.76rem; margin-top:6px; font-weight:700; letter-spacing:0.02em; text-transform:uppercase;}

.safes-page .split{display:grid; grid-template-columns:1fr 1fr; gap:44px;}
.safes-page .split h3{font-weight:800; font-size:1.05rem; margin-bottom:12px; color:var(--gold); letter-spacing:0.02em;}
.safes-page .split p{color:var(--ink-dim); font-size:0.98rem; line-height:1.75;}

.safes-page .process-row{display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:var(--rule); border:1px solid var(--rule); border-radius:14px; overflow:hidden;}
.safes-page .process-card{background:var(--panel); padding:22px 18px;}
.safes-page .process-card h4{font-weight:800; font-size:0.98rem; margin-bottom:12px;}
.safes-page .process-card ul{list-style:none; display:flex; flex-direction:column; gap:6px;}
.safes-page .process-card li{color:var(--ink-dim); font-size:0.8rem;}

.safes-page .feature-block{margin-bottom:48px;}
.safes-page .feature-block:last-child{margin-bottom:0;}
.safes-page .feature-shot{border-radius:12px; overflow:hidden; border:1px solid var(--rule);}
.safes-page .feature-shot img{display:block; width:100%; height:auto;}
.safes-page .feature-caption{margin-top:14px; max-width:840px;}
.safes-page .feature-caption .t{font-weight:800; font-size:1.02rem; margin-bottom:6px; color:var(--gold);}
.safes-page .feature-caption p{color:var(--ink-dim); font-size:0.92rem; line-height:1.65;}

.safes-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}
.safes-page footer .note{margin-top:8px; font-size:0.72rem; opacity:0.75;}

@media(max-width:900px){
  .safes-page .meta-row{grid-template-columns:1fr;}
  .safes-page .meta-cell{border-right:none; border-bottom:1px solid var(--rule); padding-bottom:14px; margin-bottom:14px;}
  .safes-page .stat-row{grid-template-columns:repeat(2,1fr);}
  .safes-page .split{grid-template-columns:1fr; gap:28px;}
  .safes-page .process-row{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">safes family<span>.</span></div>
    <div class="tag">REAL PROJECT · 2022</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">PRODUCT DESIGN · PARENTAL CONTROL · MOBILE</div>
    <h1 class="title">Helping parents balance a child's independence with their safety.</h1>
    <p class="sub">Safes Family is a parental control app that gives parents live location tracking, geofencing, screen time management, and app monitoring, without compromising a child's privacy more than necessary.</p>

    <div class="link-row">
      <a class="store-link" href="https://apps.apple.com/us/app/parental-control-app-safes/id1611890499" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M10.6 0c.1.8-.2 1.6-.7 2.2-.5.6-1.3 1.1-2.1 1-.1-.8.3-1.6.7-2.1C9 .5 9.8.1 10.6 0zM12.9 5.3c-.7.4-1.2 1.1-1.2 2 0 1 .6 1.8 1.3 2.2-.2.6-.5 1.2-.9 1.7-.5.7-1 1.5-1.8 1.5-.7 0-1-.5-1.9-.5s-1.2.4-1.9.5c-.8 0-1.4-.8-1.9-1.5-1-1.5-1.8-4.1-.7-5.9.5-.9 1.4-1.5 2.4-1.5.7 0 1.4.5 1.9.5.4 0 1.3-.6 2.2-.5.4 0 1.5.2 2.2 1.2-.1 0-.1 0-.1.3z"/></svg>
        App Store
      </a>
      <a class="store-link" href="https://play.google.com/store/apps/details?id=de.sternx.safes&hl=en_CA" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1 1 L1 14 L11 7.5 Z" fill="currentColor"/></svg>
        Google Play
      </a>
      <a class="store-link" href="https://www.safes.so/" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="7.5" cy="7.5" r="6.5"/><path d="M1 7.5 L14 7.5 M7.5 1 C10 3.5 10 11.5 7.5 14 M7.5 1 C5 3.5 5 11.5 7.5 14"/></svg>
        safes.so
      </a>
    </div>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Studio</div><div class="v">Sternx</div></div>
      <div class="meta-cell"><div class="k">Year</div><div class="v">2022</div></div>
      <div class="meta-cell"><div class="k">Platform</div><div class="v">iOS · Android</div></div>
    </div>

    <div class="hero-shot"><img src="/assets/safes/hero.png" alt="Safes Family case study title slide with live location and screen time phone mockups"></div>
  </div>
</header>

<section id="stats">
  <div class="wrap">
    <div class="stat-row">
      <div class="stat-card"><div class="big" style="color:#ff5371;">16</div><div class="lbl">Interviews</div></div>
      <div class="stat-card"><div class="big" style="color:#6a86ea;">60+</div><div class="lbl">Components</div></div>
      <div class="stat-card"><div class="big" style="color:#73ff5c;">24</div><div class="lbl">Weeks</div></div>
      <div class="stat-card"><div class="big" style="color:#33ceff;">40+</div><div class="lbl">Screens</div></div>
      <div class="stat-card"><div class="big" style="color:#ff61dc;">120</div><div class="lbl">Online Survey</div></div>
    </div>
  </div>
</section>

<section id="overview">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>Problem and solution</h2></div>
    <div class="split">
      <div>
        <h3>Problem statement</h3>
        <p>Parents struggle to balance their children's independence and access to technology with their safety and well-being. Many parents are concerned about their children's online activity and exposure to inappropriate content, and they want a way to monitor and control their children's devices without compromising their privacy.</p>
      </div>
      <div>
        <h3>Solution</h3>
        <p>Safes Family offers a range of features to monitor and control children's devices while promoting healthy technology usage: live location tracking, geofencing, Smart App Rules, Smart Screen Time management, app monitoring, Safe Search, and web filtering. By balancing independence and safety, Safes Family gives parents peace of mind in the digital world.</p>
      </div>
    </div>
  </div>
</section>

<section id="process">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Design process</h2></div>
    <div class="process-row">
      <div class="process-card">
        <h4>Discover</h4>
        <ul><li>Stakeholder interview</li><li>User research</li><li>User interview</li><li>Competitive analysis</li></ul>
      </div>
      <div class="process-card">
        <h4>Define</h4>
        <ul><li>Design strategy</li><li>User persona</li><li>Empathy map</li><li>User journey</li></ul>
      </div>
      <div class="process-card">
        <h4>Ideate</h4>
        <ul><li>Brainstorming</li><li>User flow</li><li>Information architecture</li></ul>
      </div>
      <div class="process-card">
        <h4>Design</h4>
        <ul><li>Hi-fi designs</li><li>Prototype</li></ul>
      </div>
      <div class="process-card">
        <h4>Test</h4>
        <ul><li>Usability testing</li></ul>
      </div>
    </div>
  </div>
</section>

<section id="screens">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>Key flows</h2></div>

    <div class="feature-block">
      <div class="feature-shot"><img src="/assets/safes/onboarding.png" alt="Safes Family onboarding screens introducing the app's core features"></div>
      <div class="feature-caption">
        <div class="t">Onboarding</div>
        <p>After launching the app, the user is directed to the onboarding flow, which introduces the app's capabilities through short, informative paragraphs so a first-time parent understands what the app does before creating an account.</p>
      </div>
    </div>

    <div class="feature-block">
      <div class="feature-shot"><img src="/assets/safes/geofence.png" alt="Safes Family geofence screens for adding, editing, and viewing a virtual safety boundary"></div>
      <div class="feature-caption">
        <div class="t">Geofence</div>
        <p>A geofence is a virtual boundary around a real-world location that triggers an alert when a child's device enters or leaves it. Parents can add, edit, or delete geofences, and review the last check-in and checkout time for each one.</p>
      </div>
    </div>

    <div class="feature-block">
      <div class="feature-shot"><img src="/assets/safes/smart-screen.png" alt="Safes Family smart screen time screens with usage bar chart and app limits"></div>
      <div class="feature-caption">
        <div class="t">Smart Screen</div>
        <p>Parents can monitor screen time with a simple bar-chart overview, see the most-used apps, and set time limits on individual apps, promoting a healthier balance between screen time and other activities.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">Safes Family, product design work, 2022.</div>
</footer>
`;

export default function SafesFamilyCaseStudy() {
  return (
    <div className="safes-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
