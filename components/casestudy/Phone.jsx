// Shared phone frame + labelled screen column for case-study mockups.

export function Phone({ children, activeTab = 0 }) {
  return (
    <div className="cs-phone">
      <div className="cs-notch" />
      <div className="cs-phone-screen">
        <div className="cs-status">
          <span>9:41</span>
          <span>●●● 5G 100%</span>
        </div>
        <div className="cs-app-content">{children}</div>
        <div className="cs-tabbar">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`cs-tb${i === activeTab ? " active" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScreenCol({ title, desc, children }) {
  return (
    <div className="cs-screen-col">
      {children}
      <div className="cs-screen-label">
        <div className="cs-screen-t">{title}</div>
        <div className="cs-screen-d">{desc}</div>
      </div>
    </div>
  );
}
