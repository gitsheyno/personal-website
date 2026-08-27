import { InputField, TextareaField } from "./FormField";
import type { ContactFormState } from "../contact.types";

interface ContactFormViewProps {
  formAction: (payload: FormData) => void;
  state: ContactFormState;
}

export function ContactFormView({ formAction, state }: ContactFormViewProps) {
  return (
    <form action={formAction} className="space-y-7">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField label="Full Name" id="fullName" type="text" required />
        <InputField label="Company" id="company" type="text" required />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField label="Email" id="email" type="email" required />
        <InputField label="Phone Number" id="phoneNumber" type="tel" />
      </div>
      <TextareaField label="Your Message" id="message" rows={5} required />
      <button
        type="submit"
        className="w-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
      >
        Send Message
      </button>
      {state.message && (
        <p
          className={
            state.status
              ? "border border-green-400/30 bg-green-500/10 p-3 text-green-400"
              : "border border-red-400/30 bg-red-500/10 p-3 text-red-300"
          }
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
