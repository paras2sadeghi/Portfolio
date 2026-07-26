export const metadata = {
  title: "Huddle — Parastoo Sadeghi",
  description:
    "An async video feedback tool for remote design and product teams, built so a 90-second recording can replace a 30-minute meeting.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500;700&display=swap');

.huddle-page{
  --bg:#0c0c0e;
  --ink:#ededf0;
  --ink-dim:#8a8d98;
  --rule:#232327;
  --panel:#131316;
  --blue:#3e63dd;
  --green:#46a758;
  --coral:#ff8a7a;
  background:var(--bg); color:var(--ink);
  font-family:'Plus Jakarta Sans', -apple-system, 'Segoe UI', sans-serif;
  overflow-x:hidden;
}
.huddle-page *{box-sizing:border-box;}
.huddle-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.huddle-page a{color:inherit;}

.huddle-page nav{position:sticky; top:0; z-index:10; background:rgba(12,12,14,0.88); border-bottom:1px solid var(--rule);}
.huddle-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:68px;}
.huddle-page .brand{font-weight:700; font-size:1.05rem; letter-spacing:-0.01em;}
.huddle-page .brand span{color:var(--blue);}
.huddle-page .tag{font-family:'Roboto Mono', monospace; font-size:0.66rem; letter-spacing:0.03em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 12px; border-radius:6px; text-transform:uppercase;}

.huddle-page header.hero{padding:88px 0 52px;}
.huddle-page .eyebrow{font-family:'Roboto Mono', monospace; font-size:0.7rem; letter-spacing:0.04em; color:var(--blue); margin-bottom:22px;}
.huddle-page h1.title{font-weight:700; font-size:clamp(2.2rem,5vw,3.6rem); line-height:1.12; letter-spacing:-0.02em; max-width:760px;}
.huddle-page h1.title .dim{color:var(--ink-dim);}
.huddle-page .sub{margin-top:22px; font-size:1.05rem; color:var(--ink-dim); max-width:560px; line-height:1.65; font-weight:400;}

.huddle-page .meta-row{margin-top:44px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--rule);}
.huddle-page .meta-cell{padding:18px 22px 0 0; border-right:1px solid var(--rule);}
.huddle-page .meta-cell:last-child{border-right:none;}
.huddle-page .meta-cell .k{font-family:'Roboto Mono', monospace; font-size:0.64rem; letter-spacing:0.05em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:7px;}
.huddle-page .meta-cell .v{font-size:0.95rem; font-weight:600;}

.huddle-page section{padding:76px 0;}
.huddle-page .section-head{display:flex; align-items:baseline; gap:14px; margin-bottom:38px;}
.huddle-page .num{font-family:'Roboto Mono', monospace; font-size:0.8rem; color:var(--blue);}
.huddle-page h2{font-weight:700; font-size:1.55rem; letter-spacing:-0.015em;}

.huddle-page .problem-grid{display:grid; grid-template-columns:1.1fr 0.9fr; gap:52px; align-items:start;}
.huddle-page .problem-grid p{color:var(--ink-dim); line-height:1.75; font-size:0.98rem;}
.huddle-page .problem-grid p + p{margin-top:16px;}
.huddle-page .stat-stack{display:flex; flex-direction:column; gap:1px; background:var(--rule);}
.huddle-page .stat-card{background:var(--bg); padding:20px 22px;}
.huddle-page .stat-card .big{font-family:'Roboto Mono', monospace; font-size:1.9rem; color:var(--blue); font-weight:500; font-variant-numeric:tabular-nums;}
.huddle-page .stat-card .lbl{color:var(--ink-dim); font-size:0.82rem; margin-top:6px;}
.huddle-page .foot-note{margin-top:16px; font-size:0.7rem; color:var(--ink-dim); opacity:0.75;}

.huddle-page .insight-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--rule); border:1px solid var(--rule); border-radius:10px; overflow:hidden;}
.huddle-page .insight-card{background:var(--panel); padding:26px 24px;}
.huddle-page .insight-card .icon{width:32px; height:32px; margin-bottom:16px; display:flex; align-items:center; justify-content:center; border-radius:7px; background:rgba(62,99,221,0.14);}
.huddle-page .insight-card h3{font-weight:700; font-size:0.98rem; margin-bottom:9px;}
.huddle-page .insight-card p{color:var(--ink-dim); font-size:0.87rem; line-height:1.6;}

.huddle-page .browser-stage{position:relative; padding:24px 0 40px;}
.huddle-page .browser-stage::before{
  content:""; position:absolute; top:-40px; left:50%; transform:translateX(-50%);
  width:600px; height:280px; background:radial-gradient(ellipse, rgba(62,99,221,0.16), transparent 70%);
  z-index:0; pointer-events:none;
}
.huddle-page .browser-frame{
  position:relative; z-index:1; border-radius:10px; overflow:hidden; background:var(--panel);
  border:1px solid var(--rule);
  box-shadow:0 50px 90px -30px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.04) inset;
}
.huddle-page .mac-bar{display:flex; align-items:center; gap:7px; padding:11px 14px; background:#0f0f12;}
.huddle-page .mac-bar .dot{width:11px; height:11px; border-radius:50%;}
.huddle-page .mac-bar .dot:nth-child(1){background:#ff5f57;}
.huddle-page .mac-bar .dot:nth-child(2){background:#febc2e;}
.huddle-page .mac-bar .dot:nth-child(3){background:#28c840;}
.huddle-page .tab-strip{display:flex; align-items:flex-end; gap:2px; padding:0 10px; background:#0f0f12;}
.huddle-page .tab{display:flex; align-items:center; gap:8px; padding:9px 16px; background:var(--panel); border-radius:8px 8px 0 0; font-size:0.76rem; color:var(--ink); font-weight:500;}
.huddle-page .tab .sq{width:12px; height:12px; border-radius:3px; background:linear-gradient(135deg, var(--blue), #6d8bff);}
.huddle-page .addr-bar{display:flex; align-items:center; gap:8px; padding:9px 16px; background:var(--panel); border-bottom:1px solid var(--rule);}
.huddle-page .addr-bar svg{flex-shrink:0; opacity:0.5;}
.huddle-page .addr-bar .url{font-family:'Roboto Mono', monospace; font-size:0.72rem; color:var(--ink-dim);}

.huddle-page .app-body{padding:28px; display:grid; grid-template-columns:200px 1fr; gap:0;}
.huddle-page .side-nav{padding-right:24px; border-right:1px solid var(--rule); display:flex; flex-direction:column; gap:2px;}
.huddle-page .side-item{display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; font-size:0.82rem; color:var(--ink-dim); font-weight:500;}
.huddle-page .side-item svg{flex-shrink:0; opacity:0.7;}
.huddle-page .side-item.active{background:rgba(62,99,221,0.14); color:var(--ink);}
.huddle-page .side-item.active svg{opacity:1;}
.huddle-page .main-panel{padding-left:28px;}
.huddle-page .panel-title{font-size:1.15rem; font-weight:700; margin-bottom:3px;}
.huddle-page .panel-sub{color:var(--ink-dim); font-size:0.8rem; margin-bottom:22px;}

.huddle-page .video-clip{
  background:var(--bg); border:1px solid var(--rule); border-radius:8px; padding:14px 16px;
  display:flex; align-items:center; gap:14px; margin-bottom:10px;
}
.huddle-page .thumb{width:64px; height:40px; border-radius:5px; flex-shrink:0; background:linear-gradient(140deg, rgba(62,99,221,0.5), rgba(109,139,255,0.25)); position:relative;}
.huddle-page .thumb svg{position:absolute; inset:0; margin:auto;}
.huddle-page .clip-info .t{font-size:0.83rem; font-weight:600;}
.huddle-page .clip-info .d{font-size:0.7rem; color:var(--ink-dim); margin-top:2px;}
.huddle-page .clip-meta{margin-left:auto; display:flex; gap:10px; align-items:center;}
.huddle-page .avatar-stack{display:flex;}
.huddle-page .avatar-stack .av{
  width:22px; height:22px; border-radius:50%; margin-left:-7px; border:2px solid var(--bg);
  background:linear-gradient(135deg, var(--blue), #6d8bff); display:flex; align-items:center; justify-content:center;
  font-size:0.6rem; font-weight:700; color:#fff;
}
.huddle-page .badge{font-size:0.68rem; padding:4px 9px; border-radius:5px; background:rgba(62,99,221,0.16); color:#89a3ff; font-weight:600;}
.huddle-page .badge.warn{background:rgba(255,138,122,0.14); color:var(--coral);}

.huddle-page .timeline-panel{background:var(--bg); border:1px solid var(--rule); border-radius:8px; padding:18px;}
.huddle-page .tl-head{display:flex; justify-content:space-between; align-items:center;}
.huddle-page .tl-head .t{font-size:0.83rem; font-weight:700;}
.huddle-page .tl-head .time{font-family:'Roboto Mono', monospace; font-size:0.7rem; color:var(--ink-dim); font-variant-numeric:tabular-nums;}
.huddle-page .scrub{height:5px; border-radius:99px; background:var(--rule); position:relative; margin:14px 0;}
.huddle-page .scrub-fill{height:100%; width:42%; border-radius:99px; background:var(--blue);}
.huddle-page .marker{position:absolute; top:-5px; width:12px; height:12px; border-radius:50%; background:var(--coral); border:2px solid var(--bg);}
.huddle-page .comment-row{display:flex; gap:11px; align-items:flex-start; padding:12px 0; border-top:1px solid var(--rule);}
.huddle-page .comment-row .av-sm{width:24px; height:24px; border-radius:50%; background:linear-gradient(135deg, var(--coral), var(--blue)); flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.62rem; font-weight:700; color:#fff;}
.huddle-page .comment-row .txt .n{font-size:0.78rem; font-weight:700;}
.huddle-page .comment-row .txt .c{font-size:0.8rem; margin-top:3px; color:var(--ink-dim);}
.huddle-page .timestamp{font-family:'Roboto Mono', monospace; font-size:0.66rem; color:var(--blue); background:rgba(62,99,221,0.14); padding:2px 7px; border-radius:5px; margin-left:auto; font-variant-numeric:tabular-nums;}

.huddle-page .decision-list{display:flex; flex-direction:column; gap:2px;}
.huddle-page .decision-row{display:grid; grid-template-columns:56px 1fr 1fr; gap:26px; padding:24px 0; border-top:1px solid var(--rule);}
.huddle-page .decision-row:last-child{border-bottom:1px solid var(--rule);}
.huddle-page .decision-row .no{font-family:'Roboto Mono', monospace; color:var(--blue); font-size:0.85rem;}
.huddle-page .decision-row h4{font-weight:700; font-size:1rem; margin-bottom:6px;}
.huddle-page .decision-row .why{color:var(--ink-dim); font-size:0.87rem; line-height:1.6;}

.huddle-page .reflect{border:1px solid var(--rule); border-radius:10px; padding:42px; background:var(--panel);}
.huddle-page .reflect p{color:var(--ink-dim); font-size:0.97rem; line-height:1.8; max-width:720px;}
.huddle-page .reflect p + p{margin-top:14px;}

.huddle-page footer{padding:52px 0 72px; text-align:center; color:var(--ink-dim); font-size:0.8rem; border-top:1px solid var(--rule);}
.huddle-page footer .note{margin-top:8px; font-size:0.7rem; opacity:0.75;}

@media(max-width:900px){
  .huddle-page .problem-grid{grid-template-columns:1fr;}
  .huddle-page .meta-row{grid-template-columns:repeat(2,1fr);}
  .huddle-page .meta-cell{border-bottom:1px solid var(--rule); padding-bottom:16px; margin-bottom:16px;}
  .huddle-page .insight-grid{grid-template-columns:1fr;}
  .huddle-page .decision-row{grid-template-columns:1fr;}
  .huddle-page .app-body{grid-template-columns:1fr;}
  .huddle-page .side-nav{border-right:none; border-bottom:1px solid var(--rule); padding-right:0; padding-bottom:14px; flex-direction:row; flex-wrap:wrap;}
  .huddle-page .main-panel{padding-left:0; padding-top:18px;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">huddle<span>.</span></div>
    <div class="tag">CONCEPT CASE STUDY</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">PRODUCT DESIGN · B2B SAAS</div>
    <h1 class="title">"Can we hop on a call" <span class="dim">shouldn't be the default.</span></h1>
    <p class="sub">An async video feedback tool for remote design and product teams, built so a 90-second recording can replace a 30-minute meeting.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Scope</div><div class="v">Research, UI, prototype</div></div>
      <div class="meta-cell"><div class="k">Timeline</div><div class="v">Self-directed, 2026</div></div>
      <div class="meta-cell"><div class="k">Platform</div><div class="v">Web · Desktop</div></div>
    </div>
  </div>
</header>

<section id="problem">
  <div class="wrap">
    <div class="section-head"><span class="num">01</span><h2>The problem</h2></div>
    <div class="problem-grid">
      <div>
        <p>Remote design teams default to a meeting for anything that needs nuance: a screen with three "not quite right" states, a flow that reads fine in a ticket but feels off when clicked through. But scheduling across time zones is slow, and most of a 30-minute review call is spent just pointing at things.</p>
        <p>Existing async tools (Loom, screen-recording plugins) solved recording, but not the conversation that follows. Feedback stayed as scattered comments disconnected from the exact moment in the video it referred to.</p>
      </div>
      <div class="stat-stack">
        <div class="stat-card"><div class="big">4.6 hrs</div><div class="lbl">average weekly time designers reported spending in review meetings*</div></div>
        <div class="stat-card"><div class="big">61%</div><div class="lbl">of that feedback could have been given without a live call*</div></div>
      </div>
    </div>
    <p class="foot-note">*From informal interviews with 9 designers and PMs conducted for this project, not a published study.</p>
  </div>
</section>

<section id="insights">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>What teams actually needed</h2></div>
    <div class="insight-grid">
      <div class="insight-card">
        <div class="icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#89a3ff" stroke-width="1.5"><rect x="1" y="3" width="13" height="9" rx="1.5"/><path d="M1 5 L7.5 9 L14 5"/></svg></div>
        <h3>Feedback tied to the frame</h3>
        <p>A comment about "the spacing at 0:14" is useless once decoupled from that exact moment. Every note needed to live on the timeline, not in a separate thread.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#89a3ff" stroke-width="1.5"><circle cx="7.5" cy="7.5" r="6"/><path d="M7.5 4 L7.5 7.5 L10 9.5"/></svg></div>
        <h3>Watch once, respond anytime</h3>
        <p>Teams wanted the async-ness to be real: no pressure to reply live, but a clear signal of who's watched and who still owes a response.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#89a3ff" stroke-width="1.5"><path d="M2 8 L6 12 L13 3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Low friction to start</h3>
        <p>The tool had to beat "just open a Zoom" in speed. If recording and sharing took more than two clicks, people reverted to old habits.</p>
      </div>
    </div>
  </div>
</section>

<section id="solution">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>The solution</h2></div>
    <div class="browser-stage">
      <div class="browser-frame">
        <div class="mac-bar">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
        <div class="tab-strip">
          <div class="tab"><div class="sq"></div>Checkout redesign</div>
        </div>
        <div class="addr-bar">
          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" stroke="#8a8d98" stroke-width="1.2"><rect x="1.5" y="5" width="8" height="6" rx="1"/><path d="M3 5 L3 3 A2.5 2.5 0 0 1 8 3 L8 5"/></svg>
          <div class="url">app.huddle.so/project/checkout-redesign</div>
        </div>
        <div class="app-body">
          <div class="side-nav">
            <div class="side-item active"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 7 L4 1 L10 1 L13 7 L13 12 L1 12 Z"/><path d="M1 7 L5 7 L5.5 9 L8.5 9 L9 7 L13 7"/></svg>Inbox</div>
            <div class="side-item"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="3" width="8" height="8" rx="1.5"/><path d="M9 5.5 L13 3 L13 11 L9 8.5"/></svg>My recordings</div>
            <div class="side-item"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 3 L5 3 L6.5 5 L13 5 L13 11 L1 11 Z"/></svg>Checkout redesign</div>
            <div class="side-item"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 3 L5 3 L6.5 5 L13 5 L13 11 L1 11 Z"/></svg>Onboarding v3</div>
            <div class="side-item"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="7" r="2"/><path d="M7 1.5 L7 3 M7 11 L7 12.5 M1.5 7 L3 7 M11 7 L12.5 7"/></svg>Settings</div>
          </div>
          <div class="main-panel">
            <div class="panel-title">Checkout redesign</div>
            <div class="panel-sub">4 recordings, last activity 2h ago</div>

            <div class="video-clip">
              <div class="thumb"><svg width="14" height="14" viewBox="0 0 14 14" fill="#fff"><path d="M4 2 L12 7 L4 12 Z"/></svg></div>
              <div class="clip-info"><div class="t">Cart drawer, v2 walkthrough</div><div class="d">Recorded by Priya, 2:14</div></div>
              <div class="clip-meta"><span class="badge">3 comments</span><div class="avatar-stack"><div class="av">P</div><div class="av">M</div><div class="av">Y</div></div></div>
            </div>
            <div class="video-clip">
              <div class="thumb"><svg width="14" height="14" viewBox="0 0 14 14" fill="#fff"><path d="M4 2 L12 7 L4 12 Z"/></svg></div>
              <div class="clip-info"><div class="t">Payment step, edge cases</div><div class="d">Recorded by you, 1:02</div></div>
              <div class="clip-meta"><span class="badge warn">Awaiting reply</span><div class="avatar-stack"><div class="av">Y</div></div></div>
            </div>

            <div class="timeline-panel" style="margin-top:18px;">
              <div class="tl-head">
                <div class="t">Payment step, edge cases</div>
                <div class="time">0:38 / 1:02</div>
              </div>
              <div class="scrub"><div class="scrub-fill"></div><div class="marker" style="left:18%;"></div><div class="marker" style="left:60%; background:var(--blue);"></div></div>
              <div class="comment-row">
                <div class="av-sm">M</div>
                <div class="txt">
                  <div class="n">Marco <span class="timestamp">0:11</span></div>
                  <div class="c">Can the error state persist a bit longer? Feels like it flashes.</div>
                </div>
              </div>
              <div class="comment-row">
                <div class="av-sm" style="background:linear-gradient(135deg, var(--blue), #6d8bff);">Y</div>
                <div class="txt">
                  <div class="n">You <span class="timestamp">0:37</span></div>
                  <div class="c">Good catch, bumping the toast duration to 4s.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <h4>Comments live on the scrubber, not a sidebar</h4>
        <div class="why">Markers pinned directly to the timeline make feedback spatially tied to the moment it describes, so no one has to re-explain "at the part where..."</div>
      </div>
      <div class="decision-row">
        <div class="no">02</div>
        <h4>"Awaiting reply" as a first-class status</h4>
        <div class="why">Async only works if it's visible who owes what. This status replaces the anxiety of "did they see this?" that drove people back to live calls.</div>
      </div>
      <div class="decision-row">
        <div class="no">03</div>
        <h4>Record-and-share in one motion</h4>
        <div class="why">No separate upload/share step. Recording auto-attaches to the project it was opened from, removing the friction that made Zoom feel faster.</div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="reflect">
      <h2 style="margin-bottom:18px;">Reflection</h2>
      <p>The interesting design problem here wasn't video, it was status. Async tools live or die on whether people trust that their feedback will actually be seen. Most of my iteration went into small, unglamorous signals: read receipts, reply badges, gentle nudges, not the recorder itself.</p>
      <p>If I extended this, I'd want to design for the moment a thread should escalate back to a live call. Async shouldn't mean never talking, just not defaulting to it.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div>Huddle, a self-directed concept case study.</div>
    <div class="note">Designed as an original product exploration; not an existing or shipped product.</div>
  </div>
</footer>
`;

export default function HuddleCaseStudy() {
  return (
    <div className="huddle-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
