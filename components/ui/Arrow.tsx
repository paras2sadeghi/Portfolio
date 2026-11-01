/**
 * Line arrows as inline SVG. Text glyphs like "↗" render as colour emoji on
 * iOS and Android, so interface arrows always use this instead. Sized in em
 * so it follows the surrounding text, and drawn in currentColor.
 */
const PATHS = {
  "up-right": "M7 17 17 7M8 7h9v9",
  right: "M5 12h14M13 6l6 6-6 6",
  left: "M19 12H5M11 6l-6 6 6 6",
  down: "M12 5v14M6 13l6 6 6-6",
} as const;

export default function Arrow({
  direction = "up-right",
  className = "",
}: {
  direction?: keyof typeof PATHS;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={`inline-block h-[0.9em] w-[0.9em] shrink-0 ${className}`}
    >
      <path d={PATHS[direction]} />
    </svg>
  );
}
