const EyeIcon = () => (
  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 1C3.5 1 1 4.5 1 4.5C1 4.5 3.5 8 6.5 8C9.5 8 12 4.5 12 4.5C12 4.5 9.5 1 6.5 1Z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
    />
    <circle cx="6.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const CartPlusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 1h1.8l1.2 6h7.2l1.2-4.8H3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="11" r="1.2" fill="currentColor"/>
    <circle cx="10.5" cy="11" r="1.2" fill="currentColor"/>
    <line x1="9.5" y1="3.5" x2="9.5" y2="6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="8" y1="5" x2="11" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

export default function MenuItem({ name, desc, price, veg, isNew, imgUrl, onEyeClick, onAddToCart }) {
  return (
    <div className="menu-item">
      {imgUrl && (
        <img
          className="menu-item-thumb"
          src={imgUrl}
          alt={name}
          loading="lazy"
        />
      )}
      <div className="menu-item-left">
        <div className="menu-item-name">
          {veg && <span className="badge-v">V</span>}
          {name}
          {isNew && <span className="badge-new">NEW</span>}
        </div>
        {desc && <div className="menu-item-desc">{desc}</div>}
      </div>
      <div className="menu-item-price">{price}</div>
      <div className="menu-item-actions">
        <button
          className="dish-eye-btn"
          aria-label={`View photo of ${name}`}
          onClick={(e) => { e.stopPropagation(); onEyeClick && onEyeClick() }}
        >
          <EyeIcon />
        </button>
        <button
          className="dish-eye-btn menu-item-cart-btn"
          aria-label={`Add ${name} to cart`}
          onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart() }}
        >
          <CartPlusIcon />
        </button>
      </div>
    </div>
  )
}

