import { useEffect, useRef } from 'react'
import './Hero.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const canvas = canvasRef.current
    if (!hero || !canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let W = 0
    let H = 0
    let rafId = 0
    let resizeObserver
    let particles = []
    let timeline

    const eyebrow = hero.querySelector('#hero-eyebrow')
    const heroSub = hero.querySelector('#hero-sub')
    const heroCtas = hero.querySelectorAll('#hero-ctas a')
    const scrollInd = hero.querySelector('#scroll-indicator')
    const wordInners = hero.querySelectorAll('.hero-word-inner')

    function resizeCanvas() {
      W = canvas.width = hero.offsetWidth
      H = canvas.height = hero.offsetHeight
    }

    function Particle() {
      this.reset = function () {
        this.x = Math.random() * W
        this.y = Math.random() * H + H
        this.size = Math.random() * 2.5 + 0.5
        this.speedY = -(Math.random() * 0.4 + 0.15)
        this.speedX = (Math.random() - 0.5) * 0.3
        this.alpha = 0
        this.alphaMax = Math.random() * 0.55 + 0.2
        this.life = 0
        this.maxLife = Math.random() * 280 + 120
      }
      this.reset()
      this.y = Math.random() * H
    }

    function drawParticles() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.life++
        p.x += p.speedX
        p.y += p.speedY

        const lifeRatio = p.life / p.maxLife
        if (lifeRatio < 0.3) {
          p.alpha = (lifeRatio / 0.3) * p.alphaMax
        } else if (lifeRatio > 0.8) {
          p.alpha = ((1 - lifeRatio) / 0.2) * p.alphaMax
        } else {
          p.alpha = p.alphaMax
        }

        if (p.life > p.maxLife) p.reset()

        ctx.save()
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(240,190,80,${p.alpha})`)
        gradient.addColorStop(0.5, `rgba(201,147,58,${p.alpha * 0.6})`)
        gradient.addColorStop(1, 'rgba(201,147,58,0)')
        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      rafId = requestAnimationFrame(drawParticles)
    }

    if (!prefersReduced) {
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas, { passive: true })

      particles = Array.from({ length: 55 }, () => new Particle())
      drawParticles()

      timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
          { opacity: 0, letterSpacing: '1px' },
          { opacity: 1, letterSpacing: '4px', duration: 1.2 },
          0.3
        )
      }

      if (wordInners.length) {
        timeline.to(
          wordInners,
          {
            translateY: '0%',
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out'
          },
          0.7
        )
      }

      if (heroSub) {
        timeline.fromTo(
          heroSub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '+=0.1'
        )
      }

      if (heroCtas.length) {
        timeline.fromTo(
          heroCtas,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
          '-=0.3'
        )
      }

      if (scrollInd) {
        timeline.fromTo(
          scrollInd,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )
      }
    } else {
      if (eyebrow) eyebrow.style.opacity = '1'
      if (heroSub) heroSub.style.opacity = '1'
      if (scrollInd) scrollInd.style.opacity = '1'
      heroCtas.forEach(el => { el.style.opacity = '1' })
      wordInners.forEach(el => {
        el.style.transform = 'translateY(0)'
        el.style.opacity = '1'
      })
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(rafId)
      if (timeline) timeline.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="hero" aria-label="Hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <canvas id="hero-particles" ref={canvasRef} aria-hidden="true"></canvas>

      <div className="hero-content">
        <p className="hero-eyebrow" id="hero-eyebrow">Chandigarh · Since 2019</p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-word"><span className="hero-word-inner">A</span></span>&nbsp;
          <span className="hero-word"><span className="hero-word-inner">Taste</span></span>&nbsp;
          <span className="hero-word"><span className="hero-word-inner">of</span></span>&nbsp;
          <span className="hero-word"><span className="hero-word-inner">the</span></span><br />
          <span className="hero-word"><span className="hero-word-inner">Mediterranean</span></span>&nbsp;
          <span className="hero-word"><span className="hero-word-inner">Coast</span></span>
        </h1>
        <p className="hero-sub" id="hero-sub">
          Slow-cooked clay oven dishes, handcrafted cocktails, and a menu that travels from the shores of Greece to the hills of Lebanon — right here in Chandigarh.
        </p>
        <div className="hero-ctas" id="hero-ctas">
          <a href="#signature" className="btn-primary">Explore Our Menu</a>
          <a href="#reservation" className="btn-secondary">Reserve a Table</a>
        </div>
      </div>

      <div className="scroll-indicator" id="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
