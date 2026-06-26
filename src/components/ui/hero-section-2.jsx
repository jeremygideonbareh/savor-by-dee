import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Globe, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const icons = {
  website: Globe,
  phone: Phone,
  address: MapPin,
}

function InfoIcon({ type }) {
  const Icon = icons[type]
  return (
    <div className="mr-2 flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
  )
}

const HeroSection = React.forwardRef(
  ({ className, logo, slogan, title, subtitle, callToAction, contactInfo, onOrder, ...props }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    }

    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row md:min-h-dvh',
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-6 md:p-12 lg:p-16 md:w-[50%]">
          <div>
            <motion.header className="mb-12" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  {logo.url && (
                    <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                  )}
                  <div>
                    {logo.text && (
                      <p className="text-lg font-bold text-foreground">{logo.text}</p>
                    )}
                    {slogan && (
                      <p className="text-xs tracking-wider text-muted-foreground">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-balance text-foreground font-serif"
                style={{ fontVariationSettings: '"SOFT" 80' }}
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-20 bg-primary"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={itemVariants}
              >
                <Button onClick={onOrder} size="lg" className="min-h-11 text-sm w-full sm:w-auto">
                  {callToAction.text}
                </Button>
                <a href="#menu" className="w-full sm:w-auto">
                  <Button variant="neutral" size="lg" className="min-h-11 text-sm w-full">
                    Explore Menu
                  </Button>
                </a>
              </motion.div>
            </motion.main>
          </div>

          <motion.footer className="mt-12 w-full" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Right Side: Light ambient placeholder */}
        <div className="relative w-full min-h-[40vh] md:w-[50%] md:min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDF8F5] via-[#F5F0EB] to-[#F0EAE4]">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4A89A\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <svg viewBox="0 0 400 400" className="w-72 h-72 md:w-96 md:h-96 text-primary/20">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <text x="200" y="220" textAnchor="middle" fill="currentColor" fontSize="160" fontFamily="serif" fontWeight="300" letterSpacing="10">S</text>
            </svg>
          </motion.div>
        </div>
      </motion.section>
    )
  },
)

HeroSection.displayName = 'HeroSection'

export { HeroSection }