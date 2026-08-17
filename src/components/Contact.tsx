import { useState } from 'react'

const CONTACT_ITEMS = [
  {
    label: 'Telefon',
    value: '+372 5887 8950',
    href: 'tel:+37258878950',
  },
  {
    label: 'Telefon',
    value: '+372 5668 3884',
    href: 'tel:+37256683884',
  },
  {
    label: 'E-post',
    value: 'info.valimees@gmail.com',
    href: 'mailto:info.valimees@gmail.com',
  },
  {
    label: 'Tegutsemispiirkond',
    value: 'Otepää, Kanepi, Vidrike ja lähiümbrus',
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
    <section id="kontakt" className="bg-[var(--color-slate-dark)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-green-bright)]">
            Võta ühendust
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
            Räägime objektist
          </h2>
          <p className="mt-6 max-w-md text-white/75">
            Helista, kirjuta või saada meile paar fotot oma kinnistust — vaatame
            üle ja anname ausa hinnapakkumise ühe kuni kahe tööpäeva jooksul.
          </p>
          <ul className="mt-8 space-y-5">
            {CONTACT_ITEMS.map((item, index) => (
              <li key={`${item.label}-${index}`} className="border-b border-white/15 pb-4">
                <p className="text-xs uppercase tracking-wide text-white/50">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-lg font-medium hover:text-[var(--color-green-bright)]">
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
          className="rounded-3xl border border-white/15 bg-[var(--color-slate-soft)] p-8"
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
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--color-green-bright)]"
                placeholder="Kaido Reinuma"
              />
            </label>
            <label className="grid gap-2 text-sm">
              E-post
              <input
                type="email"
                name="epost"
                required
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--color-green-bright)]"
                placeholder="sina@näide.ee"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Sõnum
              <textarea
                name="sonum"
                required
                rows={4}
                className="resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--color-green-bright)]"
                placeholder="Kirjelda oma objekti ja soovitud tööd"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-[var(--color-green)] px-7 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-green-bright)] disabled:opacity-60"
            >
              {status === 'sending' ? 'Saadan...' : 'Saada sõnum'}
            </button>
            {status === 'sent' && (
              <p className="text-sm font-medium text-[var(--color-green-bright)]">
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
