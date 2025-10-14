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
              An immersive program offering real-world venture capital experience through in-depth coursework, hands-on startup due diligence, and direct engagement with industry professionals and active investment opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary-900">Together In Action</h2>
            <p className="text-lg font-light text-gray-700">
              We grow by doing. Our new analysts undergo intensive training before contributing to projects with VC firms, startups, and industry mentors. Members then work in collaboration with our partner firms to conduct due diligence, prepare investment decks, and research market opportunities across sectors from fintech to biotech. Through startup sourcing and on-campus programming, we aim to bridge the gap between entrepreneurship and finance at Duke.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/dukeBackground.jpeg"
              alt="Duke students collaborating on venture projects"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary-100 py-20">
        <div className="container flex flex-col md:flex-row items-center md:items-start gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary-900">For VC Firms</h2>
            <p className="text-lg font-light text-gray-700">
              We are a Duke student organization with hands-on training across the full spectrum of venture capital: sourcing deals, conducting due diligence, analyzing cap tables, and researching markets and industry trends. Our members represent a wide range of academic backgrounds and career interests, with many bringing prior experience from VC, private equity, and tech internships. We look forward to partnering with your firm by placing a select group of our most talented members on a semester-long project, delivering meaningful insights while creating a mutually beneficial collaboration.
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
