"use client"

import { useEffect, useState } from "react"
import { RevenueChart } from "@/components/revenue-chart"
import { ConversionsChart } from "@/components/conversions-chart"
import { TrafficChart } from "@/components/traffic-chart"

interface ChartsData {
  lineChartData: Array<{ month: string; revenue: number }>
  barChartData: Array<{ channel: string; conversions: number }>
  pieChartData: Array<{ platform: string; value: number; fill: string }>
}

export function ChartsSection() {
  const [chartsData, setChartsData] = useState<ChartsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchChartsData() {
      try {
        const response = await fetch("/api/metrics")
        const data = await response.json()
        setChartsData({
          lineChartData: data.lineChartData,
          barChartData: data.barChartData,
          pieChartData: data.pieChartData,
        })
      } catch (error) {
        console.error("Error fetching charts data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchChartsData()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  if (!chartsData) return null

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2">
        <RevenueChart data={chartsData.lineChartData} />
      </div>
      <div>
        <TrafficChart data={chartsData.pieChartData} />
      </div>
      <div className="md:col-span-2 lg:col-span-3">
        <ConversionsChart data={chartsData.barChartData} />
      </div>
    </div>
  )
}
