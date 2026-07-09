import { motion } from 'framer-motion'
import { Heart, Camera, MessageCircle, Video, Mail } from 'lucide-react'

const links = {
  shop: ['All Products', 'Best Sellers', 'Merch', 'Gift Cards', 'Custom Orders'],
  about: ['Our Story', 'Locations', 'Careers', 'Press', 'Sustainability'],
  support: ['Contact Us', 'FAQ', 'Shipping & Delivery', 'Returns', 'Privacy Policy'],
}

const socialLinks = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Facebook' },
  { icon: Video, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
}

export default function Footer() {
  return (
    <footer className="bg-choco text-cream pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          <motion.div variants={itemAnim} className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-display text-2xl mb-3">SAVOR <em className="text-rose not-italic">by Dee</em></h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs mb-6">
              Crafting memorable moments, one bite at a time. Shillong's premier bakery since 2022.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose transition-colors"
                  aria-label={label}
                >
                  <Icon size={14} className="text-cream" />
                </a>
              ))}
            </div>
          </motion.div>
          {Object.entries(links).map(([title, items]) => (
            <motion.div key={title} variants={itemAnim}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-cream/80">
                {title}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors min-h-[44px] inline-flex items-center">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-cream/40">&copy; 2024 SAVOR by Dee. All rights reserved.</p>
          <p className="text-xs text-cream/30 flex items-center gap-1">
            Made with <Heart size={10} className="text-rose" /> in Shillong
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
