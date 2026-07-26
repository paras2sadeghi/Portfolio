export const metadata = {
  title: "Wavelength — Parastoo Sadeghi",
  description:
    "A music player that queues around how you feel, not just what you searched, with a now-playing screen where the artwork sets the palette.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

.wavelength-page{
  --bg:#0b0a09;
  --ink:#f5f1ea;
  --ink-dim:#8f887c;
  --rule:#242019;
  --card:#131110;
  --amber:#ffb454;
  --wine:#c2456b;
  background:var(--bg); color:var(--ink);
  font-family:'Manrope', -apple-system, sans-serif;
  overflow-x:hidden;
}
.wavelength-page *{box-sizing:border-box;}
.wavelength-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.wavelength-page a{color:inherit;}

.wavelength-page nav{position:sticky; top:0; z-index:10; background:rgba(11,10,9,0.86); border-bottom:1px solid var(--rule);}
.wavelength-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.wavelength-page .brand{font-weight:800; font-size:1.1rem; letter-spacing:-0.01em;}
.wavelength-page .brand span{color:var(--amber);}
.wavelength-page .tag{font-family:'IBM Plex Mono', monospace; font-size:0.68rem; letter-spacing:0.04em; color:var(--ink-dim); border:1px solid var(--rule); padding:6px 14px; border-radius:99px;}

.wavelength-page header.hero{padding:96px 0 56px; position:relative;}
.wavelength-page .eyebrow{font-family:'IBM Plex Mono', monospace; font-size:0.72rem; letter-spacing:0.06em; color:var(--amber); margin-bottom:24px;}
.wavelength-page h1.title{font-weight:800; font-size:clamp(2.5rem,5.6vw,4.4rem); line-height:1.04; letter-spacing:-0.02em; max-width:780px;}
.wavelength-page h1.title .grad{background:linear-gradient(100deg, var(--amber), var(--wine)); -webkit-background-clip:text; background-clip:text; color:transparent;}
.wavelength-page .sub{margin-top:24px; font-size:1.1rem; color:var(--ink-dim); max-width:540px; line-height:1.6; font-weight:400;}

.wavelength-page .meta-row{margin-top:52px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--rule);}
.wavelength-page .meta-cell{padding:20px 24px 0 0; border-right:1px solid var(--rule);}
.wavelength-page .meta-cell:last-child{border-right:none;}
.wavelength-page .meta-cell .k{font-family:'IBM Plex Mono', monospace; font-size:0.66rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:8px;}
.wavelength-page .meta-cell .v{font-size:1.02rem; font-weight:600;}

.wavelength-page section{padding:86px 0; position:relative;}
.wavelength-page .section-head{display:flex; align-items:baseline; gap:16px; margin-bottom:42px;}
.wavelength-page .num{font-family:'IBM Plex Mono', monospace; font-size:0.85rem; color:var(--amber);}
.wavelength-page h2{font-weight:800; font-size:1.9rem; letter-spacing:-0.015em;}

.wavelength-page .problem-grid{display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:start;}
.wavelength-page .problem-grid p{color:var(--ink-dim); line-height:1.75; font-size:1rem;}
.wavelength-page .problem-grid p + p{margin-top:16px;}
.wavelength-page .stat-stack{display:flex; flex-direction:column; gap:14px;}
.wavelength-page .stat-card{border:1px solid var(--rule); border-radius:12px; padding:20px 24px;}
.wavelength-page .stat-card .big{font-family:'IBM Plex Mono', monospace; font-size:2.1rem; color:var(--amber); font-weight:500; font-variant-numeric:tabular-nums;}
.wavelength-page .stat-card .lbl{color:var(--ink-dim); font-size:0.85rem; margin-top:6px;}
.wavelength-page .foot-note{margin-top:18px; font-size:0.72rem; color:var(--ink-dim); opacity:0.7;}

.wavelength-page .insight-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--rule); border:1px solid var(--rule); border-radius:16px; overflow:hidden;}
.wavelength-page .insight-card{background:var(--card); padding:30px 26px;}
.wavelength-page .insight-card svg{margin-bottom:18px;}
.wavelength-page .insight-card h3{font-weight:700; font-size:1.05rem; margin-bottom:10px;}
.wavelength-page .insight-card p{color:var(--ink-dim); font-size:0.9rem; line-height:1.6;}

.wavelength-page .screens{display:grid; grid-template-columns:repeat(3,1fr); gap:32px; margin-top:8px;}
.wavelength-page .screen-col{display:flex; flex-direction:column; align-items:center; gap:18px;}
.wavelength-page .screen-label{text-align:center;}
.wavelength-page .screen-label .t{font-weight:700; font-size:0.98rem;}
.wavelength-page .screen-label .d{color:var(--ink-dim); font-size:0.8rem; margin-top:4px;}

.wavelength-page .phone{width:264px; height:552px; border-radius:42px; padding:11px; background:linear-gradient(160deg,#2a2119,#0c0908); box-shadow:0 30px 60px -22px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.06); position:relative;}
.wavelength-page .phone-screen{width:100%; height:100%; border-radius:32px; overflow:hidden; position:relative; color:#fff;}
.wavelength-page .notch{position:absolute; top:11px; left:50%; transform:translateX(-50%); width:86px; height:22px; background:#0c0908; border-radius:12px; z-index:6;}
.wavelength-page .status{position:relative; z-index:2; display:flex; justify-content:space-between; align-items:center; padding:18px 20px 0; font-size:0.7rem; font-weight:600; font-family:'IBM Plex Mono',monospace;}
.wavelength-page .status-icons{display:flex; align-items:center; gap:5px;}
.wavelength-page .status-icons svg{display:block;}

.wavelength-page .phone-screen::after{
  content:""; position:absolute; inset:0; z-index:3; pointer-events:none; opacity:0.05; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.wavelength-page .art{position:relative; overflow:hidden; isolation:isolate; background:#1a0d06;}
.wavelength-page .art::before{content:""; position:absolute; inset:0; background-size:cover; background-position:center;}
.wavelength-page .art-a::before{background-image:url('/wavelength-art/photos/good-to-be.png');}
.wavelength-page .art-b::before{background-image:url('/wavelength-art/photos/coffee-light.png');}
.wavelength-page .art-c::before{background-image:url('/wavelength-art/photos/half-awake.png');}
.wavelength-page .art-d::before{background-image:url('/wavelength-art/photos/windowsill.png');}
.wavelength-page .art-e::before{background-image:url('/wavelength-art/photos/low-light.png');}

.wavelength-page .wash{position:absolute; inset:0; z-index:0;}
.wavelength-page .wash.mood{background:radial-gradient(ellipse 260px 320px at 25% 0%, rgba(255,180,84,0.55), transparent 60%), radial-gradient(ellipse 260px 260px at 90% 100%, rgba(194,69,107,0.4), transparent 55%), linear-gradient(160deg,#241a12,#0e0a07);}
.wavelength-page .wash.play::before{content:""; position:absolute; width:220px; height:220px; border-radius:50%; background:radial-gradient(circle, rgba(255,197,120,0.6), transparent 70%); filter:blur(38px); top:-60px; left:20px;}
.wavelength-page .wash.play{background:linear-gradient(155deg,#7a3a12,#170c07 75%);}
.wavelength-page .wash.queue{background:radial-gradient(ellipse 260px 300px at 20% 100%, rgba(194,69,107,0.5), transparent 60%), radial-gradient(ellipse 240px 240px at 90% 0%, rgba(255,180,84,0.4), transparent 55%), linear-gradient(160deg,#1c1410,#0a0807);}

.wavelength-page .glass-pane{position:relative; z-index:2; background:rgba(255,255,255,0.13); border:1px solid rgba(255,255,255,0.2); border-radius:20px; padding:16px 18px; backdrop-filter:blur(16px) saturate(150%); -webkit-backdrop-filter:blur(16px) saturate(150%); box-shadow:inset 0 1px 0 rgba(255,255,255,0.22);}

.wavelength-page .app-content{position:relative; z-index:1; padding:40px 16px 16px; height:100%;}
.wavelength-page .app-h1{font-weight:700; font-size:1.25rem; margin-bottom:2px;}
.wavelength-page .app-sub{color:rgba(255,255,255,0.6); font-size:0.74rem; margin-bottom:18px;}

.wavelength-page .chip-row{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px;}
.wavelength-page .mood-chip{font-size:0.72rem; padding:8px 14px; border-radius:99px; background:rgba(20,14,10,0.55); border:1px solid rgba(255,255,255,0.18);}
.wavelength-page .mood-chip.sel{background:linear-gradient(100deg, var(--amber), var(--wine)); border:none; font-weight:600; color:#1a0d05;}

.wavelength-page .queue-card{display:flex; align-items:center; gap:12px; padding:10px 12px; margin-bottom:8px;}
.wavelength-page .queue-art{width:36px; height:36px; border-radius:8px; flex-shrink:0;}
.wavelength-page .queue-info{flex:1; min-width:0;}
.wavelength-page .queue-info .t{font-size:0.78rem; font-weight:700;}
.wavelength-page .queue-info .a{font-size:0.66rem; color:rgba(255,255,255,0.6);}
.wavelength-page .queue-heart{width:15px; height:15px; flex-shrink:0; color:rgba(255,255,255,0.32);}

.wavelength-page .carousel{display:flex; justify-content:center; align-items:flex-end; margin:6px 0 16px; position:relative; z-index:1;}
.wavelength-page .cover{width:58px; height:58px; border-radius:10px; margin:0 -9px; border:1px solid rgba(255,255,255,0.15); box-shadow:0 10px 18px -8px rgba(0,0,0,0.6); flex-shrink:0;}
.wavelength-page .cover.side{transform:scale(0.82); opacity:0.6; filter:brightness(0.68);}
.wavelength-page .cover.center{width:92px; height:92px; z-index:2; box-shadow:0 16px 30px -10px rgba(0,0,0,0.7);}

.wavelength-page .track-row{display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; position:relative; z-index:1; text-align:center; flex-direction:column; align-items:center;}
.wavelength-page .track-title{font-weight:700; font-size:1.05rem;}
.wavelength-page .track-artist{color:rgba(255,255,255,0.6); font-size:0.76rem; margin-top:2px;}

.wavelength-page .progress{height:3px; border-radius:99px; background:rgba(255,255,255,0.18); position:relative; margin:14px 0 6px;}
.wavelength-page .progress-fill{height:100%; width:38%; border-radius:99px; background:linear-gradient(90deg, var(--amber), var(--wine));}
.wavelength-page .time-row{display:flex; justify-content:space-between; font-size:0.62rem; color:rgba(255,255,255,0.55); font-family:'IBM Plex Mono',monospace;}

.wavelength-page .pill{display:flex; align-items:center; gap:14px; position:relative; z-index:1; margin-top:16px;}
.wavelength-page .pill .ic{width:28px; height:28px; display:flex; align-items:center; justify-content:center; color:#fff; opacity:0.85;}
.wavelength-page .pill .play{width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,0.92); display:flex; align-items:center; justify-content:center; color:#241207;}
.wavelength-page .util-row{display:flex; justify-content:space-between; align-items:center; margin-top:14px; padding:0 4px; position:relative; z-index:1;}
.wavelength-page .util-row .ic{width:22px; height:22px; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.55);}
.wavelength-page .util-row .ic.on{color:var(--amber);}
.wavelength-page .player-head{display:flex; align-items:center; justify-content:space-between; position:relative; z-index:1; margin-bottom:14px;}
.wavelength-page .player-head .lbl{font-family:'IBM Plex Mono',monospace; font-size:0.62rem; letter-spacing:0.05em; color:rgba(255,255,255,0.55); text-transform:uppercase;}
.wavelength-page .player-head .ic{width:22px; height:22px; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.7);}

.wavelength-page .tabbar{position:absolute; bottom:0; left:0; right:0; z-index:2; padding:12px 22px 18px; display:flex; justify-content:space-around; background:rgba(10,8,7,0.55); backdrop-filter:blur(14px); border-top:1px solid rgba(255,255,255,0.1);}
.wavelength-page .tabbar .tb{width:20px; height:20px; border-radius:6px; background:rgba(255,255,255,0.15);}
.wavelength-page .tabbar .tb.active{background:var(--amber);}

.wavelength-page .decision-list{display:flex; flex-direction:column; gap:2px;}
.wavelength-page .decision-row{display:grid; grid-template-columns:64px 1fr 1fr; gap:28px; padding:26px 0; border-top:1px solid var(--rule);}
.wavelength-page .decision-row:last-child{border-bottom:1px solid var(--rule);}
.wavelength-page .decision-row .no{font-family:'IBM Plex Mono', monospace; color:var(--amber); font-size:0.9rem;}
.wavelength-page .decision-row h4{font-weight:700; font-size:1.08rem; margin-bottom:6px;}
.wavelength-page .decision-row .why{color:var(--ink-dim); font-size:0.9rem; line-height:1.6;}

.wavelength-page .reflect{border:1px solid var(--rule); border-radius:16px; padding:48px;}
.wavelength-page .reflect p{color:var(--ink-dim); font-size:1rem; line-height:1.8; max-width:740px;}
.wavelength-page .reflect p + p{margin-top:14px;}

.wavelength-page footer{padding:56px 0 76px; text-align:center; color:var(--ink-dim); font-size:0.82rem; border-top:1px solid var(--rule);}
.wavelength-page footer .note{margin-top:8px; font-size:0.72rem; opacity:0.7;}

@media(max-width:900px){
  .wavelength-page .problem-grid, .wavelength-page .screens{grid-template-columns:1fr;}
  .wavelength-page .meta-row{grid-template-columns:repeat(2,1fr);}
  .wavelength-page .meta-cell{border-bottom:1px solid var(--rule); padding-bottom:20px; margin-bottom:20px;}
  .wavelength-page .insight-grid{grid-template-columns:1fr;}
  .wavelength-page .decision-row{grid-template-columns:1fr;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">wavelength<span>.</span></div>
    <div class="tag">CONCEPT CASE STUDY</div>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div class="eyebrow">PRODUCT DESIGN · CONSUMER · MOBILE</div>
    <h1 class="title">Music for a mood <span class="grad">you haven't named yet.</span></h1>
    <p class="sub">A music player that queues around how you feel, not just what you searched, with a now-playing screen where the artwork sets the palette and the glass just gets out of the way.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Product Designer</div></div>
      <div class="meta-cell"><div class="k">Scope</div><div class="v">UI system → prototype</div></div>
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
        <p>Streaming apps solved catalog size, not decision fatigue. Opening an app with 100 million songs and zero direction is its own small daily friction. Most people default to the same three playlists because choosing feels like work.</p>
        <p>This explores a player built around mood-first browsing, where the now-playing screen is worth lingering on instead of a control bar to glance past, closer to a small ritual than a utility.</p>
      </div>
      <div class="stat-stack">
        <div class="stat-card"><div class="big">142s</div><div class="lbl">average time spent browsing before a track gets picked, self-tracked over one week*</div></div>
        <div class="stat-card"><div class="big">4</div><div class="lbl">playlists account for most daily listening, per personal streaming history*</div></div>
      </div>
    </div>
    <p class="foot-note">*Personal, informal usage observations gathered for this project, not a published study.</p>
  </div>
</section>

<section id="principles">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Design principles</h2></div>
    <div class="insight-grid">
      <div class="insight-card">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#ffb454" stroke-width="1.6"><circle cx="15" cy="15" r="11"/><path d="M15 8 L15 15 L20 18" stroke-linecap="round"/></svg>
        <h3>Mood before genre</h3>
        <p>Browsing starts from a feeling, like "focused," "wired," or "slow morning," instead of genre tags that assume you already know what you want.</p>
      </div>
      <div class="insight-card">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#ffb454" stroke-width="1.6"><rect x="5" y="5" width="20" height="20" rx="5"/><circle cx="15" cy="15" r="4" fill="#ffb454" stroke="none"/></svg>
        <h3>Artwork sets the palette</h3>
        <p>Every screen's color comes from what's playing. Glass panels exist to let that color bleed through, not to impose a fixed theme of their own.</p>
      </div>
      <div class="insight-card">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#ffb454" stroke-width="1.6"><path d="M6 20 L11 12 L15 17 L19 8 L24 20" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h3>Warmth over sterility</h3>
        <p>Amber-to-wine washes replace the cold blacks and greens most players default to. The goal was dusk, not a spreadsheet.</p>
      </div>
    </div>
  </div>
</section>

<section id="solution">
  <div class="wrap">
    <div class="section-head"><span class="num">03</span><h2>The solution</h2></div>
    <div class="screens">

      <div class="screen-col">
        <div class="phone"><div class="notch"></div>
          <div class="phone-screen">
            <div class="wash mood"></div>
            <div class="status">
              <span>9:41</span>
              <div class="status-icons">
                <svg width="15" height="10" viewBox="0 0 15 10" fill="#fff"><rect x="0" y="6" width="2.4" height="4" rx="0.6"/><rect x="4" y="4" width="2.4" height="6" rx="0.6"/><rect x="8" y="2" width="2.4" height="8" rx="0.6"/><rect x="12" y="0" width="2.4" height="10" rx="0.6"/></svg>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"><path d="M1 4 A9 9 0 0 1 13 4"/><path d="M3.3 6.3 A5.5 5.5 0 0 1 10.7 6.3"/><circle cx="7" cy="9" r="1" fill="#fff" stroke="none"/></svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.75" y="0.75" width="18.5" height="9.5" rx="2.5" stroke="#fff" stroke-width="1.2"/><rect x="2.25" y="2.25" width="15.5" height="6.5" rx="1.3" fill="#fff"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.7" fill="#fff"/></svg>
              </div>
            </div>
            <div class="app-content">
              <div class="app-h1">How's the room feel?</div>
              <div class="app-sub">Pick a mood to start a queue</div>
              <div class="chip-row">
                <span class="mood-chip sel">Slow morning</span>
                <span class="mood-chip">Focused</span>
                <span class="mood-chip">Wired</span>
                <span class="mood-chip">Golden hour</span>
              </div>
              <div class="glass-pane">
                <div class="queue-card"><div class="queue-art art art-a"></div><div class="queue-info"><div class="t">Good To Be</div><div class="a">Mark Ambor</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="queue-card"><div class="queue-art art art-b"></div><div class="queue-info"><div class="t">Coffee Light</div><div class="a">June Faye</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="queue-card"><div class="queue-art art art-c"></div><div class="queue-info"><div class="t">Half Awake</div><div class="a">Rio Coast</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
              </div>
            </div>
            <div class="tabbar"><div class="tb active"></div><div class="tb"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">Mood picker</div><div class="d">Browsing starts with a feeling, not a search bar.</div></div>
      </div>

      <div class="screen-col">
        <div class="phone"><div class="notch"></div>
          <div class="phone-screen">
            <div class="wash play"></div>
            <div class="status">
              <span>9:41</span>
              <div class="status-icons">
                <svg width="15" height="10" viewBox="0 0 15 10" fill="#fff"><rect x="0" y="6" width="2.4" height="4" rx="0.6"/><rect x="4" y="4" width="2.4" height="6" rx="0.6"/><rect x="8" y="2" width="2.4" height="8" rx="0.6"/><rect x="12" y="0" width="2.4" height="10" rx="0.6"/></svg>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"><path d="M1 4 A9 9 0 0 1 13 4"/><path d="M3.3 6.3 A5.5 5.5 0 0 1 10.7 6.3"/><circle cx="7" cy="9" r="1" fill="#fff" stroke="none"/></svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.75" y="0.75" width="18.5" height="9.5" rx="2.5" stroke="#fff" stroke-width="1.2"/><rect x="2.25" y="2.25" width="15.5" height="6.5" rx="1.3" fill="#fff"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.7" fill="#fff"/></svg>
              </div>
            </div>
            <div class="app-content" style="padding-top:30px;">
              <div class="player-head">
                <div class="ic"><svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 9 L8 2 L1 9"/></svg></div>
                <div class="lbl">Playing · Slow morning</div>
                <div class="ic"><svg width="16" height="4" viewBox="0 0 16 4" fill="currentColor"><circle cx="2" cy="2" r="1.8"/><circle cx="8" cy="2" r="1.8"/><circle cx="14" cy="2" r="1.8"/></svg></div>
              </div>
              <div class="carousel">
                <div class="cover side" style="transform:scale(0.68); opacity:0.4;"><div class="art art-d" style="width:100%; height:100%; border-radius:inherit;"></div></div>
                <div class="cover side"><div class="art art-b" style="width:100%; height:100%; border-radius:inherit;"></div></div>
                <div class="cover center"><div class="art art-a" style="width:100%; height:100%; border-radius:inherit;"></div></div>
                <div class="cover side"><div class="art art-c" style="width:100%; height:100%; border-radius:inherit;"></div></div>
                <div class="cover side" style="transform:scale(0.68); opacity:0.4;"><div class="art art-e" style="width:100%; height:100%; border-radius:inherit;"></div></div>
              </div>
              <div class="track-row">
                <div class="track-title">Good To Be</div>
                <div class="track-artist">Mark Ambor</div>
              </div>
              <div class="progress"><div class="progress-fill"></div></div>
              <div class="time-row"><span>1:24</span><span>3:42</span></div>
              <div class="glass-pane pill" style="justify-content:center; padding:10px 16px;">
                <div class="ic"><svg width="14" height="14" viewBox="0 0 14 14" fill="#fff"><path d="M13 1 L4 7 L13 13 Z"/><rect x="1" y="1" width="2" height="12"/></svg></div>
                <div class="play"><svg width="14" height="14" viewBox="0 0 14 14" fill="#241207"><path d="M3 1 L12 7 L3 13 Z"/></svg></div>
                <div class="ic"><svg width="14" height="14" viewBox="0 0 14 14" fill="#fff"><path d="M1 1 L10 7 L1 13 Z"/><rect x="11" y="1" width="2" height="12"/></svg></div>
              </div>
              <div class="util-row">
                <div class="ic on"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3 L5 3 L12 11 L16 11"/><path d="M13 8 L16 11 L13 14"/><path d="M1 11 L5 11 L7.5 8"/><path d="M13 0 L16 3 L13 6"/><path d="M9 3 L12 3"/></svg></div>
                <div class="ic"><svg width="16" height="16" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="ic"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M2 6 L2 3 C2 2.4 2.4 2 3 2 L13 2"/><path d="M11 0 L13 2 L11 4"/><path d="M14 10 L14 13 C14 13.6 13.6 14 13 14 L3 14"/><path d="M5 12 L3 14 L5 16"/></svg></div>
              </div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb active"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">Now playing</div><div class="d">Artwork sets the color; glass recedes so the visual is the reward.</div></div>
      </div>

      <div class="screen-col">
        <div class="phone"><div class="notch"></div>
          <div class="phone-screen">
            <div class="wash queue"></div>
            <div class="status">
              <span>9:41</span>
              <div class="status-icons">
                <svg width="15" height="10" viewBox="0 0 15 10" fill="#fff"><rect x="0" y="6" width="2.4" height="4" rx="0.6"/><rect x="4" y="4" width="2.4" height="6" rx="0.6"/><rect x="8" y="2" width="2.4" height="8" rx="0.6"/><rect x="12" y="0" width="2.4" height="10" rx="0.6"/></svg>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"><path d="M1 4 A9 9 0 0 1 13 4"/><path d="M3.3 6.3 A5.5 5.5 0 0 1 10.7 6.3"/><circle cx="7" cy="9" r="1" fill="#fff" stroke="none"/></svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.75" y="0.75" width="18.5" height="9.5" rx="2.5" stroke="#fff" stroke-width="1.2"/><rect x="2.25" y="2.25" width="15.5" height="6.5" rx="1.3" fill="#fff"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.7" fill="#fff"/></svg>
              </div>
            </div>
            <div class="app-content">
              <div class="app-h1">Up next</div>
              <div class="app-sub">Slow morning · 18 tracks left</div>
              <div class="glass-pane">
                <div class="queue-card"><div class="queue-art art art-b"></div><div class="queue-info"><div class="t">Coffee Light</div><div class="a">June Faye</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="queue-card"><div class="queue-art art art-c"></div><div class="queue-info"><div class="t">Half Awake</div><div class="a">Rio Coast</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="queue-card"><div class="queue-art art art-d"></div><div class="queue-info"><div class="t">Windowsill</div><div class="a">Dana Ortiz</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
                <div class="queue-card"><div class="queue-art art art-e"></div><div class="queue-info"><div class="t">Low Light</div><div class="a">Hallow Bloom</div></div><svg class="queue-heart" viewBox="0 0 20 18" fill="currentColor"><path d="M10 17 C4 12.5 1 9.5 1 6 C1 3 3.2 1 6 1 C7.8 1 9.2 2 10 3.3 C10.8 2 12.2 1 14 1 C16.8 1 19 3 19 6 C19 9.5 16 12.5 10 17 Z"/></svg></div>
              </div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb"></div><div class="tb active"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">Queue</div><div class="d">Reorderable, but never the default view. Mood browsing stays primary.</div></div>
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
        <h4>Mood chips are the home screen, not a hidden filter</h4>
        <div class="why">Putting mood selection above search forces the product to commit to being a feeling-first experience, not a search engine with mood bolted on as decoration.</div>
      </div>
      <div class="decision-row">
        <div class="no">02</div>
        <h4>Glass only where the art is doing the work</h4>
        <div class="why">Translucent panels appear on the mood, now-playing, and queue screens because there's real color behind them to refract. The case-study chrome around them stays flat and typographic on purpose.</div>
      </div>
      <div class="decision-row">
        <div class="no">03</div>
        <h4>A coverflow carousel instead of a single static cover</h4>
        <div class="why">Seeing the previous and next track's color at the edges of the screen previews the mood shift before you skip, so the queue becomes visible without opening a list.</div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="reflect">
      <h2 style="margin-bottom:20px;">Reflection</h2>
      <p>This was the most purely visual project of the set, and the hardest to know when to stop polishing. The real design challenge was restraint: letting the artwork be the star meant resisting the urge to add more UI, not less, and keeping the glass effect confined to screens where it was earning its keep.</p>
      <p>If I extended this, I'd want to test whether mood-first browsing actually gets used after the novelty wears off, or whether people just fall back to search once they know exactly what they want.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div>Wavelength, a self-directed concept case study.</div>
    <div class="note">Designed as an original product exploration; not an existing or shipped product. Track/artist names and artwork are placeholder content.</div>
  </div>
</footer>
`;

export default function WavelengthCaseStudy() {
  return (
    <div className="wavelength-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
