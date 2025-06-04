import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RecruitmentSection() {
  const allFAQs = [
    {
      question: "How many new members are accepted each semester?",
      answer:
        "We accept 20–25 highly motivated first-year students per recruitment cycle. Admission is competitive and based on demonstrated interest, intellectual curiosity, and potential for contribution.",
    },
    {
      question: "What is the time commitment for DVG members?",
      answer:
        "Members can expect to commit 1-2 hours per week through workshops, meetings, startup diligence, and events. Time commitment may increase during high-engagement periods. Attendance is mandatory for all case competitions and speaker events.",
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
        "We recruit once a year at the beginning of the fall semester. Follow @dukeventuregroup on Instagram for updates.",
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
        "Visit our website at www.dukeventuregroup.com and follow us on Instagram (@dukeventuregroup) for real-time updates. For any additional inquiries, feel free to reach out via our contact page or social channels.",
    },
    {
      question: "How does Analyst Education work?",
      answer:
        "All newly admitted members begin as Analyst Trainees and participate in a rigorous 6–8 week education program co-developed with Duke Innovation & Entrepreneurship (I&E). This curriculum combines hands-on workshops, expert-led teach-ins, and case-based learning to build core competencies in: Startup sourcing and evaluation, Investment thesis construction, Market research and due diligence fundamentals, and Communication of insights and recommendations. The program culminates in an internal investment competition, where teams pitch their final theses to a panel of judges. The winning team earns the opportunity to represent Duke at the Venture Capital Investment Competition (VCIC), hosted nationally at UNC. Throughout the semester, trainees also engage in curated speaker series, simulations, and private events with founders, investors, and alumni in the venture ecosystem—gaining insights directly from professionals in the field.",
    },
    {
      question: "What leadership opportunities exist within DVG?",
      answer:
        "After completing analyst education, members become DVG Fellows and are eligible for deeper involvement. Our leadership structure includes: President – Oversees all operations and external relations, Executive Vice Presidents – Support operations and strategic planning, Vice Presidents – Lead dedicated verticals including Education, Tech, Membership, Finance, and Recruitment. These roles offer Fellows the opportunity to shape the organization's direction, plan events, manage partner relations, and mentor new analysts.",
    },
    {
      question: "How do I apply to be a VP?",
      answer:
        "At the end of each academic year, returning Fellows may apply for Vice President roles. Applications are followed by a membership-wide election (excluding current trainees), and selected VPs serve a one-year term.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {allFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="card-elegant">
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
    </section>
  )
}
