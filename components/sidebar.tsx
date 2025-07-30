"use client"

import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, Users, TrendingUp, Settings, HelpCircle, Home, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Audience", href: "/audience", icon: Users, current: false },
  { name: "Growth", href: "/growth", icon: TrendingUp, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
  { name: "Help", href: "/help", icon: HelpCircle, current: false },
]

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto glass-card border-r border-white/10 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center neon-glow">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ADmyBRAND</span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          item.current
                            ? "bg-primary text-white neon-glow"
                            : "text-white/70 hover:text-white hover:bg-white/10",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-all duration-200",
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 z-50 flex w-64 flex-col lg:hidden"
          >
            <div className="flex grow flex-col gap-y-5 overflow-y-auto glass-card border-r border-white/10 px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center neon-glow">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">ADmyBRAND</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={cn(
                              item.current
                                ? "bg-primary text-white neon-glow"
                                : "text-white/70 hover:text-white hover:bg-white/10",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-all duration-200",
                            )}
                            onClick={() => onOpenChange(false)}
                          >
                            <item.icon className="h-5 w-5 shrink-0" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
