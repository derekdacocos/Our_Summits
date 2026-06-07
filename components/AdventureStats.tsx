import { Footprints, Mountain, Route, TrendingUp } from "lucide-react";
import { formatNumber, getAdventureStats } from "@/lib/data";

const iconMap = {
  mountains: Mountain,
  elevationGained: TrendingUp,
  distanceWalked: Route,
  adventures: Footprints
};

export function AdventureStats() {
  const stats = getAdventureStats();
  const items = [
    { key: "mountains", label: "Mountains climbed", value: formatNumber(stats.mountains) },
    { key: "elevationGained", label: "Total elevation gained", value: `${formatNumber(stats.elevationGained)} m` },
    { key: "distanceWalked", label: "Total distance walked", value: `${stats.distanceWalked.toFixed(1)} km` },
    { key: "adventures", label: "Adventures together", value: formatNumber(stats.adventures) }
  ] as const;

  return (
    <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.key];
            return (
              <div key={item.label} className="rounded-lg border border-forest/10 bg-white/70 p-5 shadow-soft">
                <Icon className="mb-6 text-ember" size={24} aria-hidden="true" />
                <p className="font-serif text-3xl text-forest">{item.value}</p>
                <p className="mt-2 text-sm text-ink/65">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
