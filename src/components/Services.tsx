import { Container } from "@/components/Container";

const SERVICES = [
  {
    n: "1",
    id: "financial-consulting",
    title: "Financial Consulting",
    summary:
      "Straight answers about your personal or business finances.",
    points: [
      "Look over how your money or business finances are set up",
      "Spot problems and risks before they cost you",
      "Get an experienced second opinion on big decisions",
    ],
  },
  {
    n: "2",
    id: "technology-consulting",
    title: "Technology Consulting",
    summary:
      "Help choosing and using the right technology, without the jargon.",
    points: [
      "Review the tools and systems you use today",
      "Find simple ways to save time and cut busywork",
      "Pick the right software and avoid costly mistakes",
    ],
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="section-anchor bg-band py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Services
        </p>
        <h2 id="services-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          How Anatoly Can Help
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service) => (
            <li
              key={service.id}
              id={service.id}
              className="section-anchor card p-6 md:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {service.n}
              </p>
              <h3 className="mt-1 font-heading text-2xl font-semibold text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
