import { motion } from 'framer-motion'
import { SectionEyebrow, CharReveal } from './RevealText'
import { menuItems } from '../data'

export default function SignatureItems() {
  return (
    <section id="menu" className="relative py-20 md:py-28 lg:py-36 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionEyebrow>Our Menu</SectionEyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] text-foreground mt-4">
            <CharReveal>Our </CharReveal>
            <span className="text-primary italic"><CharReveal delay={0.3}>Bakes</CharReveal></span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Every item crafted with care, using traditional recipes and the freshest ingredients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-primary/10 bg-white overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="relative h-36 md:h-44 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className={`absolute top-2.5 right-2.5 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full shadow-sm ${item.badge}`}>
                  {item.highlight}
                </span>
                <span className="absolute bottom-2.5 left-2.5 text-white font-serif text-base md:text-lg font-medium drop-shadow-sm">
                  {item.price}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-1.5">{item.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            Price range: ₹39–₹599+ · Pre-book at least 2 days in advance
          </p>
        </motion.div>
      </div>
    </section>
  )
}
