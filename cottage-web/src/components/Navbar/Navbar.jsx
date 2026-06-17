import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo">COTTAGE</a>

      <ul className="nav-links">
        <li><a href="#signature">Menu</a></li>
        <li><a href="#fullmenu">Drinks</a></li>
        <li><a href="#reservation" className="nav-reserve">Reserve a Table</a></li>
        <li><a href="#footer">Find Us</a></li>
      </ul>

      <button id="hamburger" className={`hamburger ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="mobileMenu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="menu">
        <a href="#signature" role="menuitem" onClick={closeMenu}>Menu</a>
        <a href="#fullmenu" role="menuitem" onClick={closeMenu}>Drinks</a>
        <a href="#reservation" role="menuitem" onClick={closeMenu}>Reserve a Table</a>
        <a href="#footer" role="menuitem" onClick={closeMenu}>Find Us</a>
      </div>
    </nav>
  )
}
