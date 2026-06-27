const PEXELS = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop`

export const bakeryPhotos = [
  PEXELS(2067396),
  PEXELS(132694),
  PEXELS(140831),
  PEXELS(14766327),
  PEXELS(1793037),
  PEXELS(32916204),
  PEXELS(2144200),
  PEXELS(7328340),
  PEXELS(9820),
  PEXELS(14105),
]

export const menuItems = [
  { name: 'Vanilla Buttercream', desc: 'Simple, elegant, and absolutely delicious. Classic vanilla cake with silky buttercream frosting.', highlight: 'Classic', price: '₹299', image: PEXELS(140831), badge: 'bg-green-100 text-green-700' },
  { name: 'Cupcakes', desc: 'Beautifully frosted cupcakes in a variety of flavours — perfect for parties, events, or a sweet treat.', highlight: 'Best Seller', price: '₹39', image: PEXELS(14105), badge: 'bg-amber-100 text-amber-700' },
  { name: 'Chocolate Cake', desc: 'Rich, moist chocolate sponge layered with silky ganache — a timeless classic that never disappoints.', highlight: 'Must Try', price: '₹349', image: PEXELS(132694), badge: 'bg-orange-100 text-orange-700' },
  { name: 'Tiramisu', desc: 'Coffee-soaked layers with mascarpone cream — our take on the beloved Italian classic.', highlight: 'Customer Pick', price: '₹399', image: PEXELS(14766327), badge: 'bg-pink-100 text-pink-700' },
  { name: 'Chocolate Affair', desc: 'The Chocolate Affair! Chocolate Truffle cake with White Chocolate Buttercream and berries.', highlight: 'Signature', price: '₹499', image: PEXELS(2067396), badge: 'bg-rose-100 text-rose-700' },
  { name: 'Celebration Cakes', desc: 'Jersey cakes, themed designs, and custom creations for every milestone. Let us bring your vision to life.', highlight: 'Custom Order', price: '₹599+', image: PEXELS(1793037), badge: 'bg-rose-100 text-rose-700' },
]

export const galleryImages = [
  { src: PEXELS(140831), alt: 'Vanilla Buttercream Cake', caption: 'Vanilla Buttercream' },
  { src: PEXELS(14105), alt: 'Frosted Cupcakes', caption: 'Cupcakes' },
  { src: PEXELS(132694), alt: 'Chocolate Cake', caption: 'Chocolate Cake' },
  { src: PEXELS(14766327), alt: 'Tiramisu Cake', caption: 'Tiramisu' },
  { src: PEXELS(1793037), alt: 'Jersey Cake', caption: 'Jersey Cake' },
  { src: PEXELS(32916204), alt: 'Sweet Stitches Cake', caption: 'Sweet Stitches' },
]

export const reviews = [
  { name: 'Priya S.', text: 'Ordered a custom birthday cake and it was absolutely stunning! Beautifully decorated and so delicious.', rating: 5, source: 'Google', when: '2026' },
  { name: 'Rahul M.', text: 'The best cupcakes in Shillong! Moist, perfectly sweet, and beautifully frosted.', rating: 5, source: 'Google', when: '2026' },
  { name: 'Ananya D.', text: 'I ordered a tiramisu cake and it was divine. You can taste the quality in every bite.', rating: 5, source: 'Google', when: '2026' },
  { name: 'Vikram T.', text: 'Their custom cake design exceeded my expectations. The attention to detail is remarkable.', rating: 5, source: 'Google', when: '2026' },
  { name: 'Megan W.', text: 'The vanilla buttercream cake was simple perfection. Fresh, light, and not overly sweet.', rating: 5, source: 'Google', when: '2026' },
  { name: 'Tasha K.', text: 'Absolutely loved the jersey cake! Fresh mango was the perfect choice. Beautiful presentation.', rating: 5, source: 'Google', when: '2026' },
]

export const contactInfo = {
  address: 'Near Police Station\nLaban, Shillong, Meghalaya',
  phone: '+91 98365 37447',
  hours: 'Mon–Sun: 10:00 AM – 8:00 PM',
  services: 'Pre-book · Custom Orders · Home Delivery',
  mapsQuery: 'Laban+Shillong+Meghalaya',
  lat: 25.57,
  lng: 91.89,
}
