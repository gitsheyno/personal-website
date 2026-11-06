import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";
import { PageSection } from "@/components/shared/PageSection";
import { contactDetails } from "../contact.data";

export function ContactSection() {
  return (
    <PageSection id="contacts">
      <div className="site-panel grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative border-b border-white/15 p-6 text-site-text sm:p-8 md:p-10 lg:border-r lg:border-b-0">
          <div className="relative">
            <ContactDetails details={contactDetails} />
          </div>
        </div>
        <div className="p-6 sm:p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-site-accent uppercase">
            Start a conversation
          </p>
          <h2 className="mb-8 max-w-xl text-2xl font-semibold leading-snug tracking-[-0.03em] text-site-text md:text-3xl">
            Have a product challenge or an interesting idea? Let&apos;s talk.
          </h2>
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
