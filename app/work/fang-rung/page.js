export const metadata = {
  title: "Fang & Rung — Parastoo Sadeghi",
  description:
    "A mobile snakes-and-ladders game rebuilt with real graphic design instead of clip-art dice and popup ads.",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

.fangrung-page{
  --paper:#faf7ef;
  --ink:#141210;
  --ink-dim:#6b6455;
  --rule:#e7e0cf;
  --yellow:#ffe14d;
  --cyan:#3ec9d6;
  --coral:#ff5470;
  --violet:#8b6bff;
  --green:#4fbf6b;
  background:var(--paper); color:var(--ink);
  font-family:'Archivo', sans-serif;
  overflow-x:hidden;
}
.fangrung-page *{box-sizing:border-box;}
.fangrung-page .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
.fangrung-page a{color:inherit;}

.fangrung-page nav{position:sticky; top:0; z-index:10; background:rgba(250,247,239,0.9); border-bottom:3px solid var(--ink);}
.fangrung-page nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
.fangrung-page .brand{font-family:'Archivo Black', sans-serif; font-size:1.15rem; text-transform:uppercase; letter-spacing:-0.01em;}
.fangrung-page .brand span{color:var(--coral);}
.fangrung-page .tag{font-family:'JetBrains Mono', monospace; font-size:0.66rem; letter-spacing:0.03em; color:var(--ink); border:2px solid var(--ink); padding:6px 12px; border-radius:99px; text-transform:uppercase;}

.fangrung-page header.hero{padding:76px 0 60px; position:relative; overflow:hidden;}
.fangrung-page .hero-snake{position:absolute; top:-40px; right:-60px; width:420px; z-index:0; transform:rotate(-8deg);}
.fangrung-page .blob{position:absolute; border-radius:50%; z-index:0;}
.fangrung-page .eyebrow{font-family:'JetBrains Mono', monospace; font-size:0.72rem; letter-spacing:0.04em; color:var(--ink); background:var(--yellow); display:inline-block; padding:6px 12px; border:2px solid var(--ink); margin-bottom:24px; position:relative; z-index:1;}
.fangrung-page h1.title{font-family:'Archivo Black', sans-serif; font-size:clamp(2.5rem,6vw,4.6rem); line-height:0.96; letter-spacing:-0.01em; max-width:760px; position:relative; z-index:1; text-transform:uppercase;}
.fangrung-page h1.title .u{background:linear-gradient(180deg, transparent 60%, var(--coral) 60%);}
.fangrung-page .sub{margin-top:26px; font-size:1.12rem; color:var(--ink-dim); max-width:520px; line-height:1.6; font-weight:500; position:relative; z-index:1;}

.fangrung-page .meta-row{margin-top:48px; display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--ink); border:2px solid var(--ink); position:relative; z-index:1;}
.fangrung-page .meta-cell{background:var(--paper); padding:18px 20px;}
.fangrung-page .meta-cell .k{font-family:'JetBrains Mono', monospace; font-size:0.64rem; letter-spacing:0.05em; text-transform:uppercase; color:var(--ink-dim); margin-bottom:6px;}
.fangrung-page .meta-cell .v{font-weight:700; font-size:1rem;}

.fangrung-page section{padding:80px 0; position:relative;}
.fangrung-page .section-head{display:flex; align-items:center; gap:16px; margin-bottom:40px;}
.fangrung-page .num{font-family:'Archivo Black', sans-serif; font-size:1.4rem; -webkit-text-stroke:1.5px var(--ink); color:var(--yellow);}
.fangrung-page h2{font-family:'Archivo Black', sans-serif; font-size:1.7rem; text-transform:uppercase; letter-spacing:-0.005em;}

.fangrung-page .problem-grid{display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:start;}
.fangrung-page .problem-grid p{color:var(--ink-dim); line-height:1.75; font-size:1.02rem; font-weight:500;}
.fangrung-page .problem-grid p + p{margin-top:16px;}
.fangrung-page .stat-stack{display:flex; flex-direction:column; gap:14px;}
.fangrung-page .stat-card{background:var(--paper); border:3px solid var(--ink); border-radius:14px; padding:20px 24px; box-shadow:6px 6px 0 var(--ink);}
.fangrung-page .stat-card .big{font-family:'Archivo Black', sans-serif; font-size:2.2rem; font-variant-numeric:tabular-nums;}
.fangrung-page .stat-card .lbl{color:var(--ink-dim); font-size:0.85rem; margin-top:6px; font-weight:500;}

.fangrung-page .insight-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.fangrung-page .insight-card{border:3px solid var(--ink); border-radius:16px; padding:26px 24px; position:relative;}
.fangrung-page .insight-card .icon{width:42px; height:42px; border-radius:10px; border:2.5px solid var(--ink); display:flex; align-items:center; justify-content:center; margin-bottom:18px;}
.fangrung-page .insight-card h3{font-weight:800; font-size:1.05rem; margin-bottom:10px;}
.fangrung-page .insight-card p{color:var(--ink-dim); font-size:0.9rem; line-height:1.6; font-weight:500;}

.fangrung-page .screens{display:grid; grid-template-columns:repeat(3,1fr); gap:32px; margin-top:8px;}
.fangrung-page .screen-col{display:flex; flex-direction:column; align-items:center; gap:18px;}
.fangrung-page .screen-label{text-align:center;}
.fangrung-page .screen-label .t{font-weight:800; font-size:0.98rem;}
.fangrung-page .screen-label .d{color:var(--ink-dim); font-size:0.8rem; margin-top:4px; font-weight:500;}

.fangrung-page .phone{width:264px; height:552px; border-radius:36px; padding:10px; background:var(--ink); box-shadow:8px 8px 0 var(--coral); position:relative;}
.fangrung-page .phone-screen{width:100%; height:100%; border-radius:26px; overflow:hidden; position:relative; background:var(--paper); color:var(--ink);}
.fangrung-page .notch{position:absolute; top:10px; left:50%; transform:translateX(-50%); width:80px; height:20px; background:var(--ink); border-radius:10px; z-index:6;}
.fangrung-page .status{display:flex; justify-content:space-between; padding:16px 18px 0; font-family:'JetBrains Mono',monospace; font-size:0.66rem; font-weight:700;}
.fangrung-page .app-content{padding:36px 16px 16px; height:100%; position:relative;}
.fangrung-page .app-h1{font-family:'Archivo Black', sans-serif; font-size:1.15rem; text-transform:uppercase; margin-bottom:2px;}
.fangrung-page .app-sub{color:var(--ink-dim); font-size:0.72rem; font-weight:600; margin-bottom:14px;}

.fangrung-page .board-wrap{border:3px solid var(--ink); border-radius:14px; padding:12px; margin-bottom:12px; position:relative;}
.fangrung-page .board-grid{display:grid; grid-template-columns:repeat(5,1fr); gap:4px; position:relative; z-index:2;}
.fangrung-page .tile{aspect-ratio:1; border:2px solid var(--ink); border-radius:5px; display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-weight:700; font-size:0.62rem; position:relative;}
.fangrung-page .tile.token::after{content:""; position:absolute; width:60%; height:60%; border-radius:50%; background:var(--coral); border:2px solid var(--ink);}
.fangrung-page .tile.snake{background:var(--violet); color:#fff;}
.fangrung-page .tile.ladder{background:var(--green); color:#fff;}
.fangrung-page .board-svg{position:absolute; inset:12px; z-index:1; overflow:visible; pointer-events:none;}
.fangrung-page .legend{display:flex; gap:14px; margin-top:2px;}
.fangrung-page .legend .row{display:flex; align-items:center; gap:6px; font-size:0.66rem; font-weight:700;}
.fangrung-page .legend .sw{width:12px; height:12px; border-radius:3px; border:2px solid var(--ink);}

.fangrung-page .dice-stage{border:3px solid var(--ink); border-radius:18px; padding:28px 20px; text-align:center; margin-bottom:14px; position:relative; overflow:hidden;}
.fangrung-page .die{width:88px; height:88px; margin:0 auto 16px; background:#fff; border:3px solid var(--ink); border-radius:18px; display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:repeat(3,1fr); padding:14px; transform:rotate(-4deg); box-shadow:5px 5px 0 var(--ink);}
.fangrung-page .pip{width:14px; height:14px; border-radius:50%; background:var(--ink); align-self:center; justify-self:center;}
.fangrung-page .roll-label{font-family:'Archivo Black', sans-serif; font-size:1.25rem; text-transform:uppercase; margin-bottom:4px;}
.fangrung-page .roll-sub{font-size:0.78rem; color:var(--ink-dim); font-weight:600;}
.fangrung-page .result-chip{display:inline-flex; align-items:center; gap:6px; margin-top:12px; padding:6px 14px; border:2.5px solid var(--ink); border-radius:99px; font-size:0.72rem; font-weight:800; text-transform:uppercase;}
.fangrung-page .result-chip.snake{background:var(--violet); color:#fff;}
.fangrung-page .cta-btn{display:block; width:100%; text-align:center; background:var(--yellow); border:3px solid var(--ink); border-radius:12px; padding:14px; font-family:'Archivo Black', sans-serif; text-transform:uppercase; font-size:0.9rem; box-shadow:4px 4px 0 var(--ink);}

.fangrung-page .skin-grid{display:grid; grid-template-columns:1fr 1fr; gap:10px;}
.fangrung-page .skin-card{border:3px solid var(--ink); border-radius:12px; overflow:hidden; position:relative;}
.fangrung-page .skin-swatch{height:64px;}
.fangrung-page .skin-info{padding:8px 10px; background:var(--paper);}
.fangrung-page .skin-info .t{font-size:0.68rem; font-weight:800;}
.fangrung-page .skin-info .d{font-size:0.58rem; color:var(--ink-dim); font-weight:600; margin-top:2px;}
.fangrung-page .skin-lock{position:absolute; top:6px; right:6px; width:18px; height:18px; border-radius:50%; background:var(--ink); display:flex; align-items:center; justify-content:center;}

.fangrung-page .tabbar{position:absolute; bottom:0; left:0; right:0; padding:12px 20px 16px; display:flex; justify-content:space-around; background:var(--paper); border-top:3px solid var(--ink);}
.fangrung-page .tabbar .tb{width:18px; height:18px; border-radius:5px; border:2px solid var(--ink);}
.fangrung-page .tabbar .tb.active{background:var(--coral);}

.fangrung-page .decision-list{display:flex; flex-direction:column; gap:2px;}
.fangrung-page .decision-row{display:grid; grid-template-columns:60px 1fr 1fr; gap:28px; padding:26px 0; border-top:3px solid var(--ink);}
.fangrung-page .decision-row:last-child{border-bottom:3px solid var(--ink);}
.fangrung-page .decision-row .no{font-family:'Archivo Black', sans-serif; font-size:1.1rem; color:var(--coral);}
.fangrung-page .decision-row h4{font-weight:800; font-size:1.08rem; margin-bottom:6px;}
.fangrung-page .decision-row .why{color:var(--ink-dim); font-size:0.9rem; line-height:1.6; font-weight:500;}

.fangrung-page .reflect{border:3px solid var(--ink); border-radius:18px; padding:46px; box-shadow:8px 8px 0 var(--yellow);}
.fangrung-page .reflect p{color:var(--ink-dim); font-size:1rem; line-height:1.8; max-width:740px; font-weight:500;}
.fangrung-page .reflect p + p{margin-top:14px;}

.fangrung-page footer{padding:56px 0 76px; text-align:center; color:var(--ink-dim); font-size:0.82rem; font-weight:600; border-top:3px solid var(--ink);}
.fangrung-page footer .note{margin-top:8px; font-size:0.72rem; opacity:0.75;}

@media(max-width:900px){
  .fangrung-page .problem-grid, .fangrung-page .screens{grid-template-columns:1fr;}
  .fangrung-page .meta-row{grid-template-columns:repeat(2,1fr);}
  .fangrung-page .insight-grid{grid-template-columns:1fr;}
  .fangrung-page .decision-row{grid-template-columns:1fr;}
  .fangrung-page .hero-snake{display:none;}
}
`;

const html = `
<nav>
  <div class="wrap">
    <div class="brand">fang <span>&</span> rung</div>
    <div class="tag">CONCEPT CASE STUDY</div>
  </div>
</nav>

<header class="hero">
  <svg class="hero-snake" viewBox="0 0 420 260" fill="none">
    <path d="M20 40 C 90 -10, 140 90, 210 60 S 340 -10, 400 60 C 430 100, 380 140, 330 120 C 290 105, 300 60, 340 55" stroke="var(--violet)" stroke-width="34" stroke-linecap="round" fill="none" opacity="0.92"/>
    <circle cx="340" cy="55" r="19" fill="var(--violet)"/>
    <circle cx="333" cy="48" r="3.4" fill="#141210"/>
    <path d="M356 52 L370 46 M356 58 L370 62" stroke="#141210" stroke-width="3" stroke-linecap="round"/>
  </svg>
  <div class="blob" style="width:150px; height:150px; background:var(--yellow); bottom:10px; right:260px; opacity:0.9; z-index:0;"></div>
  <div class="wrap">
    <div class="eyebrow">GAME UX DESIGN · MOBILE</div>
    <h1 class="title">Climb the rungs.<br>Dodge the <span class="u">fangs.</span></h1>
    <p class="sub">A mobile snakes-and-ladders game rebuilt with real graphic design instead of the clip-art dice and popup ads the genre usually settles for. One board, one die, no disguises.</p>

    <div class="meta-row">
      <div class="meta-cell"><div class="k">Role</div><div class="v">Game UX Designer</div></div>
      <div class="meta-cell"><div class="k">Scope</div><div class="v">Game UI system</div></div>
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
        <p>Most digital snakes-and-ladders apps look like they were built once in 2013 and abandoned: clip-art snakes, a beige board, a "spin to win" popup between turns. The game itself is pure, simple luck and the interface almost never respects that.</p>
        <p>Fang & Rung asks what the oldest board game in the app store looks like with real graphic design intent behind it: bold, legible, a little loud, and honest that the whole game is one roll of a die.</p>
      </div>
      <div class="stat-stack">
        <div class="stat-card"><div class="big">0</div><div class="lbl">forced ads or "watch to reroll" prompts in the core turn loop*</div></div>
        <div class="stat-card"><div class="big">2 min</div><div class="lbl">target length for a full match, start to finish*</div></div>
      </div>
    </div>
  </div>
</section>

<section id="principles">
  <div class="wrap">
    <div class="section-head"><span class="num">02</span><h2>Design principles</h2></div>
    <div class="insight-grid">
      <div class="insight-card">
        <div class="icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#141210" stroke-width="2"><rect x="2" y="2" width="16" height="16" rx="3"/><circle cx="6.5" cy="6.5" r="1.3" fill="#141210" stroke="none"/><circle cx="13.5" cy="13.5" r="1.3" fill="#141210" stroke="none"/></svg></div>
        <h3>A snake tile looks like a snake tile</h3>
        <p>Every square that sends you down is violet with a coiled mark on it. Every square that sends you up is green with a rung mark. No legend to memorize, no fine print.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#141210" stroke-width="2"><path d="M10 2 L10 12" stroke-linecap="round"/><path d="M5 8 L10 2 L15 8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Celebrate the luck, don't hide it</h3>
        <p>The dice roll is the entire game, so it gets the biggest, boldest moment on screen instead of being shrunk into a corner and apologized for.</p>
      </div>
      <div class="insight-card">
        <div class="icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#141210" stroke-width="2"><circle cx="10" cy="10" r="7"/><path d="M10 6 L10 10 L13 12" stroke-linecap="round"/></svg></div>
        <h3>Cosmetic collection, never a paywall</h3>
        <p>Board skins unlock by winning matches and exist purely as a personal keepsake shelf. Nothing about the roll itself is ever for sale.</p>
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
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Coral Run</div>
              <div class="app-sub">Turn 6, your move</div>
              <div class="board-wrap">
                <svg class="board-svg" viewBox="0 0 220 176" fill="none">
                  <path d="M30 30 C 55 15, 60 55, 90 45 S 120 15, 135 40" stroke="var(--violet)" stroke-width="9" stroke-linecap="round"/>
                  <circle cx="135" cy="40" r="6" fill="var(--violet)"/>
                  <path d="M60 130 L100 90" stroke="#141210" stroke-width="4"/>
                  <path d="M75 130 L115 90" stroke="#141210" stroke-width="4"/>
                  <path d="M64 118 L111 98 M62 106 L107 108 M66 130 L103 90" stroke="#141210" stroke-width="2.5"/>
                </svg>
                <div class="board-grid">
                  <div class="tile" style="background:var(--yellow);">21</div>
                  <div class="tile" style="background:#fff;">22</div>
                  <div class="tile" style="background:var(--cyan);">23</div>
                  <div class="tile" style="background:#fff;">24</div>
                  <div class="tile snake">25</div>
                  <div class="tile" style="background:#fff;">20</div>
                  <div class="tile" style="background:var(--cyan);">19</div>
                  <div class="tile" style="background:#fff;">18</div>
                  <div class="tile" style="background:var(--yellow);">17</div>
                  <div class="tile" style="background:#fff;">16</div>
                  <div class="tile token" style="background:var(--cyan);">11</div>
                  <div class="tile" style="background:#fff;">12</div>
                  <div class="tile" style="background:#fff;">13</div>
                  <div class="tile ladder">14</div>
                  <div class="tile" style="background:#fff;">15</div>
                  <div class="tile" style="background:#fff;">10</div>
                  <div class="tile" style="background:var(--yellow);">9</div>
                  <div class="tile" style="background:#fff;">8</div>
                  <div class="tile" style="background:#fff;">7</div>
                  <div class="tile snake">6</div>
                  <div class="tile" style="background:#fff;">1</div>
                  <div class="tile" style="background:#fff;">2</div>
                  <div class="tile ladder">3</div>
                  <div class="tile" style="background:#fff;">4</div>
                  <div class="tile" style="background:var(--yellow);">5</div>
                </div>
              </div>
              <div class="legend">
                <div class="row"><div class="sw" style="background:var(--violet);"></div>Snake</div>
                <div class="row"><div class="sw" style="background:var(--green);"></div>Ladder</div>
              </div>
            </div>
            <div class="tabbar"><div class="tb active"></div><div class="tb"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">The board</div><div class="d">Violet means a snake, green means a ladder, always.</div></div>
      </div>

      <div class="screen-col">
        <div class="phone"><div class="notch"></div>
          <div class="phone-screen">
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Your turn</div>
              <div class="app-sub">Tap to roll</div>
              <div class="dice-stage">
                <div class="die">
                  <div class="pip"></div><div></div><div class="pip"></div>
                  <div></div><div class="pip"></div><div></div>
                  <div class="pip"></div><div></div><div class="pip"></div>
                </div>
                <div class="roll-label">You rolled a 5</div>
                <div class="roll-sub">Tile 11 to tile 16, straight past a ladder.</div>
                <div class="result-chip snake">Watch tile 25, a snake is waiting</div>
              </div>
              <div class="cta-btn">Move token</div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb active"></div><div class="tb"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">The roll</div><div class="d">The one moment that matters gets the biggest stage.</div></div>
      </div>

      <div class="screen-col">
        <div class="phone"><div class="notch"></div>
          <div class="phone-screen">
            <div class="status"><span>9:41</span><span>100%</span></div>
            <div class="app-content">
              <div class="app-h1">Board skins</div>
              <div class="app-sub">5 of 12 unlocked by winning</div>
              <div class="skin-grid">
                <div class="skin-card"><div class="skin-swatch" style="background:var(--coral);"></div><div class="skin-info"><div class="t">Coral Run</div><div class="d">Equipped</div></div></div>
                <div class="skin-card"><div class="skin-swatch" style="background:var(--cyan);"></div><div class="skin-info"><div class="t">Tidepool</div><div class="d">Unlocked</div></div></div>
                <div class="skin-card"><div class="skin-swatch" style="background:var(--yellow);"></div><div class="skin-info"><div class="t">Dune Line</div><div class="d">Unlocked</div></div></div>
                <div class="skin-card"><div class="skin-swatch" style="background:var(--violet);"></div><div class="skin-info"><div class="t">Nightglass</div><div class="d">Win 3 to unlock</div></div><div class="skin-lock"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fff" stroke-width="1.4"><rect x="2" y="4.5" width="6" height="4.5" rx="1"/><path d="M3.2 4.5 L3.2 3 A1.8 1.8 0 0 1 6.8 3 L6.8 4.5"/></svg></div></div>
              </div>
            </div>
            <div class="tabbar"><div class="tb"></div><div class="tb"></div><div class="tb active"></div><div class="tb"></div></div>
          </div>
        </div>
        <div class="screen-label"><div class="t">Collection</div><div class="d">Skins unlock by playing, never by paying.</div></div>
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
        <h4>One color for snakes, one color for ladders, everywhere</h4>
        <div class="why">Violet always means down, green always means up, on the board, in the legend, and in the roll result. A player glancing over someone's shoulder should still be able to read the game.</div>
      </div>
      <div class="decision-row">
        <div class="no">02</div>
        <h4>The dice roll gets its own full screen</h4>
        <div class="why">Most board game apps bury the roll in a small corner widget. Giving it a dedicated stage, tilted die, drop shadow and all, makes the one truly random moment feel like the main event it is.</div>
      </div>
      <div class="decision-row">
        <div class="no">03</div>
        <h4>Locked skins show what they cost, in wins only</h4>
        <div class="why">"Win 3 to unlock" instead of a price tag keeps the collection loop entirely inside the game, so the board itself is never a storefront.</div>
      </div>
    </div>
  </div>
</section>

<section id="reflection">
  <div class="wrap">
    <div class="reflect">
      <h2 style="margin-bottom:20px;">Reflection</h2>
      <p>This one taught me that a maximalist visual style still needs discipline, just a different kind. The constraint wasn't how much color to use, it was picking four colors and refusing to add a fifth, so the board stayed a game and never turned into noise.</p>
      <p>If I extended this, I'd want to test whether the big dice-roll screen slows repeat play down too much. A ritual is fun the first ten times and can turn into friction on the hundredth.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div>Fang & Rung, a self-directed concept case study.</div>
    <div class="note">Designed as an original game UX exploration; not an existing or shipped product.</div>
  </div>
</footer>
`;

export default function FangRungCaseStudy() {
  return (
    <div className="fangrung-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
