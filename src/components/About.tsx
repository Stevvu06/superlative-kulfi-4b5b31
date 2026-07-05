const AREAS = ['Otepää', 'Kanepi', 'ja lähiümbrus']

export function About() {
  return (
    <section id="meist" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="rounded-3xl border border-white/10 bg-[var(--color-slate-soft)] p-8">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Piirkond
          </p>
          <ul className="mt-4 space-y-3">
            {AREAS.map((area) => (
              <li key={area} className="font-display text-2xl font-bold uppercase tracking-wide">
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Meist
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
            Kohalik ettevõte, mis peab oma sõna
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Välimees OÜ pakub professionaalseid välitööde teenuseid
            nii era- kui äriklientidele.
            Meie eesmärk on hoida sinu kinnistu puhas, hooldatud ja esinduslik aastaringselt.
            Kirjuta julgelt!
          </p>
        </div>
      </div>
    </section>
  )
}
