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
export default ContactDetails;
