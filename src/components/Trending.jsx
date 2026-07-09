import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { trendingProducts } from '@/data/products'

export default function Trending() {
  return (
    <section id="trending" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 space-y-16 sm:space-y-20">
        {trendingProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-8 sm:gap-10 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
          >
            <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
              <h3 className="font-display text-2xl sm:text-3xl text-choco mb-3">{product.name}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-2 mb-4">
                {product.details.map((d) => (
                  <li key={d} className="text-sm text-choco flex items-start gap-2">
                    <span className="text-rose mt-1 shrink-0">&bull;</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted mb-4">{product.allergens}</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-display text-choco">{product.price}</span>
                <Button size="sm" className="min-h-[44px]">SHOP NOW</Button>
              </div>
            </div>
            <div className={`aspect-square rounded-2xl overflow-hidden bg-cream relative ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
