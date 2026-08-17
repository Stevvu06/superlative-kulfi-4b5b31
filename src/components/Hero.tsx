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
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-[1.3fr_0.7fr] md:py-40">
        <div className="animate-rise">
          <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Otepää ja kagu-eesti
          </p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
            Välimees OÜ
            <br />
            Sinu usaldusväärne abiline välitöödel
          </h1>
          <span className="mt-4 block font-display text-xl font-bold normal-case tracking-normal text-[var(--color-green-bright)] md:text-2xl">
            Võta ühendust!
          </span>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/80">
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
          <div className="grid w-full max-w-sm grid-cols-2 gap-5">
            {HERO_SERVICES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-[var(--color-slate-soft)] p-7 transition-colors hover:border-[var(--color-green-bright)]/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
                  <Icon className="h-6 w-6" />
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
