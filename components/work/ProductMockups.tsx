"use client";

type MockupConfig = {
  accent: string;
  accentSoft: string;
  base: string;
  ink: string;
  mode: "mobile" | "desktop";
  product: string;
  kicker: string;
  primary: string;
  secondary: string;
  metric: string;
  labels: [string, string, string];
};

const mockups: Record<string, MockupConfig> = {
  "flash-longevity": {
    accent: "#79b9ee", accentSoft: "#e8f4fd", base: "#f8fbff", ink: "#17324a",
    mode: "desktop", product: "Flash Longevity", kicker: "Your biological age", primary: "36.4", secondary: "4.6 years younger", metric: "92%", labels: ["Health markers", "Your protocol", "Progress"],
  },
  "connected-health-pitch": {
    accent: "#19d3b0", accentSoft: "#06342f", base: "#071110", ink: "#e5fffa",
    mode: "desktop", product: "Connected Care", kicker: "Care network", primary: "128", secondary: "active patient signals", metric: "78%", labels: ["Patient signals", "Care team", "Risk monitor"],
  },
  huddle: {
    accent: "#5c7cff", accentSoft: "#151d3b", base: "#0d0f16", ink: "#f1f4ff",
    mode: "desktop", product: "Huddle", kicker: "Checkout redesign", primary: "03:18", secondary: "2 comments unresolved", metric: "67%", labels: ["Review", "Timeline", "Comments"],
  },
  roobinium: {
    accent: "#ff722e", accentSoft: "#32150c", base: "#0f0a08", ink: "#fff2e9",
    mode: "mobile", product: "Roobinium", kicker: "Create an agent", primary: "Aira", secondary: "Listening for your brief", metric: "03", labels: ["Prompt", "Voice mode", "Activity"],
  },
  "safes-family": {
    accent: "#e5ae49", accentSoft: "#172647", base: "#0b1730", ink: "#f5f7ff",
    mode: "mobile", product: "Safes", kicker: "Good evening", primary: "All safe", secondary: "2 family members online", metric: "02", labels: ["Live location", "Screen time", "Places"],
  },
  greengenie: {
    accent: "#4c9d6f", accentSoft: "#e4f3e8", base: "#f8fbf5", ink: "#183b28",
    mode: "mobile", product: "GreenGenie", kicker: "Your garden", primary: "3", secondary: "plants need your attention", metric: "86%", labels: ["Water today", "Plant scan", "Care plan"],
  },
  transit: {
    accent: "#d81e05", accentSoft: "#fff0ec", base: "#fbfbfa", ink: "#101010",
    mode: "mobile", product: "Transit", kicker: "To Downtown", primary: "7–11", secondary: "minutes · signal changing", metric: "72%", labels: ["Route 14", "Live status", "Alternatives"],
  },
  wavelength: {
    accent: "#ffac45", accentSoft: "#34151e", base: "#110d10", ink: "#fff5ec",
    mode: "mobile", product: "Wavelength", kicker: "Slow evening", primary: "Afterglow", secondary: "A queue for this exact mood", metric: "18", labels: ["For you", "Now playing", "Save mood"],
  },
  "fang-rung": {
    accent: "#ff5c70", accentSoft: "#fff0c5", base: "#fffaf0", ink: "#17130f",
    mode: "mobile", product: "Fang & Rung", kicker: "Your turn", primary: "Roll", secondary: "Climb the rungs. Dodge the fangs.", metric: "06", labels: ["Board", "Collection", "Match log"],
  },
  bloom: {
    accent: "#f2a7bd", accentSoft: "#332136", base: "#1c1120", ink: "#fff4f7",
    mode: "mobile", product: "Bloom", kicker: "Private check-in", primary: "How are you?", secondary: "A moment only for you", metric: "12", labels: ["Energy", "Undertone", "Your week"],
  },
};

function TinyChart({ color, muted }: { color: string; muted: string }) {
  return (
    <svg viewBox="0 0 210 58" className="h-14 w-full" aria-hidden>
      <path d="M1 46C18 42 25 20 43 32S65 43 83 27s24 18 41 8 22-31 43-17 25-10 42-25" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M1 52H209" stroke={muted} strokeOpacity=".18" />
      <circle cx="167" cy="18" r="4" fill={color} />
    </svg>
  );
}

function BrowserMockup({ c }: { c: MockupConfig }) {
  const dark = c.base.startsWith("#0");
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-black/10 p-2 shadow-[0_30px_80px_-45px_rgba(0,0,0,.7)]" style={{ background: c.base, color: c.ink }}>
      <div className="flex h-8 items-center gap-1.5 border-b px-3" style={{ borderColor: `${c.ink}20` }}>
        <i className="h-2 w-2 rounded-full bg-[#ff6b61]" /><i className="h-2 w-2 rounded-full bg-[#ffbd44]" /><i className="h-2 w-2 rounded-full bg-[#00c253]" />
        <span className="mx-auto h-4 w-1/3 rounded-full" style={{ background: `${c.ink}12` }} />
      </div>
      <div className="grid min-h-[22rem] grid-cols-[4.25rem_1fr] sm:min-h-[28rem]">
        <aside className="border-r px-2 py-4" style={{ borderColor: `${c.ink}18` }}>
          <div className="mb-8 grid h-7 w-7 place-items-center rounded-lg text-xs font-bold" style={{ background: c.accent, color: dark ? "#101010" : "#fff" }}>✦</div>
          {[0, 1, 2, 3, 4].map((i) => <span key={i} className="mb-4 block h-5 rounded-md" style={{ background: i === 1 ? `${c.accent}32` : `${c.ink}10` }} />)}
        </aside>
        <div className="p-4 sm:p-6">
          <div className="mb-6 flex items-start justify-between">
            <div><p className="text-[10px] uppercase tracking-[.16em] opacity-50">{c.product}</p><h3 className="mt-1 text-xl font-medium tracking-tight sm:text-2xl">{c.kicker}</h3></div>
            <button className="rounded-full px-3 py-1.5 text-[10px] font-semibold" style={{ background: c.accent, color: dark ? "#101010" : "#fff" }}>View details</button>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-xl p-4" style={{ background: c.accentSoft }}>
              <p className="text-[10px] uppercase tracking-[.14em] opacity-60">{c.labels[0]}</p>
              <p className="mt-4 text-4xl font-medium tracking-[-.06em]" style={{ color: dark ? c.ink : c.accent }}>{c.primary}</p>
              <p className="mt-1 text-xs opacity-65">{c.secondary}</p>
              <div className="mt-5"><TinyChart color={c.accent} muted={c.ink} /></div>
            </div>
            <div className="rounded-xl p-4" style={{ background: `${c.ink}0d` }}>
              <p className="text-[10px] uppercase tracking-[.14em] opacity-50">{c.labels[1]}</p>
              <div className="mt-4 flex h-24 items-center justify-center"><div className="grid h-20 w-20 place-items-center rounded-full border-[7px] text-lg font-medium" style={{ borderColor: c.accent }}>{c.metric}</div></div>
              <p className="mt-4 text-center text-[10px] opacity-55">on track this week</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl p-4" style={{ background: `${c.ink}0b` }}>
            <div className="mb-3 flex justify-between text-[10px] uppercase tracking-[.14em] opacity-55"><span>{c.labels[2]}</span><span>Updated now</span></div>
            {[72, 56, 83].map((w, i) => <div key={i} className="mb-3 flex items-center gap-3"><span className="h-2 w-2 rounded-full" style={{ background: i === 1 ? `${c.accent}80` : c.accent }} /><span className="h-2 rounded-full" style={{ width: `${w}%`, background: `${c.ink}1a` }} /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ c, variant }: { c: MockupConfig; variant: number }) {
  const dark = c.base.startsWith("#0") || c.base.startsWith("#1");
  const label = c.labels[variant] ?? c.labels[0];
  return (
    <div className="mx-auto w-[15.5rem] rounded-[2.35rem] bg-[#101010] p-2 shadow-[0_35px_70px_-35px_rgba(0,0,0,.8)] ring-1 ring-black/30">
      <div className="relative min-h-[29rem] overflow-hidden rounded-[1.85rem] px-4 pb-5 pt-8" style={{ background: c.base, color: c.ink }}>
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70"><span>9:41</span><span>●●●</span></div>
        <p className="mt-7 text-[10px] uppercase tracking-[.16em] opacity-55">{c.product}</p>
        <h3 className="mt-2 text-2xl font-medium leading-[.96] tracking-[-.05em]">{variant === 0 ? c.primary : label}</h3>
        <p className="mt-2 text-xs leading-relaxed opacity-60">{variant === 0 ? c.secondary : `A closer look at ${label.toLowerCase()}`}</p>
        {variant === 1 ? (
          <div className="mt-6 rounded-2xl p-4" style={{ background: c.accentSoft }}>
            <div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-semibold">Today</span><span className="h-5 w-5 rounded-full" style={{ background: c.accent }} /></div>
            {[0, 1, 2].map((i) => <div key={i} className="mb-3 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg text-xs" style={{ background: `${c.accent}30`, color: c.accent }}>◌</span><div className="flex-1"><span className="mb-1 block h-2 w-4/5 rounded-full" style={{ background: `${c.ink}35` }} /><span className="block h-1.5 w-2/5 rounded-full" style={{ background: `${c.ink}18` }} /></div></div>)}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl p-4" style={{ background: c.accentSoft }}>
            <div className="flex h-28 items-center justify-center"><div className="h-24 w-24 rounded-full border-[10px]" style={{ borderColor: c.accent }} /></div>
            <div className="mt-3 flex gap-1">{[35, 64, 44, 78, 52, 88, 40].map((h, i) => <i key={i} className="w-full rounded-full" style={{ height: `${h / 2}px`, background: c.accent }} />)}</div>
          </div>
        )}
        <div className="absolute bottom-5 left-4 right-4 flex justify-between rounded-2xl px-4 py-3" style={{ background: `${c.ink}10` }}>
          {["●", "◫", "◌", "⌁"].map((i, n) => <span key={n} className="text-xs" style={{ color: n === variant ? c.accent : `${c.ink}70` }}>{i}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function ProductMockups({ slug }: { slug: string }) {
  const c = mockups[slug];
  if (!c) return null;
  return (
    <section className="mb-20 border-t border-foreground/12 pt-12 md:mb-28 md:pt-16">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="text-xs font-medium text-muted">UI</span>
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Product interface</h2>
      </div>
      {c.mode === "desktop" ? (
        <BrowserMockup c={c} />
      ) : (
        <div className="grid gap-8 rounded-[1.5rem] bg-surface px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneMockup c={c} variant={0} />
          <PhoneMockup c={c} variant={1} />
          <div className="hidden lg:block"><PhoneMockup c={c} variant={2} /></div>
        </div>
      )}
    </section>
  );
}
