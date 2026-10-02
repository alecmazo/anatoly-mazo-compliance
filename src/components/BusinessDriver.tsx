import Image from "next/image";
import { asset } from "@/lib/site";
import { Container } from "@/components/Container";

const POINTS = [
  "Treat finance and technology as foundations of efficiency, not overhead",
  "Free leadership to focus on growth and strategy",
  "Demonstrate the transparency institutional investors demand",
];

export function BusinessDriver() {
  return (
    <section className="bg-band py-20 md:py-28" aria-labelledby="driver-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Operational excellence
          </p>
          <h2 id="driver-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
            Finance &amp; Technology as Business Drivers
          </h2>
          <p className="mt-6 text-[1.05rem] text-ink">
            The most successful firms don&apos;t view their financial operations
            and technology as back-office afterthoughts — they treat them as the
            foundation of operational excellence. By reducing friction in daily
            processes and embedding sound standards into firm culture, finance and
            technology become catalysts for growth rather than constraints on it.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
          <Image
            src={asset("/img5.png")}
            alt="A modern institutional office with workstations and a wall of market data screens."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
