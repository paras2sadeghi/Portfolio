import { services } from "@/lib/content";
import Reveal from "./Reveal";

function ServiceCard({ service, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        className={`flex h-full flex-col rounded-3xl p-6 ${
          service.featured
            ? "bg-accent-purple text-white"
            : "border border-line bg-background"
        }`}
      >
        <h3 className="text-base font-semibold">{service.title}</h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            service.featured ? "text-white/80" : "text-muted"
          }`}
        >
          {service.description}
        </p>

        <div className="my-5 flex gap-2">
          {service.swatches.map((color, i) => (
            <span
              key={i}
              className="h-12 w-12 rounded-xl"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs ${
                service.featured
                  ? "bg-white/15 text-white"
                  : "bg-surface text-muted"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm text-muted">Services</p>
          <h2 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            Design solutions that simplify complex workflows and create
            seamless user experiences.{" "}
            <span className="font-semibold">
              I help bring healthcare and SaaS products to life with research
              and craft.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
