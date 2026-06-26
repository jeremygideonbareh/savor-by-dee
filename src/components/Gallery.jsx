import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionEyebrow, CharReveal } from './RevealText'
import FloatingSprinkles from './FloatingSprinkles'
import { GALLERY_IMAGES, IMAGES } from '../data/images'

const polaroidVariants = [
  { rotate: -2, pad: 'p-2.5' },
  { rotate: 2, pad: 'p-2' },
  { rotate: -1.5, pad: 'p-3' },
  { rotate: 1, pad: 'p-2' },
  { rotate: -2.5, pad: 'p-2.5' },
  { rotate: 1.5, pad: 'p-2' },
  { rotate: -1, pad: 'p-3' },
  { rotate: 2.5, pad: 'p-2' },
  { rotate: -0.5, pad: 'p-2.5' },
  { rotate: 0.5, pad: 'p-2' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const galleryItems = GALLERY_IMAGES.map((img, i) => ({
    ...img,
    src: IMAGES[img.key],
    variant: polaroidVariants[i % polaroidVariants.length],
  }))

  const currentIndex = selected !== null ? galleryItems.findIndex((img) => img.src === selected.src) : -1

  const goNext = () => {
    const next = (currentIndex + 1) % galleryItems.length
    setSelected(galleryItems[next])
  }

  const goPrev = () => {
    const prev = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelected(galleryItems[prev])
  }

  return (
    <section id="gallery" className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <FloatingSprinkles count={10} />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10 md:mb-16"
        >
          <SectionEyebrow>Our Gallery</SectionEyebrow>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] text-balance text-foreground break-words whitespace-nowrap">
            <CharReveal>A taste of what we </CharReveal>
            <span className="text-primary italic"><CharReveal delay={0.3}>serve</CharReveal></span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Every creation is a work of art — made fresh, with love, in our Laban kitchen.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {galleryItems.map((img, i) => (
            <motion.button
              key={img.key}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: img.variant.rotate }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06, type: 'spring', stiffness: 100, damping: 16 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              onClick={() => setSelected(img)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`${img.variant.pad} w-full`}>
                <div className="relative w-full aspect-square overflow-hidden rounded-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-foreground text-[11px] font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-sm">
                {img.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 md:p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>

            <motion.img
              key={selected.src}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/40 px-3 py-1.5 md:px-4 md:py-2 rounded-full whitespace-nowrap">
              {selected.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
