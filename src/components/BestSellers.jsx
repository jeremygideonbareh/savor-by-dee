import { motion } from 'framer-motion'
import { bestSellers } from '@/data/products'
import ImageWithLoading from '@/components/ui/image-with-loading'

export default function BestSellers() {
  return (
    <section id="bestsellers" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[11px] text-rose uppercase tracking-[0.2em] font-semibold">What's popular now</span>
          <h2 className="text-3xl sm:text-4xl font-display text-choco mt-2">
            Best <em className="text-rose not-italic">Sellers</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {bestSellers.map((item, i) => (
            <motion.a
              key={item.name}
              href="#products"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden block"
            >
              <ImageWithLoading
                src={item.image}
                alt={item.name}
                className="w-full h-full group-hover:scale-110 transition-transform duration-700 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-display text-xl mb-1">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.count} items</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
