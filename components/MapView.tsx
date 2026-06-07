"use client";

import Image from "next/image";
import Link from "next/link";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CalendarDays, MapPin, Mountain } from "lucide-react";
import { formatDate, hikes } from "@/lib/data";
import "leaflet/dist/leaflet.css";

const markerIcon = L.divIcon({
  className: "summit-marker",
  html: "<span></span>",
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16]
});

export function MapView() {
  return (
    <MapContainer
      center={[13.9, 122.3]}
      zoom={6}
      scrollWheelZoom={false}
      className="h-[72vh] min-h-[520px] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hikes.map((hike) => (
        <Marker key={hike.slug} position={hike.coordinates} icon={markerIcon}>
          <Popup minWidth={260}>
            <div className="overflow-hidden rounded-md bg-white">
              <div className="relative h-36">
                <Image src={hike.coverPhoto} alt={hike.name} fill className="object-cover" sizes="280px" />
              </div>
              <div className="p-3">
                <h3 className="font-serif text-xl text-forest">{hike.name}</h3>
                <div className="mt-2 space-y-1 text-xs text-ink/65">
                  <p className="flex items-center gap-1"><CalendarDays size={13} />{formatDate(hike.date)}</p>
                  <p className="flex items-center gap-1"><MapPin size={13} />{hike.location}</p>
                  <p className="flex items-center gap-1"><Mountain size={13} />{hike.elevation} m</p>
                </div>
                <p className="mt-3 text-sm leading-5 text-ink/75">&ldquo;{hike.memory}&rdquo;</p>
                <Link
                  href={`/summits/${hike.slug}`}
                  className="mt-3 inline-flex rounded-full bg-forest px-4 py-2 text-xs font-semibold text-paper"
                >
                  View Memory
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
