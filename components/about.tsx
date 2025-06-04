import Image from "next/image"

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-800 tracking-wide">
              About Duke Venture Group
            </h2>
            <div className="space-y-4 text-lg leading-relaxed font-light tracking-wide">
              <p>
                Duke Venture Group (DVG) is Duke University's premier, student-run venture capital organization—offering
                a highly selective, hands-on experience for undergraduates to engage in the sourcing, evaluation, and
                strategic support of early-stage startups.
              </p>
              <p>
                Launching Fall 2025, DVG operates at the intersection of entrepreneurship and finance, providing
                students with unparalleled access to venture capitalists, real-world diligence processes, and the Duke
                startup ecosystem.
              </p>
              <p>
                By uniting Duke's world-class talent across finance, technology, and engineering, DVG is establishing
                itself as the foremost undergraduate gateway to careers in venture capital, innovation, and
                entrepreneurship leadership.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="DVG Team"
              width={600}
              height={500}
              className="shadow-lg"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
