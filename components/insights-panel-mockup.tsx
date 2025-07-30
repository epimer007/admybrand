"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function InsightsPanelMockup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Growth Comparison Chart */}
      <Card className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Growth Comparison</h3>
          <p className="text-gray-600 dark:text-gray-300">Monthly growth vs conversion trends</p>
        </div>

        <CardContent className="p-6">
          <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 relative overflow-hidden">
            
            {/* Chart */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="conversionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <path d="M20,100 Q80,80 140,60 T260,30" stroke="#10b981" strokeWidth="3" fill="none" />
              <path d="M20,100 Q80,80 140,60 T260,30 L260,140 L20,140 Z" fill="url(#growthGradient)" />
              <path d="M20,110 Q80,90 140,85 T260,70" stroke="#3b82f6" strokeWidth="3" fill="none" />

              <circle cx="20" cy="100" r="4" fill="#10b981" />
              <circle cx="140" cy="60" r="4" fill="#10b981" />
              <circle cx="260" cy="30" r="4" fill="#10b981" />
              <circle cx="20" cy="110" r="4" fill="#3b82f6" />
              <circle cx="140" cy="85" r="4" fill="#3b82f6" />
              <circle cx="260" cy="70" r="4" fill="#3b82f6" />
            </svg>

            {/* Legend */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300">Growth Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300">Conversion Rate</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Rate Trends */}
      <Card className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Conversion Insights</h3>
          <p className="text-gray-600 dark:text-gray-300">Channel performance analysis</p>
        </div>

        <CardContent className="p-6">
          <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
            <div className="h-full flex items-end justify-between space-x-3">
              {[
                { name: "Week 1", values: [60, 25, 15], colors: ["bg-purple-500", "bg-pink-500", "bg-blue-500"] },
                { name: "Week 2", values: [70, 20, 10], colors: ["bg-purple-500", "bg-pink-500", "bg-blue-500"] },
                { name: "Week 3", values: [65, 30, 5], colors: ["bg-purple-500", "bg-pink-500", "bg-blue-500"] },
                { name: "Week 4", values: [80, 15, 5], colors: ["bg-purple-500", "bg-pink-500", "bg-blue-500"] },
              ].map((week) => (
                <div key={week.name} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col rounded-t-lg overflow-hidden shadow-lg" style={{ height: "120px" }}>
                    {week.values.map((value, i) => (
                      <div key={i} className={`${week.colors[i]} transition-all duration-300 hover:opacity-80`} style={{ height: `${value}%` }}></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">{week.name}</div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300">Desktop</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300">Mobile</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300">Tablet</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
