import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlStyles =
  "rounded-lg border border-blue-400/30 bg-blue-500/10 p-3 text-white shadow-sm outline-none backdrop-blur-sm transition-all hover:border-blue-400/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400";

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function FieldShell({ id, label, required, children }: FieldShellProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium text-blue-100">
        {label} {required && <span className="text-cyan-400">*</span>}
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
