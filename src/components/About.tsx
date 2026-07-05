const STATS = [
  { value: '14', label: 'aastat tegutsemist' },
  { value: '260+', label: 'lõpetatud objekti' },
  { value: '3', label: 'meest põhimeeskonnas' },
]

export function About() {
  return (
    <section id="meist" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img
              src="https://picsum.photos/id/1015/700/900"
              alt="Välimees OÜ asutaja metsas"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-4 border-[var(--color-stone)] bg-[var(--color-rust)]" />
        </div>
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-moss)]">
            Meist
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
            Kohalik ettevõte, mis peab oma sõna
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-bark)]/80">
            Välimees OÜ sai alguse Marko Väliotsa garaažist, kui naabrid hakkasid
            küsima abi tormimurru koristamisel. Täna teeme metsahooldust,
            ohtlike puude langetamist, kinnistute korrastamist ja hooajalisi
            haljastustöid kogu Lääne-Eestis. Töö saab tehtud ilma jututa —
            vaatame objekti üle, ütleme aususega, mis on mõistlik, ja teeme
            selle korralikult ära.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-bark)]/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-extrabold text-[var(--color-rust)]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-bark)]/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
