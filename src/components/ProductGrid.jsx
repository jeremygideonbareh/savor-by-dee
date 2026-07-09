import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import CategoryTabs from './CategoryTabs'
import ProductCard from './ProductCard'
import FilterSidebar from './FilterSidebar'
import { products, categories } from '@/data/products'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[11px] text-rose uppercase tracking-[0.2em] font-semibold">Our Menu</span>
          <h2 className="text-3xl sm:text-4xl font-display text-choco mt-2">
            Freshly Baked <em className="text-rose not-italic">Treats</em>
          </h2>
        </div>

        <div className="flex items-center justify-between mb-2">
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
          <button
            className="lg:hidden flex items-center gap-1.5 text-sm text-choco hover:text-rose transition-colors shrink-0 min-h-[44px] px-3"
            onClick={() => setShowFilters(true)}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-choco">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 min-h-[44px] min-w-[44px]"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
