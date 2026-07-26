export const metadata = {
  title: "Roobinium — Parastoo Sadeghi",
  description:
    "Building and running autonomous agents, by voice or by text — a real AI agent builder for crypto and DeFi tasks.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

.roobinium-page{
  --bg:#0b0705;
  --ink:#f7f0ea;
  --ink-dim:#a8968a;
  --rule:#2a1c14;
  --amber:#ff7a2e;
  --red:#c22a1f;
  background:var(--bg); color:var(--ink);
  font-family:'Manrope', -apple-system, sans-serif;
  overflow-x:hidden;
}
.roobinium-page *{box-sizing:border-box;}
.roobinium-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.roobinium-page a{color:inherit;}

.roobinium-page nav{position:sticky; top:0; z-index:10; background:rgba(11,7,5,0.88); border-bottom:1px solid var(--rule);}
.roobinium-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.roobinium-page .brand{font-weight:800; font-size:1.1rem; letter-spacing:-0.01em;}
.roobinium-page .brand span{color:var(--amber);}
.roobinium-page .tag{font-family:'IBM Plex Mono', monospace; font-size:0.68rem; letter-spacing:0.04em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 14px; border-radius:99px;}

.roobinium-page header.hero{padding:88px 0 52px; position:relative; overflow:hidden;}
.roobinium-page .hero::before{content:""; position:absolute; top:-160px; right:-140px; width:480px; height:480px; border-radius:50%; background:radial-gradient(circle, rgba(255,122,46,0.28), transparent 70%); z-index:0;}
.roobinium-page .eyebrow{font-family:'IBM Plex Mono', monospace; font-size:0.72rem; letter-spacing:0.06em; color:var(--amber); margin-bottom:22px; position:relative; z-index:1;}
.roobinium-page h1.title{font-weight:800; font-size:clamp(2.4rem,5.4vw,4rem); line-height:1.05; letter-spacing:-0.02em; max-width:760px; position:relative; z-index:1;}
.roobinium-page h1.title .grad{background:linear-gradient(100deg, var(--amber), var(--red)); -webkit-background-clip:text; background-clip:text; color:transparent;}
.roobinium-page .sub{margin-top:22px; font-size:1.08rem; color:var(--ink-dim); max-width:560px; line-height:1.6; position:relative; z-index:1;}

.roobinium-page .meta-row{margin-top:44px; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--rule); position:relative; z-index:1;}
.roobinium-page .meta-cell{padding:18px 22px 0 0; border-right:1px solid var(--rule);}
.roobinium-page .meta-cell:last-child{border-right:none;}
.roobinium-page .meta-cell .k{font-family:'IBM Plex Mono', monospace; font-size:0.64rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:7px;}
.roobinium-page .meta-cell .v{font-size:0.98rem; font-weight:700;}

.roobinium-page section{padding:70px 0;}
.roobinium-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:36px;}
.roobinium-page .num{font-family:'IBM Plex Mono', monospace; font-size:0.8rem; color:var(--amber);}
.roobinium-page h2{font-weight:800; font-size:1.5rem; letter-spacing:-0.015em;}

.roobinium-page .overview p{color:var(--ink-dim); line-height:1.75; font-size:1rem; max-width:760px;}
.roobinium-page .overview p + p{margin-top:14px;}

.roobinium-page .screens{display:grid; grid-template-columns:repeat(3,1fr); gap:28px;}
.roobinium-page .screen-col{display:flex; flex-direction:column; align-items:center; gap:16px;}
.roobinium-page .screen-label{text-align:center;}
.roobinium-page .screen-label .t{font-weight:700; font-size:0.95rem;}
.roobinium-page .screen-label .d{color:var(--ink-dim); font-size:0.78rem; margin-top:4px;}

.roobinium-page .device-stage{position:relative; padding:18px 14px 30px;}
.roobinium-page .device-stage::after{
  content:""; position:absolute; left:50%; bottom:6px; transform:translateX(-50%);
  width:160px; height:22px; background:radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%);
  filter:blur(7px); z-index:0;
}
.roobinium-page .shot{
  width:240px; border-radius:38px; position:relative; z-index:1; overflow:hidden;
  box-shadow:0 50px 70px -28px rgba(0,0,0,0.7), 0 16px 26px -16px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08);
}
.roobinium-page .shot img{display:block; width:100%; height:auto;}

.roobinium-page .notes-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--rule); border:1px solid var(--rule); border-radius:14px; overflow:hidden;}
.roobinium-page .note-card{background:#120b07; padding:26px 24px;}
.roobinium-page .note-card h3{font-weight:700; font-size:1rem; margin-bottom:8px;}
.roobinium-page .note-card p{color:var(--ink-dim); font-size:0.88rem; line-height:1.6;}

.roobinium-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}

@media(max-width:900px){
  .roobinium-page .meta-row{grid-template-columns:1fr; }
  .roobinium-page .meta-cell{border-right:none; border-bottom:1px solid var(--rule); padding-bottom:16px; margin-bottom:16px;}
  .roobinium-page .screens{grid-template-columns:1fr;}
  .roobinium-page .notes-grid{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">roobinium<span>.</span></div>
    <div class="tag">REAL PROJECT</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">PRODUCT DESIGN · AI AGENTS · MOBILE</div>
    <h1 class="title">Building and running <span class="grad">autonomous agents,</span> by voice or by text.</h1>
    <p class="sub">Roobinium is an AI agent builder for crypto and DeFi tasks: deploying trading bots, auditing protocols, monitoring liquidity, all through a single conversational interface.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Studio</div><div class="v">Sadax</div></div>
      <div class="meta-cell"><div class="k">Platform</div><div class="v">iOS · Android</div></div>
    </div>
  </div>
</header>

<section id="overview">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>Overview</h2></div>
    <div class="overview">
      <p>Roobinium lets a user describe what they want built, an autonomous agent to monitor liquidity pools, a gas optimization pass, a protocol audit, and have it deployed without leaving the conversation. The interface has to work for two very different moments: a quick typed request between other tasks, and a longer spoken request where explaining the full intent out loud is faster than typing it.</p>
      <p>The three screens below show that range: a prompt-first home screen for getting started fast, a voice mode built around Aira (the agent handling the request), and the resulting chat thread where the agent reports back what it actually did.</p>
    </div>
  </div>
</section>

<section id="screens">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Screens</h2></div>
    <div class="screens">
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/roobinium/home.png" alt="Roobinium home screen with prompt input and suggestion chips"></div></div>
        <div class="screen-label"><div class="t">Home</div><div class="d">Starts on a blank prompt, not a dashboard, with suggestions for common agent tasks.</div></div>
      </div>
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/roobinium/voice.png" alt="Voice mode with Aira listening and a live transcript"></div></div>
        <div class="screen-label"><div class="t">Voice mode</div><div class="d">A live transcript keeps the spoken request visible while Aira listens.</div></div>
      </div>
      <div class="screen-col">
        <div class="device-stage"><div class="shot"><img src="/assets/roobinium/chat.png" alt="Chat thread showing the agent's actions and status"></div></div>
        <div class="screen-label"><div class="t">Agent thread</div><div class="d">Every action the agent takes is reported back in the same thread as a plain status line.</div></div>
      </div>
    </div>
  </div>
</section>

<section id="notes">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>Notes</h2></div>
    <div class="notes-grid">
      <div class="note-card">
        <h3>Voice and text stay in parity</h3>
        <p>Switching to voice doesn't drop you into a separate mode with different capabilities, the same request, chips, and model selector are one tap away either way.</p>
      </div>
      <div class="note-card">
        <h3>The model choice is visible, not hidden</h3>
        <p>Exposing the model picker (Opus 4.8) on the home screen treats it as a decision the user might actually want to make, not an implementation detail to bury in settings.</p>
      </div>
      <div class="note-card">
        <h3>Status lines over spinners</h3>
        <p>"Deployed AlphaRaptor.sh," "Core agent parameters initialized," these read like log output on purpose, so a technical user can trust what actually happened.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">Roobinium, product design work at Sadax.</div>
</footer>
`;

export default function RoobiniumCaseStudy() {
  return (
    <div className="roobinium-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
