import { MowIcon, PaintIcon, TrimIcon, WashIcon } from '@/components/ServiceIcons'

const HERO_SERVICES = [
  { icon: MowIcon, label: 'Muruniitmine' },
  { icon: TrimIcon, label: 'Trimmerdamine' },
  { icon: WashIcon, label: 'Kivi- ja puitpindade pesu' },
  { icon: PaintIcon, label: 'Värvimistööd' },
  { icon: PaintIcon, label: 'Muud tööd' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[var(--color-slate-dark)] text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-green) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-grey-light) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
        <div className="animate-rise">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Otepää ja kagu-eesti
          </p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
            Välimees OÜ
            <br />
            Sinu usaldusväärne abiline välitöödel
            <br />
            <span className="text-[var(--color-green-bright)]">Võta ühendust!</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/80">
            Välimees OÜ pakub professionaalseid välitööde teenuseid
            nii era- kui äriklientidele.
            Meie eesmärk on hoida sinu kinnistu puhas, hooldatud ja esinduslik aastaringselt.
            Kirjuta julgelt!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-[var(--color-green)] px-7 py-3 font-semibold uppercase tracking-wide text-white transition-transform hover:scale-105 hover:bg-[var(--color-green-bright)]"
            >
              Küsi hinnapakkumist
            </a>
            <a
              href="#teenused"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:border-white"
            >
              Vaata teenuseid
            </a>
          </div>
        </div>
        <div className="relative hidden animate-rise items-center md:flex" style={{ animationDelay: '0.15s' }}>
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {HERO_SERVICES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-[var(--color-slate-soft)] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
                  <Icon />
                </span>
                <p className="font-display text-lg font-bold uppercase leading-tight tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
