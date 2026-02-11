import { Link } from 'react-router-dom'
import { Instagram, Facebook, ArrowRight } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-sage-950 pt-24 pb-12 overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/texture-marble.jpg')] bg-cover mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Identity */}
          <div className="space-y-8">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl border border-gold-500/30 flex items-center justify-center transition-all duration-500 group-hover:border-gold-500">
                <span className="font-serif text-2xl text-gold-500">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] text-white">MYSTIQUE</span>
                <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-gold-500">Beauty & Wellness</span>
              </div>
            </Link>
            <p className="text-sage-400 text-sm leading-relaxed font-light">
              Vaša oaza miru i luksuza u srcu Vranja. Od 2014. godine
              postavljamo standarde u svetu wellness-a i lepote, spajajući
              drevne mudrosti sa modernom tehnologijom.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/mystique_fit' },
                { icon: Facebook, href: 'https://facebook.com/mystique.fit' }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sage-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-500">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-8">
            <h4 className="text-white font-serif text-xl border-l-2 border-gold-500 pl-4">Otkrijte</h4>
            <ul className="grid gap-4">
              {[
                { label: 'Naša Priča', path: '/o-nama' },
                { label: 'Edukacije', path: '/edukacije' },
                { label: 'Prodavnica', path: '/prodavnica' },
                { label: 'Pravila Salona', path: '/kontakt' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} onClick={scrollToTop} className="text-sage-400 hover:text-gold-400 transition-colors text-sm font-light tracking-wide flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-8">
            <h4 className="text-white font-serif text-xl border-l-2 border-gold-500 pl-4">Popularno</h4>
            <ul className="grid gap-4">
              {[
                { label: 'Masaže', path: '/usluge/masaze' },
                { label: 'Tretmani Lica', path: '/usluge/tretmani-lica' },
                { label: 'SPA Paketi', path: '/usluge/spa-day' },
                { label: 'Solarijum', path: '/usluge/solarijum' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} onClick={scrollToTop} className="text-sage-400 hover:text-gold-400 transition-colors text-sm font-light tracking-wide flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-white font-serif text-xl border-l-2 border-gold-500 pl-4">Posetite Nas</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-500 text-xs">📍</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Oca Justina Popovića 3</p>
                  <p className="text-sage-500 text-xs mt-1 font-light tracking-wider">17500 Vranje, Srbija</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-500 text-xs">📞</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">+381 62 44 33 22</p>
                  <p className="text-sage-500 text-xs mt-1 font-light tracking-wider">Rezervacije & Info</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-sage-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-sage-800" />
            <span>Terms of Service</span>
          </div>

          <p className="text-sage-500 text-xs font-light">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">Mystique Fit</span>. Sva prava zadržana. Crafted for excellence.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-500 group"
          >
            <ArrowRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
