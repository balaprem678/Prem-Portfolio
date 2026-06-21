import Navbar from '@/components/Navbar'
import Hero from '@/components/Home/Hero/Hero'
import About from '@/components/Home/About/About'
import WorkProcess from '@/components/Home/Workprocess/WorkProcess'
import Portfolio from '@/components/Portfolio'
import CTABanner from '@/components/Home/CTABanner'
import Blog from '@/components/Home/Skills/Skills'
import Services from '@/components/Home/Services'
import Clients from '@/components/Clients'
import Contact from '@/components/Home/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkProcess />
        <Portfolio />
        <CTABanner />
        <Blog />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
