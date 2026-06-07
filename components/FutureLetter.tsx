"use client";

import { useState } from "react";
import { LockKeyhole, MailOpen } from "lucide-react";
import { futureLetter } from "@/lib/data";

export function FutureLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-rosewood/15 bg-white p-6 text-center shadow-soft sm:p-10">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-rosewood/10 text-rosewood">
          {open ? <MailOpen size={22} aria-hidden="true" /> : <LockKeyhole size={22} aria-hidden="true" />}
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-rosewood">Future Letter</p>
        <h2 className="font-serif text-3xl text-forest">{futureLetter.title}</h2>
        {open ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/75">{futureLetter.message}</p>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-rosewood px-6 py-3 text-sm font-semibold text-paper transition hover:bg-forest"
          >
            {futureLetter.openButton}
          </button>
        )}
      </div>
    </section>
  );
}
