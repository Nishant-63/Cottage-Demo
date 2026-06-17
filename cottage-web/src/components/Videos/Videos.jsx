import React, { useState, useEffect } from 'react'
import './Videos.css'
import { videos } from '../../data/videos'
import VideoModal from './VideoModal'

export default function Videos() {
  const [openVideo, setOpenVideo] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenVideo(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="videos" className="videos" aria-labelledby="videos-heading">
      <h2 id="videos-heading" className="sr-only">Videos</h2>
      <div className="video-grid">
        {videos.map((v) => (
          <button
            key={v.id}
            className="video-card"
            onClick={() => setOpenVideo(v)}
            data-video={v.id}
            aria-label={`Play ${v.title}`}
          >
            <img src={v.thumb} alt={v.title} />
            <div className="video-overlay">
              <span className="play-btn" aria-hidden="true">▶</span>
              <span className="video-title">{v.title}</span>
            </div>
          </button>
        ))}
      </div>
      <VideoModal video={openVideo} onClose={() => setOpenVideo(null)} />
    </section>
  )
}
