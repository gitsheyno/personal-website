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
        "w-full scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-6xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
