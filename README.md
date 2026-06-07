# Our Summits

A romantic hiking memory website built with Next.js, TypeScript, Tailwind CSS, and React Leaflet.

## What This Is

Our Summits is a living digital scrapbook for hikes, summit memories, photos, and future mountain plans.

Tagline:

> Places we've conquered, memories we've made, and adventures still waiting for us.

## Project Structure

```txt
our-summits/
  app/
    page.tsx                  Home page
    map/page.tsx              Interactive map
    timeline/page.tsx         Chronological hike timeline
    bucket-list/page.tsx      Future mountains and progress tracker
    about/page.tsx            About Us page
    summits/[slug]/page.tsx   Individual mountain pages
  components/                 Shared UI sections and cards
  data/
    hikes.json                Completed hike memories
    bucket-list.json          Future mountains
    quotes.json               Rotating quote list
    future-letter.json        Hidden future letter message
  lib/                        Data helpers and TypeScript types
```

## How To Edit Memories

All important content lives in the `data` folder.

### Add A New Mountain

Open `data/hikes.json` and add a new object:

```json
{
  "slug": "mount-example",
  "name": "Mount Example",
  "date": "2026-08-12",
  "location": "Province, Philippines",
  "coordinates": [14.1234, 121.1234],
  "elevation": 1200,
  "distance": 10.5,
  "elevationGain": 650,
  "difficulty": "Moderate",
  "memory": "A short romantic memory from the trail.",
  "coverPhoto": "https://images.unsplash.com/your-photo",
  "photos": [
    "https://images.unsplash.com/your-photo-1",
    "https://images.unsplash.com/your-photo-2"
  ],
  "story": {
    "climb": "Describe the hike.",
    "favoriteMoment": "Describe the favorite moment.",
    "lessons": "Describe what this mountain taught you."
  }
}
```

The site automatically updates the home page, map, timeline, statistics, and summit page.

### Add Photos

Replace `coverPhoto` and `photos` with image URLs. For a deployed site, you can use public image links or later move photos into the `public` folder and reference them like `/photos/photo-name.jpg`.

### Edit Bucket List

Open `data/bucket-list.json`. Status must be one of:

- `Planned`
- `Dream Hike`
- `Soon`

### Edit Quotes

Open `data/quotes.json` and add or change quote strings.

### Edit Future Letter

Open `data/future-letter.json` and update the `message`.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy To Vercel

1. Create a GitHub repository and upload this project.
2. Go to [Vercel](https://vercel.com).
3. Select `Add New Project`.
4. Import the GitHub repository.
5. Use these settings:
   - Framework Preset: `Next.js`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click `Deploy`.
7. After deployment, copy the Vercel URL and turn it into a QR code for the birthday reveal.

No environment variables are required for the first version.

## Future Ideas

- Password-protected future letter
- Photo upload workflow
- Anniversary notes per mountain
- Private deployment
- Search and filtering by province, difficulty, or year
