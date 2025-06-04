import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-arches.jpg" alt="Duke University Campus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary-900/50" />
      </div>

      <div className="relative z-10 container text-center text-white">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/images/dvg-logo-transparent.png"
              alt="DVG Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-wider leading-tight">DUKE VENTURE GROUP</h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          Duke's premier student-run venture capital organization
        </p>
      </div>
    </section>
  )
}
