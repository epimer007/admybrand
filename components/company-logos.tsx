"use client"

import { motion } from "framer-motion"

export function CompanyLogos() {
  const companies = [
    { name: "Linear", logo: "Linear" },
    { name: "Medium", logo: "Medium" },
    { name: "Mailchimp", logo: "mailchimp" },
    { name: "Square", logo: "Square" },
    { name: "Dropbox", logo: "Dropbox" },
    { name: "Linear", logo: "Linear" },
  ]

  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-white/60 mb-8">Trusted by leading companies worldwide</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center space-x-8 lg:space-x-12 overflow-hidden"
        >
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-2 text-white/40 hover:text-white/60 transition-colors"
            >
              <div className="h-6 w-6 bg-white/20 rounded"></div>
              <span className="text-sm font-medium">{company.logo}</span>
              {index < companies.length - 1 && <span className="text-white/20 ml-8">+</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
