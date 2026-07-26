import { Phone, ScreenCol } from "../Phone";

function Queue({ title, artist }) {
  return (
    <div className="cs-queue-card">
      <div className="cs-queue-art" />
      <div>
        <div className="cs-queue-t">{title}</div>
        <div className="cs-queue-a">{artist}</div>
      </div>
    </div>
  );
}

export default function WavelengthSolution() {
  return (
    <div className="cs-screens">
      <ScreenCol title="Mood picker" desc="Browsing starts with a feeling, not a search bar.">
        <Phone activeTab={0}>
          <div className="cs-app-h1">How&apos;s the room feel?</div>
          <div className="cs-app-sub">Pick a mood to start a queue</div>
          <div style={{ marginTop: "6px" }}>
            <span className="cs-mood-chip sel">Slow morning</span>
            <span className="cs-mood-chip">Focused</span>
            <span className="cs-mood-chip">Wired</span>
            <span className="cs-mood-chip">Golden hour</span>
            <span className="cs-mood-chip">Late night</span>
          </div>
          <div style={{ marginTop: "22px" }}>
            <Queue title="Good To Be" artist="Mark Ambor" />
            <Queue title="Coffee Light" artist="June Faye" />
            <Queue title="Half Awake" artist="Rio Coast" />
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Now playing" desc="Artwork dominates; glass controls recede so the visual is the reward.">
        <Phone activeTab={1}>
          <div className="cs-album-art" />
          <div className="cs-track-row">
            <div>
              <div className="cs-track-title">Good To Be</div>
              <div className="cs-track-artist">Mark Ambor</div>
            </div>
            <div className="cs-heart">♡</div>
          </div>
          <div className="cs-progress">
            <div className="cs-progress-fill" />
          </div>
          <div className="cs-time-row">
            <span>1:24</span>
            <span>3:42</span>
          </div>
          <div className="cs-controls">
            <div className="cs-ctrl-btn">⇄</div>
            <div className="cs-ctrl-btn">⏮</div>
            <div className="cs-play-btn">▶</div>
            <div className="cs-ctrl-btn">⏭</div>
            <div className="cs-ctrl-btn">↻</div>
          </div>
        </Phone>
      </ScreenCol>

      <ScreenCol title="Queue" desc="Reorderable, but never the default view — mood browsing stays primary.">
        <Phone activeTab={2}>
          <div className="cs-app-h1">Up next</div>
          <div className="cs-app-sub">Slow morning · 18 tracks left</div>
          <Queue title="Coffee Light" artist="June Faye" />
          <Queue title="Half Awake" artist="Rio Coast" />
          <Queue title="Windowsill" artist="Dana Ortiz" />
          <Queue title="Low Light" artist="Hallow Bloom" />
        </Phone>
      </ScreenCol>
    </div>
  );
}
