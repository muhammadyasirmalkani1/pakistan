"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveMap } from "@/components/interactive-map"
import { InstallationDetail } from "@/components/installation-detail"

export default function InstallationsPage() {
  const searchParams = useSearchParams()
  const branchParam = searchParams.get("branch")
  const [activeTab, setActiveTab] = useState<string>(branchParam || "all")
  const [selectedInstallation, setSelectedInstallation] = useState<Installation | null>(null)

  useEffect(() => {
    // Update active tab when URL parameter changes
    if (branchParam) {
      setActiveTab(branchParam)
    }
  }, [branchParam])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Military Installations</h1>
          <p className="max-w-2xl mt-6 text-xl">
            Explore Pakistan's military bases and installations across the country
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Interactive Map</h2>
            <p className="text-lg text-gray-600">
              Navigate the map to discover military installations of Pakistan's Army, Navy, and Air Force. Click on
              markers to view detailed information.
            </p>
          </div>

          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all" asChild>
                  <Link href="/installations">All Installations</Link>
                </TabsTrigger>
                <TabsTrigger value="army" asChild>
                  <Link href="/installations?branch=army">Army</Link>
                </TabsTrigger>
                <TabsTrigger value="navy" asChild>
                  <Link href="/installations?branch=navy">Navy</Link>
                </TabsTrigger>
                <TabsTrigger value="airforce" asChild>
                  <Link href="/installations?branch=airforce">Air Force</Link>
                </TabsTrigger>
                <TabsTrigger value="joint" asChild>
                  <Link href="/installations?branch=joint">Joint</Link>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-6">
              <div className="grid gap-8 lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <div className="h-[600px] rounded-lg overflow-hidden border shadow-sm">
                    <InteractiveMap onSelectInstallation={setSelectedInstallation} filterBranch={activeTab} />
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <InstallationsSidebar
                    selectedInstallation={selectedInstallation}
                    onSelectInstallation={setSelectedInstallation}
                    filterBranch={activeTab}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {selectedInstallation && (
            <div className="mt-8">
              <InstallationDetail installation={selectedInstallation} onClose={() => setSelectedInstallation(null)} />
            </div>
          )}

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>About Military Installations</CardTitle>
                <CardDescription>Understanding the map and installation types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Map Legend</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-6 h-6 mr-2 bg-green-600 rounded-full"></div>
                        <span>Army Installations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 mr-2 bg-blue-600 rounded-full"></div>
                        <span>Naval Bases</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 mr-2 bg-indigo-600 rounded-full"></div>
                        <span>Air Force Bases</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 mr-2 bg-purple-600 rounded-full"></div>
                        <span>Joint Facilities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Installation Types</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-green-600">HQ</Badge>
                        <span>Headquarters</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-amber-600">Training</Badge>
                        <span>Training Facilities</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-red-600">Strategic</Badge>
                        <span>Strategic Installations</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-sky-600">Support</Badge>
                        <span>Logistical Support Facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Strategic Distribution</h2>
            <p className="mb-6 text-lg text-gray-600">
              Pakistan's military installations are strategically positioned across the country to ensure comprehensive
              defense coverage and rapid response capabilities. The distribution of these installations takes into
              account geographical features, strategic importance, and potential threat vectors.
            </p>

            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Northern Command</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Military installations in the northern regions focus on high-altitude warfare capabilities and
                    border security, with specialized training facilities for mountain operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Central Command</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The central region hosts major command headquarters, training academies, and logistics hubs that
                    serve as the backbone of Pakistan's military infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Southern Command</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Southern installations include major naval bases, air defense systems, and joint operations centers
                    focused on maritime security and coastal defense.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="p-6 mt-8 bg-gray-50 rounded-lg">
              <h3 className="mb-4 text-xl font-bold">Note on Security</h3>
              <p className="text-gray-600">
                For security reasons, this map displays only publicly known military installations. The exact locations,
                capabilities, and details of many facilities are classified information. The information provided is for
                educational purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface InstallationsSidebarProps {
  selectedInstallation: Installation | null
  onSelectInstallation: (installation: Installation) => void
  filterBranch?: string
}

function InstallationsSidebar({
  selectedInstallation,
  onSelectInstallation,
  filterBranch = "all",
}: InstallationsSidebarProps) {
  const filteredInstallations = militaryInstallations.filter(
    (installation) => filterBranch === "all" || installation.branch === filterBranch,
  )

  return (
    <div className="h-[600px] overflow-y-auto border rounded-lg shadow-sm">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-semibold">
          {filterBranch === "all"
            ? "All Installations"
            : filterBranch === "army"
              ? "Army Installations"
              : filterBranch === "navy"
                ? "Naval Bases"
                : filterBranch === "airforce"
                  ? "Air Force Bases"
                  : "Joint Facilities"}
        </h3>
        <p className="text-sm text-gray-500">{filteredInstallations.length} locations</p>
      </div>
      <div className="divide-y">
        {filteredInstallations.map((installation) => (
          <div
            key={installation.id}
            className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedInstallation?.id === installation.id ? "bg-gray-100" : ""
            }`}
            onClick={() => onSelectInstallation(installation)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{installation.name}</h4>
                <p className="text-sm text-gray-500">{installation.location}</p>
              </div>
              <Badge
                className={
                  installation.branch === "army"
                    ? "bg-green-600"
                    : installation.branch === "navy"
                      ? "bg-blue-600"
                      : installation.branch === "airforce"
                        ? "bg-indigo-600"
                        : "bg-purple-600"
                }
              >
                {installation.branch === "army"
                  ? "Army"
                  : installation.branch === "navy"
                    ? "Navy"
                    : installation.branch === "airforce"
                      ? "Air Force"
                      : "Joint"}
              </Badge>
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-xs">
                {installation.type}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Types and data
export interface Installation {
  id: string
  name: string
  branch: "army" | "navy" | "airforce" | "joint"
  type: string
  location: string
  coordinates: [number, number]
  description: string
  established: string
  image: string
  facilities: string[]
}

// Sample data for military installations
export const militaryInstallations: Installation[] = [
  {
    id: "ghq-1",
    name: "GHQ Rawalpindi",
    branch: "army",
    type: "Headquarters",
    location: "Rawalpindi, Punjab",
    coordinates: [33.6007, 73.0679],
    description:
      "The General Headquarters (GHQ) is the military headquarters of the Pakistan Army located in Rawalpindi. It serves as the principal command and control center for all army operations and houses the office of the Chief of Army Staff.",
    established: "1947",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Command Center", "Administrative Offices", "Communications Hub", "Strategic Planning Division"],
  },
  {
    id: "pns-1",
    name: "PNS Jinnah",
    branch: "navy",
    type: "Naval Base",
    location: "Karachi, Sindh",
    coordinates: [24.8607, 67.0011],
    description:
      "PNS Jinnah is the headquarters of the Pakistan Navy, located in Karachi. It serves as the main naval base and operational center for the Pakistan Navy's fleet and maritime operations in the Arabian Sea.",
    established: "1947",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Naval Fleet Headquarters", "Dockyard", "Naval Training Center", "Maritime Operations Center"],
  },
  {
    id: "paf-1",
    name: "PAF Base Mushaf",
    branch: "airforce",
    type: "Air Base",
    location: "Sargodha, Punjab",
    coordinates: [32.0499, 72.6482],
    description:
      "PAF Base Mushaf (formerly PAF Base Sargodha) is a major fighter base of the Pakistan Air Force. It is home to multiple fighter squadrons and serves as a key installation for the defense of Pakistan's airspace.",
    established: "1951",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Fighter Squadrons", "Air Defense Systems", "Training Facilities", "Maintenance Hangars"],
  },
  {
    id: "joint-1",
    name: "Joint Staff Headquarters",
    branch: "joint",
    type: "Command Center",
    location: "Rawalpindi, Punjab",
    coordinates: [33.5651, 73.0169],
    description:
      "The Joint Staff Headquarters (JSHQ) is the principal military staff headquarters of the Pakistan Armed Forces. It coordinates joint military operations and serves as the secretariat of the Chairman Joint Chiefs of Staff Committee.",
    established: "1976",
    image: "/placeholder.svg?height=300&width=500",
    facilities: [
      "Joint Operations Center",
      "Strategic Plans Division",
      "Inter-Services Intelligence Liaison",
      "Joint Military Training Coordination",
    ],
  },
  {
    id: "army-2",
    name: "Pakistan Military Academy",
    branch: "army",
    type: "Training",
    location: "Kakul, Abbottabad",
    coordinates: [34.1668, 73.2545],
    description:
      "The Pakistan Military Academy (PMA) is the two-year federal service military academy of the Pakistan Army. It trains and educates cadets for commission into the army as officers.",
    established: "1947",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Training Grounds", "Academic Blocks", "Cadet Accommodation", "Sports Facilities"],
  },
  {
    id: "navy-2",
    name: "PNS Mehran",
    branch: "navy",
    type: "Naval Air Station",
    location: "Karachi, Sindh",
    coordinates: [24.8882, 67.1422],
    description:
      "PNS Mehran is a naval air station and the headquarters of the Pakistan Navy's Naval Air Arm. It houses various naval aviation squadrons and provides air support for naval operations.",
    established: "1975",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Helicopter Squadrons", "Maritime Patrol Aircraft", "Maintenance Facilities", "Training Center"],
  },
  {
    id: "airforce-2",
    name: "PAF Base Minhas",
    branch: "airforce",
    type: "Air Base",
    location: "Kamra, Punjab",
    coordinates: [33.8697, 72.4006],
    description:
      "PAF Base Minhas is a major air force base located in Kamra. It is home to the Pakistan Aeronautical Complex (PAC), which manufactures and overhauls aircraft and avionics equipment for the Pakistan Air Force.",
    established: "1975",
    image: "/placeholder.svg?height=300&width=500",
    facilities: [
      "Aircraft Manufacturing Plant",
      "Avionics Production",
      "Fighter Squadrons",
      "Research and Development Center",
    ],
  },
  {
    id: "army-3",
    name: "National Defense University",
    branch: "joint",
    type: "Education",
    location: "Islamabad",
    coordinates: [33.6844, 73.0479],
    description:
      "The National Defense University (NDU) is Pakistan's premier institution for higher education in national security and defense studies. It provides training to senior military officers and civil servants.",
    established: "1970",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Academic Blocks", "Research Centers", "Conference Facilities", "Library and Information Center"],
  },
  {
    id: "navy-3",
    name: "PNS Akram",
    branch: "navy",
    type: "Naval Base",
    location: "Gwadar, Balochistan",
    coordinates: [25.1216, 62.3254],
    description:
      "PNS Akram is a naval base located at the strategic port of Gwadar. It serves as a key installation for monitoring and securing Pakistan's maritime interests in the Arabian Sea and Indian Ocean.",
    established: "2016",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Naval Dockyard", "Maritime Surveillance", "Coastal Defense Systems", "Logistics Support"],
  },
  {
    id: "airforce-3",
    name: "PAF Base Masroor",
    branch: "airforce",
    type: "Air Base",
    location: "Karachi, Sindh",
    coordinates: [24.8918, 66.9387],
    description:
      "PAF Base Masroor is one of the oldest and largest air bases of the Pakistan Air Force. It houses fighter squadrons, transport aircraft, and serves as a key installation for the defense of Pakistan's southern airspace.",
    established: "1947",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Fighter Squadrons", "Transport Aircraft", "Radar Installations", "Air Defense Systems"],
  },
  {
    id: "army-4",
    name: "Army Strategic Forces Command HQ",
    branch: "army",
    type: "Strategic",
    location: "Rawalpindi, Punjab",
    coordinates: [33.592, 73.055],
    description:
      "The Army Strategic Forces Command (ASFC) is responsible for the operational control and administration of Pakistan's land-based strategic nuclear forces and missile systems.",
    established: "2000",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Command Center", "Strategic Planning", "Communications Hub", "Training Facilities"],
  },
  {
    id: "navy-4",
    name: "Naval Strategic Forces Command",
    branch: "navy",
    type: "Strategic",
    location: "Islamabad",
    coordinates: [33.7294, 73.0931],
    description:
      "The Naval Strategic Forces Command (NSFC) is responsible for the operational control and administration of Pakistan's naval-based strategic forces, including submarine-launched cruise missiles.",
    established: "2012",
    image: "/placeholder.svg?height=300&width=500",
    facilities: ["Command Center", "Strategic Planning", "Communications Hub", "Training Facilities"],
  },
]
