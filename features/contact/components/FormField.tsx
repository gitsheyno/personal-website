import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlStyles =
  "rounded-none border border-white/10 bg-[#0b0b0d] p-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 hover:border-white/20 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300";

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
        className="mb-2 text-xs font-medium tracking-[0.08em] text-zinc-400 uppercase"
      >
        {label} {required && <span className="text-cyan-300">*</span>}
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
