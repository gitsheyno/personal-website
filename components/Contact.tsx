"use client";
import React from "react";
import { sendEmail } from "@/actions/email";

const ContactDetails = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
      <div className="w-20 h-1.5 bg-yellow-300 rounded-full"></div>
    </div>

    <p className="text-lg text-white max-w-md">
      Not sure what you need? I&apos;d be happy to listen and suggest ideas you
      hadn&apos;t considered.
    </p>

    <div className="space-y-4 pt-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-yellow-200">Email</p>
          <p className="text-white font-medium">hdrydeveloper@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-yellow-200">Phone</p>
          <p className="text-white font-medium">(+49) 17621701815</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <form action={sendEmail} className="space-y-6">
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
    </form>
  );
};

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}

const InputField = ({ label, id, type, required = false }: InputFieldProps) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg p-3 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
    />
  </div>
);

const TextareaField = ({ label, id, required = false }: InputFieldProps) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      required={required}
      rows={5}
      className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg p-3 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
    ></textarea>
  </div>
);

const ContactSection = () => (
  <section id="contacts" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Left side with background */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 8 0 L 0 0 0 8"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <ContactDetails />

              {/* Additional decorative elements */}
              <div className="hidden md:block absolute bottom-6 right-6">
                <svg
                  className="w-32 h-32 text-white/10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.79 18l2 2H24v-2h-2.21zM1.11 2.98l1.55 1.56c-.41.38-.73.88-.73 1.46v9c0 1.66 1.34 3 3 3h12.17l2.29 2.29.71-.71L1.82 2.27 1.11 2.98zM7 15c.31-1.48.94-2.93 2.08-4.05l1.43 1.43C10.5 13.46 10.12 14.23 10 15H7zm4 0c.12-.73.53-1.36 1.31-1.73l1.43 1.43c-.88.15-1.6.63-2.05 1.37L11 15zm6.32-8.36l-1.43-1.43c.38-.34.75-.69 1.14-1.01l-1.42-1.42c-.39.32-.76.69-1.14 1.03L12 1.35 10.47 2.5c-1.46 1.16-2.69 2.63-3.69 4.2l1.43 1.43C9.03 6.74 9.96 5.5 11 4.47L12 3.73l1 .74c1.03 1.03 1.97 2.27 2.79 3.66l1.5-1.5.03.03zM7 15v1c0 1.1.9 2 2 2h1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-8.17l-2-2H7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
              I&apos;d love to hear from you! Let&apos;s get in touch.
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
