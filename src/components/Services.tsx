import { Container } from "@/components/Container";

const SERVICES = [
  {
    n: "1",
    id: "financial-consulting",
    title: "Financial Consulting",
    summary:
      "Independent, senior-level guidance on the financial operations, risk, and reporting of investment firms — drawn from more than 30 years inside Wells Fargo.",
    points: [
      "Review of financial processes, controls, and reporting for private funds, wealth managers, family offices, and growing investment companies",
      "Practical assessment and prioritization of financial and operational risk",
      "Clear, dependable investor reporting that supports transparency with sophisticated investors",
      "An experienced sounding board for leadership on growth, new strategies, and operating structure",
    ],
  },
  {
    n: "2",
    id: "technology-consulting",
    title: "Technology Consulting",
    summary:
      "Practical guidance on the systems, data, and processes that run a modern financial firm — so technology scales with the business instead of becoming a bottleneck.",
    points: [
      "Assessment of current systems, workflows, and data flows across the firm",
      "Process improvement and automation opportunities that reduce friction in daily operations",
      "Risk-aware selection and oversight of technology vendors and platforms",
      "Technology roadmaps that grow with headcount, AUM, and new product lines",
    ],
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Services
        </p>
        <h2 id="services-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          Two Focused Services
        </h2>
        <p className="mt-5 max-w-2xl text-ink">
          Anatoly Mazo offers two services, each delivered personally and grounded
          in three decades of institutional experience in regulated financial
          services.
        </p>
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
