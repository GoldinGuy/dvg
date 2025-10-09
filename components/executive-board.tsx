import Image from "next/image"

interface BoardMember {
  name: string
  title: string
  image: string
  imagePosition?: string // e.g., "center 30%"
}

export function ExecutiveBoard() {
  const boardMembers: BoardMember[] = [
    {
      name: "Nate Goldin",
      title: "Founder & President",
      image: "/images/members/nathan-goldin.jpg",
      imagePosition: "center 35%"
    },
    {
      name: "Diego Keller",
      title: "Co-Founder & Executive Vice President",
      image: "/images/members/diego-keller.jpg",
      imagePosition: "center 45%"
    },
    {
      name: "Sam Elkin",
      title: "Co-Founder & Executive Vice President",
      image: "/images/members/sam-elkin.png",
      imagePosition: "center 50%"
    },
    {
      name: "Terrence Ware",
      title: "Co-Founder & Vice President of Finance",
      image: "/images/members/terrence-ware.jpg",
    },
    {
      name: "Sami Moudarres",
      title: "Vice President of Administration",
      image: "/images/members/sami-moudarres.jpg",
    },
    {
      name: "Akshara Krishna",
      title: "Vice President of Professional",
      image: "/images/members/akshara-krishna.jpg",
      imagePosition: "center 63%",
    },
    {
      name: "Alexa Jacob",
      title: "Vice President of Membership",
      image: "/images/members/alexa-jacob.jpg",
      imagePosition: "center 40%",
    },
    {
      name: "Natalie Miner",
      title: "Vice President of Education",
      image: "/images/members/natalie-miner.jpg",
      imagePosition: "center 40%",
    },
    {
      name: "Tommy Brennan",
      title: "Vice President of Education",
      image: "/images/members/tommy-brennan.jpg",
    },
    {
      name: "Lauren Hollar",
      title: "Vice President of Recruitment",
      image: "/images/members/lauren-hollar.jpg",
      imagePosition: "center 56%",
    },
    {
      name: "Vanessa Dare",
      title: "Vice President of Recruitment",
      image: "/images/members/vanessa-dare.jpg",
    },
    {
      name: "Evan Merzon",
      title: "Vice President of Tech",
      image: "/images/members/evan-merzon.jpg",
    },
    {
      name: "Chase Baxter",
      title: "Vice President of Tech",
      image: "/images/members/chase-baxter.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-left">
              <div className="mb-6">
                <div className="relative w-full max-w-[400px] h-[520px] mx-auto overflow-hidden shadow-sm">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={index < 6}
                    style={{
                      objectPosition: member.imagePosition ?? "center",
                    }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-normal mb-2 tracking-wide text-primary-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-light text-primary-600 dark:text-primary-400 mb-4 tracking-wide">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
