import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TrainingPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Training Programs</h1>
        <p className="text-lg text-gray-600">
          Pakistan Air Defense Forces provide comprehensive training programs to develop highly skilled personnel
          capable of operating advanced air defense systems.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="relative w-full overflow-hidden rounded-lg h-80">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Air Defense Training"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <h2 className="text-2xl font-bold">Excellence Through Training</h2>
            <p className="mt-2">Developing the skills and expertise needed to protect Pakistan's airspace</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="basic" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Training</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Training</TabsTrigger>
          <TabsTrigger value="specialized">Specialized Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">Basic Air Defense Training</h3>
              <p className="mb-4 text-gray-600">
                The foundation of all air defense personnel training, covering fundamental principles, equipment
                operation, and tactical procedures.
              </p>
              <ul className="mb-6 space-y-2 list-disc list-inside text-gray-600">
                <li>Duration: 16 weeks</li>
                <li>Physical fitness and military discipline</li>
                <li>Basic radar operation and interpretation</li>
                <li>Air defense weapons familiarization</li>
                <li>Communication procedures</li>
                <li>Target identification and classification</li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
            </div>
            <div className="relative overflow-hidden rounded-lg h-80">
              <Image src="/placeholder.svg?height=400&width=600" alt="Basic Training" fill className="object-cover" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Advanced Training"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Advanced Air Defense Training</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive training for experienced personnel, focusing on complex air defense scenarios, advanced
                systems operation, and leadership.
              </p>
              <ul className="mb-6 space-y-2 list-disc list-inside text-gray-600">
                <li>Duration: 24 weeks</li>
                <li>Advanced radar systems operation</li>
                <li>Surface-to-air missile systems</li>
                <li>Integrated air defense operations</li>
                <li>Electronic warfare and countermeasures</li>
                <li>Tactical decision making</li>
                <li>Command and control procedures</li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="specialized" className="mt-6">
          <div className="grid gap-6">
            <h3 className="mb-4 text-xl font-bold">Specialized Training Courses</h3>
            <p className="mb-6 text-gray-600">
              Focused training programs designed to develop expertise in specific air defense systems and operational
              roles.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Radar Specialist Course",
                  description: "In-depth training on radar systems operation, maintenance, and troubleshooting.",
                  duration: "12 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "SAM System Operator Course",
                  description: "Specialized training for surface-to-air missile system operators.",
                  duration: "16 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Air Defense Command Course",
                  description: "Leadership and command training for air defense unit commanders.",
                  duration: "20 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Electronic Warfare Course",
                  description: "Training in electronic countermeasures and counter-countermeasures.",
                  duration: "14 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Air Battle Management Course",
                  description: "Advanced training in coordinating air defense assets during complex scenarios.",
                  duration: "18 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Technical Maintenance Course",
                  description: "Comprehensive training in maintaining and repairing air defense equipment.",
                  duration: "24 weeks",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((course, index) => (
                <Card key={index}>
                  <div className="relative w-full h-48">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>Duration: {course.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl p-6 mx-auto mt-16 text-center bg-green-800 text-white rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">Join Pakistan Air Defense Forces</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We are looking for dedicated individuals to join our team in protecting Pakistan's airspace. If you are
          committed to excellence and serving your nation, consider a career with Pakistan Air Defense Forces.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-white text-green-800 hover:bg-gray-100">
            <Link href="/contact">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="#">Recruitment Criteria</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="mb-6 text-2xl font-bold text-center">Training Facilities</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Air Defense Academy, Karachi",
              description:
                "Primary training facility for all air defense personnel, featuring state-of-the-art simulators and training ranges.",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Technical Training Center, Islamabad",
              description:
                "Specialized facility for technical training on radar systems, missile systems, and electronic equipment.",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Command and Control School, Lahore",
              description:
                "Advanced training facility for air defense command and control procedures and leadership development.",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Simulation Center, Rawalpindi",
              description:
                "Modern simulation facility providing realistic training scenarios for air defense operations.",
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((facility, index) => (
            <div key={index} className="overflow-hidden border rounded-lg shadow-sm">
              <div className="relative h-48">
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
