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
import { useState } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [toast, setToast] = useState(false)
  useScrollReveal()
  const showToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 4000)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OurStory />
        <SignatureDishes />
        <FullMenu />
        <PhotoStrip />
        <Videos />
        <Reservation onSubmit={showToast} />
      </main>
      <Footer />
      <Toast visible={toast} />
    </>
  )
}
