import { Phone, ScreenCol } from "../Phone";

export default function DriftAtlasSolution() {
  return (
    <div className="cs-screens">
      <ScreenCol title="World map" desc="Every node visible — mystery, not manipulation.">
        <Phone activeTab={0}>
          <div className="cs-app-h1">The Atlas</div>
          <div className="cs-app-sub">6 of 14 regions discovered</div>
          <div className="cs-world-map">
            <div className="cs-path-line" style={{ top: "40px", left: "60px", height: "50px" }} />
            <div className="cs-path-line" style={{ top: "90px", left: "120px", height: "60px", transform: "rotate(20deg)" }} />
            <div className="cs-path-line" style={{ top: "150px", left: "90px", height: "50px", transform: "rotate(-15deg)" }} />
            <div className="cs-node done" style={{ top: "24px", left: "40px" }}>✓</div>
            <div className="cs-node done" style={{ top: "75px", left: "105px" }}>✓</div>
            <div className="cs-node active" style={{ top: "135px", left: "75px" }}>●</div>
            <div className="cs-node locked" style={{ top: "195px", left: "150px" }}>🔒</div>
            <div className="cs-node locked" style={{ top: "60px", left: "190px" }}>🔒</div>
          </div>
          <div className="cs-hud-bar">
            <div className="cs-hud-icon">✦</div>
            <div className="cs-hud-lbl">Currently exploring</div>
            <div className="cs-hud-val">Coral Hollow</div>
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Energy system" desc="A resource that forgives absence instead of punishing it.">
        <Phone activeTab={1}>
          <div className="cs-app-h1">Your energy</div>
          <div className="cs-app-sub">Fully regenerates by tomorrow — no rush</div>
          <div className="cs-energy-ring">
            <div className="cs-energy-n">68%</div>
          </div>
          <div className="cs-hud-bar">
            <div className="cs-hud-icon">☀</div>
            <div className="cs-hud-lbl">Resets in</div>
            <div className="cs-hud-val">6h 40m</div>
          </div>
          <div className="cs-hud-bar">
            <div className="cs-hud-icon">♡</div>
            <div className="cs-hud-lbl">Missed yesterday</div>
            <div className="cs-hud-val">No penalty</div>
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--cs-ink-dim)", fontWeight: 300, marginTop: "10px", lineHeight: 1.5 }}>
            Energy caps generously and never decays. There&apos;s nothing to lose by putting the game down.
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Collection" desc="A private keepsake shelf, no leaderboard in sight.">
        <Phone activeTab={2}>
          <div className="cs-app-h1">Your relics</div>
          <div className="cs-app-sub">9 collected · a personal record, not a rank</div>
          <div className="cs-card-relic">
            <div className="cs-relic-icon" />
            <div>
              <div className="cs-relic-t">Tidewoven Lantern</div>
              <div className="cs-relic-d">Found in Coral Hollow</div>
            </div>
          </div>
          <div className="cs-card-relic">
            <div className="cs-relic-icon" style={{ background: "linear-gradient(135deg, var(--cs-warn), var(--cs-accent2))" }} />
            <div>
              <div className="cs-relic-t">Sunken Compass</div>
              <div className="cs-relic-d">Found in Amber Reach</div>
            </div>
          </div>
          <div className="cs-card-relic">
            <div className="cs-relic-icon" style={{ background: "linear-gradient(135deg, var(--cs-accent2), var(--cs-accent))" }} />
            <div>
              <div className="cs-relic-t">Quiet Bell</div>
              <div className="cs-relic-d">Found in Willow Deep</div>
            </div>
          </div>
        </Phone>
      </ScreenCol>
    </div>
  );
}
