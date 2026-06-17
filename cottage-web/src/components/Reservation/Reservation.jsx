import { useState } from 'react'
import './Reservation.css'

const TIMES = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
  '6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM',
  '9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM',
]

export default function Reservation({ onSubmit }) {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', time: '', party: '', occasion: '', requests: ''
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    onSubmit?.()
  }

  return (
    <section id="reservation" aria-labelledby="res-heading">
      <div className="section-header reveal" style={{ marginBottom: 48 }}>
        <span className="section-eyebrow">Join Us</span>
        <h2 className="section-title" id="res-heading">Reserve Your Table</h2>
        <div className="gold-divider"></div>
        <p className="section-sub" style={{ marginTop: 16 }}>
          For reservations and private dining enquiries
        </p>
      </div>

      <div className="reservation-card reveal">
        <form id="reservationForm" onSubmit={submit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="resName">Your Name</label>
              <input
                type="text" id="resName" name="name"
                placeholder="Enter your name" autoComplete="name"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resPhone">Phone Number</label>
              <input
                type="tel" id="resPhone" name="phone"
                placeholder="+91 98765 XXXXX" autoComplete="tel"
                value={form.phone} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resDate">Date</label>
              <input
                type="date" id="resDate" name="date"
                value={form.date} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="resTime">Time</label>
              <select id="resTime" name="time" value={form.time} onChange={handleChange}>
                <option value="">Select time</option>
                {TIMES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="resParty">Party Size</label>
              <select id="resParty" name="party" value={form.party} onChange={handleChange}>
                <option value="">Guests</option>
                {['1','2','3','4','5','6','7','8','9','10','11','12+'].map(n => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="resOccasion">Occasion (optional)</label>
              <input
                type="text" id="resOccasion" name="occasion"
                placeholder="Birthday, Anniversary…"
                value={form.occasion} onChange={handleChange}
              />
            </div>
            <div className="form-group full">
              <label htmlFor="resRequests">Special Requests</label>
              <textarea
                id="resRequests" name="requests"
                placeholder="Dietary requirements, seating preferences…"
                value={form.requests} onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn-reserve" id="reserveBtn">
            Confirm Reservation
          </button>
        </form>
        <p className="reservation-contact">
          Or call us directly: <a href="tel:+919876500000">+91 98765 XXXXX</a>
        </p>
      </div>
    </section>
  )
}
