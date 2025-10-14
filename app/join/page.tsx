import { RecruitmentSection } from "@/components/recruitment-section"
import { Footer } from "@/components/footer"

export default function RecruitmentPage() {
  return (
    <>
      <section className="bg-primary-900 text-white py-20">
        <div className="container">
          <div className="items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wider">Recruitment</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-20">
              <p className="text-lg font-light tracking-wide leading-relaxed opacity-90">
                Join Duke Venture Group — where driven individuals become future leaders in venture capital. Each year, we selectively admit a small cohort of analysts who demonstrate a strong work ethic, a results-driven mindset, and most importantly, a genuine passion for learning and growth. As a member of DVG, you’ll gain unparalleled hands-on experience in a collaborative environment that blends professional development with a vibrant community, offering insights and opportunities far beyond the classroom.
              </p>
              <img src="images/members/teamPhoto.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container w-100">
          <div className="items-center text-center text-bold text-3xl">
            <h1>Duke Venture Group Fall 2025 applications are closed</h1>
          </div>
        </div>
      </section>

      <RecruitmentSection />
      <section
        className="py-20"
        style={{
          background: "linear-gradient(45deg, #e3f2fd 0%, rgba(241, 245, 249, 0.3) 100%)"
        }}
      >
        <div className="container">
          <div className="items-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary-900">Our Training Program</h2>
        <p className="text-lg font-light tracking-wide leading-relaxed opacity-90">
          This curriculum combines hands-on workshops and case-based learning to build core competencies in startup sourcing and evaluation, investment thesis construction, market research and due diligence fundamentals, and communication of insights and recommendations. The program also culminates in an internal investment competition, with the winning team earning the opportunity to represent Duke at the Venture Capital Investment Competition (VCIC), hosted nationally at UNC.
        </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
