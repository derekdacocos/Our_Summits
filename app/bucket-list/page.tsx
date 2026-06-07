import { CircleCheck, Flag, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { bucketList, hikes } from "@/lib/data";

const statusColor = {
  Planned: "bg-moss/15 text-forest",
  "Dream Hike": "bg-rosewood/15 text-rosewood",
  Soon: "bg-ember/15 text-ember"
};

export default function BucketListPage() {
  const target = 50;
  const completed = hikes.length;
  const progress = Math.min((completed / target) * 100, 100);

  return (
    <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Future Trails"
          title="Mountains still waiting for us"
          description="A growing list for the next chapters, from soon-to-pack-for trails to dream hikes we will work toward together."
        />
        <div className="mb-8 rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-ember">Progress Tracker</p>
              <h2 className="mt-2 font-serif text-3xl text-forest">Completed: {completed} Mountains</h2>
              <p className="mt-1 text-ink/65">Target: {target} Mountains</p>
            </div>
            <Sparkles className="text-ember" size={34} aria-hidden="true" />
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-forest/10">
            <div className="h-full rounded-full bg-ember" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bucketList.map((mountain) => (
            <article key={mountain.name} className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
              <div className="mb-5 flex items-start justify-between gap-4">
                <Flag className="text-moss" size={24} aria-hidden="true" />
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[mountain.status]}`}>
                  {mountain.status}
                </span>
              </div>
              <h2 className="font-serif text-2xl text-forest">{mountain.name}</h2>
              <p className="mt-2 text-sm text-ink/65">{mountain.location}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink/75">
                <CircleCheck size={16} className="text-ember" aria-hidden="true" />
                {mountain.difficulty}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
