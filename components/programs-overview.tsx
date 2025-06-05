import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProgramsOverview() {
  const programs = [
    {
      title: "DVG Analyst",
      description:
        "Elite program combining rigorous education with hands-on startup evaluation and investment thesis development.",
      features: [
        "6-8 week intensive curriculum",
        "Expert-led workshops and teach-ins",
        "Internal investment competition",
        "Direct VC professional mentorship",
      ],
      details: [
        "All newly admitted members begin as Analyst Trainees and participate in a rigorous 6–8 week education program co-developed with Duke Innovation & Entrepreneurship (I&E).",
        "This curriculum combines hands-on workshops, expert-led teach-ins, and case-based learning to build core competencies in startup sourcing and evaluation, investment thesis construction, market research and due diligence fundamentals, and communication of insights and recommendations.",
        "The program culminates in an internal investment competition, where teams pitch their final theses to a panel of judges. The winning team earns the opportunity to represent Duke at the Venture Capital Investment Competition (VCIC), hosted nationally at UNC.",
      ],
    },
    {
      title: "DVG Fellow",
      description:
        "Exclusive access to networking events, speaker series, and career development opportunities in venture capital.",
      features: [
        "Private speaker events",
        "Founder roundtables",
        "VC firm networking",
        "Priority access to high-growth ventures",
      ],
      details: [
        "Fellows gain exclusive access to private speaker events featuring prominent venture capitalists, successful founders, and industry leaders sharing insights about the startup ecosystem.",
        "Participate in intimate founder roundtables where you can engage directly with entrepreneurs building the next generation of companies.",
        "Network with professionals from top-tier VC firms and gain insights into career paths in venture capital and entrepreneurship.",
        "Receive priority access to internship and full-time opportunities at high-growth ventures and investment firms through our extensive alumni network.",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="h-full card-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light tracking-wide">{program.title}</CardTitle>
                    <CardDescription className="text-lg font-light">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-normal mb-4 text-primary-700 dark:text-primary-300 tracking-wide">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center font-light">
                          <div className="w-1.5 h-1.5 bg-primary-600 mr-3" style={{ borderRadius: "1px" }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full button-elegant font-normal">
                      <Link href="/recruitment">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="space-y-4 text-lg leading-relaxed font-light tracking-wide">
                  {program.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
