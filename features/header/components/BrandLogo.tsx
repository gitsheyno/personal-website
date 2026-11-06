interface BrandLogoProps {
  name: string;
}

export function BrandLogo({ name }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label={name}>
      <span
        className="relative grid h-8 w-8 place-items-center overflow-hidden border border-[rgb(var(--site-accent-rgb)/0.4)] bg-[rgb(var(--site-accent-rgb)/0.06)] text-sm font-bold text-site-accent transition-colors duration-300 group-hover:border-site-accent group-hover:bg-[rgb(var(--site-accent-rgb)/0.12)]"
        aria-hidden="true"
      >
        <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-cyan-200" />
        S
      </span>

      <span
        className="text-lg font-extrabold tracking-[-0.045em] text-site-text md:text-xl"
        aria-hidden="true"
      >
        {name}
        <span className="text-site-accent">.</span>
      </span>
    </span>
  );
}
