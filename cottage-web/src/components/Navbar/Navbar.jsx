import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import './Navbar.css'

const CartIcon = () => (
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 1h2.2l1.5 7.5h9l1.5-6H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="13.5" r="1.5" fill="currentColor"/>
    <circle cx="13.5" cy="13.5" r="1.5" fill="currentColor"/>
  </svg>
)

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleCartClick = () => {
    closeMenu()
    onCartClick?.()
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo">RESTAURANT</a>

      <ul className="nav-links">
        <li><a href="#signature">Menu</a></li>
        <li><a href="#fullmenu">Drinks</a></li>
        <li><a href="#reservation" className="nav-reserve">Reserve a Table</a></li>
        <li><a href="#footer">Find Us</a></li>
        <li>
          <button
            id="nav-cart-btn"
            className="nav-cart-btn"
            aria-label={`View cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
            onClick={handleCartClick}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="nav-cart-badge" aria-hidden="true">{cartCount}</span>
            )}
          </button>
        </li>
      </ul>

      <div className="nav-right-mobile">
        <button
          id="mobile-cart-btn"
          className="nav-cart-btn"
          aria-label={`View cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
          onClick={handleCartClick}
        >
          <CartIcon />
          {cartCount > 0 && (
            <span className="nav-cart-badge" aria-hidden="true">{cartCount}</span>
          )}
        </button>

        <button id="hamburger" className={`hamburger ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="mobileMenu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="menu">
        <a href="#signature" role="menuitem" onClick={closeMenu}>Menu</a>
        <a href="#fullmenu" role="menuitem" onClick={closeMenu}>Drinks</a>
        <a href="#reservation" role="menuitem" onClick={closeMenu}>Reserve a Table</a>
        <a href="#footer" role="menuitem" onClick={closeMenu}>Find Us</a>
        <button
          id="mobile-menu-cart-btn"
          className="mobile-menu-cart-btn"
          role="menuitem"
          onClick={handleCartClick}
        >
          <CartIcon />
          <span>View Cart</span>
          {cartCount > 0 && (
            <span className="nav-cart-badge" aria-hidden="true">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  )
}

