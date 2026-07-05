import { MowIcon, MoreIcon, PaintIcon, TrimIcon, WashIcon } from '@/components/ServiceIcons'

const SERVICES = [
  { icon: MowIcon, title: 'Muruniitmine', description: 'Regulaarne ja ühekordne muruniitmine kodu- ja suvilaaedades.' },
  { icon: TrimIcon, title: 'Trimmerdamine', description: 'Hekkide, põõsaste ja raskesti ligipääsetavate alade trimmerdamine (ka võsalõikus).' },
  { icon: WashIcon, title: 'Kivi- ja puitpindade pesu', description: 'Terrasside, Fassaadi ja Tänavakivi pesu.' },
  { icon: PaintIcon, title: 'Värvimistööd', description: 'Aedade, väiksemate hoonete ja muude pindade värvimine ja õlitamine.' },
  { icon: MoreIcon, title: 'Muud tööd', description: 'Muud aia, väli- ja hooldustööd kokkuleppel.' },
]

export function Gallery() {
  return (
    <section id="teenused" className="bg-[var(--color-slate-dark)] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
          Teenused
        </p>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
          Mida me teeme
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-[var(--color-slate-soft)] p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
                <Icon />
              </span>
              <p className="mt-4 font-display text-xl font-bold uppercase tracking-wide">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
