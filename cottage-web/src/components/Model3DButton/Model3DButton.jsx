import '@google/model-viewer'
import { useState } from 'react'
import './Model3DButton.css'

export default function Model3DButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        id="model3d-btn"
        className="model3d-fab"
        onClick={() => setOpen(true)}
        aria-label="View 3D pizza model"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          <path d="M21 7l-9-4L3 7v2l9 4 9-4V7z"/>
        </svg>
        <span className="model3d-fab-label">3D View</span>
      </button>

      {open && (
        <div
          id="model3d-overlay"
          className="model3d-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="3D pizza model viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="model3d-modal">
            <button
              id="model3d-close"
              className="model3d-close"
              onClick={() => setOpen(false)}
              aria-label="Close 3D viewer"
            >
              ✕
            </button>
            <div className="model3d-viewer-wrap">
              <model-viewer
                src="/models/pizza.glb"
                ios-src="/models/pizza.usdz"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                style={{ width: '100%', height: '100%' }}
                alt="Interactive 3D pizza model"
              >
                <button slot="ar-button" className="model3d-ar-btn">
                  View in your space
                </button>
              </model-viewer>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
