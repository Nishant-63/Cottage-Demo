import './Features.css'

const features = [
  {
    title: 'Clay Oven Crafted',
    desc: 'Signature dishes slow-cooked in our clay oven, imparting depth and warmth to every bite.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C20 4 10 12 10 22C10 27.5 14.5 32 20 32C25.5 32 30 27.5 30 22C30 12 20 4 20 4Z" stroke="#C9933A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 32V36" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 36H25" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22C16 19.8 17.8 18 20 18" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Mediterranean Soul',
    desc: 'Recipes rooted in the flavours of the Mediterranean coast — from Beirut to Barcelona.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="20" rx="14" ry="10" stroke="#C9933A" strokeWidth="1.5" />
        <path d="M20 10C20 10 16 14 14 20C12 26 14 30 20 30C26 30 28 26 26 20C24 14 20 10 20 10Z" stroke="#C9933A" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" stroke="#C9933A" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Curated Drinks',
    desc: 'An art-of-mixology cocktail programme, cellar-stocked wines, and draught beer on tap.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8H26L28 20H12L14 8Z" stroke="#C9933A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 20C12 26 15.6 30 20 30C24.4 30 28 26 28 20" stroke="#C9933A" strokeWidth="1.5" />
        <path d="M20 30V34" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 34H25" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8V5" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 5H23" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
]

export default function Features() {
  return (
    <div id="features">
      <div className="features-inner">
        {features.map((item, index) => (
          <div key={index} className="feature-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="feature-icon">{item.icon}</div>
            <div className="feature-title">{item.title}</div>
            <div className="feature-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
