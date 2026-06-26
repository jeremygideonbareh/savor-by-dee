import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionEyebrow, CharReveal } from './RevealText'
import { GALLERY_IMAGES, IMAGES } from '../data/images'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const galleryItems = GALLERY_IMAGES.map((img) => ({
    ...img,
    src: IMAGES[img.key],
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
    <section id="gallery" className="relative py-20 md:py-28 lg:py-36 px-0 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16 px-4 md:px-6"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.key}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative w-full aspect-[4/3] overflow-hidden bg-[#EDE8E0] group cursor-pointer text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm md:text-base font-medium tracking-wide">
                  {item.caption}
                </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 md:p-4"
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
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/50 px-4 py-2 rounded-full whitespace-nowrap">
              {selected.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}