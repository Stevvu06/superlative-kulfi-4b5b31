import { Link } from '@tanstack/react-router'

const NAV_LINKS = [
  { href: '#meist', label: 'Meist' },
  { href: '#teenused', label: 'Teenused' },
  { href: '#arvamused', label: 'Arvamused' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-slate-dark)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 pl-3 pr-6 md:pl-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10">
            <img src="/favicon.png" alt="Välimees OÜ logo" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide leading-none text-white">
            Välimees <span className="text-[var(--color-green-bright)]">OÜ</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 transition-colors hover:text-[var(--color-green-bright)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-[var(--color-green)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-bright)]"
        >
          Küsi pakkumist
        </a>
      </div>
    </header>
  )
}
