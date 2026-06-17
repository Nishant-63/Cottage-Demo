const EyeIcon = () => (
  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 1C3.5 1 1 4.5 1 4.5C1 4.5 3.5 8 6.5 8C9.5 8 12 4.5 12 4.5C12 4.5 9.5 1 6.5 1Z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
    />
    <circle cx="6.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

export default function MenuItem({ name, desc, price, veg, isNew, onEyeClick }) {
  return (
    <div className="menu-item">
      <div className="menu-item-left">
        <div className="menu-item-name">
          {veg && <span className="badge-v">V</span>}
          {name}
          {isNew && <span className="badge-new">NEW</span>}
        </div>
        {desc && <div className="menu-item-desc">{desc}</div>}
      </div>
      <div className="menu-item-price">{price}</div>
      <button
        className="dish-eye-btn"
        aria-label={`View photo of ${name}`}
        onClick={(e) => { e.stopPropagation(); onEyeClick && onEyeClick() }}
      >
        <EyeIcon />
      </button>
    </div>
  )
}
