import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Camera, Send } from 'lucide-react'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { sizes, servings, flavors, fillings, frostings, shapes, dietary, occasions } from '@/data/custom-cakes'

const PHONE = '919836537447'

export default function CustomCakeModal({ open, onOpenChange, product }) {
  const fileRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: '',
    size: '',
    servings: '',
    flavor: '',
    filling: '',
    frosting: '',
    shape: '',
    dietary: '',
    colorScheme: '',
    theme: '',
    textOnCake: '',
    designNotes: '',
    description: '',
    date: '',
  })
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handlePhoto = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPhoto(file)
    const reader = new FileReader()
    reader.onload = (ev) => setPhotoPreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const p = product || {}
    const tier = p.tier || 'classic'
    const lines = [
      `Hi Savor by Dee! I'd like to order a custom cake.`,
      `---`,
      `Product: ${p.name || 'Custom Cake'}`,
      `Tier: ${tier}`,
      form.occasion && `Occasion: ${form.occasion}`,
      form.size && `Size: ${form.size}`,
      form.servings && `Servings: ${form.servings}`,
      form.flavor && `Flavour: ${form.flavor}`,
      form.filling && `Filling: ${form.filling}`,
      form.frosting && `Frosting: ${form.frosting}`,
      tier !== 'classic' && form.shape && `Shape: ${form.shape}`,
      tier !== 'classic' && form.dietary && `Dietary preference: ${form.dietary}`,
      tier !== 'classic' && form.colorScheme && `Colour scheme: ${form.colorScheme}`,
      tier !== 'classic' && form.theme && `Theme: ${form.theme}`,
      form.textOnCake && `Text on cake: ${form.textOnCake}`,
      form.designNotes && `Design notes: ${form.designNotes}`,
      tier === 'custom' && form.description && `Description: ${form.description}`,
      tier === 'custom' && photo && `** Reference image selected **`,
      `Needed by: ${form.date || 'Not specified'}`,
      `---`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ]
    const msg = lines.filter(Boolean).join('\n')
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
    onOpenChange(false)
  }

  const isCustom = product?.tier === 'custom'
  const isDesigner = product?.tier === 'designer'
  const showExtra = isCustom || isDesigner

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="w-7 h-7 rounded-full bg-rose/10 flex items-center justify-center">
              <Camera size={14} className="text-rose" />
            </span>
            {product?.name || 'Custom Cake'}
          </DialogTitle>
          <p className="text-xs text-muted mt-1">
            {isCustom
              ? 'Upload a reference photo and describe your dream cake.'
              : 'Customise every detail to make it perfect.'}
            {product?.price && ` Starting at ${product.price}.`}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {isCustom && (
            <div className="bg-cream rounded-xl p-4 border border-border">
              <p className="text-xs font-semibold text-choco mb-3 flex items-center gap-1.5">
                <Camera size={14} className="text-rose" />
                Reference Photo
              </p>
              {photoPreview ? (
                <div className="relative inline-block">
                  <img
                    src={photoPreview}
                    alt="Reference"
                    className="w-32 h-32 object-cover rounded-lg border border-border"
                  />
                  <button
                    type="button"
                    onClick={() => { setPhoto(null); setPhotoPreview(null); if (fileRef.current) fileRef.current.value = '' }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-rose text-white rounded-full text-xs leading-none flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="w-full border-2 border-dashed border-border rounded-lg py-6 flex flex-col items-center gap-2 text-muted hover:text-rose hover:border-rose transition-colors"
                >
                  <Upload size={20} />
                  <span className="text-xs font-medium">Click to upload a photo</span>
                  <span className="text-[10px] text-muted/60">JPG, PNG, WEBP accepted</span>
                </button>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                className="hidden"
              />
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Size</label>
              <select value={form.size} onChange={update('size')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select size</option>
                {sizes.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Servings</label>
              <select value={form.servings} onChange={update('servings')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select servings</option>
                {servings.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Flavour</label>
              <select value={form.flavor} onChange={update('flavor')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select flavour</option>
                {flavors.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Filling</label>
              <select value={form.filling} onChange={update('filling')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select filling</option>
                {fillings.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Frosting</label>
              <select value={form.frosting} onChange={update('frosting')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select frosting</option>
                {frostings.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Occasion</label>
              <select value={form.occasion} onChange={update('occasion')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                <option value="">Select occasion</option>
                {occasions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-choco block mb-1">Needed By</label>
              <input type="date" value={form.date} onChange={update('date')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-choco block mb-1">Text on Cake</label>
            <input value={form.textOnCake} onChange={update('textOnCake')} placeholder="e.g. Happy Birthday, Sarah!" maxLength={50} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
          </div>

          {showExtra && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 pt-1 border-t border-border"
            >
              <p className="text-xs font-semibold text-choco mt-1">Designer Options</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-choco block mb-1">Shape</label>
                  <select value={form.shape} onChange={update('shape')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                    <option value="">Select shape</option>
                    {shapes.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-choco block mb-1">Dietary Preference</label>
                  <select value={form.dietary} onChange={update('dietary')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose bg-white min-h-[44px]">
                    <option value="">Select dietary</option>
                    {dietary.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-choco block mb-1">Colour Scheme</label>
                  <input value={form.colorScheme} onChange={update('colorScheme')} placeholder="e.g. Pink & gold, pastel blue" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-choco block mb-1">Theme</label>
                  <input value={form.theme} onChange={update('theme')} placeholder="e.g. Floral, vintage, cartoon" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-choco block mb-1">Design Notes</label>
                <textarea value={form.designNotes} onChange={update('designNotes')} rows={3} placeholder="Any special design details, preferences, or inspiration..." className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose resize-none min-h-[80px]" />
              </div>
            </motion.div>
          )}

          {isCustom && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 pt-1 border-t border-border"
            >
              <p className="text-xs font-semibold text-choco mt-1">Fully Custom Details</p>
              <div>
                <label className="text-xs font-medium text-choco block mb-1">Describe Your Dream Cake *</label>
                <textarea value={form.description} onChange={update('description')} rows={4} placeholder="Tell us everything — what the cake looks like, flavours, decorations, any reference details..." className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose resize-none min-h-[100px]" />
              </div>
            </motion.div>
          )}

          <div className="border-t border-border pt-4">
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs font-medium text-choco block mb-1">Your Name *</label>
                <input required value={form.name} onChange={update('name')} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
              </div>
              <div>
                <label className="text-xs font-medium text-choco block mb-1">Phone *</label>
                <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 9XXXXXXXX" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose min-h-[44px]" />
              </div>
            </div>
            <Button type="submit" className="w-full min-h-[48px] text-sm gap-2">
              <Send size={14} />
              Send Enquiry via WhatsApp
            </Button>
            <p className="text-[10px] text-muted/60 text-center mt-2">
              {isCustom && photo ? 'Reference image selected — please send it when chatting on WhatsApp. ' : ''}
              We&rsquo;ll respond within 24 hours.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
