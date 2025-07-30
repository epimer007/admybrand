"use client"

import { useState } from "react"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface CampaignData {
  id: number
  campaignName: string
  channel: string
  impressions: number
  clicks: number
  ctr: number
  cost: number
  conversions: number
  roi: number
  status: "Active" | "Paused" | "Completed"
}

// Sample campaign data
const campaignData: CampaignData[] = [
  {
    id: 1,
    campaignName: "Summer Sale 2024",
    channel: "Google Ads",
    impressions: 125000,
    clicks: 3200,
    ctr: 2.56,
    cost: 1250,
    conversions: 180,
    roi: 320,
    status: "Active",
  },
  {
    id: 2,
    campaignName: "Brand Awareness Q2",
    channel: "Facebook",
    impressions: 89000,
    clicks: 1800,
    ctr: 2.02,
    cost: 890,
    conversions: 95,
    roi: 180,
    status: "Active",
  },
  {
    id: 3,
    campaignName: "Product Launch",
    channel: "Instagram",
    impressions: 156000,
    clicks: 4200,
    ctr: 2.69,
    cost: 1560,
    conversions: 245,
    roi: 420,
    status: "Completed",
  },
  {
    id: 4,
    campaignName: "Holiday Special",
    channel: "LinkedIn",
    impressions: 98000,
    clicks: 2100,
    ctr: 2.14,
    cost: 980,
    conversions: 125,
    roi: 210,
    status: "Paused",
  },
  {
    id: 5,
    campaignName: "Back to School",
    channel: "Google Ads",
    impressions: 112000,
    clicks: 2800,
    ctr: 2.5,
    cost: 1120,
    conversions: 165,
    roi: 280,
    status: "Active",
  },
  {
    id: 6,
    campaignName: "Black Friday",
    channel: "Facebook",
    impressions: 203000,
    clicks: 5800,
    ctr: 2.86,
    cost: 2030,
    conversions: 380,
    roi: 450,
    status: "Completed",
  },
  {
    id: 7,
    campaignName: "New Year Campaign",
    channel: "Instagram",
    impressions: 87000,
    clicks: 1950,
    ctr: 2.24,
    cost: 870,
    conversions: 110,
    roi: 195,
    status: "Active",
  },
  {
    id: 8,
    campaignName: "Spring Collection",
    channel: "Email",
    impressions: 45000,
    clicks: 1200,
    ctr: 2.67,
    cost: 450,
    conversions: 85,
    roi: 340,
    status: "Active",
  },
]

const columns: ColumnDef<CampaignData>[] = [
  {
    accessorKey: "campaignName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Campaign Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("campaignName")}</div>,
  },
  {
    accessorKey: "channel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Channel
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const channel = row.getValue("channel") as string
      const channelColors = {
        "Google Ads": "bg-blue-100 text-blue-800",
        Facebook: "bg-indigo-100 text-indigo-800",
        Instagram: "bg-pink-100 text-pink-800",
        LinkedIn: "bg-cyan-100 text-cyan-800",
        Email: "bg-green-100 text-green-800",
      }
      return <Badge className={`${channelColors[channel as keyof typeof channelColors]} border-0`}>{channel}</Badge>
    },
  },
  {
    accessorKey: "impressions",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Impressions
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-gray-600">{row.getValue<number>("impressions").toLocaleString()}</div>
    },
  },
  {
    accessorKey: "clicks",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Clicks
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-gray-600">{row.getValue<number>("clicks").toLocaleString()}</div>
    },
  },
  {
    accessorKey: "ctr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          CTR
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-gray-600">{row.getValue<number>("ctr").toFixed(2)}%</div>
    },
  },
  {
    accessorKey: "cost",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Cost
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const cost = row.getValue<number>("cost")
      return <div className="text-gray-600">${cost.toLocaleString()}</div>
    },
  },
  {
    accessorKey: "conversions",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          Conversions
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-gray-600">{row.getValue<number>("conversions")}</div>
    },
  },
  {
    accessorKey: "roi",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-gray-900 hover:text-blue-600"
        >
          ROI
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const roi = row.getValue<number>("roi")
      return (
        <div className={`font-medium ${roi > 300 ? "text-green-600" : roi > 200 ? "text-yellow-600" : "text-red-600"}`}>
          {roi}%
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const statusColors = {
        Active: "bg-green-100 text-green-800",
        Paused: "bg-yellow-100 text-yellow-800",
        Completed: "bg-gray-100 text-gray-800",
      }
      return <Badge className={`${statusColors[status as keyof typeof statusColors]} border-0`}>{status}</Badge>
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data: campaignData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex items-center justify-between">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search campaigns..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
          />
        </div>
        <div className="text-sm text-gray-500">
          Showing {table.getFilteredRowModel().rows.length} of {campaignData.length} campaigns
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
        <Table>
          <TableHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-gray-200">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-gray-900 font-semibold py-4">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-200 hover:bg-blue-50/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-gray-200 hover:bg-blue-50 rounded-xl"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-gray-200 hover:bg-blue-50 rounded-xl"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
