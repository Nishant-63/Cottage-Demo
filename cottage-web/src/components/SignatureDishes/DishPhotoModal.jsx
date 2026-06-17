import { useEffect, useState, useRef } from 'react'
import './SignatureDishes.css'

export default function DishPhotoModal({ open, dish, onClose }) {
  const [closing, setClosing] = useState(false)
  const backdropRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!open) return
    setClosing(false)

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleClose = () => {
    if (!cardRef.current) {
      onClose()
      return
    }
    setClosing(true)
    const node = cardRef.current
    const listener = () => {
      onClose()
      node.removeEventListener('animationend', listener)
    }
    node.addEventListener('animationend', listener)
  }

  const handleBackdropClick = (event) => {
    if (event.target === backdropRef.current) {
      handleClose()
    }
  }

  if (!open) return null

  return (
    <div
      id="dishPhotoModal"
      className="dish-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dishModalName"
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div ref={cardRef} className={`dish-modal-card ${closing ? 'closing' : ''}`}>
        <button className="dish-modal-close" onClick={handleClose} aria-label="Close">✕</button>
        <img className="dish-modal-img" src={dish.img} alt={dish.name} />
        <div className="dish-modal-body">
          <div className="dish-modal-header">
            <div className="dish-modal-name" id="dishModalName">{dish.name}</div>
            <div className="dish-modal-price">₹{dish.price}</div>
          </div>
          <div className="dish-modal-desc">{dish.desc}</div>
          <span className={`dish-modal-badge ${dish.badgeClass}`}>{dish.badge}</span>
        </div>
      </div>
    </div>
  )
}
