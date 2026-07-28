import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";
import { PageSection } from "@/components/shared/PageSection";
import { contactDetails } from "@/data/site";

export function ContactSection() {
  return (
    <PageSection id="contacts">
      <div className="grid grid-cols-1 border border-white/10 bg-[#101013] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative border-b border-white/10 p-8 text-white md:p-12 lg:border-r lg:border-b-0">
          <div className="relative">
            <ContactDetails details={contactDetails} />
          </div>
        </div>
        <div className="p-8 md:p-12 lg:p-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-cyan-300 uppercase">
            Start a conversation
          </p>
          <h2 className="mb-10 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
            Have a product challenge or an interesting idea? Let&apos;s talk.
          </h2>
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
