export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0f1a] dark:bg-[#05070d]">
      {/* Main glowing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left blue glow */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] 
          bg-blue-500/30 rounded-full blur-[150px] animate-pulse"
        />

        {/* Bottom-right cyan-blue glow */}
        <div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] 
          bg-cyan-400/20 dark:bg-cyan-300/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Center soft purple-blue glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[450px] h-[450px] bg-blue-300/10 dark:bg-blue-200/10 
          rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Subtle grid effect */}
      <div
        className="absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
             linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          opacity-20
          [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_65%,transparent_100%)]
        "
      />
    </div>
  );
}
