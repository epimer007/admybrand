"use client"

import type React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="flowing-lines" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
