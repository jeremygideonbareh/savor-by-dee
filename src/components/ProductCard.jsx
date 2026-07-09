import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const [touched, setTouched] = useState(false)
  const { dispatch } = useCart()

  const overlayVisible = hovered || touched

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 active:shadow-md"
    >
      <a
        href="#"
        className="block aspect-square overflow-hidden bg-cream relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTouched(false) }}
        onClick={(e) => {
          e.preventDefault()
          setTouched((p) => !p)
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-opacity duration-500 ${overlayVisible ? 'opacity-100' : 'opacity-0'}`} />
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform ${hovered ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform ${hovered ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-rose text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider z-20 shadow-sm">
            {product.tag}
          </span>
        )}
        {product.comparePrice && (
          <span className="absolute top-3 right-3 bg-gold text-white text-[10px] font-semibold px-2.5 py-1 rounded-full z-20 shadow-sm">
            SALE
          </span>
        )}

        <motion.div
          initial={false}
          animate={{ opacity: overlayVisible ? 1 : 0, y: overlayVisible ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col justify-end p-4 z-20"
        >
          <p className="text-white/90 text-xs leading-relaxed mb-2 line-clamp-2">
            {product.longDescription || product.description}
          </p>
          {product.flavors && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {product.flavors.slice(0, 3).map((f) => (
                <span key={f} className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                  {f}
                </span>
              ))}
              {product.flavors.length > 3 && (
                <span className="text-[10px] text-white/60">+{product.flavors.length - 3}</span>
              )}
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-white text-lg font-semibold">{product.price}</span>
            <Button
              variant="secondary"
              size="sm"
              className="shadow-lg min-h-[36px] text-xs"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                dispatch({ type: 'ADD_ITEM', product })
              }}
            >
              {product.type === 'Add to cart' ? 'Add to cart' : 'Choose options'}
            </Button>
          </div>
        </motion.div>
      </a>
      <div className="p-3 sm:p-4">
        <p className="text-[11px] text-muted uppercase tracking-wider font-medium mb-1">{product.category}</p>
        <a href="#" className="font-medium text-sm text-choco hover:text-rose transition-colors">
          {product.name}
        </a>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-semibold text-sm">{product.price}</span>
          {product.comparePrice && (
            <span className="text-xs text-muted line-through">{product.comparePrice}</span>
          )}
          {product.rating && (
            <span className="text-[11px] text-muted ml-auto">★ {product.rating}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
