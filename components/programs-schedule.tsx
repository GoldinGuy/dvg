import { Calendar, Clock, Users, Trophy } from "lucide-react"

export function ProgramsSchedule() {
  const scheduleItems = [
    { date: "8/26", event: "DVG Launch Event w/ @limmytalks", time: "7:30-9:00 PM" },
    { date: "9/2 & 9/3", event: "Information Sessions", time: "8:00 PM, 6:00PM" },
    { date: "9/4", event: "I&E Fest", time: "4:00–7:00 PM" },
    { date: "9/7", event: "Application Deadline", time: "11:59 PM" },
    { date: "9/10-9/12", event: "Interviews (invitation only)", time: "" },
    { date: "9/14", event: "General Body Meeting (Welcome New Analysts)", time: "3:00 PM" },
    { date: "9/19", event: "VC Foundations Workshop #1: How to get into VC", time: "" },
    { date: "10/2", event: "VC Foundations Workshop #2: Deal Sourcing & Accessing Founders", time: "6:30 PM" },
    { date: "10/16", event: "Speaker Series Event", time: "6:30 PM" },
    { date: "10/30", event: "VC Foundations Workshop #3: Building an Investment Thesis", time: "6:30 PM" },
    { date: "11/6", event: "VC Foundations Workshop #4: Company Due Diligence", time: "6:30 PM" },
    { date: "11/18", event: "Speaker Series Event", time: "6:30 PM" },
    { date: "11/20", event: "VC Foundations Workshop #5: Cap Tables & The Distribution Waterfall", time: "6:30 PM" },
    { date: "12/4", event: "Speaker Series (Case Studies)", time: "6:30 PM" },
    { date: "12/8", event: "VCIC Internal Competition", time: "6:30 PM" },
    { date: "12/12", event: "Venture Associate Initiation", time: "" },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-primary-900 dark:text-white">
            Fall 2025 Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light tracking-wide mb-8">
            Through our collaboration with Duke Innovation and Entrepreneurship, our semester will be filled with
            in-depth workshops, extensive startup diligence, and the chance to compete nationally in VCIC (Venture
            Capital Investment Competition).
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {scheduleItems.map((item, index) => (
              <div key={index} className="card-elegant p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-32 flex-shrink-0">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span className="font-normal text-primary-800 dark:text-white tracking-wide">{item.date}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-normal text-primary-800 dark:text-white tracking-wide mb-1">{item.event}</h3>
                  </div>

                  {item.time && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="font-light tracking-wide">{item.time}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-normal text-primary-800 dark:text-white tracking-wide mb-2">For Everyone</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Whether you're a founder, investor, or just curious about VC
                </p>
              </div>
              <div className="text-center">
                <Trophy className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-normal text-primary-800 dark:text-white tracking-wide mb-2">Skill Building</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Meaningful skills in sourcing, evaluating, and supporting startups
                </p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-normal text-primary-800 dark:text-white tracking-wide mb-2">Real Connections</h3>
                <p className="text-sm font-light text-muted-foreground">Direct access to real investors and founders</p>
              </div>
            </div>

            <p className="text-lg font-light text-muted-foreground tracking-wide">
              Each session is designed to help our members build meaningful skills in sourcing, evaluating, and
              supporting startups—while connecting directly with real investors and founders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
