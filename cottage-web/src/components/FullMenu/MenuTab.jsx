import { useEffect, useRef } from 'react'

const TABS = [
  { key: 'appetizers', label: 'Appetizers',       id: 'tab-appetizers' },
  { key: 'soups',      label: 'Soups & Salads',   id: 'tab-soups'      },
  { key: 'flatbread',  label: 'Flatbread & Pasta', id: 'tab-flatbread'  },
  { key: 'mains',      label: 'Mains',             id: 'tab-mains'      },
  { key: 'desserts',   label: 'Desserts',           id: 'tab-desserts'   },
  { key: 'cocktails',  label: 'Cocktails',          id: 'tab-cocktails'  },
  { key: 'bar',        label: 'Bar',                id: 'tab-bar'        },
]

export default function MenuTab({ active, onChange }) {
  const containerRef = useRef(null)
  const indicatorRef = useRef(null)

  // ── Sliding underline indicator ──────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    const indicator = indicatorRef.current
    if (!container || !indicator) return

    const activeBtn = container.querySelector(`#tab-${active}`) || container.querySelector('.tab-btn')
    if (!activeBtn) return

    const rect       = activeBtn.getBoundingClientRect()
    const parentRect = container.getBoundingClientRect()
    indicator.style.width     = `${rect.width}px`
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`
  }, [active])

  return (
    <div className="menu-tabs-sticky-wrapper">
      <div
        className="menu-tabs"
        role="tablist"
        aria-label="Menu categories"
        id="menu-tabs"
        ref={containerRef}
      >
        <div className="tab-underline-indicator" id="tab-indicator" ref={indicatorRef} />
        {TABS.map(t => (
          <button
            key={t.key}
            id={t.id}
            className={`tab-btn ${active === t.key ? 'active' : ''}`}
            data-tab={t.key}
            role="tab"
            aria-selected={active === t.key}
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
