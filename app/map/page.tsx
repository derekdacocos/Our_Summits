import { DynamicMap } from "@/components/DynamicMap";
import { SectionHeader } from "@/components/SectionHeader";

export default function MapPage() {
  return (
    <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Trail Map"
          title="Where our memories live"
          description="Tap a summit marker to open the memory card, then follow it into the full story."
        />
        <div className="rounded-lg border border-forest/10 bg-white p-2 shadow-soft">
          <DynamicMap />
        </div>
      </div>
    </section>
  );
}
