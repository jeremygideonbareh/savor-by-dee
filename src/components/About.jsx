import { motion } from 'framer-motion'
import { SectionEyebrow, SectionHeading, WordReveal } from './RevealText'
import StampBadge from './StampBadge'

const values = [
  {
    title: 'Handcrafted Daily',
    desc: 'Every cake, cupcake, and pastry is made from scratch using the finest ingredients and traditional techniques.',
    icon: '🧑‍🍳',
  },
  {
    title: 'Rated 4.6 Stars',
    desc: 'Our community rates us 4.6 — every review, every order, every creation reflects our commitment to excellence.',
    icon: '⭐',
    stamp: true,
  },
  {
    title: 'Community Rooted',
    desc: 'Nestled in Laban, Shillong — we build connections over custom cakes, warm service, and artisanal bakes.',
    icon: '🤝',
  },
]

const patternSVG = encodeURIComponent(`
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="1.5" fill="#B86C4A" opacity="0.15"/>
  <circle cx="50" cy="30" r="1" fill="#B86C4A" opacity="0.12"/>
  <circle cx="30" cy="50" r="1.5" fill="#B86C4A" opacity="0.1"/>
  <circle cx="40" cy="10" r="0.8" fill="#B86C4A" opacity="0.12"/>
  <circle cx="20" cy="40" r="1" fill="#B86C4A" opacity="0.08"/>
  <path d="M0 30 Q15 25 30 30 Q45 35 60 30" stroke="#B86C4A" stroke-width="0.5" fill="none" opacity="0.08"/>
  <path d="M0 50 Q15 45 30 50 Q45 55 60 50" stroke="#B86C4A" stroke-width="0.5" fill="none" opacity="0.06"/>
</svg>
`)

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-[#F7F4F0]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${patternSVG}")`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4F0] via-transparent to-[#F7F4F0] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4F0]/80 via-transparent to-[#F7F4F0]/80 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>About Us</SectionEyebrow>
              <SectionHeading className="text-lg sm:text-xl md:text-4xl lg:text-5xl whitespace-nowrap">
              Every bite tells a story
            </SectionHeading>
            <div className="mt-6 md:mt-8 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
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
            className="space-y-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-xl border border-primary/20 bg-white/90 backdrop-blur-sm p-5 md:p-6 hover:border-primary/40 hover:bg-white transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  {v.stamp ? (
                    <StampBadge label="Rated" sublabel="4.6" />
                  ) : (
                    <span className="text-xl shrink-0 mt-0.5">{v.icon}</span>
                  )}
                  <div>
                    <h3 className="font-medium text-foreground text-base md:text-lg">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
