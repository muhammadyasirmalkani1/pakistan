import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EquipmentPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Air Defense Equipment</h1>
        <p className="text-lg text-gray-600">
          Pakistan's air defense forces are equipped with state-of-the-art systems to protect the nation's airspace.
        </p>
      </div>

      <Tabs defaultValue="radar" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="radar">Radar Systems</TabsTrigger>
          <TabsTrigger value="missiles">Missile Systems</TabsTrigger>
          <TabsTrigger value="artillery">Anti-Aircraft Artillery</TabsTrigger>
          <TabsTrigger value="command">Command & Control</TabsTrigger>
        </TabsList>

        <TabsContent value="radar" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Long Range Surveillance Radar",
                description: "Advanced radar systems capable of detecting aerial threats at distances exceeding 300km.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Medium Range Tracking Radar",
                description:
                  "Precision tracking radars for guiding missile systems to their targets with high accuracy.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Low Altitude Detection Radar",
                description: "Specialized radar systems designed to detect low-flying aircraft and cruise missiles.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Mobile Radar Units",
                description:
                  "Rapidly deployable radar systems that can be positioned according to tactical requirements.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, index) => (
              <Card key={index}>
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="missiles" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Long-Range Surface-to-Air Missiles",
                description: "Capable of engaging targets at distances of up to 200km and altitudes exceeding 30km.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Medium-Range Air Defense Systems",
                description:
                  "Versatile systems effective against aircraft, helicopters, and cruise missiles at medium ranges.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Short-Range Air Defense Systems",
                description: "Highly mobile systems designed for point defense of critical installations.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Man-Portable Air Defense Systems",
                description: "Shoulder-launched missiles for infantry units to provide air defense capability.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, index) => (
              <Card key={index}>
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artillery" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Anti-Aircraft Guns",
                description: "Rapid-fire guns designed to engage low-flying aircraft and helicopters.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Self-Propelled Anti-Aircraft Systems",
                description: "Mobile gun systems mounted on armored vehicles for battlefield air defense.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Automated Anti-Aircraft Systems",
                description: "Computer-controlled gun systems with integrated radar for autonomous operation.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Multi-Barrel Anti-Aircraft Systems",
                description: "High rate of fire systems capable of creating dense defensive fire zones.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, index) => (
              <Card key={index}>
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="command" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Integrated Air Defense Command Centers",
                description: "Centralized facilities for coordinating all air defense assets across the country.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Mobile Command Posts",
                description: "Deployable command centers for tactical control of air defense operations.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Communication Systems",
                description: "Secure, redundant communication networks linking all air defense components.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Early Warning Systems",
                description: "Integrated networks for detecting, identifying, and tracking potential aerial threats.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, index) => (
              <Card key={index}>
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl p-6 mx-auto mt-16 bg-gray-50 rounded-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Technical Specifications</h2>
        <p className="mb-6 text-center text-gray-600">
          Detailed technical specifications of equipment are available for authorized personnel only.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="p-3 text-left">System Type</th>
                <th className="p-3 text-left">Range</th>
                <th className="p-3 text-left">Altitude Coverage</th>
                <th className="p-3 text-left">Deployment Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Long Range Radar</td>
                <td className="p-3">300+ km</td>
                <td className="p-3">Up to 30,000 m</td>
                <td className="p-3">30 minutes</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="p-3">Medium Range SAM</td>
                <td className="p-3">70-150 km</td>
                <td className="p-3">Up to 25,000 m</td>
                <td className="p-3">15 minutes</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Short Range SAM</td>
                <td className="p-3">10-30 km</td>
                <td className="p-3">Up to 10,000 m</td>
                <td className="p-3">5 minutes</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="p-3">Anti-Aircraft Artillery</td>
                <td className="p-3">5-10 km</td>
                <td className="p-3">Up to 5,000 m</td>
                <td className="p-3">2 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
