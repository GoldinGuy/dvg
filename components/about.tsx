import Image from "next/image"

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide text-primary-900 dark:text-white">
              About Duke Venture Group
            </h2>
            <div className="space-y-4 text-lg leading-relaxed font-light tracking-wide">
              <p>
                Duke Venture Group (DVG) is Duke University's premier undergraduate venture capital
                organization—offering a highly selective, hands-on experience for students to engage in the
                sourcing, evaluation, and strategic support of early-stage startups.
              </p>
              <p>
                Through a partnership with Duke's Innovation and Entrepreneurship department, DVG operates at the
                intersection of entrepreneurship and finance, providing students with unparalleled access to venture
                capitalists, real-world diligence processes, and the Duke startup ecosystem.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/about-dvg-new.jpg"
              alt="Duke University Campus at Evening"
              width={600}
              height={400}
              className="shadow-lg"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
