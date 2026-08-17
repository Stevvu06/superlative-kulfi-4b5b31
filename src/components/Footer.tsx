export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-slate-dark)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-white/60 md:flex-row">
        <p className="font-display text-base font-bold uppercase tracking-wide text-white">
          Välimees <span className="text-[var(--color-green-bright)]">OÜ</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Välimees OÜ. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  )
}
