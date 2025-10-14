import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RecruitmentSection() {
  const allFAQs = [
    {
      question: "What does DVG look for in an applicant?",
      answer: "DVG seeks applicants who are motivated, driven, and share a passion for startups and VC. Admission is competitive and based on demonstrated interest, intellectual curiosity, and potential for contribution. We want to know who you are, why you are interested in DVG, and what makes you a qualified candidate."
    },
    {
      question: "What distinguishes DVG from other entrepreneurship clubs?",
      answer:
        "DVG is the only undergraduate organization at Duke focused exclusively on the business side of entrepreneurship. With hands-on diligence work, structured VC education, and real exposure to startups, DVG delivers an elite and immersive experience rarely available at the undergraduate level.",
    },
    {
      question: "Can I reapply if I don't get accepted the first time?",
      answer: "Absolutely. We strongly encourage interested students to reapply in the next available cycle.",
    },
    {
      question: "Do members receive mentorship?",
      answer:
        "Yes. Each new investment analyst is paired with an upperclassman mentor. In addition, members benefit from direct engagement with VC professionals, founders, and Duke alumni in the startup ecosystem.",
    },
    {
      question: "How does the recruitment process work?",
      answer:
        "Recruitment spans two weeks and consists of two rounds. Round 1: Attend an information session and submit a written application. Round 2: Participate in a behavioral interview focused on your thought process, communication skills, and enthusiasm for venture capital.",
    },
    {
      question: "When does recruitment take place?",
      answer:
        "We recruit twice a year at the beginning of each semester. Follow @dukeventure on Instagram for updates.",
    },
    {
      question: "What is the interview like?",
      answer:
        "The interview will include behavioral questions to understand your background, motivations, and interpersonal skills. You will also be asked a logic or market-based question to assess your analytical thinking and problem-solving.",
    },
    {
      question: "Are there any eligibility requirements?",
      answer:
        "Yes. Recruitment is open only to first-year and second-year students at Duke. We welcome applicants from all majors and backgrounds—no prior experience in venture capital or entrepreneurship is required.",
    },
    {
      question: "What leadership opportunities exist within DVG?",
      answer:
        "After completing one semester as an investment analyst, members can apply to become project directors or executive members. PD’s are responsible for sourcing diligence projects, managing relationships with the partner firm, and overseeing analyst work. Executive roles include all VP positions and President.",
    },
    {
      question: "How do I apply to be a VP?",
      answer:
        "At the end of each academic year, returning Fellows may apply for Vice President roles. Applications are followed by a membership-wide election (excluding current trainees), and selected VPs serve a one-year term.",
    },
  ]

  return (
    <section className="py-10 bg-muted/30">
      <div className="container max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {allFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="card-elegant">
              <AccordionTrigger className="px-6 py-4 text-left font-normal tracking-wide hover:no-underline text-primary-900 dark:text-white">
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
