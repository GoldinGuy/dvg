import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Programs } from "@/components/programs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Programs />
      <Footer />
    </>
  )
}
