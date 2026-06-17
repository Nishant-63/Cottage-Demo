import { useEffect, useRef } from 'react'
import './PhotoStrip.css'
import { stripPhotos } from '../../data/photoStrip'

export default function PhotoStrip() {
  const trackRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const track = trackRef.current
    if (!track) return

    // duplicate content for seamless scroll
    track.innerHTML = track.innerHTML + track.innerHTML
    let rafId
    function loop() {
      track.scrollLeft += 0.6
      if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    track.addEventListener('mouseenter', () => cancelAnimationFrame(rafId))
    track.addEventListener('mouseleave', () => { rafId = requestAnimationFrame(loop) })

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section id="photostrip">
      <div className="photo-strip-track" ref={trackRef}>
        {stripPhotos.map((p, i) => (
          <div className="strip-photo" key={i}><img src={p.src} alt={p.alt} /></div>
        ))}
      </div>
    </section>
  )
}
