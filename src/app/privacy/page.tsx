import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this website handles your information.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="bg-white">
      <section className="bg-band py-16 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold">Privacy</h1>
          <p className="mt-4 max-w-2xl text-ink">
            Short and simple: this site collects very little.
          </p>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-8 text-ink">
          <div>
            <h2 className="text-2xl font-semibold">Who runs this site</h2>
            <p className="mt-3">
              {SITE_NAME}, an independent consultant. Not a law firm, not a
              registered investment adviser, and not affiliated with Wells Fargo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Messages and payments</h2>
            <p className="mt-3">
              The contact form does not send your details anywhere. It opens your
              own email app with a message to{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              . Your email is used only to reply to you. Payments happen on
              Stripe&apos;s secure page, not on this site.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Hosting</h2>
            <p className="mt-3">
              The web host may keep basic technical logs (like IP address and
              pages visited) for security. They are not used for ads.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Questions</h2>
            <p className="mt-3">
              Email{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>{" "}
              with any privacy question.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
