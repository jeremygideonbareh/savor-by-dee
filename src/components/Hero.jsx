import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import GalleryPhoto from './GalleryPhoto'

export default function Hero({ onOrder, bakeryPhotos }) {
  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 pt-24 pb-16 md:pb-0">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider uppercase font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Laban, Shillong
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] text-foreground"
            >
              Every creation is a work of <span className="text-primary italic">art</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Custom cakes, cupcakes, and artisanal bakes — handcrafted with love in our Laban kitchen. Pre-book your order at least 2 days in advance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <Button onClick={onOrder} size="lg">
                Pre-book
              </Button>
              <a href="#menu" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Explore Menu
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            >
              <span>+91 98365 37447</span>
              <span>Pre-book</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative">
              <GalleryPhoto src={bakeryPhotos[4]} alt="Fresh pastries and baked goods" width="w-full" rotate={-2} offsetX={0} offsetY={0} from="right" delay={0} />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-10">
                <GalleryPhoto src={bakeryPhotos[5]} alt="Signature tiramisu" width="w-32 md:w-44" rotate={4} offsetX={0} offsetY={0} from="left" delay={0.2} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
