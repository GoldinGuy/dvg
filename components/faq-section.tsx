import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// added comment
export function FAQSection() {
  const recruitmentFAQs = [
    {
      question: "How many new members are accepted each semester?",
      answer:
        "We accept 25–30 highly motivated students per recruitment cycle. Admission is competitive and based on demonstrated interest, intellectual curiosity, and potential for contribution.",
    },
    {
      question: "What is the time commitment for DVG members?",
      answer:
        "Members can expect to commit 2-3 hours per week through workshops, meetings, startup diligence, and events. Time commitment may increase during high-engagement periods. Attendance is mandatory for all case competitions and speaker events.",
    },
    {
      question: "What distinguishes DVG from other entrepreneurship clubs?",
      answer:
        "DVG is the only undergraduate organization at Duke focused exclusively on the business side of entrepreneurship. With hands-on startup evaluation, structured VC education, and real connections to VC firms, DVG delivers an elite and immersive experience rarely available at the undergraduate level.",
    },
    {
      question: "Can I reapply if I don't get accepted the first time?",
      answer: "Absolutely. We strongly encourage interested students to reapply in the spring cycle.",
    },
    {
      question: "Do members receive mentorship?",
      answer:
        "Yes. Each new member (trainee) is paired with an upperclassman mentor. In addition, members benefit from direct engagement with VC professionals, founders, and Duke alumni in the startup ecosystem.",
    },
    {
      question: "How does the recruitment process work?",
      answer:
        "Recruitment spans two weeks and consists of two rounds. Round 1: Attend an information session and submit a written application. Round 2: Participate in a behavioral interview focused on your thought process, communication skills, and enthusiasm for venture capital.",
    },
    {
      question: "When does recruitment take place?",
      answer:
        "We recruit twice a year at the beginning of the fall and spring semesters. Follow @dukeventure on Instagram for updates.",
    },
    {
      question: "What is the interview like?",
      answer:
        "The interview will include behavioral questions to understand your background, motivations, and interpersonal skills. You will also be asked a logic or market-based question to assess your analytical thinking and problem-solving under ambiguity.",
    },
    {
      question: "Are there any eligibility requirements?",
      answer:
        "Yes. Recruitment is open only to first-year students at Duke. We welcome applicants from all majors and backgrounds—no prior experience in venture capital or entrepreneurship is required.",
    },
    {
      question: "Where can I learn more about DVG?",
      answer:
        "Visit our website at www.dukeventuregroup.com and follow us on Instagram (@dukeventure) for real-time updates. For any additional inquiries, feel free to reach out via our contact page or social channels.",
    },
  ]

  const educationFAQs = [
    {
      question: "How does Analyst Education work?",
      answer:
        "All newly admitted members begin as Analyst Trainees and participate in a rigorous 6–8 week education program co-developed with Duke Innovation & Entrepreneurship (I&E). This curriculum combines hands-on workshops, expert-led teach-ins, and case-based learning to build core competencies in: Startup sourcing and evaluation, Investment thesis construction, Market research and due diligence fundamentals, and Communication of insights and recommendations. The program culminates in an internal investment competition, where teams pitch their final theses to a panel of judges. The winning team earns the opportunity to represent Duke at the Venture Capital Investment Competition (VCIC), hosted nationally at UNC. Throughout the semester, trainees also engage in curated speaker series, simulations, and private events with founders, investors, and alumni in the venture ecosystem—gaining insights directly from professionals in the field.",
    },
  ]

  const stayingInvolvedFAQs = [
    {
      question: "What leadership opportunities exist within DVG?",
      answer:
        "After completing one semester as an investment analyst, members can apply to become executive members. Exective board members are responsible for directing all club programming and managing all partnerships.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        {/* Recruitment Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-primary-900 dark:text-white tracking-wide">
            Recruitment
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {recruitmentFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`recruitment-${index}`} className="card-elegant">
                <AccordionTrigger className="px-6 py-4 text-left font-normal tracking-wide hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-light tracking-wide leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Education & Training Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-primary-900 dark:text-white tracking-wide">
            Education & Training
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {educationFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`education-${index}`} className="card-elegant">
                <AccordionTrigger className="px-6 py-4 text-left font-normal tracking-wide hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-light tracking-wide leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Staying Involved Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-primary-900 dark:text-white tracking-wide">
            Staying Involved
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {stayingInvolvedFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`staying-${index}`} className="card-elegant">
                <AccordionTrigger className="px-6 py-4 text-left font-normal tracking-wide hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-light tracking-wide leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
