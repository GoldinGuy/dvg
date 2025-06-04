export function Stats() {
  const stats = [
    {
      number: "25",
      label: "New Members Per Cycle",
      description: "Highly selective admission process",
    },
    {
      number: "1-2",
      label: "Hours Per Week",
      description: "Manageable time commitment",
    },
    {
      number: "100%",
      label: "First-Year Students",
      description: "Exclusive to Duke freshmen",
    },
  ]

  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">DVG by the Numbers</h2>
          <p className="text-xl opacity-90 font-light tracking-wide">
            Building the next generation of venture capital leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-2 tracking-wide">{stat.number}</div>
              <div className="text-xl font-normal mb-2 tracking-wide">{stat.label}</div>
              <div className="opacity-80 font-light">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
