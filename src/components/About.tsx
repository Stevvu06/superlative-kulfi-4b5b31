const AREAS = ['Otepää', 'Kanepi', 'Elva' 'ja ülejäänud Kagu-Eesti']

export function About() {
  return (
    <section id="meist" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="rounded-3xl border border-white/10 bg-[var(--color-slate-soft)] p-8">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Tegutsemis piirkonnad
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
            Korralik õu algab Välimehest
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80">
         Välimees OÜ on usaldusväärne välitööde partner,
         kes aitab hoida sinu kinnistu puhta, korrastatud ja esinduslikuna.
         Pakume kvaliteetseid teenuseid nii era- kui äriklientidele,
         sealhulgas muru niitmist, trimmerdamist, fassaadi pesu ning erinevaid aia- ja õuetöid.
          </p>
        </div>
      </div>
    </section>
  )
}
