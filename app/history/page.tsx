import Image from "next/image"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/timeline"

export default function HistoryPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">History of Pakistan's Air Defense</h1>
        <p className="text-lg text-gray-600">
          The evolution of Pakistan's air defense capabilities from independence to the present day.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg h-80">
          <Image
            src="/img/Pakistan-Air-Defense-1947.jpeg?height=500&width=1000"
            alt="Historical image of Pakistan Air Defense"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <h2 className="text-2xl font-bold">Defending the Nation Since 1947</h2>
            <p className="mt-2">From humble beginnings to a sophisticated multi-layered air defense network</p>
          </div>
        </div>

        <div className="mt-16">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-green-800" />
                <h3 className="text-xl font-bold">1947-1950: Foundation Years</h3>
              </TimelineHeader>
              <TimelineBody className="mt-2">
                <p className="text-gray-600">
                  Following independence, Pakistan began establishing its air defense capabilities with limited
                  resources. Initial focus was on creating basic infrastructure and training personnel.
                </p>
                <div className="relative w-full mt-4 overflow-hidden rounded-lg h-60">
                  <Image
                    src="/img/pakistan-1947-1950.jpg?height=300&width=600"
                    alt="Early years of Pakistan Air Defense"
                    fill
                    className="object-cover"
                  />
                </div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-green-800" />
                <h3 className="text-xl font-bold">1950s-1960s: Development Period</h3>
              </TimelineHeader>
              <TimelineBody className="mt-2">
                <p className="text-gray-600">
                  Pakistan acquired its first radar systems and anti-aircraft guns. The 1965 war highlighted the
                  importance of robust air defense, leading to accelerated development of capabilities.
                </p>
                <div className="relative w-full mt-4 overflow-hidden rounded-lg h-60">
                  <Image
                    src="/image/history.jpg?height=300&width=600"
                    alt="Development period of Pakistan Air Defense"
                    fill
                    className="object-cover"
                  />
                </div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-green-800" />
                <h3 className="text-xl font-bold">1970s-1980s: Modernization</h3>
              </TimelineHeader>
              <TimelineBody className="mt-2">
                <p className="text-gray-600">
                  Introduction of modern surface-to-air missile systems and advanced radar technology. Establishment of
                  a comprehensive air defense network covering key strategic locations.
                </p>
                <div className="relative w-full mt-4 overflow-hidden rounded-lg h-60">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Modernization of Pakistan Air Defense"
                    fill
                    className="object-cover"
                  />
                </div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-green-800" />
                <h3 className="text-xl font-bold">1990s-2000s: Integration Era</h3>
              </TimelineHeader>
              <TimelineBody className="mt-2">
                <p className="text-gray-600">
                  Integration of air defense assets under a unified command structure. Acquisition of advanced medium
                  and long-range surface-to-air missile systems. Development of indigenous capabilities in collaboration
                  with strategic partners.
                </p>
                <div className="relative w-full mt-4 overflow-hidden rounded-lg h-60">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Integration era of Pakistan Air Defense"
                    fill
                    className="object-cover"
                  />
                </div>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="bg-green-800" />
                <h3 className="text-xl font-bold">2010-Present: Modern Air Defense Network</h3>
              </TimelineHeader>
              <TimelineBody className="mt-2">
                <p className="text-gray-600">
                  Development of a multi-layered, integrated air defense system incorporating the latest technologies.
                  Enhanced coordination between all branches of the armed forces for comprehensive air defense coverage.
                  Focus on indigenous production and continuous modernization of existing systems.
                </p>
                <div className="relative w-full mt-4 overflow-hidden rounded-lg h-60">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Modern Pakistan Air Defense Network"
                    fill
                    className="object-cover"
                  />
                </div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>

        <div className="p-6 mt-16 bg-gray-50 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold">Key Historical Milestones</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-700">
              <span className="font-semibold">1947:</span> Establishment of initial air defense units following
              independence
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">1965:</span> First major test of Pakistan's air defense systems during the
              1965 war
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">1971:</span> Reorganization of air defense assets following the 1971
              conflict
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">1980s:</span> Acquisition of modern surface-to-air missile systems
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">1990s:</span> Establishment of a centralized Air Defense Command
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">2000s:</span> Integration of all air defense assets under a unified
              command structure
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">2010s:</span> Development of indigenous air defense systems and
              technologies
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Present:</span> Continuous modernization and enhancement of capabilities
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
