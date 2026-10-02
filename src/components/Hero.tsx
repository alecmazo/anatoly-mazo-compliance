import Image from "next/image";
import { consultMailto, asset } from "@/lib/site";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      id="top"
      className="section-anchor relative isolate overflow-hidden bg-band"
      aria-labelledby="hero-heading"
    >
      <Image
        src={asset("/img1.png")}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <Container className="relative py-24 md:py-36">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Financial &amp; technology consulting
        </p>
        <h1
          id="hero-heading"
          className="mt-5 max-w-3xl text-4xl font-semibold md:text-5xl md:leading-[1.12]"
        >
          Anatoly Mazo: Financial &amp; Technology Consulting Backed by Three Decades of Institutional Experience
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink md:text-xl">
          Senior-level financial and technology consulting, informed by more than
          30 years in regulated financial services at Wells Fargo — now available
          to strengthen and empower your firm.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={consultMailto}
            className="inline-flex items-center justify-center rounded-lg bg-charcoal px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-charcoal bg-white/80 px-6 py-3 text-sm font-medium text-charcoal hover:bg-white"
          >
            Learn More
          </a>
        </div>
      </Container>
    </section>
  );
}
