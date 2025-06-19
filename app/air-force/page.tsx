import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Shield, Target, Cloud } from "lucide-react"

export default function AirForcePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 to-indigo-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pakistan Air Force</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Guardians of Pakistan's skies, committed to excellence and aerial superiority
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/air-force/aircraft">View Aircraft</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/recruitment">Join Pakistan Air Force</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pakistan's Aerial Defense Force</h2>
            <p className="text-lg text-gray-600">
              The Pakistan Air Force (PAF) is responsible for defending Pakistan's airspace, providing aerial support to
              ground and naval forces, and projecting air power to protect national interests.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Air Defense</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Protecting Pakistan's airspace from unauthorized intrusion and hostile aircraft.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Air Superiority</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Maintaining control of the skies through advanced fighter aircraft and trained pilots.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Precision Strikes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Conducting precision air strikes against strategic targets when required for national defense.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Humanitarian Operations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Providing airlift capabilities for humanitarian assistance and disaster relief operations.
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
                  alt="Chief of Air Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Air Chief Marshal Zaheer Ahmed Baber Sidhu</h3>
              <p className="text-gray-600">Chief of Air Staff</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Deputy Chief of Air Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Air Marshal</h3>
              <p className="text-gray-600">Deputy Chief of Air Staff (Operations)</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Deputy Chief of Air Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Air Marshal</h3>
              <p className="text-gray-600">Deputy Chief of Air Staff (Administration)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Fleet */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Aircraft Fleet</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fighter Aircraft"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Fighter Aircraft</h3>
              <p className="text-gray-600">
                The PAF operates a diverse fleet of fighter aircraft including JF-17 Thunder, F-16 Fighting Falcon, and
                Mirage aircraft, providing air superiority and strike capabilities.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/installations?branch=airforce">View Air Force Bases</Link>
              </Button>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Transport Aircraft"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Transport Aircraft</h3>
              <p className="text-gray-600">
                The transport fleet includes C-130 Hercules, IL-78, and Y-12 aircraft, providing strategic and tactical
                airlift capabilities for troops, equipment, and humanitarian missions.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Training Aircraft"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Training Aircraft</h3>
              <p className="text-gray-600">
                The PAF utilizes K-8, T-37, and Super Mushshak aircraft for pilot training, ensuring a steady pipeline
                of skilled aviators for operational roles.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Special Mission Aircraft"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Special Mission Aircraft</h3>
              <p className="text-gray-600">
                Special mission aircraft include airborne early warning and control systems, electronic warfare
                platforms, and reconnaissance aircraft that enhance situational awareness and operational capabilities.
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
                  title: "Formation",
                  description: "The Royal Pakistan Air Force was established following independence from British rule.",
                },
                {
                  year: "1956",
                  title: "Name Change",
                  description: "The prefix 'Royal' was removed, and the force was renamed as Pakistan Air Force.",
                },
                {
                  year: "1965",
                  title: "Indo-Pakistani War",
                  description: "The PAF distinguished itself during the 1965 war, achieving notable aerial victories.",
                },
                {
                  year: "1971",
                  title: "Indo-Pakistani War",
                  description: "The PAF defended Pakistan's airspace during the 1971 conflict.",
                },
                {
                  year: "1980s-1990s",
                  title: "Modernization",
                  description:
                    "Acquisition of F-16 Fighting Falcons and other modern aircraft to enhance capabilities.",
                },
                {
                  year: "2007-Present",
                  title: "Indigenous Development",
                  description:
                    "Development and induction of the JF-17 Thunder, a multi-role combat aircraft jointly developed with China.",
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

      {/* Air Bases */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Major Air Bases</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "PAF Base Mushaf (Sargodha)",
                description:
                  "A major fighter base and headquarters of the Central Air Command, home to fighter squadrons.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PAF Base Masroor (Karachi)",
                description:
                  "A key base in Karachi housing fighter and maritime squadrons, part of the Southern Air Command.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PAF Base Minhas (Kamra)",
                description: "Home to the Pakistan Aeronautical Complex (PAC) and the Aircraft Manufacturing Factory.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PAF Base Nur Khan (Rawalpindi)",
                description:
                  "A major transport base near Islamabad, also serving as a joint civilian-military airport.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PAF Base Samungli (Quetta)",
                description: "An important base in Balochistan province supporting operations in the western region.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "PAF Base Peshawar",
                description: "A strategic base in Khyber Pakhtunkhwa province, part of the Northern Air Command.",
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
          <h2 className="mb-4 text-3xl font-bold">Reach for the Skies</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join the Pakistan Air Force and be part of an elite team that defends Pakistan's airspace and upholds the
            proud traditions of courage, integrity, and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/installations?branch=airforce">Explore Air Force Bases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
