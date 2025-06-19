import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Pakistan Air Defense Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white">Pakistan Air Defense</span>
            </Link>
            <p className="text-gray-400">
              Protecting Pakistan's airspace with advanced technology and highly trained personnel.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-400 hover:text-white">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-400 hover:text-white">
                  History
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-400 hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Press Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>Pakistan Air Defense Headquarters</p>
              <p>Islamabad, Pakistan</p>
              <p className="mt-2">Phone: +92-XXX-XXXXXXX</p>
              <p>Email: info@pakairdefense.gov.pk</p>
            </address>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Pakistan Air Defense Forces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
