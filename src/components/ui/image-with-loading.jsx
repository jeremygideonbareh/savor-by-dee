import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Skeleton } from './skeleton'
import { cn } from '@/lib/utils'

export default function ImageWithLoading({ src, alt, className, skeletonClassName }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!loaded && !error && (
        <Skeleton className={cn('absolute inset-0', skeletonClassName)} />
      )}
      <AnimatePresence>
        <motion.img
          src={error ? 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" x="50" text-anchor="middle" dominant-baseline="central" font-size="30">🍰</text></svg>' : src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: loaded || error ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true) }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  )
}
