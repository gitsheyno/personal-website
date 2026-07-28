export function SiteBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0b0d]"
      aria-hidden="true"
    >
      <div className="absolute top-0 left-1/2 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_100%] [mask-image:linear-gradient(to_bottom,#000,transparent_45%)]" />
    </div>
  );
}
