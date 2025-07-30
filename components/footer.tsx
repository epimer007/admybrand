"use client"

import { BarChart3, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Documentation", "Integrations"],
    Company: ["About", "Blog", "Careers", "Contact", "Press"],
    Resources: ["Help Center", "Community", "Guides", "Webinars", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Compliance", "Cookies"],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-max py-10 px-4 sm:px-6">
        {/* Top section: Logo/desc/socials + Product/Company + Resources/Legal */}
        <div className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="flex flex-col items-start lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ADmyBRAND</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6 leading-relaxed text-base">
              Transform your business with AI-powered analytics and insights that drive real growth and success.
            </p>
            <div className="flex space-x-4 mb-8 sm:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              {footerLinks.Product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 hover:underline text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 hover:underline text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 hover:underline text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 hover:underline text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-300 text-sm text-center md:text-left">
            © 2025 ADmyBRAND Insights. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
