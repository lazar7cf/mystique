
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Pages that start with a dark hero section where navbar needs to be light
  const isDarkPage = location.pathname.startsWith('/usluge') || location.pathname === '/edukacije'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }, [location])

  const serviceDropdownItems = [
    { label: 'Frizerske usluge', path: '/usluge/frizerske-usluge' },
    { label: 'Kozmetičarske usluge', path: '/usluge/kozmeticarske-usluge' },
    { label: 'Šminka', path: '/usluge/sminka' },
    { label: 'Epilacija diodnim laserom', path: '/usluge/epilacija' },
    { label: 'Solarijum', path: '/usluge/solarijum' },
    { label: 'Tretmani lica', path: '/usluge/tretmani-lica' },
    { label: 'Tretmani tela', path: '/usluge/tretmani-tela' },
    { label: 'Masaže', path: '/usluge/masaze' },
    { label: 'Hidromasažna kada', path: '/usluge/hidromasazna-kada' },
    { label: 'Sauna / Parno kupatilo', path: '/usluge/sauna' },
    { label: 'SPA DAY - paketi', path: '/usluge/spa-day' },
  ]



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
          ? 'bg-sage-900/80 backdrop-blur-2xl py-3 border-b border-white/5'
          : 'bg-transparent py-6 md:py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Premium Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative z-[120]"
            >
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-100 group-hover:rotate-[360deg] border-gold-500/50`}>
                <span className="font-serif text-xl text-gold-500">M</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl tracking-[0.2em] font-light transition-all duration-500 ${isScrolled || isDarkPage || isMobileMenuOpen ? 'text-white' : 'text-sage-900'
                  }`}>
                  MYSTIQUE
                </span>
                <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-gold-500 -mt-1">Beauty & Wellness</span>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'Naslovna', path: '/' },
                { label: 'O Nama', path: '/o-nama' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-gold-500 relative group py-2 ${isScrolled || isDarkPage ? 'text-white/80' : 'text-sage-900'
                    }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}

              {/* Usluge Elegant Dropdown */}
              <div className="relative group/dropdown" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 py-2 ${isScrolled || isDarkPage ? 'text-white/80 group-hover/dropdown:text-gold-500' : 'text-sage-900'
                    }`}
                >
                  Usluge
                  <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-sage-900/95 backdrop-blur-3xl rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500 border border-white/10 ${isDropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
                  }`}>
                  <div className="p-2 grid gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {serviceDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="px-6 py-3 text-xs text-white/70 hover:text-gold-400 hover:bg-white/5 rounded-2xl transition-all duration-300 font-medium tracking-wide"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { label: 'Prodavnica', path: '/prodavnica' },
                { label: 'Vaučeri', path: '/vauceri' },
                { label: 'Edukacije', path: '/edukacije' },
                { label: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-gold-500 relative group py-2 ${isScrolled || isDarkPage ? 'text-white/80' : 'text-sage-900'
                    }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-[120] ${isScrolled || isDarkPage || isMobileMenuOpen ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-sage-100 text-sage-900 hover:bg-sage-200'
                }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Overlay */}
      <div className={`fixed inset-0 bg-[#1C1C22] z-[110] transition-all duration-700 flex flex-col px-10 pt-32 pb-12 text-center overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-10'
        }`}>
        <div className="fixed inset-0 opacity-10 bg-[url('/texture-silk.jpg')] bg-cover pointer-events-none" />
        <div className="space-y-6 relative z-10 w-full max-w-lg mx-auto">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-4xl font-serif text-gold-500 hover:scale-105 transition-transform"
          >
            Naslovna
          </Link>
          <Link
            to="/o-nama"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-3xl font-serif text-white/80 hover:text-gold-400 pb-4 border-b border-white/5"
          >
            O Nama
          </Link>

          <div className="py-4 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-500/60 font-bold mb-4">Naše Usluge</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-2">
              {serviceDropdownItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs text-white/50 hover:text-gold-400 transition-colors capitalize py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-white/5">
            {[
              { label: 'Prodavnica', path: '/prodavnica' },
              { label: 'Vaučeri', path: '/vauceri' },
              { label: 'Edukacije', path: '/edukacije' },
              { label: 'Kontakt', path: '/kontakt' },
              { label: 'Galerija', path: '/galerija' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-white/70 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-12">
            <p className="text-[10px] text-sage-500 uppercase tracking-widest font-bold mb-4">Pratite Nas</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-500/50 hover:text-gold-500 transition-all">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-500/50 hover:text-gold-500 transition-all">
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

