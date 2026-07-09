import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.product.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: 1 }] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.id
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] }, () => {
    try {
      const saved = localStorage.getItem('savor-cart')
      return saved ? { items: JSON.parse(saved) } : { items: [] }
    } catch {
      return { items: [] }
    }
  })

  useEffect(() => {
    localStorage.setItem('savor-cart', JSON.stringify(state.items))
  }, [state.items])

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const cartTotal = state.items.reduce((sum, i) => sum + i.quantity * parseFloat(i.product.price.replace(/[^0-9.]/g, '')), 0)

  return (
    <CartContext.Provider value={{ items: state.items, cartCount, cartTotal, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
