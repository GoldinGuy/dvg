import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProgramsOverview() {
  const programs = [
    {
      title: "Investment Analyst",
      description:
        "Elite program combining rigorous education with hands-on diligence work",
      features: [
        "Intensive educational curriculum",
        "Expert-led seminars and workshops",
        "Diligence and research projects",
        "Internal investment competition",
      ],
      details: [
        "All newly admitted members begin as Investment Analysts and participate in a rigorous 6–8 week training program co-developed with Duke Innovation & Entrepreneurship (I&E).",
        "Each semester, Investment Analysts will be placed on project teams to complete due diligence and market research for partner VC firms.",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-primary-900">Student Programming</h2>
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="h-full relative overflow-visible card-elegant transform transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-md bg-primary-900 opacity-90" />

                  <CardHeader className="pl-8 pr-6 pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div>
                            <CardTitle className="text-2xl font-semibold">
                              {program.title}
                            </CardTitle>
                            <CardDescription className="text-base font-light text-primary-700 dark:text-primary-300">
                              {program.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pl-8 pr-6 pb-6">
                    <h4 className="font-medium mb-4 text-primary-700 dark:text-primary-300 tracking-wide">
                      What you'll get
                    </h4>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm font-light"
                        >
                          <span
                            className="flex-shrink-0 mt-1"
                            aria-hidden
                            dangerouslySetInnerHTML={{
                              __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                            }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="space-y-6 mt-5 text-lg leading-relaxed font-light tracking-wide">
                  {program.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="relative pl-14">
                      <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-700 font-medium shadow-sm">
                        {detailIndex + 1}
                      </span>
                      {detail}
                    </p>
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
