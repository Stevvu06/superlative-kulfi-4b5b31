const REVIEWS = [
  {
    name: 'Kaido Reinuma',
    role: 'Suvila omanik, Nõva',
    quote:
      'Tulid kokkulepitud päeval, langetasid kolm ohtlikku kuuske suvila kõrvalt ja koristasid oksad ka minema. Ei mingit lisatasu üllatust.',
    rating: 5,
  },
  {
    name: 'Aive Kalmus',
    role: 'Korteriühistu juhatuse liige, Haapsalu',
    quote:
      'Palkasime hoovi võsast puhastama ja muru rajama. Hinnapakkumine tuli kahe päevaga, töö sai valmis nädalaga. Naabrid küsivad juba kontakti.',
    rating: 5,
  },
  {
    name: 'Priit Ounapuu',
    role: 'Talupidaja, Ridala vald',
    quote:
      'Kasutame Välimeest juba kolmandat aastat metsahoolduseks. Masinad on korras ja mehed teavad, mida teevad — pole kordagi pidanud järele parandama.',
    rating: 4,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-[var(--color-rust)]" aria-label={`${count} tähte viiest`}>
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
    <section id="arvamused" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-moss)]">
        Kliendid räägivad
      </p>
      <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
        Mida meie kliendid ütlevad
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <blockquote
            key={review.name}
            className={`flex flex-col justify-between rounded-3xl border border-[var(--color-bark)]/10 bg-white/50 p-7 shadow-sm ${
              index === 1 ? 'md:-translate-y-4' : ''
            }`}
          >
            <div>
              <Stars count={review.rating} />
              <p className="mt-4 text-base leading-relaxed text-[var(--color-bark)]/85">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
            <footer className="mt-6 border-t border-[var(--color-bark)]/10 pt-4">
              <p className="font-display text-lg font-bold uppercase tracking-wide">{review.name}</p>
              <p className="text-sm text-[var(--color-bark)]/60">{review.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
