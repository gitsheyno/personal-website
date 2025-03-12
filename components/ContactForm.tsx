"use client";
import React from "react";
import { sendEmail } from "@/actions/email";
import { useActionState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
const ContactForm = () => {
  const initialState = {
    status: false,
    message: "",
  };

  const [state, formaction] = useActionState(sendEmail, initialState);
  return (
    <form action={formaction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Full Name" id="fullName" type="text" required />
        <InputField label="Company" id="company" type="text" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Email" id="email" type="email" required />
        <InputField label="Phone Number" id="phoneNumber" type="tel" />
      </div>
      <TextareaField label="Your Message" id="message" required />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
      {state?.status && state.message ? (
        <p className="text-green-700" aria-live="polite">
          {state?.message}
        </p>
      ) : (
        <p className="text-red-700" aria-live="polite">
          {state?.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
