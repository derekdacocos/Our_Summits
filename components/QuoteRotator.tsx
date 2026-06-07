"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { quotes } from "@/lib/data";

export function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-forest px-4 py-16 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto mb-5 text-fern" size={34} aria-hidden="true" />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fern">Favorite Quote</p>
        <p className="font-serif text-3xl leading-tight sm:text-4xl">&ldquo;{quotes[index]}&rdquo;</p>
      </div>
    </section>
  );
}
