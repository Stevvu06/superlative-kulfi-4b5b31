# `src/routes/__root.tsx`

```tsx
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

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
        title: 'Välimees OÜ',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="et">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
```

