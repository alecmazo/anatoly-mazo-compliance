import Image from "next/image";
import { asset } from "@/lib/site";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section
      id="about"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            About
          </p>
          <h2 id="about-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
            Experience You Can Trust
          </h2>
          <div className="prose-site mt-6 max-w-xl text-[1.05rem] text-ink">
            <p>
              Anatoly spent more than 30 years at Wells Fargo, including time as a
              senior compliance officer.
            </p>
            <p>
              Today he works one-on-one with individuals and business people. You
              work with him directly, and he keeps things simple.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
          <Image
            src={asset("/img4.png")}
            alt="Two people in a one-on-one meeting at a table overlooking a city skyline."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
