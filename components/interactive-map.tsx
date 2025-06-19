"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { type Installation, militaryInstallations } from "@/app/installations/page"
import { RefreshCw } from "lucide-react"

interface InteractiveMapProps {
  onSelectInstallation: (installation: Installation) => void
  filterBranch?: string
}

export function InteractiveMap({ onSelectInstallation, filterBranch = "all" }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])

  // Filter installations based on branch
  const filteredInstallations = militaryInstallations.filter(
    (installation) => filterBranch === "all" || installation.branch === filterBranch,
  )

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapLoaded) return

    // Mock implementation for the map
    const mockMap = {
      setView: (coords: [number, number], zoom: number) => {
        console.log("Setting map view to", coords, "with zoom", zoom)
      },
      remove: () => {
        console.log("Removing map")
      },
    }

    setMap(mockMap)
    setMapLoaded(true)

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [mapRef, mapLoaded, map])

  // Add markers to map
  useEffect(() => {
    if (!mapLoaded || !map) return

    // Clear existing markers
    markers.forEach((marker) => {
      if (marker.remove) {
        marker.remove()
      }
    })
    setMarkers([])

    // Add new markers
    const newMarkers = filteredInstallations.map((installation) => {
      // Mock marker implementation
      const marker = {
        installation,
        remove: () => {
          console.log("Removing marker for", installation.name)
        },
      }

      return marker
    })

    setMarkers(newMarkers)
  }, [mapLoaded, map, filteredInstallations, filterBranch])

  // Reset map view
  const resetView = () => {
    if (map) {
      map.setView([30.3753, 69.3451], 6) // Center of Pakistan
    }
  }

  return (
    <div className="relative w-full h-full bg-gray-200">
      <div ref={mapRef} className="w-full h-full">
        {/* Mock map UI */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-bold">Interactive Map</h3>
            <p className="mb-4 text-gray-600">
              This is a placeholder for the interactive map. In the actual implementation, this would be a Leaflet map
              showing military installations across Pakistan.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {filteredInstallations.slice(0, 4).map((installation) => (
                <Button
                  key={installation.id}
                  variant="outline"
                  onClick={() => onSelectInstallation(installation)}
                  className="justify-start text-left"
                >
                  <div
                    className={`w-3 h-3 mr-2 rounded-full ${
                      installation.branch === "army"
                        ? "bg-green-600"
                        : installation.branch === "navy"
                          ? "bg-blue-600"
                          : installation.branch === "airforce"
                            ? "bg-indigo-600"
                            : "bg-purple-600"
                    }`}
                  ></div>
                  {installation.name}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {filteredInstallations.length > 4 ? `+ ${filteredInstallations.length - 4} more installations` : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute z-10 p-2 bg-white rounded-md shadow-md top-4 right-4">
        <Button variant="outline" size="icon" onClick={resetView} title="Reset view">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
