import { useState, useEffect } from 'react'
import './SignatureDishes.css'
import { dishes } from '../../data/dishes'
import DishCard from './DishCard'
import DishPhotoModal from './DishPhotoModal'
import { useCart } from '../../context/CartContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SignatureDishes({ showToast }) {
  const [modalDish, setModalDish] = useState(null)
  const { dispatch } = useCart()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.set('.dish-card', { opacity: 0, y: 40 })
    ScrollTrigger.batch('.dish-card', {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  function addToCart(dish) {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${dish.name}-${dish.price}`,
        name: dish.name,
        price: dish.price,
        qty: 1,
        imgUrl: dish.img,
      },
    })
    showToast?.(`Added "${dish.name}" to your cart`)
  }

  return (
    <section id="signature" aria-labelledby="sig-heading">
      <div className="section-header" id="sig-header">
        <span className="section-eyebrow">Curated Favourites</span>
        <h2 className="section-title" id="sig-heading">
          <span className="split-heading-wrap">
            <span className="split-heading-inner">Our Most Loved</span>
          </span>
        </h2>
        <div id="sig-divider" className="gold-divider"></div>
        <p className="section-sub" style={{ marginTop: 16 }}>
          Eight dishes that tell the Restaurant story.
        </p>
      </div>

      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <DishCard
            key={dish.id}
            dish={dish}
            onView={() => setModalDish(dish)}
            onAddToCart={() => addToCart(dish)}
            style={{ transitionDelay: `${index * 0.05}s` }}
          />
        ))}
      </div>

      <div className="dishes-cta reveal">
        <a href="#fullmenu" className="btn-ghost">View Full Menu →</a>
      </div>

      {modalDish && (
        <DishPhotoModal open={!!modalDish} dish={modalDish} onClose={() => setModalDish(null)} />
      )}
    </section>
  )
}

