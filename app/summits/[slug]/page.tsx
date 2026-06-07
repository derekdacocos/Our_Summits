import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Mountain, Route, TrendingUp } from "lucide-react";
import { formatDate, formatDistance, formatElevation, getHikeBySlug, hikes } from "@/lib/data";

type SummitPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return hikes.map((hike) => ({
    slug: hike.slug
  }));
}

export async function generateMetadata({ params }: SummitPageProps) {
  const { slug } = await params;
  const hike = getHikeBySlug(slug);

  if (!hike) {
    return {
      title: "Summit Not Found | Our Summits"
    };
  }

  return {
    title: `${hike.name} | Our Summits`,
    description: hike.memory
  };
}

export default async function SummitPage({ params }: SummitPageProps) {
  const { slug } = await params;
  const hike = getHikeBySlug(slug);

  if (!hike) {
    notFound();
  }

  return (
    <>
      <section className="relative flex min-h-[72vh] items-end overflow-hidden px-4 py-12 text-paper sm:px-6 lg:px-8">
        <Image src={hike.coverPhoto} alt={hike.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/35 to-forest/85" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Link href="/timeline" className="mb-8 inline-flex items-center gap-2 rounded-full bg-paper/15 px-4 py-2 text-sm font-semibold text-paper backdrop-blur transition hover:bg-paper/25">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Timeline
          </Link>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-fern">{formatDate(hike.date)}</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">{hike.name}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-paper/90">&ldquo;{hike.memory}&rdquo;</p>
        </div>
      </section>

      <section className="bg-paper px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: MapPin, label: "Location", value: hike.location },
            { icon: Mountain, label: "Elevation", value: formatElevation(hike) },
            { icon: Route, label: "Distance", value: formatDistance(hike.distance) },
            { icon: TrendingUp, label: "Elevation Gain", value: `${hike.elevationGain} m` },
            { icon: CalendarDays, label: "Date", value: formatDate(hike.date) }
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
              <item.icon className="mb-4 text-ember" size={22} aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">{item.label}</p>
              <p className="mt-2 font-semibold text-forest">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {[
            { title: "The Climb", body: hike.story.climb },
            { title: "Favorite Moment", body: hike.story.favoriteMoment },
            { title: "Lessons From This Mountain", body: hike.story.lessons }
          ].map((section) => (
            <article key={section.title} className="rounded-lg border border-forest/10 bg-paper p-6">
              <h2 className="font-serif text-3xl text-forest">{section.title}</h2>
              <p className="mt-4 leading-7 text-ink/75">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-ember">Gallery</p>
            <h2 className="font-serif text-4xl text-forest">Pieces of this day</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {hike.photos.map((photo, index) => (
              <div key={photo} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src={photo}
                  alt={`${hike.name} memory ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
