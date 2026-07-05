export function Footer() {
  return (
    <footer className="border-t border-[var(--color-bark)]/10 bg-[var(--color-stone)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-[var(--color-bark)]/60 md:flex-row">
        <p className="font-display text-base font-bold uppercase tracking-wide text-[var(--color-bark)]">
          Välimees <span className="text-[var(--color-rust)]">OÜ</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Välimees OÜ. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  )
}
