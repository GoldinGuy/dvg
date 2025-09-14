import { ProgramsOverview } from "@/components/programs-overview"
import { ProgramsSchedule } from "@/components/programs-schedule"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-primary-900 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wider">Our Programs</h1>
            <p className="text-lg font-light tracking-wide leading-relaxed opacity-90 max-w-3xl mx-auto">
              Comprehensive programs designed to provide real-world venture capital experience through rigorous
              education, hands-on startup evaluation, and direct industry connections.
            </p>
          </div>
        </div>
      </section>

      <ProgramsOverview />
      <ProgramsSchedule />
      <Footer />
    </>
  )
}
