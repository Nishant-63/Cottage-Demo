import { useState } from 'react'
import './FullMenu.css'
import MenuTab from './MenuTab'
import MenuPanel from './MenuPanel'
import MenuItem from './MenuItem'
import DishModal from './DishModal'
import { MENU } from '../../data/menu'
import { getDishImage, getDishBadge } from '../../data/dishImages'
import { useCart } from '../../context/CartContext'

export default function FullMenu({ showToast }) {
  const [active, setActive] = useState('appetizers')
  const [modalDish, setModalDish] = useState(null)
  const { dispatch } = useCart()

  function openModal(item, sectionTitle, tabKey) {
    const imgUrl = getDishImage(item.name, sectionTitle, tabKey)
    const badge  = getDishBadge(item.veg, tabKey)
    setModalDish({
      name:       item.name,
      desc:       item.desc || '',
      price:      item.price,
      rawPrice:   item.rawPrice ?? parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0,
      imgUrl,
      badgeLabel: badge.label,
      badgeStyle: badge.style,
    })
  }

  function addToCart(item, sectionTitle, tabKey) {
    const imgUrl = getDishImage(item.name, sectionTitle, tabKey)
    const rawPrice = parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${item.name}-${item.price}`,
        name: item.name,
        price: rawPrice,
        qty: 1,
        imgUrl,
      },
    })
    showToast?.(`Added "${item.name}" to your cart`)
  }

  return (
    <>
      <section id="fullmenu" aria-labelledby="menu-heading">
        <div className="section-header" id="menu-header">
          <span className="section-eyebrow">The Complete Menu</span>
          <h2 className="section-title" id="menu-heading">
            <span className="split-heading-wrap">
              <span className="split-heading-inner">Everything We Make</span>
            </span>
          </h2>
          <div id="menu-divider" className="gold-divider"></div>
        </div>

        <MenuTab active={active} onChange={setActive} />

        {Object.entries(MENU).map(([tabKey, sections]) => (
          <MenuPanel
            key={tabKey}
            id={`panel-${tabKey}`}
            labelledBy={`tab-${tabKey}`}
            active={active === tabKey}
          >
            {sections.map((sec, si) => (
              <div key={si}>
                <div className="menu-section-title">{sec.section}</div>
                <div className="menu-grid">
                  {sec.items.map((item, ii) => {
                    const imgUrl = getDishImage(item.name, sec.section, tabKey)
                    return (
                      <MenuItem
                        key={ii}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        veg={item.veg}
                        isNew={item.isNew}
                        imgUrl={imgUrl}
                        onEyeClick={() => openModal(item, sec.section, tabKey)}
                        onAddToCart={() => addToCart(item, sec.section, tabKey)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <p className="menu-footer-note">*Prices exclusive of applicable government taxes</p>
          </MenuPanel>
        ))}
      </section>

      <DishModal
        dish={modalDish}
        onClose={() => setModalDish(null)}
        onAddToCart={() => {
          if (modalDish) {
            dispatch({
              type: 'ADD_ITEM',
              payload: {
                id: `${modalDish.name}-${modalDish.price}`,
                name: modalDish.name,
                price: modalDish.rawPrice,
                qty: 1,
                imgUrl: modalDish.imgUrl,
              },
            })
            showToast?.(`Added "${modalDish.name}" to your cart`)
          }
        }}
      />
    </>
  )
}

