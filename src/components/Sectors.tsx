"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";

const SECTORS = [
  {
    id: "sectors-private-funds",
    title: "Private Funds",
    summary:
      "Financial and technology support for private funds that need institutional-quality operations without institutional-sized overhead.",
    detail:
      "Private funds live and die by investor confidence. Work typically covers how capital activity, valuations, and investor reporting flow through the fund's processes and systems; where manual steps and spreadsheets create risk; and which practical improvements — in process, reporting, or tooling — will make operations more dependable as the fund grows.",
  },
  {
    id: "sectors-wealth",
    title: "Wealth Management & Family Offices",
    summary:
      "Clear financial oversight and fit-for-purpose technology for high-net-worth and ultra-high-net-worth client structures.",
    detail:
      "Family offices and wealth platforms often manage many entities, accounts, and relationships at once. Engagements map how money, data, and decisions actually move through the organization, then strengthen financial reporting, controls, and the systems behind them — so principals get a clear, reliable picture of where they stand.",
  },
  {
    id: "sectors-growth",
    title: "High-Growth Investment Companies",
    summary:
      "Financial processes and technology designed to grow alongside your AUM — without becoming a bottleneck to your firm's ambitions.",
    detail:
      "Rapid AUM growth breaks processes and systems designed for a ten-person firm. The work focuses on financial operations, reporting, vendor and platform choices, and technology roadmaps that expand with headcount and product lines — so new strategies, offices, or investor channels do not outrun the firm's operating foundation.",
  },
] as const;

export function Sectors() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTORS.some((sector) => sector.id === hash)) {
        setOpenId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function toggle(id: string) {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) {
      history.replaceState(null, "", `#${next}`);
    } else {
      history.replaceState(null, "", "#sectors");
    }
  }

  return (
    <section id="sectors" className="section-anchor bg-white py-20 md:py-28" aria-labelledby="sectors-heading">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Who this is for
        </p>
        <h2 id="sectors-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          Specialized Support for Critical Sectors
        </h2>
        <p className="mt-5 max-w-2xl text-ink">
          Anatoly Mazo&apos;s consulting practice is purpose-built for financial
          organizations where operational complexity is high and the stakes for
          investors are greatest. Select a sector for practical detail.
        </p>
        <ul className="mt-12 grid gap-5">
          {SECTORS.map((sector) => {
            const expanded = openId === sector.id;
            return (
              <li key={sector.id} id={sector.id} className="section-anchor">
                <button
                  type="button"
                  className="card w-full p-6 text-left transition hover:bg-white"
                  aria-expanded={expanded}
                  aria-controls={`${sector.id}-panel`}
                  onClick={() => toggle(sector.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold md:text-2xl">
                      {sector.title}
                    </h3>
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm text-charcoal"
                      aria-hidden="true"
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink md:text-base">
                    {sector.summary}
                  </p>
                  {expanded ? (
                    <p
                      id={`${sector.id}-panel`}
                      className="mt-4 max-w-3xl border-t border-line pt-4 text-sm leading-relaxed text-ink md:text-base"
                    >
                      {sector.detail}
                    </p>
                  ) : (
                    <span className="mt-4 inline-block text-sm text-muted">
                      Expand for practical detail
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
