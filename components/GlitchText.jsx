"use client";

/**
 * Hover/idle RGB-split glitch label — CSS-only, cheap, dark-mode only.
 * Two duplicate text layers offset in cyan/magenta flick on a short cycle.
 */
export default function GlitchText({ text, className = "" }) {
  return (
    <span className={`glitch-text relative inline-block ${className}`} data-text={text}>
      {text}
      <style jsx>{`
        .glitch-text {
          color: rgba(255, 255, 255, 0.72);
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          opacity: 0;
        }
        .glitch-text::before {
          color: #6de0ff;
          animation: glitch-a 5.5s infinite;
        }
        .glitch-text::after {
          color: #ff6de3;
          animation: glitch-b 5.5s infinite;
        }
        @keyframes glitch-a {
          0%, 92%, 100% { opacity: 0; transform: translate(0, 0); }
          93% { opacity: 0.7; transform: translate(-2px, 1px); }
          95% { opacity: 0.5; transform: translate(2px, -1px); }
          97% { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes glitch-b {
          0%, 91%, 100% { opacity: 0; transform: translate(0, 0); }
          92% { opacity: 0.6; transform: translate(2px, -1px); }
          94% { opacity: 0.5; transform: translate(-2px, 1px); }
          96% { opacity: 0; transform: translate(0, 0); }
        }
      `}</style>
    </span>
  );
}
