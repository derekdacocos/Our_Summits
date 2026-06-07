import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-paper px-4 text-center">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-ember">Trail Missing</p>
        <h1 className="font-serif text-4xl text-forest">This summit is not in the journal yet.</h1>
        <Link href="/timeline" className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper">
          Return to Timeline
        </Link>
      </div>
    </section>
  );
}
