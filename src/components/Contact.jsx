import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionEyebrow, CharReveal } from './RevealText'
import { contactInfo, bakeryPhotos } from '../data'

const infoCards = [
  { icon: MapPin, label: 'Location', value: contactInfo.address, href: `https://www.google.com/maps/place/${contactInfo.mapsQuery}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: Clock, label: 'Hours', value: contactInfo.hours },
  { icon: MessageCircle, label: 'Pre-book', value: contactInfo.services },
]

export default function Contact({ onOrder }) {
  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] text-foreground mt-4">
            <CharReveal>Find us in </CharReveal>
            <span className="text-primary italic"><CharReveal delay={0.3}>Laban</CharReveal></span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Pre-book your custom orders, give us a call, or visit our store. We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-3 md:space-y-4"
          >
            {infoCards.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 rounded-xl border border-primary/10 bg-white p-3 md:p-5 shadow-sm"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs md:text-sm text-foreground hover:text-primary transition-colors whitespace-pre-line break-words">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm text-foreground whitespace-pre-line break-words">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex gap-2 md:gap-3 pt-1 md:pt-2"
            >
              <Button onClick={onOrder} className="flex-1 min-h-11 text-xs md:text-sm">
                Pre-book Now
              </Button>
              <a href={`https://www.google.com/maps/place/${contactInfo.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="neutral" className="w-full min-h-11 text-xs md:text-sm">
                  Directions
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden border border-primary/10 h-[250px] md:h-[400px] shadow-sm"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5!2d${contactInfo.lng}!3d${contactInfo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f7af1ecd89d%3A0xb6717239703d25ef!2sLaban%2C%20Shillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1`}
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Savor by Dee location — Laban, Shillong"
            />
          </motion.div>
        </div>

        {/* Full-bleed photo CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-primary/10 mt-16 md:mt-24"
        >
          <div className="absolute inset-0">
            <img src={bakeryPhotos[6]} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #f8f2edee, #f8f2ed99)' }} />
          </div>
          <div className="relative px-8 py-16 md:py-24 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-foreground">
              Ready to order something <span className="text-primary italic">beautiful</span>?
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
              Custom cakes, artisanal bakes, and sweet creations made just for you.
            </p>
            <motion.button
              onClick={onOrder}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-8 py-3.5 text-sm font-semibold rounded-full transition-colors inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90"
            >
              Pre-book
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
