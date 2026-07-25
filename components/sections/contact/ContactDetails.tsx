import { Mail, Phone } from "lucide-react";
import type { ContactDetailsContent } from "@/types";

interface ContactDetailsProps {
  details: ContactDetailsContent;
}

export function ContactDetails({ details }: ContactDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-3xl font-bold text-white">Contact Me</h2>
        <div className="h-1.5 w-20 rounded-full bg-cyan-300" />
      </div>
      <p className="max-w-md text-lg text-blue-50/90">
        Not sure what you need? I&apos;d be happy to listen and suggest ideas
        you hadn&apos;t considered.
      </p>
      <dl className="space-y-4 pt-2">
        <ContactDetail
          icon={Mail}
          label="Email"
          value={details.email}
          href={`mailto:${details.email}`}
        />
        <ContactDetail
          icon={Phone}
          label="Phone"
          value={details.phoneDisplay}
          href={details.phoneHref}
        />
      </dl>
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <dt className="text-sm font-medium text-cyan-200">{label}</dt>
        <dd>
          <a href={href} className="font-medium text-white hover:text-cyan-100">
            {value}
          </a>
        </dd>
      </div>
    </div>
  );
}
