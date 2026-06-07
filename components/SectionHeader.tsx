type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl text-forest sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink/70">{description}</p>
      ) : null}
    </div>
  );
}
