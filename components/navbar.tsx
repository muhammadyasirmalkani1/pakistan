"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Defense Forces",
    href: "#",
    dropdown: [
      { name: "Air Defense", href: "/" },
      { name: "Army", href: "/army" },
      { name: "Navy", href: "/navy" },
      { name: "Air Force", href: "/air-force" },
    ],
  },
  { name: "Joint Operations", href: "/joint-operations" },
  { name: "Installations", href: "/installations" },
  { name: "Equipment", href: "/equipment" },
  { name: "History", href: "/history" },
  { name: "Training", href: "/training" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Pakistan Defense Forces Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden text-lg font-bold text-green-800 sm:inline-block">Pakistan Defense Forces</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {link.dropdown.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.name} asChild>
                      <Link href={dropdownItem.href} className="flex w-full cursor-pointer">
                        {dropdownItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                {link.name}
              </Link>
            ),
          )}
          <Button className="bg-green-600 hover:bg-green-700">Emergency Contact</Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-4 pt-20">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="py-2">
                <p className="py-2 text-lg font-medium text-gray-900">{link.name}</p>
                <div className="pl-4 border-l border-gray-200">
                  {link.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block py-2 text-base text-gray-700 hover:text-green-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 text-lg font-medium text-gray-700 border-b border-gray-100 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ),
          )}
          <Button className="mt-6 bg-green-600 hover:bg-green-700">Emergency Contact</Button>
        </div>
      </div>
    </header>
  )
}
