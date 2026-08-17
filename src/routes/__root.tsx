import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Välimees OÜ — Muruniitmine, trimmerdamine ja hooldustööd Otepääl',
      },
      {
        name: 'description',
        content:
          'Välimees OÜ teeb muruniitmist, trimmerdamist, Kivi- ja puitpindade pesu ja värvimistöid Otepääl ja lähiümbruses. Vaata teenuseid, klientide arvamusi ja võta ühendust.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
