import Link from "next/link";
import { profile } from "@/lib/content";

export default function CaseStudyShell({ data, solution, next }) {
  const t = data.theme;
  const rootStyle = {
    "--cs-accent": t.accent,
    "--cs-accent2": t.accent2,
    "--cs-warn": t.warn,
    "--cs-ink": t.ink,
    "--cs-ink-dim": t.inkDim,
    "--cs-glass": t.glass,
    "--cs-glass-border": t.glassBorder,
    background: t.bodyBg,
  };

  return (
    <div className="cs-root" style={rootStyle}>
      <div className="cs-grain" aria-hidden />

      <nav className="cs-nav">
        <div className="cs-wrap">
          <Link href="/" className="cs-brand">
            {profile.name}
          </Link>
          <Link href="/#work" className="cs-back">
            <span aria-hidden>←</span> All work
          </Link>
        </div>
      </nav>

      <header className="cs-hero">
        <div className="cs-wrap">
          <div className="cs-eyebrow">{data.eyebrow}</div>
          <h1 className={`cs-title${t.titleEmSolid ? " solid" : ""}`}>
            {data.hero.titleLead}
            <br />
            <em>{data.hero.titleEm}</em>
          </h1>
          <p className="cs-sub">{data.hero.sub}</p>

          <div className="cs-meta-row">
            {data.meta.map((m) => (
              <div className="cs-meta-cell" key={m.k}>
                <div className="cs-k">{m.k}</div>
                <div className="cs-v">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-section-head">
            <span className="cs-num">01</span>
            <h2 className="cs-h2">The problem</h2>
          </div>
          <div className="cs-problem-grid">
            <div>
              {data.problem.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="cs-stat-stack">
              {data.problem.stats.map((s, i) => (
                <div className="cs-stat-card" key={i}>
                  <div className="cs-stat-big">{s.big}</div>
                  <div className="cs-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          {data.problem.footnote && (
            <p className="cs-footnote">{data.problem.footnote}</p>
          )}
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-section-head">
            <span className="cs-num">02</span>
            <h2 className="cs-h2">{data.principlesTitle}</h2>
          </div>
          <div className="cs-insight-grid">
            {data.principles.map((p) => (
              <div className="cs-insight-card" key={p.title}>
                <div className="cs-insight-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-section-head">
            <span className="cs-num">03</span>
            <h2 className="cs-h2">The solution</h2>
          </div>
          {solution}
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-section-head">
            <span className="cs-num">04</span>
            <h2 className="cs-h2">Key design decisions</h2>
          </div>
          <div className="cs-decision-list">
            {data.decisions.map((d) => (
              <div className="cs-decision-row" key={d.no}>
                <div className="cs-decision-no">{d.no}</div>
                <h4>{d.title}</h4>
                <div className="cs-decision-why">{d.why}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-reflect">
            <h2>Reflection</h2>
            {data.reflection.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {next && (
            <div className="cs-next">
              <span className="cs-k">Next case study</span>
              <Link href={`/work/${next.slug}`}>{next.name} →</Link>
            </div>
          )}
        </div>
      </section>

      <footer className="cs-foot">
        <div className="cs-wrap">
          <div>
            {data.name} — a self-directed concept case study by {profile.name}.
          </div>
          <div className="cs-foot-note">{data.footerNote}</div>
        </div>
      </footer>
    </div>
  );
}
