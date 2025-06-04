import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s8QIgIYPbBvYrMapybbzsw3bS3D1V1.png"
                alt="DVG Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-light tracking-wide">Duke Venture Group</span>
            </div>
            <p className="text-gray-300 mb-4 font-light tracking-wide">
              Duke University's premier, student-run venture capital organization cultivating the next generation of VC
              leaders.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/dukeventuregroup" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@dukeventuregroup.com" className="hover:text-gray-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-normal mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white font-light tracking-wide">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-white">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-white">
                  Recruitment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-2 text-gray-300 font-light">
              <li>Duke University</li>
              <li>Durham, NC 27708</li>
              <li>contact@dukeventuregroup.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="font-light tracking-wide">&copy; 2024 Duke Venture Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
