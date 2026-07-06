import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

const LS_KEY = 'cottage_cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.id === action.payload.id)
      if (existing) {
        return state.map(i =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...state, { ...action.payload, qty: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.payload.id)
    case 'UPDATE_QTY': {
      if (action.payload.qty <= 0) {
        return state.filter(i => i.id !== action.payload.id)
      }
      return state.map(i =>
        i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
      )
    }
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  // persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(cart))
  }, [cart])

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, dispatch, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
