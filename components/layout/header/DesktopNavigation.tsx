import Link from "next/link";
import type { NavigationItem } from "@/types";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <ul className="hidden items-center space-x-1 md:flex">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="rounded-md px-4 py-2 font-medium text-blue-100 transition-all duration-200 hover:bg-blue-500/20 hover:text-cyan-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
