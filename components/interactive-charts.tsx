"use client"

import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

// Sample data for charts
const revenueData = [
  { month: "Jan", revenue: 85000, users: 1200, conversions: 180 },
  { month: "Feb", revenue: 92000, users: 1350, conversions: 210 },
  { month: "Mar", revenue: 78000, users: 1100, conversions: 165 },
  { month: "Apr", revenue: 108000, users: 1580, conversions: 245 },
  { month: "May", revenue: 115000, users: 1720, conversions: 280 },
  { month: "Jun", revenue: 124500, users: 1890, conversions: 320 },
  { month: "Jul", revenue: 132000, users: 2100, conversions: 350 },
  { month: "Aug", revenue: 128000, users: 2050, conversions: 340 },
]

const channelData = [
  { channel: "Google Ads", conversions: 450, cost: 12000, roi: 375 },
  { channel: "Facebook", conversions: 380, cost: 8500, roi: 447 },
  { channel: "Instagram", conversions: 220, cost: 5200, roi: 423 },
  { channel: "LinkedIn", conversions: 120, cost: 3800, roi: 316 },
  { channel: "Twitter", conversions: 80, cost: 2100, roi: 381 },
  { channel: "Email", conversions: 340, cost: 1200, roi: 2833 },
]

const deviceData = [
  { device: "Desktop", value: 65, fill: "#3b82f6" },
  { device: "Mobile", value: 28, fill: "#8b5cf6" },
  { device: "Tablet", value: 7, fill: "#ec4899" },
]

const COLORS = {
  Desktop: "#3b82f6",
  Mobile: "#8b5cf6",
  Tablet: "#ec4899",
}

export function InteractiveCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Revenue Line Chart */}
      <div className="lg:col-span-2">
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-xl font-bold text-gray-900">Revenue & User Growth</CardTitle>
            <p className="text-sm text-gray-600">Monthly performance trends</p>
          </CardHeader>
          <CardContent className="p-6">
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "#3b82f6",
                },
                users: {
                  label: "Users",
                  color: "#8b5cf6",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                  />
                  <YAxis
                    yAxisId="revenue"
                    orientation="left"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <YAxis
                    yAxisId="users"
                    orientation="right"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-900">{label}</p>
                            {payload.map((entry, index) => (
                              <p key={index} style={{ color: entry.color }} className="text-sm">
                                {entry.name}:{" "}
                                {entry.name === "revenue"
                                  ? `$${entry.value?.toLocaleString()}`
                                  : entry.value?.toLocaleString()}
                              </p>
                            ))}
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="revenue"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "#3b82f6" }}
                    name="Revenue"
                  />
                  <Line
                    yAxisId="users"
                    type="monotone"
                    dataKey="users"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2, fill: "#8b5cf6" }}
                    name="Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Device Traffic Pie Chart */}
      <div>
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-xl font-bold text-gray-900">Traffic Sources</CardTitle>
            <p className="text-sm text-gray-600">Device breakdown</p>
          </CardHeader>
          <CardContent className="p-6">
            <ChartContainer
              config={{
                desktop: {
                  label: "Desktop",
                  color: "#3b82f6",
                },
                mobile: {
                  label: "Mobile",
                  color: "#8b5cf6",
                },
                tablet: {
                  label: "Tablet",
                  color: "#ec4899",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-900">{data.device}</p>
                            <p className="text-sm text-gray-600">{data.value}% of traffic</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {deviceData.map((entry) => (
                <div key={entry.device} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill }} />
                  <span className="text-sm text-gray-600">
                    {entry.device} ({entry.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Channel Performance Bar Chart */}
      <div className="lg:col-span-3">
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-xl font-bold text-gray-900">Marketing Channel Performance</CardTitle>
            <p className="text-sm text-gray-600">Conversions and ROI by channel</p>
          </CardHeader>
          <CardContent className="p-6">
            <ChartContainer
              config={{
                conversions: {
                  label: "Conversions",
                  color: "#10b981",
                },
                roi: {
                  label: "ROI",
                  color: "#f59e0b",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="channel"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                  />
                  <YAxis
                    yAxisId="conversions"
                    orientation="left"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                  />
                  <YAxis
                    yAxisId="roi"
                    orientation="right"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tick={{ fill: "#64748b" }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-900">{label}</p>
                            {payload.map((entry, index) => (
                              <p key={index} style={{ color: entry.color }} className="text-sm">
                                {entry.name}: {entry.name === "roi" ? `${entry.value}%` : entry.value}
                              </p>
                            ))}
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="conversions"
                    dataKey="conversions"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    name="Conversions"
                  />
                  <Bar yAxisId="roi" dataKey="roi" fill="#f59e0b" radius={[4, 4, 0, 0]} name="ROI (%)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
