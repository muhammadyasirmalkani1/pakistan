import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Globe, Shield, Truck } from "lucide-react"

export default function NavyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pakistan Navy</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Guardians of Pakistan's maritime frontiers and defenders of our sea lanes
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/navy/fleet">View Fleet</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/recruitment">Join Pakistan Navy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pakistan's Maritime Defense Force</h2>
            <p className="text-lg text-gray-600">
              The Pakistan Navy is responsible for defending maritime borders, protecting Pakistan's shipping and
              maritime interests, and maintaining freedom of navigation in the Arabian Sea and Indian Ocean.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Maritime Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Protecting Pakistan's territorial waters and exclusive economic zone from external threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Anchor className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Naval Operations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Conducting naval operations to ensure freedom of navigation and protect maritime interests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>International Cooperation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Participating in multinational naval exercises and counter-piracy operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Humanitarian Assistance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Providing disaster relief and humanitarian assistance in coastal and international areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Leadership</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Chief of Naval Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Admiral Muhammad Amjad Khan Niazi</h3>
              <p className="text-gray-600">Chief of Naval Staff</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Vice Chief of Naval Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Vice Admiral</h3>
              <p className="text-gray-600">Vice Chief of Naval Staff</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Commander Pakistan Fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Vice Admiral</h3>
              <p className="text-gray-600">Commander Pakistan Fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Naval Fleet</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Surface Fleet" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Surface Fleet</h3>
              <p className="text-gray-600">
                The Pakistan Navy's surface fleet includes frigates, destroyers, corvettes, and patrol vessels equipped
                with advanced weapons systems and sensors for maritime security operations and sea control.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/installations?branch=navy">View Naval Bases</Link>
              </Button>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Submarine Fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Submarine Fleet</h3>
              <p className="text-gray-600">
                The submarine fleet provides strategic deterrence and sea denial capabilities with conventional
                submarines equipped with torpedoes and cruise missiles, operating covertly in Pakistan's maritime
                domain.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Naval Aviation" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Naval Aviation</h3>
              <p className="text-gray-600">
                Naval aviation assets include maritime patrol aircraft, helicopters, and unmanned aerial vehicles for
                reconnaissance, anti-submarine warfare, and search and rescue operations.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Marines" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Pakistan Marines</h3>
              <p className="text-gray-600">
                The Pakistan Marines are responsible for amphibious warfare, coastal defense, and special operations,
                trained to operate in diverse environments from sea to land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Historical Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-blue-600">
              {[
                {
                  year: "1947",
                  title: "Establishment",
                  description:
                    "The Pakistan Navy was established following the independence of Pakistan from British rule.",
                },
                {
                  year: "1965",
                  title: "Indo-Pakistani War",
                  description:
                    "The Navy conducted Operation Dwarka, a naval attack on the Indian coastal town of Dwarka.",
                },
                {
                  year: "1971",
                  title: "Indo-Pakistani War",
                  description: "The Navy defended Pakistan's maritime borders during the 1971 conflict.",
                },
                {
                  year: "1990s",
                  title: "Modernization",
                  description:
                    "Acquisition of new frigates, submarines, and maritime patrol aircraft to enhance capabilities.",
                },
                {
                  year: "2004-Present",
                  title: "Counter-Piracy Operations",
                  description:
                    "Participation in multinational counter-piracy operations in the Gulf of Aden and off the Somali coast.",
                },
                {
                  year: "Present",
                  title: "Fleet Expansion",
                  description:
                    "Ongoing fleet expansion and modernization with the acquisition of new vessels and technologies.",
                },
              ].map((item, index) => (
                <div key={index} className="relative mb-10 ml-6">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[34px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <p className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-blue-600 rounded-full sm:mb-0">
                      {item.year}
                    </p>
                    <h3 className="text-lg font-bold sm:ml-3">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Naval Bases */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Major Naval Bases</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "PNS Jinnah (Karachi)",
                description: "The largest naval base and headquarters of the Pakistan Navy, located in Karachi.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PNS Qasim (Karachi)",
                description: "Naval air station and base for the Pakistan Marines and Special Service Group (Navy).",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PNS Mehran (Karachi)",
                description: "Main naval air station that houses the Naval Aviation wing.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PNS Akram (Gwadar)",
                description:
                  "Strategic naval base at Gwadar Port, providing access to the Arabian Sea and Indian Ocean.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PNS Siddiq (Turbat)",
                description: "Naval base in Balochistan province supporting operations in the region.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PNS Iqbal (Karachi)",
                description: "Training establishment for naval personnel.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((base, index) => (
              <Card key={index}>
                <div className="relative w-full h-48">
                  <Image
                    src={base.image || "/placeholder.svg"}
                    alt={base.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{base.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{base.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white bg-blue-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Serve at Sea with Honor</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join the Pakistan Navy and be part of a prestigious force that safeguards our maritime frontiers and
            protects our national interests at sea.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/installations?branch=navy">Explore Naval Bases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
