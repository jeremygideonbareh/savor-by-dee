const PEXELS = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop`

export const IMAGES = {
  'vanilla-buttercream': PEXELS(140831),
  cupcakes: PEXELS(14105),
  'chocolate-cake': PEXELS(132694),
  tiramisu: PEXELS(14766327),
  'jersey-cake': PEXELS(1793037),
  'sweet-stitches': PEXELS(32916204),
  'flower-cake-pot': PEXELS(2144200),
  'chocolate-affair': PEXELS(2067396),
  'birthday-27': PEXELS(7328340),
  'motocross-cake': PEXELS(9820),
}

export const GALLERY_IMAGES = [
  { key: 'vanilla-buttercream', alt: 'Vanilla Buttercream Cake', caption: 'Vanilla Buttercream' },
  { key: 'cupcakes', alt: 'Frosted Cupcakes', caption: 'Cupcakes' },
  { key: 'chocolate-cake', alt: 'Chocolate Cake', caption: 'Chocolate Cake' },
  { key: 'tiramisu', alt: 'Tiramisu Cake', caption: 'Tiramisu' },
  { key: 'jersey-cake', alt: 'Jersey Cake', caption: 'Jersey Cake' },
  { key: 'sweet-stitches', alt: 'Sweet Stitches Cake', caption: 'Sweet Stitches' },
  { key: 'flower-cake-pot', alt: 'Flower Cake Pot', caption: 'Flower Cake Pot' },
  { key: 'chocolate-affair', alt: 'Chocolate Affair', caption: 'Chocolate Affair' },
  { key: 'birthday-27', alt: '27th Birthday Cake', caption: 'Birthday Elegance' },
  { key: 'motocross-cake', alt: 'Motocross Theme Cake', caption: 'Motocross Cake' },
]

export const MENU_IMAGES = [
  { key: 'vanilla-buttercream', name: 'Vanilla Buttercream', price: '₹299', desc: 'Simple, elegant, and absolutely delicious. Classic vanilla cake with silky buttercream frosting.', highlight: 'Classic', badge: 'bg-green-100 text-green-700' },
  { key: 'cupcakes', name: 'Cupcakes', price: '₹39', desc: 'Beautifully frosted cupcakes in a variety of flavours — perfect for parties, events, or a sweet treat.', highlight: 'Best Seller', badge: 'bg-amber-100 text-amber-700' },
  { key: 'chocolate-cake', name: 'Chocolate Cake', price: '₹349', desc: 'Rich, moist chocolate sponge layered with silky ganache — a timeless classic that never disappoints.', highlight: 'Must Try', badge: 'bg-orange-100 text-orange-700' },
  { key: 'tiramisu', name: 'Tiramisu', price: '₹399', desc: 'Coffee-soaked layers with mascarpone cream — our take on the beloved Italian classic.', highlight: 'Customer Pick', badge: 'bg-pink-100 text-pink-700' },
  { key: 'chocolate-affair', name: 'Chocolate Affair', price: '₹499', desc: 'The Chocolate Affair! Chocolate Truffle cake with White Chocolate Buttercream and berries.', highlight: 'Signature', badge: 'bg-rose-100 text-rose-700' },
  { key: 'jersey-cake', name: 'Celebration Cakes', price: '₹599+', desc: 'Jersey cakes, themed designs, and custom creations for every milestone. Let us bring your vision to life.', highlight: 'Custom Order', badge: 'bg-rose-100 text-rose-700' },
]