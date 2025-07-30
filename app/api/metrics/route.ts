import { NextResponse } from "next/server"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    metrics: {
      revenue: {
        value: 124500,
        change: 12.5,
        trend: "up",
      },
      users: {
        value: 8420,
        change: -2.3,
        trend: "down",
      },
      conversions: {
        value: 1250,
        change: 8.7,
        trend: "up",
      },
      growth: {
        value: 15.8,
        change: 3.2,
        trend: "up",
      },
    },
    lineChartData: [
      { month: "Jan", revenue: 85000 },
      { month: "Feb", revenue: 92000 },
      { month: "Mar", revenue: 78000 },
      { month: "Apr", revenue: 108000 },
      { month: "May", revenue: 115000 },
      { month: "Jun", revenue: 124500 },
    ],
    barChartData: [
      { channel: "Google Ads", conversions: 450 },
      { channel: "Facebook", conversions: 380 },
      { channel: "Instagram", conversions: 220 },
      { channel: "LinkedIn", conversions: 120 },
      { channel: "Twitter", conversions: 80 },
    ],
    pieChartData: [
      { platform: "Desktop", value: 65, fill: "var(--color-desktop)" },
      { platform: "Mobile", value: 28, fill: "var(--color-mobile)" },
      { platform: "Tablet", value: 7, fill: "var(--color-tablet)" },
    ],
    tableData: [
      {
        id: 1,
        campaignName: "Summer Sale 2024",
        impressions: 125000,
        clicks: 3200,
        ctr: 2.56,
        cost: 1250,
        roi: 320,
      },
      {
        id: 2,
        campaignName: "Brand Awareness Q2",
        impressions: 89000,
        clicks: 1800,
        ctr: 2.02,
        cost: 890,
        roi: 180,
      },
      {
        id: 3,
        campaignName: "Product Launch",
        impressions: 156000,
        clicks: 4200,
        ctr: 2.69,
        cost: 1560,
        roi: 420,
      },
      {
        id: 4,
        campaignName: "Holiday Special",
        impressions: 98000,
        clicks: 2100,
        ctr: 2.14,
        cost: 980,
        roi: 210,
      },
      {
        id: 5,
        campaignName: "Back to School",
        impressions: 112000,
        clicks: 2800,
        ctr: 2.5,
        cost: 1120,
        roi: 280,
      },
    ],
  }

  return NextResponse.json(data)
}
