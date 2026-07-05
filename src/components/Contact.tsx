import { useState } from 'react'

const CONTACT_ITEMS = [
  {
    label: 'Telefon',
    value: '+372 5566 7788',
    href: 'tel:+3725566778',
  },
  {
    label: 'E-post',
    value: 'info@valimees.ee',
    href: 'mailto:info@valimees.ee',
  },
  {
    label: 'Tegutsemispiirkond',
    value: 'Lääne-Eesti (Haapsalu, Ridala, Lihula, Nõva)',
    href: undefined,
  },
  {
    label: 'Registrikood',
    value: 'Välimees OÜ, reg. nr 14 87 65 43',
    href: undefined,
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setStatus(response.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="bg-[var(--color-moss-dark)] py-24 text-[var(--color-stone)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rust-bright)]">
            Võta ühendust
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
            Räägime objektist
          </h2>
          <p className="mt-6 max-w-md text-[var(--color-stone)]/75">
            Helista, kirjuta või saada meile paar fotot oma kinnistust — vaatame
            üle ja anname ausa hinnapakkumise ühe kuni kahe tööpäeva jooksul.
          </p>
          <ul className="mt-8 space-y-5">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-[var(--color-stone)]/15 pb-4">
                <p className="text-xs uppercase tracking-wide text-[var(--color-stone)]/50">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-lg font-medium hover:text-[var(--color-rust-bright)]">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form
          className="rounded-3xl border border-[var(--color-stone)]/15 bg-[var(--color-bark)]/40 p-8"
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <p className="hidden">
            <label>
              Ära täida seda välja
              <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm">
              Nimi
              <input
                type="text"
                name="nimi"
                required
                className="rounded-xl border border-[var(--color-stone)]/20 bg-[var(--color-stone)]/5 px-4 py-3 text-[var(--color-stone)] outline-none focus:border-[var(--color-rust-bright)]"
                placeholder="Kaido Reinuma"
              />
            </label>
            <label className="grid gap-2 text-sm">
              E-post
              <input
                type="email"
                name="epost"
                required
                className="rounded-xl border border-[var(--color-stone)]/20 bg-[var(--color-stone)]/5 px-4 py-3 text-[var(--color-stone)] outline-none focus:border-[var(--color-rust-bright)]"
                placeholder="sina@näide.ee"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Sõnum
              <textarea
                name="sonum"
                required
                rows={4}
                className="resize-none rounded-xl border border-[var(--color-stone)]/20 bg-[var(--color-stone)]/5 px-4 py-3 text-[var(--color-stone)] outline-none focus:border-[var(--color-rust-bright)]"
                placeholder="Kirjelda oma objekti ja soovitud tööd"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-[var(--color-rust)] px-7 py-3 font-semibold uppercase tracking-wide text-[var(--color-stone)] transition-colors hover:bg-[var(--color-rust-bright)] disabled:opacity-60"
            >
              {status === 'sending' ? 'Saadan...' : 'Saada sõnum'}
            </button>
            {status === 'sent' && (
              <p className="text-sm font-medium text-[var(--color-rust-bright)]">
                Aitäh! Võtame sinuga peagi ühendust.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-red-400">
                Midagi läks valesti. Proovi uuesti või helista otse.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
