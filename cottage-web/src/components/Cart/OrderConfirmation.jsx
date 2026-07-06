import './OrderConfirmation.css'

export default function OrderConfirmation({ order, onDone }) {
  if (!order) {
    return (
      <main id="order-confirmation-page">
        <div className="confirm-inner">
          <p className="confirm-sub">No order found.</p>
          <button className="btn-primary" onClick={onDone}>Back to Menu</button>
        </div>
      </main>
    )
  }

  return (
    <main id="order-confirmation-page" aria-labelledby="confirm-heading">
      <div className="confirm-inner">
        {/* ── CHECKMARK ANIMATION ── */}
        <div className="confirm-icon" aria-hidden="true">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="var(--gold)" strokeWidth="2" className="confirm-circle" />
            <path d="M18 30l9 9 15-15" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="confirm-check" />
          </svg>
        </div>

        <span className="section-eyebrow">Order Received</span>
        <h1 className="section-title" id="confirm-heading" style={{ marginTop: 8 }}>
          On Its Way!
        </h1>
        <div className="gold-divider" style={{ margin: '16px auto 0' }}></div>

        <p className="confirm-kitchen-msg">
          Your order has been sent to the kitchen 🍽️
        </p>

        {/* ── META INFO ── */}
        <div className="confirm-meta">
          <div className="confirm-meta-row">
            <span className="confirm-meta-label">Order ID</span>
            <span className="confirm-meta-value">{order.orderId}</span>
          </div>
          <div className="confirm-meta-row">
            <span className="confirm-meta-label">Room Number</span>
            <span className="confirm-meta-value">{order.roomNumber}</span>
          </div>
          {order.guestName && (
            <div className="confirm-meta-row">
              <span className="confirm-meta-label">Guest</span>
              <span className="confirm-meta-value">{order.guestName}</span>
            </div>
          )}
          <div className="confirm-meta-row">
            <span className="confirm-meta-label">Estimated Wait</span>
            <span className="confirm-meta-value confirm-wait">20–30 minutes</span>
          </div>
        </div>

        {/* ── ITEM LIST ── */}
        <div className="confirm-items">
          <div className="confirm-items-heading">Your Items</div>
          {order.items.map((item, i) => (
            <div className="confirm-item" key={i}>
              {item.imgUrl && (
                <img className="confirm-item-thumb" src={item.imgUrl} alt={item.name} loading="lazy" />
              )}
              <div className="confirm-item-info">
                <div className="confirm-item-name">{item.name}</div>
                <div className="confirm-item-qty">× {item.qty}</div>
              </div>
              <div className="confirm-item-total">₹{(item.price * item.qty).toFixed(0)}</div>
            </div>
          ))}
          <div className="confirm-total-row">
            <span>Total (excl. tax)</span>
            <span>₹{order.subtotal.toFixed(0)}</span>
          </div>
        </div>

        <button
          id="confirm-done-btn"
          className="btn-primary confirm-done-btn"
          onClick={onDone}
        >
          Done
        </button>

        <p className="confirm-footer-note">
          Need help? Call the front desk from your room phone.
        </p>
      </div>
    </main>
  )
}
