"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export function CampaignTableMockup() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const campaigns = [
    { name: "Summer Sale 2024", impressions: "125K", clicks: "3.2K", ctr: "2.56%", cost: "$1,250", roi: "320%", trend: "up", status: "Active" },
    { name: "Brand Awareness Q2", impressions: "89K", clicks: "1.8K", ctr: "2.02%", cost: "$890", roi: "180%", trend: "up", status: "Active" },
    { name: "Product Launch", impressions: "156K", clicks: "4.2K", ctr: "2.69%", cost: "$1,560", roi: "420%", trend: "up", status: "Completed" },
    { name: "Holiday Special", impressions: "98K", clicks: "2.1K", ctr: "2.14%", cost: "$980", roi: "210%", trend: "down", status: "Paused" },
    { name: "Black Friday Campaign", impressions: "200K", clicks: "5.5K", ctr: "2.75%", cost: "$2,000", roi: "550%", trend: "up", status: "Active" },
    { name: "Email Newsletter", impressions: "45K", clicks: "1.2K", ctr: "2.67%", cost: "$450", roi: "240%", trend: "up", status: "Active" },
  ]

  const topCampaigns = [
    { name: "Product Launch", metric: "420% ROI", color: "from-green-500 to-emerald-600" },
    { name: "Summer Sale", metric: "3.2K Clicks", color: "from-blue-500 to-cyan-600" },
    { name: "Brand Awareness", metric: "2.69% CTR", color: "from-purple-500 to-pink-600" },
  ]

  const filteredCampaigns = campaigns
    .filter(campaign => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || campaign.status.toLowerCase() === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      let aValue: any = a[sortBy as keyof typeof a]
      let bValue: any = b[sortBy as keyof typeof b]
      if (sortBy === "roi" || sortBy === "ctr") {
        aValue = parseFloat(aValue.toString().replace(/[^\d.]/g, ""))
        bValue = parseFloat(bValue.toString().replace(/[^\d.]/g, ""))
      }
      return sortOrder === "asc" ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1)
    })

  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCampaigns = filteredCampaigns.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sortBy !== column) return <ChevronUp className="h-4 w-4 opacity-30" />
    return sortOrder === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Campaign Performance Table */}
      <div className="lg:col-span-3">
        <Card className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Campaign Performance</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Detailed analytics for all marketing campaigns</p>
          </div>

          <CardContent className="p-0">
            {/* Filters */}
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search campaigns..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
              {paginatedCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{campaign.name}</div>
                    <Badge
                      className={`${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : campaign.status === "Paused"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      } border-0 text-xs`}
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div><span className="text-gray-500 dark:text-gray-400">Impressions:</span><span className="ml-1 font-medium dark:text-gray-200">{campaign.impressions}</span></div>
                    <div><span className="text-gray-500 dark:text-gray-400">Clicks:</span><span className="ml-1 font-medium dark:text-gray-200">{campaign.clicks}</span></div>
                    <div><span className="text-gray-500 dark:text-gray-400">CTR:</span><span className="ml-1 font-medium dark:text-gray-200">{campaign.ctr}</span></div>
                    <div><span className="text-gray-500 dark:text-gray-400">Cost:</span><span className="ml-1 font-medium dark:text-gray-200">{campaign.cost}</span></div>
                    <div className="col-span-2">
                      <span className="text-gray-500 dark:text-gray-400">ROI:</span>
                      <span className={`ml-1 font-semibold ${campaign.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                        {campaign.trend === "up" ? <TrendingUp className="inline h-3 w-3 mr-1" /> : <TrendingDown className="inline h-3 w-3 mr-1" />}
                        {campaign.roi}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-7 gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {["name","impressions","clicks","ctr","cost","roi"].map(col=>(
                  <button key={col} onClick={()=>handleSort(col)} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {col.charAt(0).toUpperCase()+col.slice(1)}
                    <SortIcon column={col}/>
                  </button>
                ))}
                <div>Status</div>
              </div>

              {paginatedCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-7 gap-4 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors ${
                    index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/50"
                  }`}
                >
                  <div className="font-medium text-gray-900 dark:text-white">{campaign.name}</div>
                  <div className="text-gray-600 dark:text-gray-300">{campaign.impressions}</div>
                  <div className="text-gray-600 dark:text-gray-300">{campaign.clicks}</div>
                  <div className="text-gray-600 dark:text-gray-300">{campaign.ctr}</div>
                  <div className="text-gray-600 dark:text-gray-300">{campaign.cost}</div>
                  <div className={`flex items-center font-semibold ${campaign.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {campaign.trend === "up" ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {campaign.roi}
                  </div>
                  <div>
                    <Badge className={`${campaign.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : campaign.status === "Paused" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"} border-0`}>
                      {campaign.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCampaigns.length)} of {filteredCampaigns.length} campaigns
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(page)} className="w-8 h-8 p-0">
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Sidebar: Top Performers & Quick Stats */}
      <div className="space-y-4 sm:space-y-6">
        <Card className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
          <CardContent className="p-4 sm:p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Performers</h4>
            <div className="space-y-3 sm:space-y-4">
              {topCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${campaign.color} rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{campaign.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{campaign.metric}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-white">
          <CardContent className="p-4 sm:p-6">
            <h4 className="text-lg font-bold mb-4">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Total Campaigns</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Active Now</span>
                <span className="font-bold">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Avg. ROI</span>
                <span className="font-bold">285%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
