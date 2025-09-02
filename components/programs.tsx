import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Programs() {
  const programs = [
    {
      title: "Investment Analyst",
      description:
        "Elite program combining rigorous education with hands-on startup evaluation and investment thesis development.",
      features: [
        "6-8 week intensive curriculum",
        "Expert-led workshops and teach-ins",
        "Internal investment competition",
        "Direct VC professional mentorship",
      ],
    },
    {
      title: "Venture Associate",
      description:
        "Exclusive access to networking events, speaker series, and career development opportunities in venture capital.",
      features: [
        "Private speaker events",
        "Founder roundtables",
        "VC firm networking",
        "Priority access to high-growth ventures",
      ],
    },
  ]

  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-white">Our Programs</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light tracking-wide">
            Comprehensive programs designed to provide real-world venture capital experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="h-full card-elegant bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-light tracking-wide text-white">{program.title}</CardTitle>
                <CardDescription className="text-lg font-light text-white/80">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center font-light text-white/90">
                      <div className="w-1.5 h-1.5 bg-white mr-3" style={{ borderRadius: "1px" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full button-elegant font-normal bg-white text-primary-800 hover:bg-white/90"
                >
                  <Link href="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
