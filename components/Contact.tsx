'use client';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <section id="contacts" className="py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-blue-500/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-2xl shadow-xl shadow-blue-900/20 overflow-hidden">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
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
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
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
