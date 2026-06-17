import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer id="footer" className="site-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="footer-inner">
        <div className="footer-brand">
          <h3 className="brand">RESTAURANT</h3>
          <p className="muted">Cozy restaurant &amp; bar. Reservations recommended.</p>
        </div>
        <div className="footer-links">
          <a href="#fullmenu">Menu</a>
          <a href="#reservation">Reserve</a>
          <a href="#videos">Videos</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Restaurant</div>
      </div>
    </footer>
  )
}
