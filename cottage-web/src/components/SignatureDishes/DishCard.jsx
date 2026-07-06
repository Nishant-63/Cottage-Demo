import './SignatureDishes.css'

export default function DishCard({ dish, onView, onAddToCart, style }) {
  return (
    <article className="dish-card reveal" style={style}>
      <div className="dish-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" />
        <span className={`dish-badge ${dish.badgeClass}`}>{dish.badge}</span>
      </div>
      <div className="dish-body">
        <div className="dish-name">{dish.name}</div>
        <div className="dish-desc">{dish.desc}</div>
        <div className="dish-price">₹{dish.price}</div>
        <div className="dish-card-actions">
          <button className="dish-eye-btn" type="button" aria-label={`View ${dish.name}`} onClick={onView}>
            👁️
          </button>
          <button
            className="dish-add-cart-btn btn-primary"
            type="button"
            aria-label={`Add ${dish.name} to cart`}
            onClick={(e) => { e.stopPropagation(); onAddToCart?.() }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

