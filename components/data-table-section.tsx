"use client"

import { useEffect, useState } from "react"
import { DataTable } from "@/components/data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CampaignData {
  id: number
  campaignName: string
  impressions: number
  clicks: number
  ctr: number
  cost: number
  roi: number
}

export function DataTableSection() {
  const [data, setData] = useState<CampaignData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTableData() {
      try {
        const response = await fetch("/api/metrics")
        const result = await response.json()
        setData(result.tableData)
      } catch (error) {
        console.error("Error fetching table data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTableData()
  }, [])

  if (loading) {
    return (
      <Card className="border border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Campaign Performance</CardTitle>
          <CardDescription className="text-gray-600">Detailed campaign analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 animate-pulse rounded" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Campaign Performance</CardTitle>
        <CardDescription className="text-gray-600">Detailed campaign analytics and metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable data={data} />
      </CardContent>
    </Card>
  )
}
