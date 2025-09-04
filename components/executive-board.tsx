import Image from "next/image"

interface BoardMember {
  name: string
  title: string
  bio: string
  image: string
  imagePosition?: string // e.g., "center 30%"
}

export function ExecutiveBoard() {
  const boardMembers: BoardMember[] = [
    {
      name: "Nate Goldin",
      title: "Founder & President",
      bio: "Nate Goldin is a sophomore from Palm Beach Gardens, FL, majoring in Public Policy with a minor in Music and certificate in Markets and Management. Nate has spent his summers working in Venture Capital and Private Wealth Management, and also has experience as an economic research analyst. Outside of DVG, he is involved in Bass Connections, the Fed Challenge Club, and the Duke Symphony Orchestra. In his free time, Nate enjoys playing golf and watching Miami sports.",
      image: "/images/members/nathan-goldin.jpg",
      imagePosition: "center 35%"
    },
    {
      name: "Diego Keller",
      title: "Co-Founder & Executive Vice President",
      bio: "Diego Keller is a sophomore from Charlotte, NC, pursuing a double major in Economics (with a Finance concentration) and Public Policy, along with a certificate in Markets and Management. He has interned in private equity at Falfurrias Capital and Kian Capital, and in venture capital at Red Bike Capital. Outside of DVG, Diego is a Consultant Analyst for the Duke Impact Investing Group, a Film Analyst for Duke Football, and a member of Duke SHAPE. In his free time, Diego enjoys playing football and grilling with friends.",
      image: "/images/members/diego-keller.jpg",
      imagePosition: "center 45%"
    },
    {
      name: "Sam Elkin",
      title: "Co-Founder & Executive Vice President",
      bio: "Sam Elkin is a sophomore from Princeton, New Jersey, double-majoring in Mathematics and Economics (finance concentration). Sam has a strong interest in working with entrepreneurs and founders, and has experience working as a Private Equity Analyst at Emerald Square Ventures, a search fund founded by two Wharton MBA graduates. Sam spent his last summer interning at Morgan Stanley in their Wealth Management division. In his free time, he enjoys playing lacrosse, DJing, and watching the Green Bay Packers.",
      image: "/images/members/sam-elkin.png",
      imagePosition: "center 50%"
    },
    {
      name: "Terrence Ware",
      title: "Co-Founder & Vice President of Finance",
      bio: "Terrence Ware is a sophomore from Chicago, Illinois, majoring in International Comparative Studies and Italian, with a minor in Economics. He brings a strong interest in entrepreneurship, early-stage investing, and ethical finance. Terrence spent his last two summers interning at venture firms Cleveland Avenue and Sage Collective. Prior to Duke, he built several ventures including AI-driven ecommerce tools for sales and education, and CPG brands for social media influencers. Outside of DVG, he serves on Duke Student Government, via the Student Organization Finance Committee, and is also a part of Scholars of Finance. In his free time, Terrence enjoys lifting, learning languages, and watching basketball.",
      image: "/images/members/terrence-ware.jpg",
    },
    {
      name: "Sami Moudarres",
      title: "Vice President of Administration",
      bio: "Sami Moudarres is a sophomore from Fairfax, VA, majoring in Economics with a Finance concentration. He is a Project Manager in the Duke Impact Investing Group, where he leads outreach efforts and client engagement initiatives to support the group's strategic growth. Sami also serves as Vice Chair of Analytics and Policy for the Student Organization Finance Committee (SOFC), helping to manage and allocate a $1 million budget across Duke's undergraduate organizations. With a strong interest in consulting, he has gained experience through case competitions, student leadership, and start-up work. In his free time, Sami enjoys playing tennis and watching a good thriller or comedy movie.",
      image: "/images/members/sami-moudarres.jpg",
    },
    {
      name: "Akshara Krishna",
      title: "Vice President of Professional",
      bio: "Akshara Krishna is a sophomore from Waxhaw, NC double majoring in Economics and Neuroscience. She's the founder of Elev8, a learning platform helping high school students overcome perfectionism through failure-forward education. Prior to this, she built soft skill and STEAM programs reaching over 43,000 students, advised early-stage startups on growth strategy, and launched an afterschool music initiative to expand access to the arts. Her latest initiative, The Ambition Project, explores what drives young people to take bold action. Outside her work, Akshara is a choreographer, violinist, and pianist who believes creativity is central to leadership.",
      image: "/images/members/akshara-krishna.jpg",
      imagePosition: "center 63%",
    },
    {
      name: "Alexa Jacob",
      title: "Vice President of Membership",
      bio: "Alexa Jacob is a sophomore from Short Hills, NJ, majoring in Risk, Data, and Financial Engineering with a minor in Economics. Alexa has spent the past few summers working for a real estate firm. She is currently working as a research assistant for the Duke department of Economics on modeling the downside risk in the stock market. Outside of DVG, Alexa is a member of the Society of Women Engineers and the Duke Real Estate Club, and works as a tour guide for Duke Admissions. In her free time, Alexa enjoys traveling, baking, and watching sports.",
      image: "/images/members/alexa-jacob.jpg",
      imagePosition: "center 40%",
    },
    {
      name: "Natalie Miner",
      title: "Vice President of Education",
      bio: "Natalie Miner is a Sophomore from Minnetrista, MN, double-majoring in Mathematics and Economics. Natalie has a strong interest in Entrepreneurship and analytical problem-solving. Outside of DVG, Natalie is a Dzialga Women in Finance Scholar, serves as Publicity Chair for First Generation Investors, serves on the Spring Business Conference Committee of BOW, and is a member of the Duke Association for Women in Mathematics. This past summer, Natalie worked on a Data+ research project at Duke called Ethical Consumption Before Capitalism.",
      image: "/images/members/natalie-miner.jpg",
      imagePosition: "center 40%",
    },
    {
      name: "Tommy Brennan",
      title: "Vice President of Education",
      bio: "Tommy Brennan is a Sophomore from Cleveland, OH, double-majoring in Economics and Sociology. Tommy has a strong interest in investing and strategy-consulting. Outside of DVG, Tommy is a member of the Duke Consulting Club and the Scale and Coin Business Society. Tommy is currently working as a research assistant at the Duke Fuqua School of Business, investigating the historic use of private debt and the growth of small businesses. This past summer, Tommy worked as a private equity intern for Northern Purchase, a single-acquisition, lower middle market firm.",
      image: "/images/members/tommy-brennan.jpg",
    },
    {
      name: "Lauren Hollar",
      title: "Vice President of Recruitment",
      bio: "Lauren Hollar is a sophomore from Charlotte, NC, majoring in Economics with a minor in chemistry and certificate in Markets and Management. Over the past several summers, Lauren has launched and enhanced her nonprofit organization, gained insight into financial policy through a shadowing experience at the U.S. House of Representatives, and deepened her understanding of real estate investment by observing industry professionals. Outside of DVG, Lauren works as a tour guide for Duke Admissions and serves as an ambassador for Duke Global Education. In her free time, Lauren enjoys playing golf, traveling, and spending time with family.",
      image: "/images/members/lauren-hollar.jpg",
      imagePosition: "center 56%",
    },
    {
      name: "Vanessa Dare",
      title: "Vice President of Recruitment",
      bio: "Vanessa Dare is a sophomore from London, England, majoring in Computer Science and French. More broadly, she is interested in Data Science, languages, and tech policy. On campus, she is involved in Delta Sigma Pi and Catalyst, in addition to serving as a Duke Presidential Ambassador. She also works as an administrative assistant in Duke Hospital and a babysitter with Duke's StudentsWhoSit. She is also an active member of Duke's Black Student Alliance. She spent this past summer in France for the Duke in Paris program. In her free time, she enjoys learning new languages and trying new hobbies - from roller skating and hiking to piano and videography.",
      image: "/images/members/vanessa-dare.jpg",
    },
    {
      name: "Evan Merzon",
      title: "Vice President of Tech",
      bio: "Evan Merzon is a sophomore from Scarsdale, New York, double majoring in Electrical and Computer Engineering and Computer Science. He has spent his past summers working as a software engineer at healthcare companies and hospitals. Most recently, he worked in quantitative asset management at MetLife Investment Management. In his free time, he enjoys playing basketball and watching the Patriots.",
      image: "/images/members/evan-merzon.jpg",
    },
    {
      name: "Chase Baxter",
      title: "Vice President of Tech",
      bio: "Chase Baxter is a sophomore from Jupiter, Florida, majoring in Civil Engineering. He has spent his past summers working as an engineering intern at Isiminger & Stubbs, and is currently working full-time at Simmons & White. In his free time, he enjoys playing spikeball and watching Chicago sports.",
      image: "/images/members/chase-baxter.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-primary-900 dark:text-white">
            Executive Board
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
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

              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
