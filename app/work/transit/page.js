export const metadata = {
  title: "Transit — Parastoo Sadeghi",
  description:
    "A redesign of the everyday transit app, rebuilding trust in real-time predictions through honest uncertainty, not false precision.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap');

.transit-page{
  --paper:#ffffff;
  --ink:#111111;
  --ink-dim:#5c5c5c;
  --rule:#111111;
  --red:#d81e05;
  background:var(--paper); color:var(--ink);
  font-family:'Public Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  overflow-x:hidden;
  font-variant-numeric:tabular-nums;
}
.transit-page *{box-sizing:border-box;}
.transit-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.transit-page a{color:inherit;}

.transit-page nav{position:sticky; top:0; z-index:10; background:var(--paper); border-bottom:3px solid var(--ink);}
.transit-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.transit-page .brand{font-weight:800; font-size:1.15rem; text-transform:uppercase; letter-spacing:-0.01em;}
.transit-page .brand span{color:var(--red);}
.transit-page .tag{font-size:0.68rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink); border:2px solid var(--ink); padding:6px 12px;}

.transit-page header.hero{padding:76px 0 56px;}
.transit-page .eyebrow{font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:22px; font-weight:600;}
.transit-page h1.title{font-weight:800; font-size:clamp(2.5rem,6vw,4.6rem); line-height:0.98; letter-spacing:-0.02em; max-width:820px; text-transform:uppercase;}
.transit-page h1.title .red{color:var(--red);}
.transit-page .sub{margin-top:24px; font-size:1.12rem; color:var(--ink-dim); max-width:560px; line-height:1.6; font-weight:500;}

.transit-page .meta-row{margin-top:48px; display:grid; grid-template-columns:repeat(4,1fr); border-top:3px solid var(--ink);}
.transit-page .meta-cell{padding:18px 22px 0 0; border-right:1px solid var(--ink);}
.transit-page .meta-cell:last-child{border-right:none;}
.transit-page .meta-cell .k{font-size:0.66rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px; font-weight:600;}
.transit-page .meta-cell .v{font-weight:700; font-size:1.02rem;}

.transit-page section{padding:76px 0;}
.transit-page .section-head{display:flex; align-items:baseline; gap:16px; margin-bottom:40px;}
.transit-page .num{font-weight:800; font-size:1rem; color:var(--red);}
.transit-page h2{font-weight:800; font-size:1.75rem; letter-spacing:-0.015em; text-transform:uppercase;}

.transit-page .problem-grid{display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:start;}
.transit-page .problem-grid p{color:var(--ink-dim); line-height:1.75; font-size:1.02rem; font-weight:500;}
.transit-page .problem-grid p + p{margin-top:16px;}
.transit-page .stat-stack{display:flex; flex-direction:column; gap:2px; background:var(--ink);}
.transit-page .stat-card{background:var(--paper); padding:20px 24px;}
.transit-page .stat-card .big{font-weight:800; font-size:2.3rem; letter-spacing:-0.02em;}
.transit-page .stat-card .lbl{color:var(--ink-dim); font-size:0.85rem; margin-top:4px; font-weight:500;}
.transit-page .foot-note{margin-top:18px; font-size:0.72rem; color:var(--ink-dim);}

.transit-page .insight-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--ink); border:1px solid var(--ink);}
.transit-page .insight-card{background:var(--paper); padding:28px 26px;}
.transit-page .insight-card .icon{width:36px; height:36px; margin-bottom:18px; display:flex; align-items:center; justify-content:center; border:2px solid var(--ink); border-radius:50%;}
.transit-page .insight-card h3{font-weight:800; font-size:1.05rem; margin-bottom:10px;}
.transit-page .insight-card p{color:var(--ink-dim); font-size:0.9rem; line-height:1.6; font-weight:500;}

.transit-page .screens{display:grid; grid-template-columns:repeat(3,1fr); gap:32px; margin-top:8px;}
.transit-page .screen-col{display:flex; flex-direction:column; align-items:center; gap:18px;}
.transit-page .screen-label{text-align:center;}
.transit-page .screen-label .t{font-weight:800; font-size:0.98rem;}
.transit-page .screen-label .d{color:var(--ink-dim); font-size:0.8rem; margin-top:4px; font-weight:500;}

.transit-page .device-stage{position:relative; padding:20px 16px 30px;}
.transit-page .device-stage::after{
  content:""; position:absolute; left:50%; bottom:8px; transform:translateX(-50%);
  width:170px; height:24px; background:radial-gradient(ellipse, rgba(17,17,17,0.28), transparent 70%);
  filter:blur(7px); z-index:0;
}
.transit-page .phone{
  width:264px; height:552px; border-radius:46px; position:relative; z-index:1; padding:5px;
  background:linear-gradient(155deg, #3d3d3d 0%, #161616 22%, #050505 50%, #1a1a1a 78%, #383838 100%);
  box-shadow:
    0 60px 70px -30px rgba(0,0,0,0.5),
    0 18px 28px -18px rgba(0,0,0,0.45);
}
.transit-page .phone::before{
  content:""; position:absolute; inset:5px; border-radius:41px; pointer-events:none; z-index:2;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14), inset 0 0 0 2px rgba(0,0,0,0.5);
}
.transit-page .phone-btn{position:absolute; background:linear-gradient(90deg, #0a0a0a, #2c2c2c); z-index:0;}
.transit-page .phone-btn.power{right:-2.5px; top:148px; width:3px; height:68px; border-radius:0 3px 3px 0;}
.transit-page .phone-btn.mute{left:-2.5px; top:100px; width:3px; height:18px; border-radius:3px 0 0 3px;}
.transit-page .phone-btn.vol-up{left:-2.5px; top:126px; width:3px; height:34px; border-radius:3px 0 0 3px;}
.transit-page .phone-btn.vol-down{left:-2.5px; top:168px; width:3px; height:34px; border-radius:3px 0 0 3px;}
.transit-page .phone-screen{width:100%; height:100%; border-radius:41px; overflow:hidden; position:relative; background:var(--paper); color:var(--ink); z-index:1;}
.transit-page .notch{position:absolute; top:13px; left:50%; transform:translateX(-50%); width:92px; height:26px; background:#000; border-radius:15px; z-index:6;}
.transit-page .status{display:flex; justify-content:space-between; padding:20px 20px 0; font-size:0.66rem; font-weight:700;}
.transit-page .app-content{padding:36px 0 16px; height:100%; position:relative;}
.transit-page .app-h1{font-weight:800; font-size:1.2rem; padding:0 18px; margin-bottom:2px; text-transform:uppercase;}
.transit-page .app-sub{color:var(--ink-dim); font-size:0.72rem; font-weight:600; padding:0 18px; margin-bottom:16px;}

.transit-page .route-row{display:flex; align-items:center; gap:12px; padding:14px 18px; border-top:1px solid var(--ink);}
.transit-page .route-row:last-of-type{border-bottom:1px solid var(--ink);}
.transit-page .route-bar{width:5px; align-self:stretch; flex-shrink:0;}
.transit-page .route-bar.ok{background:var(--ink);}
.transit-page .route-bar.alert{background:var(--red);}
.transit-page .route-info{flex:1; min-width:0;}
.transit-page .route-info .line{font-size:0.84rem; font-weight:700;}
.transit-page .route-info .eta{font-size:0.68rem; color:var(--ink-dim); font-weight:600; margin-top:2px;}
.transit-page .eta-badge{font-weight:800; font-size:1.15rem; flex-shrink:0;}
.transit-page .eta-badge.alert{color:var(--red);}

.transit-page .line-diagram{padding:20px 18px; border-top:1px solid var(--ink); border-bottom:1px solid var(--ink); margin:14px 0;}
.transit-page .line-track{display:flex; align-items:center;}
.transit-page .line-stop{width:11px; height:11px; border-radius:50%; background:var(--ink); border:2px solid var(--ink); flex-shrink:0;}
.transit-page .line-stop.now{background:var(--red); border-color:var(--red);}
.transit-page .line-seg{height:2px; background:var(--ink); flex:1;}
.transit-page .line-labels{display:flex; justify-content:space-between; font-size:0.6rem; font-weight:700; text-transform:uppercase; margin-top:8px; color:var(--ink-dim);}

.transit-page .big-eta{text-align:center; padding:22px 0; border-top:1px solid var(--ink); border-bottom:1px solid var(--ink); margin-bottom:14px;}
.transit-page .big-eta .n{font-weight:900; font-size:3.6rem; letter-spacing:-0.03em; line-height:1;}
.transit-page .big-eta .u{color:var(--ink-dim); font-size:0.7rem; letter-spacing:0.08em; text-transform:uppercase; font-weight:700;}
.transit-page .instruction{padding:0 18px 16px;}
.transit-page .instruction .t{font-size:0.88rem; font-weight:700; margin-bottom:4px;}
.transit-page .instruction .d{font-size:0.76rem; color:var(--ink-dim); font-weight:500;}

.transit-page .alert-row{padding:14px 18px; border-top:1px solid var(--ink); border-left:5px solid var(--red);}
.transit-page .alert-row:last-of-type{border-bottom:1px solid var(--ink);}
.transit-page .alert-row .t{font-size:0.8rem; font-weight:700;}
.transit-page .alert-row .d{font-size:0.7rem; color:var(--ink-dim); font-weight:500; margin-top:3px;}

.transit-page .tabbar{position:absolute; bottom:0; left:0; right:0; padding:12px 20px 16px; display:flex; justify-content:space-around; background:var(--paper); border-top:2px solid var(--ink);}
.transit-page .tabbar .tb{width:18px; height:18px; border:2px solid var(--ink);}
.transit-page .tabbar .tb.active{background:var(--ink);}

.transit-page .decision-list{display:flex; flex-direction:column; gap:2px;}
.transit-page .decision-row{display:grid; grid-template-columns:56px 1fr 1fr; gap:28px; padding:26px 0; border-top:2px solid var(--ink);}
.transit-page .decision-row:last-child{border-bottom:2px solid var(--ink);}
.transit-page .decision-row .no{font-weight:800; font-size:1rem; color:var(--red);}
.transit-page .decision-row h4{font-weight:800; font-size:1.08rem; margin-bottom:6px;}
.transit-page .decision-row .why{color:var(--ink-dim); font-size:0.9rem; line-height:1.6; font-weight:500;}

.transit-page .reflect{border:2px solid var(--ink); padding:44px;}
.transit-page .reflect p{color:var(--ink-dim); font-size:1rem; line-height:1.8; max-width:740px; font-weight:500;}
.transit-page .reflect p + p{margin-top:14px;}

.transit-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; font-weight:600; border-top:3px solid var(--ink);}
.transit-page footer .note{margin-top:8px; font-size:0.72rem; opacity:0.8;}

@media(max-width:900px){
  .transit-page .problem-grid, .transit-page .screens{grid-template-columns:1fr;}
  .transit-page .meta-row{grid-template-columns:repeat(2,1fr);}
  .transit-page .meta-cell{border-bottom:1px solid var(--ink); padding-bottom:16px; margin-bottom:16px;}
  .transit-page .insight-grid{grid-template-columns:1fr;}
  .transit-page .decision-row{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">transit<span>.</span></div>
    <div class="tag">CONCEPT CASE STUDY</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">PRODUCT DESIGN · MOBILE</div>
    <h1 class="title">Know it's late<br><span class="red">before you leave.</span></h1>
    <p class="sub">A redesign of the everyday transit app, rebuilding trust in real-time predictions through honest uncertainty, not false precision.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Scope</div><div class="v">Research, UI, prototype</div></div>
      <div class="meta-cell"><div class="k">Timeline</div><div class="v">Self-directed, 2026</div></div>
      <div class="meta-cell"><div class="k">Platform</div><div class="v">iOS · Android</div></div>
    </div>
  </div>
</header>

<section id="problem">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>The problem</h2></div>
    <div class="problem-grid">
      <div>
        <p>Most transit apps show a single confident number, "4 min," and then let riders stand at a cold curb while the bus doesn't come. The prediction isn't wrong on purpose; live transit data is genuinely noisy. But apps present it as fact, so when it breaks, riders stop trusting the app entirely and fall back on guessing.</p>
        <p>The goal wasn't to build a better prediction algorithm. It was to design an interface honest about what it doesn't know, so riders can make better decisions even when the data is uncertain: leave now, wait two more minutes, or take the next one.</p>
      </div>
      <div class="stat-stack">
        <div class="stat-card"><div class="big">68%</div><div class="lbl">of riders say they've been "burned" by a wrong ETA in the last month*</div></div>
        <div class="stat-card"><div class="big">3.2×</div><div class="lbl">more likely to distrust the whole app after one bad prediction*</div></div>
      </div>
    </div>
    <p class="foot-note">*Directional figures from an informal survey of 22 daily transit riders conducted for this project, not a published study.</p>
  </div>
</section>

<section id="insights">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>What riders actually needed</h2></div>
    <div class="insight-grid">
      <div class="insight-card">
        <div class="icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111" stroke-width="1.6"><circle cx="8" cy="8" r="6"/><path d="M8 8 L8 4"/></svg></div>
        <h3>Confidence, not just a number</h3>
        <p>Riders wanted to know how sure the app was: a wobbly signal near a bus that hasn't left the depot feels different from a bus two stops away.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111" stroke-width="1.6"><path d="M3 8 L7 12 L13 4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>A decision, not data</h3>
        <p>What they actually wanted was one clear instruction: leave now, or you have time. Not a wall of numbers to interpret under stress.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111" stroke-width="1.6"><path d="M8 3 L14 13 L2 13 Z" stroke-linejoin="round"/><path d="M8 6.5 L8 9.5" stroke-linecap="round"/><circle cx="8" cy="11.2" r="0.6" fill="#111" stroke="none"/></svg></div>
        <h3>Silence is worse than bad news</h3>
        <p>A stalled or cancelled route with no explanation caused more frustration than any late bus. People just wanted to be told what was happening.</p>
      </div>
    </div>
  </div>
</section>

<section id="solution">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>The solution</h2></div>
    <div class="screens">

      <div class="screen-col">
        <div class="device-stage"><div class="phone"><div class="phone-btn power"></div><div class="phone-btn mute"></div><div class="phone-btn vol-up"></div><div class="phone-btn vol-down"></div><div class="notch"></div>
          <div class="phone-screen">
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Good morning</div>
              <div class="app-sub">Home to work, 3 saved routes</div>
              <div class="route-row">
                <div class="route-bar ok"></div>
                <div class="route-info"><div class="line">Route 14, Elm St</div><div class="eta">High confidence</div></div>
                <div class="eta-badge">4′</div>
              </div>
              <div class="route-row">
                <div class="route-bar alert"></div>
                <div class="route-info"><div class="line">Route 9, Downtown</div><div class="eta">Signal weak, estimated</div></div>
                <div class="eta-badge alert">~11′</div>
              </div>
              <div class="line-diagram">
                <div class="line-track">
                  <div class="line-stop"></div><div class="line-seg"></div>
                  <div class="line-stop now"></div><div class="line-seg"></div>
                  <div class="line-stop"></div>
                </div>
                <div class="line-labels"><span>Elm St</span><span>You</span><span>Downtown</span></div>
              </div>
            </div>
            <div class="tabbar"><div class="tb active"></div><div class="tb"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div></div>
        <div class="screen-label"><div class="t">Home</div><div class="d">Confidence shown as a bar and a badge, not just a colon and a number.</div></div>
      </div>

      <div class="screen-col">
        <div class="device-stage"><div class="phone"><div class="phone-btn power"></div><div class="phone-btn mute"></div><div class="phone-btn vol-up"></div><div class="phone-btn vol-down"></div><div class="notch"></div>
          <div class="phone-screen">
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Route 14</div>
              <div class="app-sub">Elm St to Downtown Loop</div>
              <div class="big-eta"><div class="n">4</div><div class="u">Minutes, high confidence</div></div>
              <div class="instruction">
                <div class="t">You have time to walk</div>
                <div class="d">Leave in the next 2 minutes to make this bus comfortably.</div>
              </div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb active"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div></div>
        <div class="screen-label"><div class="t">Route detail</div><div class="d">One instruction up top; the raw data stays available but secondary.</div></div>
      </div>

      <div class="screen-col">
        <div class="device-stage"><div class="phone"><div class="phone-btn power"></div><div class="phone-btn mute"></div><div class="phone-btn vol-up"></div><div class="phone-btn vol-down"></div><div class="notch"></div>
          <div class="phone-screen">
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Alerts</div>
              <div class="app-sub">2 active on your routes</div>
              <div class="alert-row">
                <div class="t">Route 9 running 8 to 12 min behind</div>
                <div class="d">Driver shift change downtown. Updated 1 min ago.</div>
              </div>
              <div class="alert-row">
                <div class="t">Elm St stop moved 40m north</div>
                <div class="d">Construction through Friday.</div>
              </div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb"></div><div class="tb active"></div><div class="tb"></div></div>
          </div>
        </div></div>
        <div class="screen-label"><div class="t">Alerts</div><div class="d">Reasons, not just red banners. Restores trust instead of eroding it.</div></div>
      </div>

    </div>
  </div>
</section>

<section id="decisions">
  <div class="wrap">
    <div class="section-head"><span class="num">04</span><h2>Key design decisions</h2></div>
    <div class="decision-list">
      <div class="decision-row">
        <div class="no">01</div>
        <h4>A color bar, not just a number</h4>
        <div class="why">Black or red signal reliability at a glance, before the rider even reads the ETA, which matters for a screen glanced at for 2 seconds while walking.</div>
      </div>
      <div class="decision-row">
        <div class="no">02</div>
        <h4>One instruction, always at the top</h4>
        <div class="why">"You have time to walk" outranks the raw minute count in visual hierarchy. The decision matters more than the data behind it.</div>
      </div>
      <div class="decision-row">
        <div class="no">03</div>
        <h4>Alerts explain themselves</h4>
        <div class="why">Every disruption includes a plain-language reason. Unexplained delays were the single biggest driver of reported distrust in early interviews.</div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="reflect">
      <h2 style="margin-bottom:18px;">Reflection</h2>
      <p>The hardest part of this project wasn't the UI. It was accepting that a good transit app sometimes has to say "we're not sure." Most products are built to project confidence. Here, confidence is the thing that needed to be earned back.</p>
      <p>If I extended this further, I'd want to test the red "low confidence" state with real riders under time pressure. Glanceable trust signals are easy to design and hard to validate without a live deployment.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div>Transit, a self-directed concept case study.</div>
    <div class="note">Designed as an original product exploration; not affiliated with or built for any transit agency.</div>
  </div>
</footer>
`;

export default function TransitCaseStudy() {
  return (
    <div className="transit-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
