import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  contentClassName?: string;
}

export function PageSection({
  children,
  className,
  contentClassName,
  ...props
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "w-full scroll-mt-20 px-4 py-20 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
