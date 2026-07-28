import Link from "next/link";
import type { NavigationItem } from "@/types";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <ul className="hidden items-center gap-7 md:flex">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-xs font-semibold tracking-[0.08em] text-zinc-400 uppercase transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
