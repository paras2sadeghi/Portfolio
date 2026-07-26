export default function HuddleSolution() {
  return (
    <div className="cs-browser-frame">
      <div className="cs-browser-bar">
        <div className="cs-browser-dot" />
        <div className="cs-browser-dot" />
        <div className="cs-browser-dot" />
        <div className="cs-url">app.huddle.so/project/checkout-redesign</div>
      </div>
      <div className="cs-app-body">
        <div className="cs-side-nav">
          <div className="cs-side-item active">📥 Inbox</div>
          <div className="cs-side-item">🎬 My recordings</div>
          <div className="cs-side-item">📁 Checkout redesign</div>
          <div className="cs-side-item">📁 Onboarding v3</div>
          <div className="cs-side-item">⚙ Settings</div>
        </div>
        <div className="cs-main-panel">
          <div className="cs-panel-title">Checkout redesign</div>
          <div className="cs-panel-sub">4 recordings · last activity 2h ago</div>

          <div className="cs-video-clip">
            <div className="cs-thumb" />
            <div>
              <div className="cs-clip-t">Cart drawer — v2 walkthrough</div>
              <div className="cs-clip-d">Recorded by Priya · 2:14</div>
            </div>
            <div className="cs-clip-meta">
              <span className="cs-badge">3 comments</span>
              <div className="cs-avatar-stack">
                <div className="cs-av" />
                <div className="cs-av" />
                <div className="cs-av" />
              </div>
            </div>
          </div>

          <div className="cs-video-clip">
            <div className="cs-thumb" />
            <div>
              <div className="cs-clip-t">Payment step — edge cases</div>
              <div className="cs-clip-d">Recorded by you · 1:02</div>
            </div>
            <div className="cs-clip-meta">
              <span className="cs-badge warn">Awaiting reply</span>
              <div className="cs-avatar-stack">
                <div className="cs-av" />
              </div>
            </div>
          </div>

          <div className="cs-timeline-panel" style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>Payment step — edge cases</div>
              <div style={{ fontSize: "0.72rem", color: "var(--cs-ink-dim)" }}>0:38 / 1:02</div>
            </div>
            <div className="cs-scrub">
              <div className="cs-scrub-fill" />
              <div className="cs-marker" style={{ left: "18%" }} />
              <div className="cs-marker" style={{ left: "60%", background: "var(--cs-accent2)" }} />
            </div>
            <div className="cs-comment-row">
              <div className="cs-av-sm" />
              <div>
                <div className="cs-comment-n">
                  Marco <span className="cs-timestamp">0:11</span>
                </div>
                <div className="cs-comment-c">Can the error state persist a bit longer? Feels like it flashes.</div>
              </div>
            </div>
            <div className="cs-comment-row">
              <div className="cs-av-sm" style={{ background: "linear-gradient(135deg, var(--cs-accent2), var(--cs-accent))" }} />
              <div>
                <div className="cs-comment-n">
                  You <span className="cs-timestamp">0:37</span>
                </div>
                <div className="cs-comment-c">Good catch — bumping the toast duration to 4s.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
