import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import OurStory from './components/OurStory/OurStory'
import SignatureDishes from './components/SignatureDishes/SignatureDishes'
import FullMenu from './components/FullMenu/FullMenu'
import PhotoStrip from './components/PhotoStrip/PhotoStrip'
import Videos from './components/Videos/Videos'
import Reservation from './components/Reservation/Reservation'
import Footer from './components/Footer/Footer'
import Toast from './components/Toast/Toast'
import Model3DButton from './components/Model3DButton/Model3DButton'
import CartPage from './components/Cart/CartPage'
import OrderConfirmation from './components/Cart/OrderConfirmation'
import { useState, useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

/** Read ?table= from the hash portion of the URL.
 *  Supports: #fullmenu?table=12  or  #?table=12  or  plain ?table=12 */
function getTableFromHash() {
  const hash = window.location.hash          // e.g. "#fullmenu?table=12"
  const qIdx = hash.indexOf('?')
  if (qIdx === -1) return ''
  const qs = hash.slice(qIdx + 1)            // "table=12&foo=bar"
  return new URLSearchParams(qs).get('table') || ''
}

export default function App() {
  const [view, setView] = useState('menu')  // 'menu' | 'cart' | 'confirmation'
  const [toast, setToast] = useState({ visible: false, message: '' })
  const [lastOrder, setLastOrder] = useState(null)
  const [tableNumber, setTableNumber] = useState(getTableFromHash)
  useScrollReveal()

  // Also react if the hash changes while the page is open
  useEffect(() => {
    function onHashChange() { setTableNumber(getTableFromHash()) }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const showToast = (message = 'Reservation confirmed — we look forward to seeing you!') => {
    setToast({ visible: true, message })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000)
  }

  const handleOrderPlaced = (order) => {
    setLastOrder(order)
    setView('confirmation')
  }

  if (view === 'cart') {
    return (
      <>
        <Navbar onCartClick={() => setView('cart')} />
        <CartPage
          onBack={() => setView('menu')}
          onOrderPlaced={handleOrderPlaced}
          showToast={showToast}
          tableNumber={tableNumber}
        />
        <Toast visible={toast.visible} message={toast.message} />
      </>
    )
  }

  if (view === 'confirmation') {
    return (
      <>
        <Navbar onCartClick={() => setView('cart')} />
        <OrderConfirmation order={lastOrder} onDone={() => setView('menu')} />
      </>
    )
  }

  return (
    <>
      <Navbar onCartClick={() => setView('cart')} />
      <main>
        <Hero />
        <Features />
        <OurStory />
        <SignatureDishes showToast={showToast} />
        <FullMenu showToast={showToast} />
        <PhotoStrip />
        <Videos />
        <Reservation onSubmit={() => showToast()} />
      </main>
      <Footer />
      <Toast visible={toast.visible} message={toast.message} />
      <Model3DButton />
    </>
  )
}

