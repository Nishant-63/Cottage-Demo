import React, { useEffect } from 'react'
import './Toast.css'

export default function Toast({ visible }){
  return (
    <div id="toast" className={`toast ${visible ? 'visible' : ''}`} role="status" aria-live="polite">
      Reservation confirmed — we look forward to seeing you!
    </div>
  )
}
