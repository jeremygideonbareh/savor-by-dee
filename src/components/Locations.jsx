import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { stores } from '@/data/stores'

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[11px] text-rose uppercase tracking-[0.2em] font-semibold">Visit Us</span>
          <h2 className="text-3xl sm:text-4xl font-display text-choco mt-2">
            Our <em className="text-rose not-italic">Locations</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border active:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg text-choco">{store.name}</h3>
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose hover:text-rose/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-choco flex items-start gap-2">
                  <MapPin size={14} className="text-rose shrink-0 mt-0.5" />
                  {store.address}
                </p>
                <p className="text-sm text-choco flex items-center gap-2 min-h-[44px]">
                  <Phone size={14} className="text-rose shrink-0" />
                  {store.phone}
                </p>
                <p className="text-sm text-choco flex items-start gap-2">
                  <Clock size={14} className="text-rose shrink-0 mt-0.5" />
                  {store.hours}
                </p>
              </div>
              <a
                href={store.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-rose font-semibold hover:text-rose/80 transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                Get Directions &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
