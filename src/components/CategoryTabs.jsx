import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CategoryTabs({ categories, active, onChange }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const activeBtn = el.querySelector('[data-active="true"]')
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [active])

  return (
    <div
      ref={scrollRef}
      className="flex gap-1 border-b border-border mb-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          data-active={active === cat}
          onClick={() => onChange(cat)}
          className={`relative px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap snap-start min-h-[44px] ${
            active === cat ? 'text-rose' : 'text-muted hover:text-choco'
          }`}
        >
          {cat}
          {active === cat && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
