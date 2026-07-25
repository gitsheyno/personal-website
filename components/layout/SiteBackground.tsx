export function SiteBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0f1a] dark:bg-[#05070d]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-500/30 blur-[150px]" />
        <div
          className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-400/20 blur-[150px] dark:bg-cyan-300/20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-300/10 blur-[120px] dark:bg-blue-200/10"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_65%,transparent_100%)]" />
    </div>
  );
}
