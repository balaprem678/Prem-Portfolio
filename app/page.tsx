import Hero from '@/components/Home/Hero/Hero'
import About from '@/components/Home/About/About'
import WorkProcess from '@/components/Home/Workprocess/WorkProcess'
import CTABanner from '@/components/Home/CTABanner'
import Services from '@/components/Home/Services'
import Contact from '@/components/Home/Contact'
import Navbar from '@/components/Header/Navbar'
import Portfolio from '@/components/Home/Portfolio/Portfolio'
import Clients from '@/components/Home/Clients/Clients'
import Footer from '@/components/Footer/Footer'
import SkillsTree from '@/components/Home/Skills/Skills'

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
        <SkillsTree />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
