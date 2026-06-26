import { motion } from 'framer-motion'
import { SectionEyebrow, CharReveal } from './RevealText'
import { MENU_IMAGES, IMAGES } from '../data/images'

const bentoLayout = [
  { col: 'span-2', row: 'span-1' },
  { col: 'span-1', row: 'span-1' },
  { col: 'span-1', row: 'span-1' },
  { col: 'span-1', row: 'span-1' },
  { col: 'span-1', row: 'span-1' },
  { col: 'span-2', row: 'span-1' },
]

export default function SignatureItems() {
  const items = MENU_IMAGES.map((item) => ({
    ...item,
    src: IMAGES[item.key],
  }))

  return (
    <section id="menu" className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10 md:mb-16"
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

        <div className="flex flex-col md:hidden gap-3">
          {items.map((item, i) => (
            <MenuItemCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {items.map((item, i) => {
            const layout = bentoLayout[i % bentoLayout.length]
            const isWide = layout.col === 'span-2'
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-xl border border-primary/10 bg-white overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all ${isWide ? 'col-span-2' : 'col-span-1'}`}
              >
                <div className={`relative ${isWide ? 'h-52' : 'h-44'} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="frosting-drip absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-primary/20 to-transparent transition-all duration-500 group-hover:h-8" />
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
            )
          })}
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

      <style>{`
        @keyframes drip {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.6; }
        }
        .group:hover .frosting-drip {
          height: 2rem;
        }
        .frosting-drip::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 20%;
          width: 6px;
          height: 6px;
          background: inherit;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .group:hover .frosting-drip::after {
          opacity: 0.4;
          animation: drip 1.2s ease-in-out infinite;
        }
        .frosting-drip::before {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 35%;
          width: 4px;
          height: 4px;
          background: inherit;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation-delay: 0.4s;
        }
        .group:hover .frosting-drip::before {
          opacity: 0.3;
          animation: drip 1.4s ease-in-out 0.4s infinite;
        }
      `}</style>
    </section>
  )
}

function MenuItemCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative rounded-xl border border-primary/10 bg-white overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={item.src}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span className={`absolute top-2.5 right-2.5 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full shadow-sm ${item.badge}`}>
          {item.highlight}
        </span>
        <span className="absolute bottom-2.5 left-2.5 text-white font-serif text-base font-medium drop-shadow-sm">
          {item.price}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}
