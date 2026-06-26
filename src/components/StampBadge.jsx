import { motion } from 'framer-motion'

export default function StampBadge({ label, sublabel, color = '#B86C4A' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="relative inline-flex items-center justify-center"
      style={{ width: 120, height: 120 }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
        <circle
          cx="60" cy="60" r="54"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="4 4"
          opacity={0.6}
        />
        <circle
          cx="60" cy="60" r="50"
          fill={color}
          fillOpacity={0.06}
          stroke="none"
        />
        <text
          x="60" y="46"
          textAnchor="middle"
          fill={color}
          fontSize="11"
          fontWeight="600"
          fontFamily="ui-serif, Georgia, serif"
          letterSpacing="0.5"
        >
          {label}
        </text>
        <text
          x="60" y="62"
          textAnchor="middle"
          fill={color}
          fontSize="20"
          fontWeight="700"
          fontFamily="ui-serif, Georgia, serif"
        >
          {sublabel}
        </text>
        <circle
          cx="60" cy="85"
          r="3"
          fill={color}
          opacity={0.3}
        />
        <circle
          cx="60" cy="85"
          r="1.5"
          fill={color}
          opacity={0.5}
        />
      </svg>
    </motion.div>
  )
}
