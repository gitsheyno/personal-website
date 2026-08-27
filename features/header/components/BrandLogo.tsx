interface BrandLogoProps {
  name: string;
}

export function BrandLogo({ name }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label={name}>
      <span
        className="relative grid h-8 w-8 place-items-center overflow-hidden border border-cyan-300/40 bg-cyan-300/[0.06] text-sm font-extrabold text-cyan-200 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300/[0.12]"
        aria-hidden="true"
      >
        <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-cyan-200" />
        S
      </span>

      <span
        className="text-lg font-extrabold tracking-[-0.045em] text-white md:text-xl"
        aria-hidden="true"
      >
        {name}
        <span className="text-cyan-300/60">.</span>
      </span>
    </span>
  );
}
