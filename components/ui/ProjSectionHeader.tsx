'use client';

export default function ProjSectionHeader({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle?: string;
  accent: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <h2
        className="text-3xl md:text-4xl font-extrabold"
        style={{ color: accent, fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle ? (
        <span className="text-sm md:text-base font-bold opacity-70" style={{ color: 'var(--foreground)' }}>
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}