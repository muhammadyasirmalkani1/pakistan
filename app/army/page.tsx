import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Map, Award } from "lucide-react"

export default function ArmyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-green-900 to-green-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pakistan Army</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Defenders of the nation's territorial integrity and sovereignty on land
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/army/equipment">View Equipment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/recruitment">Join Pakistan Army</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pakistan's Ground Defense Force</h2>
            <p className="text-lg text-gray-600">
              The Pakistan Army stands as the land-based service branch of the Pakistan Armed Forces and has the
              responsibility to defend the nation against external aggression and threats.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>National Defense</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Protecting Pakistan's territorial integrity and sovereignty against external threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Humanitarian Assistance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Providing aid and support during natural disasters and humanitarian crises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Map className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Peacekeeping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Contributing to UN peacekeeping missions around the world to promote global stability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>National Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Supporting national development through infrastructure projects and technical expertise.
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
                  alt="Chief of Army Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">General Asim Munir</h3>
              <p className="text-gray-600">Chief of Army Staff</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Chairman Joint Chiefs of Staff Committee"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">General Sahir Shamshad Mirza</h3>
              <p className="text-gray-600">Chairman Joint Chiefs of Staff Committee</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Chief of General Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Lieutenant General</h3>
              <p className="text-gray-600">Chief of General Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Military Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Armored Division"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Armored Corps</h3>
              <p className="text-gray-600">
                The Pakistan Army's Armored Corps is equipped with modern main battle tanks and armored personnel
                carriers, providing the force with significant offensive and defensive capabilities on the battlefield.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/installations?branch=army">View Army Installations</Link>
              </Button>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Artillery Division"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Artillery</h3>
              <p className="text-gray-600">
                The Artillery Corps provides crucial fire support with a range of howitzers, rocket systems, and
                precision-guided munitions, enhancing the Army's ability to engage targets at various distances.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Infantry Division"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Infantry</h3>
              <p className="text-gray-600">
                The backbone of the Pakistan Army, the Infantry is trained for various combat scenarios, from
                conventional warfare to counter-insurgency operations, equipped with modern small arms and support
                weapons.
              </p>
            </div>

            <div>
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Special Forces" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Special Services Group (SSG)</h3>
              <p className="text-gray-600">
                The elite special forces unit of the Pakistan Army, the SSG is trained for specialized operations
                including counter-terrorism, direct action, special reconnaissance, and unconventional warfare.
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
            <div className="relative border-l border-green-600">
              {[
                {
                  year: "1947",
                  title: "Formation",
                  description: "The Pakistan Army was formed following the independence of Pakistan from British rule.",
                },
                {
                  year: "1965",
                  title: "Indo-Pakistani War",
                  description:
                    "The Pakistan Army defended the nation during the 1965 war with India, particularly in the Battle of Chawinda.",
                },
                {
                  year: "1971",
                  title: "Indo-Pakistani War",
                  description: "The Army fought in the eastern and western theaters during the 1971 war.",
                },
                {
                  year: "1999",
                  title: "Kargil Conflict",
                  description:
                    "Pakistan Army units were involved in the Kargil conflict in the northern border region.",
                },
                {
                  year: "2009-2014",
                  title: "Counter-Terrorism Operations",
                  description:
                    "The Army conducted major counter-terrorism operations including Operation Rah-e-Nijat and Operation Zarb-e-Azb.",
                },
                {
                  year: "Present",
                  title: "Modernization",
                  description:
                    "Ongoing modernization efforts to enhance capabilities and readiness for contemporary security challenges.",
                },
              ].map((item, index) => (
                <div key={index} className="relative mb-10 ml-6">
                  <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-[34px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <p className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-green-600 rounded-full sm:mb-0">
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

      {/* Call to Action */}
      <section className="py-16 text-white bg-green-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Serve Your Nation with Pride</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join the Pakistan Army and be part of a prestigious institution dedicated to protecting the nation's
            sovereignty and territorial integrity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/installations?branch=army">Explore Army Bases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
