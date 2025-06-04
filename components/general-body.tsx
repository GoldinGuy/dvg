export function GeneralBody() {
  const generalMembers = [
    "Alex Chen",
    "Sarah Johnson",
    "Michael Rodriguez",
    "Emily Wang",
    "David Thompson",
    "Jessica Liu",
    "Ryan O'Connor",
    "Priya Patel",
    "James Wilson",
    "Maria Garcia",
    "Kevin Park",
    "Rachel Green",
    "Andrew Kim",
    "Sophia Martinez",
    "Daniel Lee",
    "Hannah Brown",
    "Christopher Davis",
    "Olivia Taylor",
    "Matthew Anderson",
    "Isabella Moore",
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-primary-800 tracking-wide">General Body</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            Our talented analysts and fellows who drive DVG's day-to-day operations and contribute to our mission of
            excellence in venture capital education.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {generalMembers.map((member, index) => (
            <div key={index} className="card-elegant p-4 text-center">
              <p className="text-sm font-light tracking-wide text-primary-800">{member}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
