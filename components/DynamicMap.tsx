"use client";

import dynamic from "next/dynamic";

export const DynamicMap = dynamic(
  () => import("@/components/MapView").then((mod) => mod.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[72vh] min-h-[520px] items-center justify-center rounded-lg bg-forest/10 text-forest">
        Loading the trail map...
      </div>
    )
  }
);
