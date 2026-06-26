import { useEffect, useRef } from 'react'

const COLORS = ['#B86C4A', '#E8A87C', '#D4A574', '#C4956A', '#A06040', '#8B4513', '#CD853F', '#DEB887']

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function FloatingSprinkles({ count = 12 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sprinkles = Array.from({ length: count }, (_, i) => {
      const el = document.createElement('div')
      const size = randomBetween(4, 10)
      const color = COLORS[i % COLORS.length]

      el.className = 'absolute rounded-full pointer-events-none'
      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${randomBetween(0, 100)}%;
        top: ${randomBetween(0, 100)}%;
        opacity: ${randomBetween(0.08, 0.2)};
        animation: sprinkle-float ${randomBetween(6, 14)}s ease-in-out infinite;
        animation-delay: ${randomBetween(0, 5)}s;
      `
      container.appendChild(el)
      return el
    })

    return () => sprinkles.forEach((el) => el.remove())
  }, [count])

  return (
    <>
      <style>{`
        @keyframes sprinkle-float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-6px) rotate(180deg); }
          75% { transform: translateY(-16px) translateX(10px) rotate(270deg); }
        }
      `}</style>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" />
    </>
  )
}
