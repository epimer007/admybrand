"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ConversionsChartProps {
  data: Array<{ channel: string; conversions: number }>
}

export function ConversionsChart({ data }: ConversionsChartProps) {
  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Conversions by Channel</CardTitle>
        <CardDescription className="text-gray-600">Performance across marketing channels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            conversions: {
              label: "Conversions",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="channel"
                tickLine={false}
                axisLine={false}
                className="text-xs"
                tick={{ fill: "#6b7280" }}
              />
              <YAxis tickLine={false} axisLine={false} className="text-xs" tick={{ fill: "#6b7280" }} />
              <ChartTooltip
                content={<ChartTooltipContent className="bg-white border border-gray-200 shadow-lg" />}
                formatter={(value) => [Number(value).toLocaleString(), "Conversions"]}
              />
              <Bar dataKey="conversions" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
