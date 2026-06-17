import { useEffect, useRef } from 'react'
import './DishModal.css'

export default function DishModal({ dish, onClose }) {
  const cardRef = useRef(null)

  // close on Escape
  useEffect(() => {
    if (!dish) return
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [dish])

  function handleClose() {
    const card = cardRef.current
    if (!card) { onClose(); return }
    card.classList.add('closing')
    card.addEventListener('animationend', onClose, { once: true })
  }

  if (!dish) return null

  return (
    <div
      className="dish-photo-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo of ${dish.name}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="dish-modal-card" ref={cardRef}>
        <button
          className="dish-modal-close"
          onClick={handleClose}
          aria-label="Close"
        >✕</button>

        <img
          className="dish-modal-img"
          src={dish.imgUrl}
          alt={dish.name}
          loading="lazy"
        />

        <div className="dish-modal-body">
          <div className="dish-modal-header">
            <div className="dish-modal-name">{dish.name}</div>
            <div className="dish-modal-price">{dish.price}</div>
          </div>
          {dish.desc && <div className="dish-modal-desc">{dish.desc}</div>}
          <span
            className="dish-modal-badge"
            style={dish.badgeStyle}
          >{dish.badgeLabel}</span>
        </div>
      </div>
    </div>
  )
}
