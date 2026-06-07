import bucketListData from "@/data/bucket-list.json";
import futureLetterData from "@/data/future-letter.json";
import hikesData from "@/data/hikes.json";
import quotesData from "@/data/quotes.json";
import type { BucketListItem, Hike } from "@/lib/types";

export const hikes = (hikesData as Hike[]).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const chronologicalHikes = [...hikes].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

export const bucketList = bucketListData as BucketListItem[];

export const quotes = quotesData as string[];

export const futureLetter = futureLetterData;

export function getHikeBySlug(slug: string) {
  return hikes.find((hike) => hike.slug === slug);
}

export function getAdventureStats() {
  return {
    mountains: hikes.length,
    elevationGained: hikes.reduce((sum, hike) => sum + hike.elevationGain, 0),
    distanceWalked: hikes.reduce((sum, hike) => sum + hike.distance, 0),
    adventures: hikes.length
  };
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en").format(value);
}
