import { motion } from 'framer-motion'
import { SectionEyebrow, WordReveal } from './RevealText'
import GalleryPhoto from './GalleryPhoto'
import { bakeryPhotos } from '../data'

const values = [
  { title: 'Handcrafted Daily', desc: 'Every cake, cupcake, and pastry is made from scratch using the finest ingredients and traditional techniques.', icon: '🧑‍🍳' },
  { title: 'Rated 4.6 Stars', desc: 'Our community rates us 4.6 — every review, every order, every creation reflects our commitment to excellence.', icon: '⭐' },
  { title: 'Community Rooted', desc: 'Nestled in Laban, Shillong — we build connections over custom cakes, warm service, and artisanal bakes.', icon: '🤝' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-36 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>About Us</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mt-4 text-foreground">
              Every bite<br />
              <span className="text-primary italic">tells a story</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                <WordReveal delay={0.2}>
                  Savor by Dee — The Artisanal Bakery — was born from a simple love for baking and a desire to bring beautifully crafted cakes to the people of Shillong.
                </WordReveal>
              </p>
              <p>
                <WordReveal delay={0.4}>
                  From rich, decadent chocolate cakes to light, buttery cupcakes and elegant custom creations — every recipe is developed with care, baked fresh daily, and finished with love.
                </WordReveal>
              </p>
              <p>
                <WordReveal delay={0.6}>
                  Pre-book your customized orders at least 2 days in advance, and let us make your next celebration truly unforgettable.
                </WordReveal>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <GalleryPhoto src={bakeryPhotos[8]} alt="Bakery display" width="w-full" rotate={-1} offsetX={0} offsetY={0} from="right" delay={0} aspect="aspect-[16/10]" />
            <div className="grid sm:grid-cols-3 gap-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-primary/10 bg-white p-4 text-center hover:border-primary/30 transition-all"
                >
                  <span className="text-xl">{v.icon}</span>
                  <h3 className="text-sm font-medium text-foreground mt-2">{v.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
