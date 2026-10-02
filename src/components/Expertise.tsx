import Image from "next/image";
import { asset } from "@/lib/site";
import { Container } from "@/components/Container";

const ITEMS = [
  {
    title: "Financial Insight",
    body: "A practitioner's understanding of how investment firms actually operate, applied practically to your firm's specific structure and strategy.",
  },
  {
    title: "Practical Technology",
    body: "Systems and processes matched to your business model — not generic tools that add cost and complexity without solving the real problem.",
  },
  {
    title: "Risk-Aware Judgment",
    body: "Experience across regulated financial services means risk and control are considered from the start, not bolted on later.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="section-anchor bg-band py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-line bg-white">
            <Image
              src={asset("/img6.png")}
              alt="Metallic shield on a pale studio background, a visual metaphor for institutional protection."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Expertise
            </p>
            <h2 id="expertise-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              Expertise That Strengthens Your Firm
            </h2>
            <p className="mt-5 max-w-xl text-ink">
              Good decisions about finance and technology aren&apos;t reactive —
              they&apos;re strategic. Anatoly Mazo brings deep, practitioner-led
              experience from more than three decades in regulated financial
              services to help your firm operate with clarity and confidence.
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item) => (
            <li key={item.title} className="card p-6">
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
