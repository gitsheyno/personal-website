import { InputField, TextareaField } from "./FormField";

interface ContactFormViewProps {
  formAction: (payload: FormData) => void;
  state: {
    status: boolean;
    message: string;
  };
}

export function ContactFormView({ formAction, state }: ContactFormViewProps) {
  return (
    <form action={formAction} className="space-y-6">
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
        className="w-full transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-400 hover:shadow-xl hover:shadow-blue-500/50"
      >
        Send Message
      </button>
      {state.message && (
        <p
          className={
            state.status
              ? "rounded-lg border border-green-400/30 bg-green-500/10 p-3 text-green-400"
              : "rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-red-300"
          }
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
