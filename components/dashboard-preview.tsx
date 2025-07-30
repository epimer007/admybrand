"use client"

import { motion } from "framer-motion"
import { CampaignTableMockup } from "@/components/campaign-table-mockup"
import { InsightsPanelMockup } from "@/components/insights-panel-mockup"

export function DashboardPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br 
      from-gray-50 to-blue-50/30 
      dark:from-gray-900 dark:to-blue-900/20 
      relative overflow-hidden section-divider">

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top Left Glow */}
        <div className="absolute top-20 left-1/4 w-32 h-32 sm:w-64 sm:h-64 
          bg-gradient-to-br from-blue-200/20 to-purple-200/20 
          dark:from-blue-700/30 dark:to-purple-700/30 
          rounded-full blur-3xl">
        </div>

        {/* Bottom Right Glow */}
        <div className="absolute bottom-20 right-1/4 w-40 h-40 sm:w-80 sm:h-80 
          bg-gradient-to-br from-purple-200/20 to-pink-200/20 
          dark:from-purple-700/30 dark:to-pink-700/30 
          rounded-full blur-3xl">
        </div>
      </div>
      
      <div className="container-max relative z-10">
        {/* Section Heading */}
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
            Comprehensive Analytics{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Suite
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Dive deeper into your data with advanced campaign tracking and AI-powered insights.
          </motion.p>
        </motion.div>

        {/* Dashboard Mockups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 sm:space-y-16 px-4 sm:px-0"
        >
          {/* Campaign Table Mockup */}
          <motion.div variants={itemVariants} className="relative">
            <CampaignTableMockup />
          </motion.div>

          {/* Insights Panel Mockup */}
          <motion.div variants={itemVariants} className="relative">
            <InsightsPanelMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
