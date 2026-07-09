import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, cartCount, cartTotal, dispatch } = useCart()

  const handleWhatsApp = () => {
    const msg = items
      .map((i) => `${i.product.name} x${i.quantity} — ₹${(i.quantity * parseFloat(i.product.price.replace(/[^0-9.]/g, ''))).toFixed(0)}`)
      .join('\n')
    const total = `\n\nTotal: ₹${cartTotal.toFixed(0)}\n\nOrder for: Savor by Dee`
    window.open(`https://wa.me/919836537447?text=${encodeURIComponent('Hi! I\'d like to order:\n' + msg + total)}`, '_blank')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border min-h-16">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-rose" />
                <h2 className="font-display text-lg text-choco">Your Cart</h2>
                {cartCount > 0 && (
                  <span className="bg-rose text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="p-2 min-h-[44px] min-w-[44px]" aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <ShoppingBag size={48} className="text-border mb-4" />
                <p className="text-choco font-medium mb-1">Your cart is empty</p>
                <p className="text-muted text-sm">Add some treats to get started!</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {items.map((item) => {
                    const unitPrice = parseFloat(item.product.price.replace(/[^0-9.]/g, ''))
                    return (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 p-3 rounded-xl border border-border"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-cream shrink-0">
                          <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-medium text-choco">{item.product.name}</h4>
                              <p className="text-xs text-muted">{item.product.category}</p>
                            </div>
                            <button
                              onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.product.id })}
                              className="text-muted hover:text-rose transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 -mt-1"
                              aria-label="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1 border border-border rounded-lg">
                              <button
                                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.product.id, quantity: item.quantity - 1 })}
                                className="min-h-[32px] min-w-[32px] flex items-center justify-center text-choco hover:text-rose transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-sm font-medium text-choco w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.product.id, quantity: item.quantity + 1 })}
                                className="min-h-[32px] min-w-[32px] flex items-center justify-center text-choco hover:text-rose transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="text-sm font-semibold text-choco">
                              \u20B9{(unitPrice * item.quantity).toFixed(0)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="border-t border-border p-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-semibold text-choco">\u20B9{cartTotal.toFixed(0)}</span>
                  </div>
                  <Button
                    size="lg"
                    className="w-full gap-2 min-h-[48px]"
                    onClick={handleWhatsApp}
                  >
                    <Send size={16} />
                    Checkout via WhatsApp
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
