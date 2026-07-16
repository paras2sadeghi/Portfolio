import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function CTAFooter() {
  return (
    <section
      id="contact"
      className="mx-6 mb-6 rounded-3xl bg-ink px-6 py-20 text-center text-white md:mx-10 md:py-28"
    >
      <Reveal className="mx-auto max-w-xl">
        <h2 className="text-2xl font-medium leading-snug tracking-tight md:text-4xl">
          Let&apos;s build <span className="font-semibold">something great</span>{" "}
          together
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          Email Me
        </a>
      </Reveal>
    </section>
  );
}
