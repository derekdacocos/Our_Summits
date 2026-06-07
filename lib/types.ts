export type Hike = {
  slug: string;
  name: string;
  date: string;
  location: string;
  coordinates: [number, number];
  summitCount?: number;
  elevation: number;
  elevationLabel?: string;
  distance: number | null;
  elevationGain: number;
  difficulty: string;
  memory: string;
  coverPhoto: string;
  photos: string[];
  story: {
    climb: string;
    favoriteMoment: string;
    lessons: string;
  };
};

export type BucketListItem = {
  name: string;
  location: string;
  difficulty: string;
  status: "Planned" | "Dream Hike" | "Soon";
};
