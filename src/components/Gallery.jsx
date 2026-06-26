import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionEyebrow, CharReveal } from './RevealText'
import FloatingSprinkles from './FloatingSprinkles'
import ArtPieceCircle from './ArtPieceCircle'
import ArtPieceLines from './ArtPieceLines'
import ArtPieceMonogram from './ArtPieceMonogram'
import ArtPieceSwatch from './ArtPieceSwatch'
import { GALLERY_IMAGES, IMAGES } from '../data/images'

const ART_COMPONENTS = {
  ArtPieceCircle,
  ArtPieceLines,
  ArtPieceMonogram,
  ArtPieceSwatch,
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const galleryItems = GALLERY_IMAGES.map((img) => ({
    ...img,
    src: img.type === 'photo' ? IMAGES[img.key] : null,
  }))

  const photoItems = galleryItems.filter((img) => img.type === 'photo')
  const currentIndex = selected !== null ? photoItems.findIndex((img) => img.src === selected.src) : -1

  const goNext = () => {
    const next = (currentIndex + 1) % photoItems.length
    setSelected(photoItems[next])
  }

  const goPrev = () => {
    const prev = (currentIndex - 1 + photoItems.length) % photoItems.length
    setSelected(photoItems[prev])
  }

  return (
    <section id="gallery" className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8E0]/30 via-[#F0EDE6]/20 to-[#EDE8E0]/30" />
      <FloatingSprinkles count={8} />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.type === 'art' ? `art-${i}` : item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', stiffness: 100, damping: 18 }}
              className="group"
            >
              {item.type === 'photo' ? (
                <motion.button
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="w-full text-left"
                >
                  <div className="bg-white p-3 shadow-lg shadow-black/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/10">
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#FAFAF8]">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-2 px-1">
                    <p className="text-[11px] font-medium text-foreground/70 tracking-wide uppercase">
                      {item.caption}
                    </p>
                  </div>
                </motion.button>
              ) : (
                <div className="w-full">
                  <div className="bg-white p-3 shadow-lg shadow-black/5">
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#FAFAF8]">
                      <ArtComponent name={item.component} />
                    </div>
                  </div>
                  <div className="mt-2 px-1">
                    <p className="text-[11px] font-medium text-foreground/70 tracking-wide uppercase">
                      {item.caption}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
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

function ArtComponent({ name }) {
  const Component = ART_COMPONENTS[name]
  return Component ? <Component /> : null
}
