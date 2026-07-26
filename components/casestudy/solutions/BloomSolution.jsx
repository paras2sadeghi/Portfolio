import { Phone, ScreenCol } from "../Phone";

export default function BloomSolution() {
  return (
    <div className="cs-screens">
      <ScreenCol title="Daily check-in" desc="Two axes, not one — energy and undertone can differ.">
        <Phone activeTab={0}>
          <div className="cs-app-h1">Evening, Sara</div>
          <div className="cs-app-sub">Your check-in stays private, always</div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>How&apos;s your energy today?</div>
            <div className="cs-mood-row">
              <div className="cs-mood-dot">😔</div>
              <div className="cs-mood-dot">😕</div>
              <div className="cs-mood-dot sel">😌</div>
              <div className="cs-mood-dot">🙂</div>
              <div className="cs-mood-dot">😄</div>
            </div>
          </div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>And underneath that?</div>
            <div className="cs-mood-row">
              <div className="cs-mood-dot sel">😴</div>
              <div className="cs-mood-dot">😰</div>
              <div className="cs-mood-dot">🙃</div>
              <div className="cs-mood-dot">✨</div>
            </div>
          </div>
          <div className="cs-check-btn">Complete check-in</div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Privacy explainer" desc="Trust made visible and structural, not just promised in a policy page.">
        <Phone activeTab={1}>
          <div className="cs-app-h1">Your privacy</div>
          <div className="cs-app-sub">What your manager can and can&apos;t see</div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: "6px", color: "var(--cs-accent)" }}>
              ✓ Never visible
            </div>
            <div style={{ fontSize: "0.76rem", color: "var(--cs-ink-dim)", fontWeight: 300 }}>
              Your individual daily answers, always private to you.
            </div>
          </div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: "6px" }}>
              Only shown as a team trend
            </div>
            <div style={{ fontSize: "0.76rem", color: "var(--cs-ink-dim)", fontWeight: 300 }}>
              Aggregated across 5+ people, never attributed to you.
            </div>
          </div>
          <div className="cs-quote-card">
            &ldquo;Knowing no one sees my answer alone is the only reason I actually tell the truth.&rdquo;
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Manager view" desc="Trends and gentle nudges only — never individual data.">
        <Phone activeTab={2}>
          <div className="cs-app-h1">Team pulse</div>
          <div className="cs-app-sub">Design team · last 7 days</div>
          <div className="cs-glass-panel">
            <div className="cs-team-pulse">
              {[40, 55, 35, 70, 60, 30, 45].map((h, i) => (
                <div className="cs-pulse-bar" key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--cs-ink-dim)", fontWeight: 300 }}>
              Energy dipped mid-week — no names, just a trend for the team lead to notice.
            </div>
          </div>
          <div className="cs-glass-panel">
            <div style={{ fontSize: "0.8rem", fontWeight: 600 }}>Suggested nudge</div>
            <div style={{ fontSize: "0.74rem", color: "var(--cs-ink-dim)", marginTop: "4px", fontWeight: 300 }}>
              Consider a lighter Thursday — energy has trended low twice this month.
            </div>
          </div>
        </Phone>
      </ScreenCol>
    </div>
  );
}
