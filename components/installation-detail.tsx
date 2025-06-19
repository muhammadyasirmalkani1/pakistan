"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, Calendar, List } from "lucide-react"
import type { Installation } from "@/app/installations/page"

interface InstallationDetailProps {
  installation: Installation
  onClose: () => void
}

export function InstallationDetail({ installation, onClose }: InstallationDetailProps) {
  const getBranchColor = (branch: string) => {
    switch (branch) {
      case "army":
        return "bg-green-600"
      case "navy":
        return "bg-blue-600"
      case "airforce":
        return "bg-indigo-600"
      case "joint":
        return "bg-purple-600"
      default:
        return "bg-gray-600"
    }
  }

  const getBranchLink = (branch: string) => {
    switch (branch) {
      case "army":
        return "/army"
      case "navy":
        return "/navy"
      case "airforce":
        return "/air-force"
      case "joint":
        return "/joint-operations"
      default:
        return "/"
    }
  }

  const getBranchName = (branch: string) => {
    switch (branch) {
      case "army":
        return "Army"
      case "navy":
        return "Navy"
      case "airforce":
        return "Air Force"
      case "joint":
        return "Joint Forces"
      default:
        return "Unknown"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-2xl">{installation.name}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge className={getBranchColor(installation.branch)}>{getBranchName(installation.branch)}</Badge>
            <Badge variant="outline">{installation.type}</Badge>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src={installation.image || "/placeholder.svg"}
              alt={installation.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-4">
              <h3 className="flex items-center mb-2 text-lg font-semibold">
                <MapPin className="w-4 h-4 mr-2" /> Location
              </h3>
              <p className="text-gray-600">{installation.location}</p>
              <div className="mt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${installation.coordinates[0]},${installation.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="flex items-center mb-2 text-lg font-semibold">
                <Calendar className="w-4 h-4 mr-2" /> Established
              </h3>
              <p className="text-gray-600">{installation.established}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-lg font-semibold">Description</h3>
          <p className="text-gray-600">{installation.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="flex items-center mb-2 text-lg font-semibold">
            <List className="w-4 h-4 mr-2" /> Facilities
          </h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {installation.facilities.map((facility, index) => (
              <li key={index} className="flex items-center">
                <div className={`w-2 h-2 mr-2 rounded-full ${getBranchColor(installation.branch)}`}></div>
                <span className="text-gray-600">{facility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-6">
          <Button asChild variant="outline">
            <Link href={getBranchLink(installation.branch)}>View {getBranchName(installation.branch)} Page</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
