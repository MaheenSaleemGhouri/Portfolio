import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'
import About    from '@/components/About'
import Services from '@/components/Services'
import Skills   from '@/components/Skills'
import Projects from '@/components/Projects'
import HireMe   from '@/components/HireMe'
import Contact  from '@/components/Contact'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="hireme"><HireMe /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}
