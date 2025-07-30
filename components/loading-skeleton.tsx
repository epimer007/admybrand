export function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Metrics skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>

      {/* Charts skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 h-80 bg-gray-200 animate-pulse rounded-lg" />
        <div className="h-80 bg-gray-200 animate-pulse rounded-lg" />
        <div className="md:col-span-2 lg:col-span-3 h-80 bg-gray-200 animate-pulse rounded-lg" />
      </div>

      {/* Table skeleton */}
      <div className="h-96 bg-gray-200 animate-pulse rounded-lg" />
    </div>
  )
}
