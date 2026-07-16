import { footer, profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mx-6 mb-6 rounded-3xl bg-ink px-6 pb-8 pt-12 text-white md:mx-10 md:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
        <div className="col-span-2 md:col-span-2">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-white/50">{profile.role}</p>
          <p className="mt-4 text-sm text-white/50">{profile.phone}</p>
          <p className="text-sm text-white/50">{profile.email}</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-white/40">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            {footer.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-white/40">
            Connect
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            {footer.connect.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
