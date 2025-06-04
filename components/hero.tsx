import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/placeholder.svg?height=800&width=1200" alt="Duke Campus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary-900/60" />
      </div>

      <div className="relative z-10 container text-center text-white">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s8QIgIYPbBvYrMapybbzsw3bS3D1V1.png"
            alt="DVG Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-wider leading-tight">
          DUKE'S PREMIER VENTURE CAPITAL ORGANIZATION
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          Offering a highly selective, hands-on experience for undergraduates to engage in the sourcing, evaluation, and
          strategic support of early-stage startups.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary-800 hover:bg-gray-100 button-elegant font-normal">
            <Link href="/recruitment">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary-800 button-elegant font-normal"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
