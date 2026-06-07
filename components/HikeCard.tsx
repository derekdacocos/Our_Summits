import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Mountain } from "lucide-react";
import { formatDate } from "@/lib/data";
import type { Hike } from "@/lib/types";

export function HikeCard({ hike }: { hike: Hike }) {
  return (
    <article className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image src={hike.coverPhoto} alt={hike.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-ink/60">
          <span className="inline-flex items-center gap-1"><CalendarDays size={14} />{formatDate(hike.date)}</span>
          <span className="inline-flex items-center gap-1"><Mountain size={14} />{hike.elevation} m</span>
        </div>
        <h3 className="font-serif text-2xl text-forest">{hike.name}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-ink/65"><MapPin size={15} />{hike.location}</p>
        <p className="mt-4 text-sm leading-6 text-ink/70">{hike.memory}</p>
        <Link href={`/summits/${hike.slug}`} className="mt-5 inline-flex rounded-full bg-forest px-5 py-2 text-sm font-semibold text-paper transition hover:bg-ember">
          View Memory
        </Link>
      </div>
    </article>
  );
}
