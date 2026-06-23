import Seo from '../components/Seo'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import About from '../components/home/About'
import Services from '../components/home/Services'
import BuildAssembly from '../components/home/BuildAssembly'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Process from '../components/home/Process'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import Partners from '../components/home/Partners'
import Faq from '../components/home/Faq'
import FinalCta from '../components/home/FinalCta'

export default function Home() {
  return (
    <>
      <Seo
        title="Aztec — Building Excellence From Design To Completion"
        description="Aztec delivers world-class architectural design, construction, engineering, renovation, and project management solutions."
      />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <BuildAssembly />
      <FeaturedProjects />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <Faq />
      <FinalCta />
    </>
  )
}
