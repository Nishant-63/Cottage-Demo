import './Toast.css'

const DEFAULT_MSG = 'Reservation confirmed — we look forward to seeing you!'

export default function Toast({ visible, message = DEFAULT_MSG }) {
  return (
    <div id="toast" className={`toast ${visible ? 'visible' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  )
}

