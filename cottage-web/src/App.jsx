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
import { useState } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [view, setView] = useState('menu')  // 'menu' | 'cart' | 'confirmation'
  const [toast, setToast] = useState({ visible: false, message: '' })
  const [lastOrder, setLastOrder] = useState(null)
  useScrollReveal()

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

