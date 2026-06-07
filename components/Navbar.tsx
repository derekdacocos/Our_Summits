"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Heart } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/timeline", label: "Timeline" },
  { href: "/bucket-list", label: "Bucket List" },
  { href: "/about", label: "About Us" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-forest">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-paper">
            <Compass size={20} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl">Our Summits</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-forest text-paper"
                    : "text-ink/70 hover:bg-forest/10 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/about"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-rosewood/10 text-rosewood transition hover:bg-rosewood hover:text-paper"
          aria-label="About us"
        >
          <Heart size={18} aria-hidden="true" />
        </Link>
      </nav>
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                active ? "bg-forest text-paper" : "bg-white/70 text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
