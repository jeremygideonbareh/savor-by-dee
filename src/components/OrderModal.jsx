import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Cake, Send, Clock, Star, Plus } from 'lucide-react'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { dailyMenu, everydayItems, fullMenu, fullMenuCategoryMeta } from '@/data/menu'
import { useCart } from '@/context/CartContext'

function DailyMenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const { dispatch } = useCart()

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    images: [item.image],
    type: 'Add to cart',
    category: item.category,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group relative aspect-square rounded-xl overflow-hidden bg-cream border border-border cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => dispatch({ type: 'ADD_ITEM', product })}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {item.tag && (
        <span className="absolute top-2 left-2 bg-rose text-white text-[9px] font-semibold px-2 py-0.5 rounded-full z-10">
          {item.tag}
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <h3 className="text-white text-sm font-medium leading-tight">{item.name}</h3>
        <span className="text-white/80 text-xs font-semibold">\u20B9{item.price.replace(/[^0-9]/g, '')}</span>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end p-3 z-10"
      >
        <p className="text-white/90 text-[11px] leading-relaxed mb-2 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/70">{item.category}</span>
          <Button
            size="sm"
            className="min-h-[32px] h-8 text-[11px] gap-1 pointer-events-auto"
            onClick={(e) => { e.stopPropagation(); dispatch({ type: 'ADD_ITEM', product }) }}
          >
            <Plus size={12} />
            Add
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function DailyMenuTab() {
  return (
    <div>
      <p className="text-xs text-muted flex items-center gap-1 mb-3">
        <Clock size={12} /> Available today — tap any item to add to cart
      </p>
      <div className="grid grid-cols-2 gap-3">
        {dailyMenu.map((item, i) => (
          <DailyMenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

function CustomCakeTab() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: '',
    flavour: 'Vanilla',
    size: '6 inch',
    filling: 'Buttercream',
    design: '',
    date: '',
  })

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi Savor by Dee! I'd like to order a custom cake:
- Occasion: ${form.occasion || 'Not specified'}
- Flavour: ${form.flavour}
- Size: ${form.size}
- Filling: ${form.filling}
- Design notes: ${form.design || 'None'}
- Needed by: ${form.date || 'Not specified'}
- Name: ${form.name}
- Phone: ${form.phone}`
    window.open(`https://wa.me/919836537447?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-xs text-muted">
        Tell us about your dream cake and we'll create it. Submit and we'll connect on WhatsApp.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-choco block mb-1">Your Name *</label>
          <input required value={form.name} onChange={update('name')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
        </div>
        <div>
          <label className="text-xs font-medium text-choco block mb-1">Phone *</label>
          <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 9XXXXXXXX" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-choco block mb-1">Occasion</label>
        <select value={form.occasion} onChange={update('occasion')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Wedding</option>
          <option>Graduation</option>
          <option>Baby Shower</option>
          <option>Corporate Event</option>
          <option>Just Because</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-medium text-choco block mb-1">Flavour</label>
          <select value={form.flavour} onChange={update('flavour')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
            <option>Vanilla</option>
            <option>Chocolate</option>
            <option>Red Velvet</option>
            <option>Fruit</option>
            <option>Coffee</option>
            <option>Custom</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-choco block mb-1">Size</label>
          <select value={form.size} onChange={update('size')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
            <option>6 inch (8-10 serves)</option>
            <option>8 inch (12-16 serves)</option>
            <option>10 inch (20-25 serves)</option>
            <option>Tiered (custom)</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-choco block mb-1">Filling</label>
          <select value={form.filling} onChange={update('filling')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
            <option>Buttercream</option>
            <option>Cream Cheese</option>
            <option>Ganache</option>
            <option>Jam</option>
            <option>Fruit Compote</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-choco block mb-1">Design Notes</label>
        <textarea value={form.design} onChange={update('design')} rows={3} placeholder="Colours, theme, decorations, message on cake, reference images..." className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose resize-none" />
      </div>

      <div>
        <label className="text-xs font-medium text-choco block mb-1">Needed By</label>
        <input type="date" value={form.date} onChange={update('date')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
      </div>

      <Button type="submit" size="lg" className="w-full gap-2 min-h-[48px]">
        <Send size={16} />
        Submit via WhatsApp
      </Button>
    </form>
  )
}

function EverydayCard({ item, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = item.icon
  const { dispatch } = useCart()

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    images: [item.image],
    type: 'Add to cart',
    category: item.name,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-lg shadow-rose/[0.06] cursor-pointer group"
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="absolute inset-0">
        <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.55] via-white/20 to-rose/[0.08] backdrop-blur-[1px]" />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/15 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose/[0.35] via-gold/[0.35] to-rose/[0.35]" />

      <div className="absolute -top-8 -right-8 w-20 h-20 bg-rose/[0.04] rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gold/[0.04] rounded-full blur-2xl pointer-events-none" />

      <div className="relative p-3.5 sm:p-4">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.55] backdrop-blur-sm border border-white/60 flex items-center justify-center mb-2 shadow-sm shadow-rose/[0.05]">
          <Icon size={16} className={`sm:size-[18px] ${item.color}`} />
        </div>

        <h3 className="text-xs sm:text-sm font-medium text-choco leading-tight">{item.name}</h3>
        <span className="text-[10px] sm:text-xs text-muted font-semibold">{item.price}</span>

        {item.tag && !expanded && (
          <span className="inline-block mt-1.5 text-[8px] sm:text-[9px] font-semibold text-rose bg-rose/[0.08] px-2 py-0.5 rounded-full border border-rose/[0.15]">
            {item.tag}
          </span>
        )}

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="pt-2.5 mt-2.5 border-t border-white/40">
            <p className="text-[10px] sm:text-xs text-muted leading-relaxed mb-2.5">{item.description}</p>
            <Button
              size="sm"
              className="w-full text-[10px] sm:text-xs gap-1 h-8 sm:h-9"
              onClick={(e) => { e.stopPropagation(); dispatch({ type: 'ADD_ITEM', product }) }}
            >
              <Plus size={12} className="sm:size-[14px]" />
              Add to Cart — {item.price}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function EverydayItemsTab() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose/[0.02] via-transparent to-gold/[0.015] pointer-events-none" />

      <div className="relative mb-3 sm:mb-4 text-center">
        <h3 className="text-sm font-medium text-choco">Everyday Treats</h3>
        <p className="text-[10px] text-muted mt-0.5">Tap any item for details</p>
      </div>

      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {everydayItems.map((item, i) => (
          <EverydayCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

function FullMenuItemCard({ item }) {
  const [expanded, setExpanded] = useState(false)
  const { dispatch } = useCart()

  const product = {
    id: item.id,
    name: item.name,
    price: item.price,
    images: [item.image],
    type: 'Add to cart',
    category: item.category,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border overflow-hidden transition-colors cursor-pointer ${
        expanded ? 'border-rose/30 bg-rose/[0.03]' : 'border-border bg-white'
      }`}
    >
      <div
        className="flex items-center gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 min-h-[40px]"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <h4 className="text-xs sm:text-sm font-semibold text-choco leading-tight">{item.name}</h4>
          <span className="text-[11px] sm:text-xs text-muted font-semibold">{item.price}</span>
        </div>
        <Button
          size="sm"
          className="h-7 w-7 p-0 rounded-full shrink-0 pointer-events-auto z-10"
          onClick={(e) => { e.stopPropagation(); dispatch({ type: 'ADD_ITEM', product }) }}
        >
          <Plus size={12} />
        </Button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-2.5 sm:px-3 pb-2 sm:pb-2.5">
          <div className="pt-1.5 border-t border-border/50">
            <p className="text-[10px] sm:text-[11px] text-muted leading-relaxed">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function FullMenuTab() {
  const [openCategory, setOpenCategory] = useState(fullMenuCategoryMeta[0].name)

  return (
    <div className="space-y-2">
      {fullMenuCategoryMeta.map((meta) => {
        const isOpen = openCategory === meta.name
        const items = fullMenu.filter((item) => item.category === meta.name)

        return (
          <div key={meta.name} className="rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setOpenCategory(isOpen ? null : meta.name)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-left transition-colors hover:bg-cream/50 min-h-[44px]"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm sm:text-base font-semibold text-choco">{meta.name}</span>
                <span className="text-[10px] sm:text-xs text-muted font-medium shrink-0">({items.length})</span>
              </div>
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4 text-muted shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </motion.svg>
            </button>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2">
                <div className="px-2.5 py-1.5 rounded-lg bg-cream/80 border border-border">
                  <p className="text-[9px] sm:text-[10px] text-muted">{meta.note}</p>
                </div>
                <div className="space-y-1">
                  {items.map((item) => (
                    <FullMenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default function OrderModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 gap-0 rounded-2xl">
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Cake size={18} className="sm:size-5 text-rose" />
              Order from Savor <span className="text-rose">by</span> Dee
            </DialogTitle>
          </DialogHeader>
        </div>
        <div className="p-3 sm:p-6 pt-3 sm:pt-4">
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="w-full gap-0">
              <TabsTrigger value="daily" className="text-[10px] sm:text-sm px-1.5 sm:px-3 flex-1">
                <Star size={10} className="sm:size-[14px] sm:mr-1" />
                <span className="hidden sm:inline">Daily Menu</span>
                <span className="sm:hidden">Daily</span>
              </TabsTrigger>
              <TabsTrigger value="custom" className="text-[10px] sm:text-sm px-1.5 sm:px-3 flex-1">
                <Cake size={10} className="sm:size-[14px] sm:mr-1" />
                <span className="hidden sm:inline">Custom Cake</span>
                <span className="sm:hidden">Cake</span>
              </TabsTrigger>
              <TabsTrigger value="everyday" className="text-[10px] sm:text-sm px-1.5 sm:px-3 flex-1">
                <ShoppingCart size={10} className="sm:size-[14px] sm:mr-1" />
                <span className="hidden sm:inline">Everyday Items</span>
                <span className="sm:hidden">More</span>
              </TabsTrigger>
              <TabsTrigger value="fullmenu" className="text-[10px] sm:text-sm px-1.5 sm:px-3 flex-1">
                <Star size={10} className="sm:size-[14px] sm:mr-1" />
                <span className="hidden sm:inline">Full Menu</span>
                <span className="sm:hidden">Menu</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="daily">
              <DailyMenuTab />
            </TabsContent>
            <TabsContent value="custom">
              <CustomCakeTab />
            </TabsContent>
            <TabsContent value="everyday">
              <EverydayItemsTab />
            </TabsContent>
            <TabsContent value="fullmenu">
              <FullMenuTab />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
