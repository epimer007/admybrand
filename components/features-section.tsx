"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Shield, Zap, Target } from "lucide-react"
import { useRef, useEffect } from "react"

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our comprehensive analytics suite. Track performance, identify trends, and make data-driven decisions.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Real-time Monitoring",
      description: "Monitor your business metrics in real-time with live dashboards and instant alerts for critical changes.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Understand your audience better with detailed user behavior tracking and segmentation analysis.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, role-based access, and compliance certifications.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Leverage machine learning to uncover hidden patterns and get predictive analytics for future planning.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set, track, and achieve your business goals with automated progress monitoring and milestone alerts.",
      color: "from-teal-500 to-cyan-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  // Professional SaaS-style animation: scale, subtle Y-translate, shadow, and soft fade
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const children = Array.from(el.children[0].children) as HTMLElement[]
      const scrollLeft = el.scrollLeft
      const width = el.offsetWidth
      const cardWidth = children[0]?.offsetWidth || 1

      children.forEach((child, idx) => {
        const cardLeft = child.offsetLeft
        const cardCenter = cardLeft + cardWidth / 2
        const viewportCenter = scrollLeft + width / 2
        const distance = Math.abs(viewportCenter - cardCenter)
        const maxDistance = width / 2 + cardWidth

        // Professional SaaS effect: scale, translateY, shadow, and soft fade
        const t = Math.min(distance / maxDistance, 1)
        const scale = 1 - 0.12 * t // 1 (center) to 0.88 (edge)
        const translateY = -18 * (1 - t) // -18px at center, 0 at edge
        const opacity = 1 - 0.25 * t // 1 (center) to 0.75 (edge)
        const shadow =
          scale > 0.97
            ? "0 8px 32px 0 rgba(99,102,241,0.12), 0 2px 8px 0 rgba(0,0,0,0.06)"
            : "0 2px 8px 0 rgba(0,0,0,0.04)"
        // Card size and margin
        child.style.width = window.innerWidth < 640 ? "70vw" : "220px"
        child.style.maxWidth = window.innerWidth < 640 ? "70vw" : "220px"
        child.style.minWidth = window.innerWidth < 640 ? "70vw" : "220px"
        const baseGap = window.innerWidth < 640 ? 12 : 24
        const extraGap = (window.innerWidth < 640 ? 12 : 24) * (1 - scale)
        child.style.marginLeft = idx === 0 ? "0px" : `${baseGap + extraGap}px`
        child.style.marginRight = idx === children.length - 1 ? "0px" : `${baseGap + extraGap}px`

        child.style.transform = `scale(${scale}) translateY(${translateY}px)`
        child.style.opacity = `${opacity}`
        child.style.transition =
          "transform 0.7s cubic-bezier(.4,2,.6,1), " +
          "opacity 0.7s cubic-bezier(.4,2,.6,1), " +
          "box-shadow 0.7s cubic-bezier(.4,2,.6,1), " +
          "margin 0.7s cubic-bezier(.4,2,.6,1), " +
          "width 0.7s cubic-bezier(.4,2,.6,1), " +
          "max-width 0.7s cubic-bezier(.4,2,.6,1), " +
          "min-width 0.7s cubic-bezier(.4,2,.6,1)"
        child.style.zIndex = scale > 0.97 ? "10" : "1"
        child.style.boxShadow = shadow
        child.style.filter = scale > 0.97 ? "brightness(1.04)" : "brightness(0.98)"
      })
    }

    el.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      el.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/30 dark:from-gray-900/50 dark:via-transparent dark:to-blue-900/20 relative overflow-hidden"
    >
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8"
          >
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to transform your business with data-driven insights and intelligent automation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-2 sm:mx-0 pb-4"
          ref={scrollRef}
        >
          <div className="flex px-2 sm:px-0 w-max">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: 60 * index }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center"
                style={{
                  willChange: "transform",
                  width: "70vw",
                  maxWidth: "220px",
                  minWidth: "70vw",
                }}
              >
                <Card className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full group rounded-xl sm:rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotate: 3, scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

