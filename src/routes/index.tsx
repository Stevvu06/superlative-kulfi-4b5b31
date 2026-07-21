import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Gallery } from '@/components/Gallery'
import { Reviews } from '@/components/Reviews'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
<link rel="icon" type "image/png" href="Välimees_OÜ">
export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
