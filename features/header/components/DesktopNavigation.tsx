import Link from "next/link";
import type { NavigationItem } from "../header.types";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <ul className="hidden items-center gap-6 lg:flex">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center px-1 text-xs font-semibold tracking-[0.06em] text-site-muted uppercase transition-colors hover:text-site-text"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
