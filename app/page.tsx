import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Partners />
      <Footer />
    </>
  )
}
