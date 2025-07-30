"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Users, Target, Zap, TrendingUp, TrendingDown } from "lucide-react"

export function RealisticDashboardMockup() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: "-1.8%",
      trend: "down",
      icon: Zap,
      color: "from-orange-500 to-red-600",
    },
  ]

  // 3D tilt effect on mouse move
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [0, 1], [8, -8])
  const rotateY = useTransform(x, [0, 1], [-8, 8])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  // Set initial center position
  if (x.get() === 0 && y.get() === 0) {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: "1500px",
        rotateX,
        rotateY,
        transition: "rotateX 0.4s cubic-bezier(.4,2,.6,1), rotateY 0.4s cubic-bezier(.4,2,.6,1)",
      }}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Glow Shadow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-400/30 dark:via-purple-400/30 dark:to-pink-400/30 blur-2xl scale-105 pointer-events-none"></div>
      
      {/* Main Dashboard Container */}
      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-8px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.35)] border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow duration-300 w-full max-w-full">
        {/* Browser Header */}
        <div className="bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg px-2 sm:px-4 py-1 sm:py-2 mx-2 sm:mx-4">
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">analytics.admybrand.com/dashboard</div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Analytics Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Real-time performance metrics and insights</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl">
                  <div className="p-3 sm:p-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div
                        className={`w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br ${metric.color} rounded-lg sm:rounded-xl flex items-center justify-center`}
                      >
                        <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div
                        className={`flex items-center text-xs sm:text-sm font-semibold ${
                          metric.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {metric.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{metric.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-2">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl sm:rounded-2xl">
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Revenue Trend</h3>
                  <div className="h-36 sm:h-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                      <defs>
                        <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M20,120 Q80,100 140,80 T260,40"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      <path d="M20,120 Q80,100 140,80 T260,40 L260,140 L20,140 Z" fill="url(#revenueGradient)" />
                      <circle cx="20" cy="120" r="4" fill="#3b82f6" className="drop-shadow-sm" />
                      <circle cx="140" cy="80" r="4" fill="#3b82f6" className="drop-shadow-sm" />
                      <circle cx="260" cy="40" r="4" fill="#3b82f6" className="drop-shadow-sm" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Traffic Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl sm:rounded-2xl">
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Traffic Sources</h3>
                  <div className="h-36 sm:h-40 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center justify-center">
                    <div className="relative w-20 h-20 sm:w-32 sm:h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          className="dark:stroke-gray-700"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="8"
                          strokeDasharray="251.2"
                          strokeDashoffset="75.36"
                          transform="rotate(-90 50 50)"
                          className="drop-shadow-sm"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">70%</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Organic</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 sm:ml-6 space-y-1 sm:space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Organic: 70%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Direct: 20%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Referral: 10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
