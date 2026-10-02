import { EMAIL, PAY_URL, consultMailto } from "@/lib/site";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Contact
        </p>
        <h2 id="contact-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          Let&apos;s Talk
        </h2>
        <p className="mt-6 max-w-2xl text-[1.05rem] text-ink">
          Email Anatoly at{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          to set up a consultation, or use the form below.
        </p>

        <div className="mt-8">
          <a
            href={consultMailto}
            className="inline-flex items-center justify-center rounded-lg bg-charcoal px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Schedule a Consultation
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="pay" className="section-anchor card self-start p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold">Pay for services</h3>
            <p className="mt-3 max-w-2xl text-ink">
              Once you agree on the work and the price, pay here. You enter the
              amount on Stripe&apos;s secure page.
            </p>
            <a
              href={PAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-charcoal px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Pay securely
            </a>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold">Send a message</h3>
            <p className="mt-2 mb-6 text-sm text-muted">
              This opens your email app with a message to {EMAIL}.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
