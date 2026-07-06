const REVIEWS = [
  {
    name: 'Kaido R',
    role: 'Suvila omanik, Otepää',
    quote:
      'Tellisin muruniitmise ja trimmerdamise. Tulid kokkulepitud päeval ja tegid hoovi korralikult puhtaks. Sõbralikud mehed!.',
    rating: 5,
  },
  {
    name: 'Aive K',
    role: 'Majaomanik, Elva',
    quote:
      'Palkasime terrassi ja fassaadi pesema ning hiljem ka värvima. Hinnapakkumine tuli kahe päevaga, töö sai valmis nädalaga. Viisakas tulemus tuli!!',
    rating: 5,
  },
  {
    name: 'Priit Õ',
    role: 'Elanik, Otepää lähiümbrusest',
    quote:
      'Kasutame Välimeest juba korduvalt muru niitmiseks ja väiksemateks majapidamistöödeks. Mehed teavad, mida teevad ning saavad ka uute asjadega hakkama.',
    rating: 4,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-[var(--color-green-bright)]" aria-label={`${count} tähte viiest`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9-5.2-2.9-5.2 2.9 1-5.9L1.5 7.6l5.9-.7z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="arvamused" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
        Kliendid räägivad
      </p>
      <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
        Klentide tagasiside!
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <blockquote
            key={review.name}
            className={`flex flex-col justify-between rounded-3xl border border-white/10 bg-[var(--color-slate-soft)] p-7 shadow-sm ${
              index === 1 ? 'md:-translate-y-4' : ''
            }`}
          >
            <div>
              <Stars count={review.rating} />
              <p className="mt-4 text-base leading-relaxed text-white/85">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
            <footer className="mt-6 border-t border-white/10 pt-4">
              <p className="font-display text-lg font-bold uppercase tracking-wide">{review.name}</p>
              <p className="text-sm text-white/60">{review.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
