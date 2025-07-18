import Image from "next/image"

export function Partners() {
  const partners = [
    {
      name: "Duke Innovation & Entrepreneurship",
      logo: "/images/partners/duke-innovation.jpg",
    },
    {
      name: "Duke Capital Partners",
      logo: "/images/partners/duke-cap-partners.jpg",
    },
    {
      name: "Plymouth Growth",
      logo: "/images/partners/plymouth-growth.jpg",
    },
    {
      name: "Techstars",
      logo: "/images/partners/techstars.png",
    },
    {
      name: "Red Bike Capital",
      logo: "/images/partners/red-bike-capital.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-primary-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-primary-900 dark:text-white">
            Our Partners
          </h2>
          <p className="text-xl text-primary-700 dark:text-white/90 font-light tracking-wide">
            Collaborating with leading organizations in venture capital and entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
