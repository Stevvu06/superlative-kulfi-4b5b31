import { Link } from '@tanstack/react-router'

const NAV_LINKS = [
  { href: '#meist', label: 'Meist' },
  { href: '#tood', label: 'Tehtud tööd' },
  { href: '#arvamused', label: 'Arvamused' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-bark)]/10 bg-[var(--color-stone)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-moss)] text-[var(--color-stone)]">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2 L4 14 H10 L7 22 L20 9 H13 Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide leading-none">
            Välimees <span className="text-[var(--color-rust)]">OÜ</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-bark)]/80 transition-colors hover:text-[var(--color-rust)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-[var(--color-rust)] px-5 py-2 text-sm font-semibold text-[var(--color-stone)] transition-colors hover:bg-[var(--color-rust-bright)]"
        >
          Küsi pakkumist
        </a>
      </div>
    </header>
  )
}
