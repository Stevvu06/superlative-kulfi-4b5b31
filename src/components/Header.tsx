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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3c3 3.5 5 6.3 5 9a5 5 0 1 1-10 0c0-2.7 2-5.5 5-9Z" strokeLinejoin="round" />
            </svg>
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
