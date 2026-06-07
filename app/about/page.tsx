import Image from "next/image";
import { Heart, Map, Mountain } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Us"
          title="Why the mountains became ours"
          description="This little place exists because every climb gave us more than a view. It gave us stories we could keep."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1489674267075-cee793167910?auto=format&fit=crop&w=1400&q=85"
              alt="A couple looking at mountain scenery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/75">
            <p>
              Hiking became special because it gave us a way to slow down, move together, and discover how much love can fit inside a trail day.
            </p>
            <p>
              Every mountain became part of our story: the early alarms, packed snacks, wrong turns, quiet views, sore legs, and the small moments when one of us looked back to make sure the other was still okay.
            </p>
            <p>
              Our Summits is a home for those memories, and a promise that there are more peaks, more mornings, and more hand-in-hand adventures ahead.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {[
                { icon: Mountain, label: "Courage" },
                { icon: Heart, label: "Tenderness" },
                { icon: Map, label: "Next trails" }
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-forest/10 bg-white p-4 text-center shadow-soft">
                  <item.icon className="mx-auto mb-3 text-ember" size={24} aria-hidden="true" />
                  <p className="text-sm font-semibold text-forest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
