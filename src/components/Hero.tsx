export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-bark)]/10 bg-[var(--color-moss-dark)] text-[var(--color-stone)]">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-rust) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-stone) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
        <div className="animate-rise">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rust-bright)]">
            Asutatud Läänemaal
          </p>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
            Metsa ja
            <br />
            maastiku
            <br />
            <span className="text-[var(--color-rust-bright)]">töömehed</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[var(--color-stone)]/80">
            Välimees OÜ hooldab metsa, raiub ohtlikke puid ja korrastab
            kinnistuid üle Lääne-Eesti. Kolm meest, kaks masinat, üks selge sõna.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-[var(--color-rust)] px-7 py-3 font-semibold uppercase tracking-wide text-[var(--color-stone)] transition-transform hover:scale-105 hover:bg-[var(--color-rust-bright)]"
            >
              Küsi hinnapakkumist
            </a>
            <a
              href="#tood"
              className="rounded-full border border-[var(--color-stone)]/40 px-7 py-3 font-semibold uppercase tracking-wide text-[var(--color-stone)] transition-colors hover:border-[var(--color-stone)]"
            >
              Vaata tehtud töid
            </a>
          </div>
        </div>
        <div className="relative hidden animate-rise items-center justify-center md:flex" style={{ animationDelay: '0.15s' }}>
          <div className="relative aspect-square w-full max-w-sm rotate-3 overflow-hidden rounded-3xl border-4 border-[var(--color-stone)]/10 shadow-2xl">
            <img
              src="https://picsum.photos/id/1043/700/700"
              alt="Metsatöö Välimees OÜ meeskonnalt"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 -rotate-6 rounded-2xl bg-[var(--color-rust)] px-5 py-4 shadow-xl">
            <p className="font-display text-3xl font-extrabold leading-none">14+</p>
            <p className="text-xs uppercase tracking-wide">aastat kogemust</p>
          </div>
        </div>
      </div>
    </section>
  )
}
