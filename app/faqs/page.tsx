import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function FAQsPage() {
  return (
    <>
      <section className="bg-primary-900 text-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wider">Frequently Asked Questions</h1>
            </div>
            <div>
              <p className="text-lg font-light tracking-wide leading-relaxed opacity-90">
                Below, we've compiled answers to our most commonly asked questions, especially for Duke students
                interested in joining Duke Venture Group in an upcoming recruiting cycle. If you have any additional
                questions not on this page, please feel free to contact us!
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </>
  )
}
