import React, { useEffect, useRef } from 'react'

export default function VideoModal({ video, onClose }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!video && iframeRef.current) {
      iframeRef.current.src = ''
    }
    if (video && iframeRef.current) {
      // autoplay
      iframeRef.current.src = video.src + '?autoplay=1'
    }
  }, [video])

  if (!video) return (
    <div id="videoModal" className="video-modal" aria-hidden="true" />
  )

  return (
    <div id="videoModal" className="video-modal" role="dialog" aria-modal="true">
      <div className="video-modal-backdrop" onClick={onClose} />
      <div className="video-modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close video">✕</button>
        <div className="video-frame">
          <iframe
            ref={iframeRef}
            title={video.title}
            width="960"
            height="540"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
