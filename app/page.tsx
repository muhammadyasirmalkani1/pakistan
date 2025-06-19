import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Anchor, Plane, Map, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pakistan Defense Forces</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Guardians of the nation's sovereignty, territorial integrity, and freedom
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/recruitment">Join the Forces</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Defense Forces Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Pakistan's Defense Forces</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative w-full h-48">
                <Image src="/img/Pak-Army.jpeg?height=300&width=500" alt="Pakistan Army" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Pakistan Army
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white-600">
                  The land-based service branch of the Pakistan Armed Forces, responsible for ground-based military
                  operations.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/army">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-48">
                <Image src="/img/Pak-Navy.jpeg?height=300&width=500" alt="Pakistan Navy" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Anchor className="w-5 h-5 mr-2 text-white-600" />
                  Pakistan Navy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  The naval warfare branch of the Pakistan Armed Forces, responsible for defending maritime borders and
                  interests.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/navy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/img/Pak-Air-Force.jpg?height=300&width=500"
                  alt="Pakistan Air Force"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-indigo-600" />
                  Pakistan Air Force
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  The aerial warfare branch of the Pakistan Armed Forces, responsible for defending Pakistan's airspace.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/air-force">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Joint Operations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Joint Operations</h2>
              <p className="mb-6 text-lg text-gray-600">
                Pakistan's defense forces work together in coordinated joint operations to ensure comprehensive national
                security. The tri-service collaboration enhances operational effectiveness and strategic capabilities.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-2 bg-green-100 rounded-full">
                    <Shield className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Integrated command and control structure</span>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-2 bg-green-100 rounded-full">
                    <Shield className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Combined military exercises and training</span>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-2 bg-green-100 rounded-full">
                    <Shield className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Coordinated counter-terrorism operations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-2 bg-green-100 rounded-full">
                    <Shield className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Shared intelligence and resources</span>
                </li>
              </ul>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/joint-operations">Explore Joint Operations</Link>
              </Button>
            </div>
            <div className="relative min-h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/img/pakistan-Joint-Operations.jpg?height=500&width=800"
                alt="Joint Military Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Military Installations Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative min-h-[300px] rounded-lg overflow-hidden md:order-1 order-2">
              <Image
                src="/img/Military-Installations.webp?height=500&width=800"
                alt="Military Installations Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2 order-1">
              <h2 className="mb-4 text-3xl font-bold">Military Installations</h2>
              <p className="mb-6 text-lg text-gray-600">
                Explore Pakistan's strategic military installations across the country. Our interactive map shows the
                locations of key Army bases, Naval stations, Air Force facilities, and joint command centers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                  <span>Army Installations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                  <span>Naval Bases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                  <span>Air Force Bases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                  <span>Joint Facilities</span>
                </div>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/installations">View Interactive Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Core Values</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Upholding the highest standards of moral and ethical conduct in all actions and decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Courage</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Demonstrating physical and moral bravery in the face of danger, adversity, and uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Map className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Loyalty</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Unwavering dedication to the nation, the armed forces, and fellow service members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Striving for the highest standards of performance and continuous improvement in all endeavors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white bg-gradient-to-r from-green-800 to-green-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Serve Your Nation with Pride</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join the Pakistan Defense Forces and be part of a prestigious institution dedicated to protecting the
            nation's sovereignty and territorial integrity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
