import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import './CartPage.css'

const LS_ORDERS_KEY = 'cottage_orders'

function submitOrder(order) {
  // Append to existing orders array in localStorage
  // This function is isolated so it can be swapped for a real API call later
  try {
    const existing = JSON.parse(localStorage.getItem(LS_ORDERS_KEY) || '[]')
    existing.push(order)
    localStorage.setItem(LS_ORDERS_KEY, JSON.stringify(existing))
  } catch (e) {
    console.error('Failed to save order', e)
  }
}

export default function CartPage({ onBack, onOrderPlaced, tableNumber = '' }) {
  const { cart, dispatch, cartTotal } = useCart()
  const [guestName, setGuestName] = useState('')
  const [placing, setPlacing] = useState(false)

  const hasTable = tableNumber.trim() !== ''
  const canPlace = cart.length > 0 && hasTable && !placing

  function handleQty(id, delta) {
    const item = cart.find(i => i.id === id)
    if (!item) return
    const newQty = item.qty + delta
    if (newQty <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id } })
    } else {
      dispatch({ type: 'UPDATE_QTY', payload: { id, qty: newQty } })
    }
  }

  function handleRemove(id) {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  function handlePlaceOrder(e) {
    e.preventDefault()
    if (!canPlace) return
    setPlacing(true)

    const order = {
      orderId: `ORD-${Date.now()}`,
      tableNumber: tableNumber.trim(),
      guestName: guestName.trim(),
      items: cart.map(i => ({ ...i })),
      subtotal: cartTotal,
      placedAt: new Date().toISOString(),
    }

    submitOrder(order)
    dispatch({ type: 'CLEAR_CART' })
    setPlacing(false)
    onOrderPlaced(order)
  }

  return (
    <main id="cart-page" aria-labelledby="cart-heading">
      <div className="cart-page-inner">

        <button
          id="cart-back-btn"
          className="cart-back-btn"
          onClick={onBack}
          aria-label="Back to menu"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M15 6H1M1 6L6 1M1 6l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Menu
        </button>

        <div className="cart-section-header">
          <span className="section-eyebrow">In-Room Dining</span>
          <h1 className="section-title" id="cart-heading">Your Order</h1>
          <div className="gold-divider" style={{ margin: '16px auto 0' }}></div>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p className="cart-empty-msg">Your cart is empty.</p>
            <p className="cart-empty-sub">Browse the menu and add dishes you love.</p>
            <button className="btn-primary" onClick={onBack} style={{ marginTop: 24 }}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* ── ITEM LIST ── */}
            <div className="cart-items-section">
              <div className="cart-items-list" role="list">
                {cart.map(item => (
                  <div className="cart-item" key={item.id} role="listitem">
                    <img
                      className="cart-item-thumb"
                      src={item.imgUrl}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-unit">₹{item.price.toFixed(0)} each</div>
                    </div>
                    <div className="cart-item-qty-stepper">
                      <button
                        className="qty-btn"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => handleQty(item.id, -1)}
                      >−</button>
                      <span className="qty-value" aria-live="polite">{item.qty}</span>
                      <button
                        className="qty-btn"
                        aria-label={`Increase ${item.name}`}
                        onClick={() => handleQty(item.id, +1)}
                      >+</button>
                    </div>
                    <div className="cart-item-line-total">
                      ₹{(item.price * item.qty).toFixed(0)}
                    </div>
                    <button
                      className="cart-item-remove"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => handleRemove(item.id)}
                    >✕</button>
                  </div>
                ))}
              </div>

              {/* ── TOTALS ── */}
              <div className="cart-totals">
                <div className="cart-totals-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(0)}</span>
                </div>
                <p className="cart-tax-note">*Taxes extra as applicable</p>
                <div className="cart-totals-row cart-total-final">
                  <span>Total (excl. tax)</span>
                  <span>₹{cartTotal.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* ── ORDER FORM ── */}
            <form className="cart-order-form" onSubmit={handlePlaceOrder} noValidate>
              <div className="cart-form-heading">Table Details</div>

              {/* ── TABLE READ-ONLY DISPLAY ── */}
              {hasTable ? (
                <div className="cart-table-detected">
                  <span className="cart-table-icon">📍</span>
                  <div>
                    <div className="cart-table-label">Your Table</div>
                    <div className="cart-table-number">Table {tableNumber}</div>
                  </div>
                </div>
              ) : (
                <div className="cart-table-warning" role="alert">
                  <span className="cart-table-warning-icon">⚠️</span>
                  <div>
                    <div className="cart-table-warning-title">Table not detected</div>
                    <div className="cart-table-warning-msg">Please scan the QR code at your table to continue.</div>
                  </div>
                </div>
              )}

              <div className="form-group" style={{ marginTop: 20 }}>
                <label htmlFor="guestName">Guest Name <span className="cart-optional">(optional)</span></label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  placeholder="Your name"
                  value={guestName}
                  onChange={e => setGuestName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              <button
                id="place-order-btn"
                type="submit"
                className="btn-primary cart-place-order-btn"
                disabled={!canPlace}
                aria-disabled={!canPlace}
              >
                {placing ? 'Placing Order…' : 'Place Order'}
              </button>

              <p className="cart-note">
                Your order will be sent directly to the kitchen. Average delivery time: 20–30 minutes.
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
