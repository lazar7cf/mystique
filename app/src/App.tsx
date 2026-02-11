
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { ONamaPage } from '@/pages/ONamaPage'
import { ServicePage } from '@/pages/ServicePage'
import { ProdavnicaPage } from '@/pages/ProdavnicaPage'
import { VauceriPage } from '@/pages/VauceriPage'
import { EdukacijePage } from '@/pages/EdukacijePage'
import { KontaktPage } from '@/pages/KontaktPage'
import { GalerijaPage } from '@/pages/GalerijaPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          // Optional: unobserve if we only want reveal once
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [pathname])
}

function App() {
  useScrollReveal()
  return (
    <div className="min-h-screen bg-sage-100">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nama" element={<ONamaPage />} />
          <Route path="/usluge/:slug" element={<ServicePage />} />
          <Route path="/prodavnica" element={<ProdavnicaPage />} />
          <Route path="/vauceri" element={<VauceriPage />} />
          <Route path="/edukacije" element={<EdukacijePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/galerija" element={<GalerijaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
