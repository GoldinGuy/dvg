import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Briefcase, Users } from 'lucide-react';

export function Programs() {

  const programs = [
    {
      icon: BookOpen,
      title: 'Training',
      description: 'Investment analysts are immersed in an intensive 6-8 week curriculum covering the essentials of startups, venture capital, and entrepreneurship.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Projects',
      description: 'Each semester, we partner with leading VC firms across the nation to deliver due diligence reports, market research, investment insights, and more.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Users,
      title: 'Events',
      description: 'Throughout the year, we bring our community together through exciting events: fireside chats with inspiring speakers, lively club socials, and professional networking dinners.',
      gradient: 'from-emerald-600 to-teal-500'
    }
  ];
  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-white">Our Programs</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${program.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl text-white mb-4">{program.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{program.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
