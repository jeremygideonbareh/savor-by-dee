import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function DoodleDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative w-full h-16 md:h-20 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 40 Q75 10 150 40 T300 40 T450 40 T600 40 T750 40 T900 40 T1050 40 T1200 40"
          stroke="#B86C4A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity={0.25}
          style={{ pathLength, strokeDasharray: '1 8' }}
        />
        <motion.path
          d="M0 45 Q75 15 150 45 T300 45 T450 45 T600 45 T750 45 T900 45 T1050 45 T1200 45"
          stroke="#B86C4A"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          opacity={0.15}
          style={{ pathLength, strokeDasharray: '1 12' }}
        />
      </svg>
    </div>
  )
}
