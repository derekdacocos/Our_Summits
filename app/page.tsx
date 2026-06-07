import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPinned } from "lucide-react";
import { AdventureStats } from "@/components/AdventureStats";
import { FutureLetter } from "@/components/FutureLetter";
import { HikeCard } from "@/components/HikeCard";
import { QuoteRotator } from "@/components/QuoteRotator";
import { SectionHeader } from "@/components/SectionHeader";
import { hikes } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-4 py-20 text-paper sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
          alt="A mountain ridge at sunrise"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/45 to-forest/80" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fern">Birthday trail journal</p>
            <h1 className="font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">Our Summits</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-paper/90">Every mountain tells a story.</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-paper/80">
              Places we&apos;ve conquered, memories we&apos;ve made, and adventures still waiting for us.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#journey"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-forest transition hover:bg-fern"
              >
                Begin the Journey <ArrowDown size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/map"
                className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-paper/15"
              >
                Open Map <MapPinned size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Memory Book"
            title="The climbs that became us"
            description="Each summit keeps a little piece of the day: the weather, the view, the tired laughter, and the quiet proof that we keep choosing the next trail together."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hikes.slice(0, 3).map((hike) => (
              <HikeCard key={hike.slug} hike={hike} />
            ))}
          </div>
        </div>
      </section>

      <AdventureStats />
      <QuoteRotator />
      <FutureLetter />
    </>
  );
}
