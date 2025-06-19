import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, Target, Award } from "lucide-react"

export default function JointOperationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Joint Operations</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Coordinated efforts between Pakistan's Army, Navy, and Air Force for comprehensive national defense
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="#joint-exercises">View Joint Exercises</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/installations?branch=joint">Joint Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Tri-Service Integration</h2>
            <p className="text-lg text-gray-600">
              Pakistan's defense forces operate under a joint command structure that enables seamless coordination
              between the Army, Navy, and Air Force for comprehensive national security.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-green-200">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Joint Command Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  The Joint Chiefs of Staff Committee coordinates strategic planning and operational activities across
                  all three services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Integrated Operations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Combined military operations leverage the unique capabilities of each service for maximum
                  effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Shared Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Intelligence gathering and analysis is coordinated across all services to provide comprehensive
                  situational awareness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Joint Operations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Types of Joint Operations</h2>

          <Tabs defaultValue="combat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="combat">Combat Operations</TabsTrigger>
              <TabsTrigger value="counter">Counter-Terrorism</TabsTrigger>
              <TabsTrigger value="humanitarian">Humanitarian Assistance</TabsTrigger>
            </TabsList>

            <TabsContent value="combat" className="p-6 border rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Combat Operations</h3>
                  <p className="mb-4 text-gray-600">
                    Joint combat operations involve coordinated efforts between the Army, Navy, and Air Force to achieve
                    military objectives. These operations leverage the unique capabilities of each service branch to
                    create a comprehensive and effective military response.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-green-100 rounded-full">
                        <Shield className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Coordinated air-land battle operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-green-100 rounded-full">
                        <Shield className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Maritime strike capabilities with air support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-green-100 rounded-full">
                        <Shield className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Integrated air defense systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-green-100 rounded-full">
                        <Shield className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Combined special forces operations</span>
                    </li>
                  </ul>
                </div>
                <div className="relative min-h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/img/Combat-Operations.jpg?height=400&width=600"
                    alt="Joint Combat Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="counter" className="p-6 border rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Counter-Terrorism Operations</h3>
                  <p className="mb-4 text-gray-600">
                    Pakistan's armed forces conduct joint counter-terrorism operations to combat extremist threats.
                    These operations combine intelligence gathering, precision strikes, and ground operations to
                    neutralize threats to national security.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-blue-100 rounded-full">
                        <Target className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Intelligence-led operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-blue-100 rounded-full">
                        <Target className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Precision air strikes with ground follow-up</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-blue-100 rounded-full">
                        <Target className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Border security operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-blue-100 rounded-full">
                        <Target className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Urban counter-terrorism tactics</span>
                    </li>
                  </ul>
                </div>
                <div className="relative min-h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/img/Counter-Terrorism.jpg?height=400&width=600"
                    alt="Counter-Terrorism Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="humanitarian" className="p-6 border rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Humanitarian Assistance</h3>
                  <p className="mb-4 text-gray-600">
                    The Pakistan Armed Forces regularly conduct joint humanitarian operations in response to natural
                    disasters and other emergencies. These operations leverage military logistics capabilities to
                    provide rapid and effective assistance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-indigo-100 rounded-full">
                        <Users className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span>Flood relief and evacuation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-indigo-100 rounded-full">
                        <Users className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span>Earthquake response and recovery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-indigo-100 rounded-full">
                        <Users className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span>Medical assistance and field hospitals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-indigo-100 rounded-full">
                        <Users className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span>Infrastructure repair and reconstruction</span>
                    </li>
                  </ul>
                </div>
                <div className="relative min-h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/img/Humanitarian-Assistance.jpg?height=400&width=600"
                    alt="Humanitarian Assistance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Joint Military Exercises */}
      <section id="joint-exercises" className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Joint Military Exercises</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Exercise-Azm-e-Nau.jpeg?height=300&width=500"
                  alt="Exercise Azm-e-Nau"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise Azm-e-Nau</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  A large-scale joint military exercise focusing on validating war fighting concepts under a joint
                  military environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800">Army</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Navy</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Exercise-Sea-Spark.webp?height=300&width=500"
                  alt="Exercise Sea Spark"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise Sea Spark</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  A naval exercise with air force participation focusing on maritime security operations and naval
                  warfare tactics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Navy</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Exercise-High-Mark.webp?height=300&width=500"
                  alt="Exercise High Mark"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise High Mark</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  An air force-led exercise with army and navy components focusing on air power projection and defense.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800">Army</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Navy</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Raad-ul-Barq.jpg?height=300&width=500"
                  alt="Exercise Raad-ul-Barq"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise Raad-ul-Barq</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  A joint exercise focusing on counter-terrorism operations and rapid response capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800">Army</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Shamsheer-e-Bahr.jpeg?height=300&width=500"
                  alt="Exercise Shamsheer-e-Bahr"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise Shamsheer-e-Bahr</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  A maritime security exercise focusing on protecting sea lanes and coastal defense.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800">Army</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Navy</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative w-full h-48">
                <Image
                  src="/img/Jura-ul-Bahr.jpeg?height=300&width=500"
                  alt="Exercise Jura-ul-Bahr"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Exercise Jura-ul-Bahr</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  An amphibious landing exercise involving naval and army forces with air support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800">Army</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Navy</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 rounded-full text-indigo-800">Air Force</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Joint Operations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Benefits of Inter-Service Coordination</h2>
              <p className="mb-6 text-lg text-gray-600">
                Joint operations between Pakistan's defense forces create synergies that enhance overall military
                effectiveness and national security.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Enhanced Operational Effectiveness</h3>
                  <p className="text-gray-600">
                    Coordinated planning and execution maximizes the impact of military operations by leveraging the
                    unique capabilities of each service.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Resource Optimization</h3>
                  <p className="text-gray-600">
                    Shared resources and logistics reduce duplication of effort and enhance cost-effectiveness across
                    the armed forces.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Comprehensive Security Coverage</h3>
                  <p className="text-gray-600">
                    Integrated operations ensure no gaps in national defense, with seamless coverage across land, sea,
                    and air domains.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Rapid Response Capability</h3>
                  <p className="text-gray-600">
                    Joint command structures enable faster decision-making and deployment in response to emerging
                    threats and crises.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/img/Leaders.jpg?height=600&width=800"
                alt="Joint Military Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future of Joint Operations */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">The Future of Joint Operations</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-lg text-gray-600 text-center">
              Pakistan's defense forces are continuously evolving their joint operations capabilities to address
              emerging security challenges and leverage new technologies.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Advanced Command Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Implementation of integrated command, control, communications, computers, intelligence,
                    surveillance, and reconnaissance (C4ISR) systems to enhance joint operations capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Network-Centric Warfare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Development of network-centric warfare capabilities to enable real-time information sharing and
                    coordination across all service branches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-green-600" />
                    Joint Training Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enhanced joint training programs to develop interoperability and familiarity with multi-service
                    operations at all levels of command.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    International Cooperation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Increased participation in multinational exercises and operations to enhance interoperability with
                    allied forces and share best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white bg-gradient-to-r from-green-800 via-blue-800 to-indigo-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Strength Through Unity</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Pakistan's defense forces are stronger together, working in coordination to protect the nation's sovereignty
            and security interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/installations?branch=joint">View Joint Facilities</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
