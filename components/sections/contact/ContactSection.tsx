import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";
import { PageSection } from "@/components/shared/PageSection";
import { contactDetails } from "@/data/site";

export function ContactSection() {
  return (
    <PageSection id="contacts" contentClassName="max-w-6xl">
      <div className="grid grid-cols-1 gap-12 overflow-hidden rounded-2xl border-2 border-blue-400/30 bg-blue-500/10 shadow-xl shadow-blue-900/20 backdrop-blur-sm lg:grid-cols-2">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white md:p-12">
          <div
            className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:32px_32px]"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <ContactDetails details={contactDetails} />
          </div>
        </div>
        <div className="p-8 md:p-12">
          <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            I&apos;d love to hear from you! Let&apos;s get in touch.
          </h2>
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
