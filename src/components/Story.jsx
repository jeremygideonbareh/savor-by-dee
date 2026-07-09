import { motion } from 'framer-motion'
import { Leaf, Truck, Heart, Star } from 'lucide-react'

const features = [
  { icon: Leaf, label: 'Customisable' },
  { icon: Truck, label: 'Express Delivery' },
  { icon: Star, label: 'Verified Reviews' },
  { icon: Heart, label: 'Made with Love' },
]

export default function Story() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-cream relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=90"
                alt="Savor by Dee Bakery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-[11px] text-rose uppercase tracking-[0.2em] font-semibold">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-display text-choco mt-2 mb-4">
              Dee
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              Savor by Dee started with a simple belief — that every bite should be memorable. 
              Nestled in the heart of Shillong, our bakery brings together traditional craftsmanship 
              and contemporary flavors.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              From our signature blueberry cheesecake to our rich red velvet cupcakes, every item 
              is made from scratch using the finest ingredients. We don't just bake — we create experiences.
            </p>
            <a href="#products" className="text-rose text-sm font-semibold hover:text-rose/80 transition-colors inline-flex items-center gap-1">
              Read More &rarr;
            </a>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-choco"
                >
                  <f.icon size={18} className="text-rose shrink-0" />
                  {f.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
