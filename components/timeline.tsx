import type React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>
}

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

export function TimelineItem({ children, className }: TimelineItemProps) {
  return <div className={cn("relative pb-8", className)}>{children}</div>
}

interface TimelineConnectorProps {
  className?: string
}

export function TimelineConnector({ className }: TimelineConnectorProps) {
  return <div className={cn("absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200", className)} />
}

interface TimelineHeaderProps {
  children: React.ReactNode
  className?: string
}

export function TimelineHeader({ children, className }: TimelineHeaderProps) {
  return <div className={cn("flex items-center gap-3", className)}>{children}</div>
}

interface TimelineIconProps {
  className?: string
}

export function TimelineIcon({ className }: TimelineIconProps) {
  return <div className={cn("z-10 flex items-center justify-center w-8 h-8 rounded-full", className)} />
}

interface TimelineBodyProps {
  children: React.ReactNode
  className?: string
}

export function TimelineBody({ children, className }: TimelineBodyProps) {
  return <div className={cn("ml-11", className)}>{children}</div>
}
