import { ExecutiveBoard } from "@/components/executive-board"
import { Footer } from "@/components/footer"

export default function MembersPage() {
  return (
    <>
      <section className="bg-primary-900 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wider">Executive Board</h1>
            <p className="text-lg font-light tracking-wide leading-relaxed opacity-90 max-w-2xl mx-auto">
              Meet the dedicated students driving Duke Venture Group's mission to cultivate the next generation of
              venture capital leaders.
            </p>
          </div>
        </div>
      </section>

      <ExecutiveBoard />
      <Footer />
    </>
  )
}
