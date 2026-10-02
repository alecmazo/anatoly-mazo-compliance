import Image from "next/image";
import { asset } from "@/lib/site";
import { Container } from "@/components/Container";

const CARDS = [
  {
    title: "Rising Complexity",
    body: "Investment firms juggle more data, more systems, and more reporting demands than ever before.",
  },
  {
    title: "Investor Expectations",
    body: "Sophisticated investors expect clear numbers, dependable operations, and timely, accurate reporting.",
  },
  {
    title: "Operations as Advantage",
    body: "Firms that invest in sound financial operations and the right technology are better placed to grow and to attract institutional capital.",
  },
];

export function MarketEnvironment() {
  return (
    <section className="bg-band py-20 md:py-28" aria-labelledby="storm-heading">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              The environment
            </p>
            <h2 id="storm-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              The Pressure on Financial Firms Is Growing
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] text-ink">
              Financial firms face more complexity, closer scrutiny, and higher
              investor expectations than ever. Weak financial processes or
              outdated technology can undermine years of hard-earned reputation and
              growth. In today&apos;s environment, sound finance and well-chosen
              technology are no longer back-office details — they are a competitive
              advantage.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line lg:aspect-[5/4]">
            <Image
              src={asset("/img2.png")}
              alt="Storm clouds gathering over a dense urban skyline of office towers."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <li key={card.title} className="card p-6">
              <h3 className="font-heading text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{card.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
