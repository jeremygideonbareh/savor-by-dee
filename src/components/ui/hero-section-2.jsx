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
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, onOrder, ...props }, ref) => {
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
          'relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row min-h-screen',
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-[45%] md:p-12 lg:p-16">
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

        {/* Right Side: Gallery wall with framed image */}
        <div className="relative w-full min-h-[50vh] md:w-[55%] md:min-h-screen bg-[#EDE8E0] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8E0] via-[#F0EDE6] to-[#E8E3DB]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5)_0%,transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative z-10 w-[85%] max-w-md"
          >
            <div className="bg-white p-5 shadow-2xl shadow-black/10">
              <div className="relative w-full aspect-[3/4]">
                <img
                  src={backgroundImage}
                  alt=""
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-3 text-center text-[10px] text-muted-foreground/50 tracking-[0.25em] uppercase"
            >
              Vanilla Buttercream · Featured
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    )
  },
)

HeroSection.displayName = 'HeroSection'

export { HeroSection }
