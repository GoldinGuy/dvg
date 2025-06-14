import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/dvg-logo-transparent.png"
                  alt="DVG Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-light tracking-wide">Duke Venture Group</span>
            </div>
            <p className="text-gray-300 mb-4 font-light tracking-wide text-sm">
              Duke University's premier, student-run venture capital organization cultivating the next generation of VC
              leaders.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/dukeventure/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/duke-venture-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@dukeventuregroup.com" className="hover:text-gray-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-normal mb-4 tracking-wide text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-white text-sm">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-white text-sm">
                  Recruitment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal mb-4 tracking-wide text-sm">Contact</h3>
            <ul className="space-y-2 text-gray-300 font-light text-sm">
              <li>Duke University</li>
              <li>Durham, NC 27708</li>
              <li>contact@dukeventuregroup.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="font-light tracking-wide text-sm">&copy; 2025 Duke Venture Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
