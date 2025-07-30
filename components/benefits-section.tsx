"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and real-time insights that drive business growth.",
      features: [
        "Advanced reporting dashboards",
        "Real-time data visualization",
        "Custom metric tracking",
        "Predictive analytics",
      ],
    },
    {
      title: "Increased Efficiency",
      description: "Automate processes and streamline operations to save time and reduce manual workload.",
      features: [
        "Automated reporting",
        "Smart alerts and notifications",
        "Workflow automation",
        "Integration capabilities",
      ],
    },
    {
      title: "Better ROI",
      description: "Optimize your marketing spend and campaigns with detailed performance tracking and insights.",
      features: [
        "Campaign performance analysis",
        "ROI optimization tools",
        "A/B testing capabilities",
        "Budget allocation insights",
      ],
    },
  ]

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
    <section id="benefits" className="section-padding bg-gradient-to-br from-purple-50/20 via-transparent to-pink-50/30 dark:from-purple-900/20 dark:via-transparent dark:to-pink-900/20 relative overflow-hidden">
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
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ADmyBRAND</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Transform your business with our comprehensive analytics platform designed for modern enterprises.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 px-4 sm:px-0"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 sm:mb-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {benefit.description}
                  </p>
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 group"
                    >
                      <motion.div
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </motion.div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
