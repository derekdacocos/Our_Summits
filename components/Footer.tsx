import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest px-4 py-10 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-2xl">Our Summits</p>
          <p className="mt-2 max-w-xl text-sm text-paper/70">
            Places we&apos;ve conquered, memories we&apos;ve made, and adventures still waiting for us.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-paper/80">
          <Link href="/map" className="hover:text-white">Map</Link>
          <Link href="/timeline" className="hover:text-white">Timeline</Link>
          <Link href="/bucket-list" className="hover:text-white">Bucket List</Link>
        </div>
      </div>
    </footer>
  );
}
