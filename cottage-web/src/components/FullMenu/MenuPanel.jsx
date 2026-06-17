export default function MenuPanel({ id, labelledBy, children, active }) {
  return (
    <div
      className={`tab-panel ${active ? 'active' : ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  )
}
