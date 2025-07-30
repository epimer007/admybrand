"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface TrafficChartProps {
  data: Array<{ platform: string; value: number; fill: string }>
}

const COLORS = {
  Desktop: "hsl(var(--primary))",
  Mobile: "hsl(var(--chart-2))",
  Tablet: "hsl(var(--chart-3))",
}

export function TrafficChart({ data }: TrafficChartProps) {
  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Traffic Sources</CardTitle>
        <CardDescription className="text-gray-600">Device breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--primary))",
            },
            mobile: {
              label: "Mobile",
              color: "hsl(var(--chart-2))",
            },
            tablet: {
              label: "Tablet",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.platform as keyof typeof COLORS]} />
                ))}
              </Pie>
              <ChartTooltip
                content={<ChartTooltipContent className="bg-white border border-gray-200 shadow-lg" />}
                formatter={(value) => [`${value}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex justify-center space-x-4 mt-4">
          {data.map((entry) => (
            <div key={entry.platform} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[entry.platform as keyof typeof COLORS] }}
              />
              <span className="text-sm text-gray-600">
                {entry.platform} ({entry.value}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
