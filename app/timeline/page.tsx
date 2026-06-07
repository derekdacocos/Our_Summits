import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Mountain, Route, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { chronologicalHikes, formatDate } from "@/lib/data";

export default function TimelinePage() {
  return (
    <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Timeline"
          title="A journey in order"
          description="The story of our hikes, arranged from first step to newest summit."
        />
        <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-forest/20 sm:before:left-1/2">
          {chronologicalHikes.map((hike, index) => (
            <article key={hike.slug} className={`relative grid gap-5 sm:grid-cols-2 ${index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"}`}>
              <span className="absolute left-2 top-7 z-10 h-4 w-4 rounded-full border-4 border-paper bg-ember sm:left-1/2 sm:-ml-2" />
              <div className="ml-10 overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft sm:ml-0">
                <div className="relative aspect-[16/10]">
                  <Image src={hike.coverPhoto} alt={hike.name} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="mb-2 flex items-center gap-2 text-sm text-ember"><CalendarDays size={16} />{formatDate(hike.date)}</p>
                  <h2 className="font-serif text-2xl text-forest">{hike.name}</h2>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-ink/65">
                    <span className="flex items-center gap-1"><Route size={14} />{hike.distance} km</span>
                    <span className="flex items-center gap-1"><TrendingUp size={14} />{hike.elevationGain} m</span>
                    <span className="flex items-center gap-1"><Mountain size={14} />{hike.elevation} m</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ink/70">{hike.memory}</p>
                  <Link href={`/summits/${hike.slug}`} className="mt-5 inline-flex rounded-full bg-forest px-5 py-2 text-sm font-semibold text-paper transition hover:bg-ember">
                    View Memory
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
