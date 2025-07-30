"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Users, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  icon: React.ElementType
  title: string
  value: number
  suffix: string
  change: number
  trend: "up" | "down"
  delay: number
}

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

function MetricCard({ icon: Icon, title, value, suffix, change, trend, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div
              className={`flex items-center text-sm font-semibold ${trend === "up" ? "text-green-600" : "text-red-600"}`}
            >
              <TrendingUp className={`h-4 w-4 mr-1 ${trend === "down" ? "rotate-180" : ""}`} />
              {Math.abs(change)}%
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            <AnimatedCounter value={value} />
            {suffix}
          </div>
          <div className="text-gray-600 font-medium">{title}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function MetricsSection() {
  const metrics = [
    {
      icon: DollarSign,
      title: "Total Revenue",
      value: 124500,
      suffix: "",
      change: 12.5,
      trend: "up" as const,
    },
    {
      icon: Users,
      title: "Active Users",
      value: 8420,
      suffix: "",
      change: -2.3,
      trend: "down" as const,
    },
    {
      icon: Target,
      title: "Conversions",
      value: 1250,
      suffix: "",
      change: 8.7,
      trend: "up" as const,
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: 15,
      suffix: "%",
      change: 3.2,
      trend: "up" as const,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              businesses worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600">Real metrics from companies using ADmyBRAND Insights</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.title} {...metric} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
