import { Button } from '@/components/ui/button'

export default function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-semibold text-choco uppercase tracking-wider mb-3">Availability</h4>
        <label className="flex items-center gap-2 text-sm text-choco cursor-pointer mb-2 min-h-[44px]">
          <input type="checkbox" defaultChecked className="accent-rose rounded w-4 h-4" />
          In stock
        </label>
        <label className="flex items-center gap-2 text-sm text-muted cursor-pointer min-h-[44px]">
          <input type="checkbox" className="accent-rose rounded w-4 h-4" />
          Out of stock
        </label>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-choco uppercase tracking-wider mb-3">Price</h4>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="From"
            className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]"
          />
          <span className="text-muted text-sm">-</span>
          <input
            type="number"
            placeholder="To"
            className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]"
          />
        </div>
        <Button variant="outline" size="sm" className="w-full mt-2 text-xs min-h-[44px]">Apply</Button>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-choco uppercase tracking-wider mb-3">Sort by</h4>
        <select className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
          <option>Featured</option>
          <option>Best selling</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  )
}
