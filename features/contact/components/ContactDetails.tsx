import { Mail, Phone } from "lucide-react";
import type { ContactDetailsContent } from "../contact.types";

interface ContactDetailsProps {
  details: ContactDetailsContent;
}

export function ContactDetails({ details }: ContactDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-site-accent uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-site-text sm:text-4xl">
          Let&apos;s build something useful.
        </h2>
      </div>
      <p className="max-w-md text-base leading-7 text-site-subtle">
        Not sure what you need? I&apos;d be happy to listen and suggest ideas
        you hadn&apos;t considered.
      </p>
      <dl className="space-y-5 border-t border-white/10 pt-7">
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
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-site-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <dt className="text-xs tracking-[0.1em] text-site-subtle uppercase">
          {label}
        </dt>
        <dd>
          <a
            href={href}
            className="inline-block min-h-11 break-all py-2 text-base font-medium text-site-text hover:text-site-accent"
          >
            {value}
          </a>
        </dd>
      </div>
    </div>
  );
}
