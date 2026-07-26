import { Phone, ScreenCol } from "../Phone";

export default function TransitSolution() {
  return (
    <div className="cs-screens">
      <ScreenCol title="Home" desc="Confidence shown as color, not just a colon and a number.">
        <Phone activeTab={0}>
          <div className="cs-app-h1">Good morning</div>
          <div className="cs-app-sub">Home → Work · 3 saved routes</div>
          <div className="cs-glass-panel">
            <div className="cs-route-pill">
              <div className="cs-dot green" />
              <div>
                <div className="cs-route-line">Route 14 · Elm St</div>
                <div className="cs-route-eta">High confidence</div>
              </div>
              <div className="cs-eta-badge">4 min</div>
            </div>
            <div className="cs-route-pill">
              <div className="cs-dot amber" />
              <div>
                <div className="cs-route-line">Route 9 · Downtown</div>
                <div className="cs-route-eta">Signal weak · est.</div>
              </div>
              <div className="cs-eta-badge">~11 min</div>
            </div>
          </div>
          <div className="cs-map-blob">
            <div className="cs-map-line" />
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Route detail" desc="One instruction up top; the raw data stays available but secondary.">
        <Phone activeTab={1}>
          <div className="cs-app-h1">Route 14</div>
          <div className="cs-app-sub">Elm St → Downtown Loop</div>
          <div className="cs-big-eta">
            <div className="cs-big-eta-n">4</div>
            <div className="cs-big-eta-u">minutes · high confidence</div>
          </div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
              You have time to walk
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--cs-ink-dim)", fontWeight: 300 }}>
              Leave in the next 2 min to make this bus comfortably.
            </div>
          </div>
          <div className="cs-map-blob" style={{ height: "130px" }}>
            <div className="cs-map-line" />
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Alerts" desc="Reasons, not just red banners — restores trust instead of eroding it.">
        <Phone activeTab={2}>
          <div className="cs-app-h1">Alerts</div>
          <div className="cs-app-sub">2 active on your routes</div>
          <div className="cs-alert-card">
            <div className="cs-alert-t">Route 9 running 8–12 min behind</div>
            <div className="cs-alert-d">Driver shift change downtown. Updated 1 min ago.</div>
          </div>
          <div className="cs-alert-card">
            <div className="cs-alert-t">Elm St stop moved 40m north</div>
            <div className="cs-alert-d">Construction through Friday.</div>
          </div>
          <div className="cs-glass-panel" style={{ marginTop: "6px" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--cs-ink-dim)", fontWeight: 300 }}>
              We tell you why, not just that something&apos;s wrong.
            </div>
          </div>
        </Phone>
      </ScreenCol>
    </div>
  );
}
