import { motion } from 'framer-motion'
import { SectionEyebrow, CharReveal } from './RevealText'
import { MENU_IMAGES, IMAGES } from '../data/images'

export default function SignatureItems() {
  const items = MENU_IMAGES.map((item) => ({
    ...item,
    src: IMAGES[item.key],
  }))

  return (
    <section id="menu" className="relative py-20 md:py-28 lg:py-36 px-0 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16 px-4 md:px-6"
        >
          <SectionEyebrow>Our Menu</SectionEyebrow>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] text-balance text-foreground break-words">
            <CharReveal>Our </CharReveal>
            <span className="text-primary italic"><CharReveal delay={0.3}>Bakes</CharReveal></span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Every item crafted with care, using traditional recipes and the freshest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative w-full aspect-[4/3] overflow-hidden bg-[#EDE8E0] group"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-serif text-lg md:text-xl lg:text-2xl font-medium">
                  {item.name}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-0.5">
                  {item.price}
                </p>
              </div>
              <span className={`absolute top-3 right-3 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full shadow-sm ${item.badge}`}>
                {item.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 text-center px-4 md:px-6"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            Price range: ₹39–₹599+ · Pre-book at least 2 days in advance
          </p>
        </motion.div>
      </div>
    </section>
  )
}