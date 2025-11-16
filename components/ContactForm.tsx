'use client';
import React from 'react';
import { sendEmail } from '@/actions/email';
import { useActionState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';

const ContactForm = () => {
  const initialState = {
    status: false,
    message: '',
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
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
      {state?.status && state.message && (
        <p
          className="text-green-400 bg-green-500/10 border border-green-400/30 rounded-lg p-3"
          aria-live="polite"
        >
          {state?.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
