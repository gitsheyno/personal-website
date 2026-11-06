import { InputField, TextareaField } from "./FormField";
import type { ContactFormState } from "../contact.types";

interface ContactFormViewProps {
  formAction: (payload: FormData) => void;
  state: ContactFormState;
}

export function ContactFormView({ formAction, state }: ContactFormViewProps) {
  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField label="Full Name" id="fullName" type="text" required />
        <InputField label="Company" id="company" type="text" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField label="Email" id="email" type="email" required />
        <InputField label="Phone Number" id="phoneNumber" type="tel" />
      </div>
      <TextareaField label="Your Message" id="message" rows={5} required />
      <button
        type="submit"
        className="min-h-12 w-full bg-site-accent px-6 py-3 text-base font-semibold text-site-background transition-colors hover:bg-white sm:w-auto"
      >
        Send Message
      </button>
      {state.message && (
        <p
          className={
            state.status
              ? "border border-green-300/60 bg-green-500/10 p-3 text-green-200"
              : "border border-red-300/60 bg-red-500/10 p-3 text-red-200"
          }
          aria-live="polite"
          role={state.status ? "status" : "alert"}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
