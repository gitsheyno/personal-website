import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlStyles =
  "site-control min-h-12 w-full rounded-none bg-site-background px-3.5 py-3 text-base text-site-text transition-colors placeholder:text-site-subtle hover:border-zinc-300 focus:border-site-accent focus:outline-none focus:ring-2 focus:ring-cyan-300/60";

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function FieldShell({ id, label, required, children }: FieldShellProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium text-site-text"
      >
        {label} {required && <span className="text-site-accent" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: string;
}

export function InputField({
  id,
  label,
  required,
  className,
  ...props
}: InputFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required}>
      <input
        id={id}
        name={id}
        required={required}
        className={cn(controlStyles, className)}
        {...props}
      />
    </FieldShell>
  );
}

interface TextareaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  id: string;
  label: string;
}

export function TextareaField({
  id,
  label,
  required,
  className,
  ...props
}: TextareaFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required}>
      <textarea
        id={id}
        name={id}
        required={required}
        className={cn(controlStyles, "resize-none", className)}
        {...props}
      />
    </FieldShell>
  );
}
