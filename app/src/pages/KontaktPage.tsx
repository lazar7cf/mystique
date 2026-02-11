
import { useState } from 'react'
import { Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in production, this would send to backend
    alert('Hvala na poruci! Kontaktiraćemo Vas uskoro.')
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-28 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-100/40 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="max-w-3xl animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs">
                Uvek dostupni za Vas
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-sage-900 leading-tight mb-8">
              Zakažite svoj <span className="text-gold-500 italic">trenutak </span> <br />u Mystique-u
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed font-light">
              Naše ljubazno osoblje je spremno da Vam pomogne u odabiru savršenog
              tretmana i rezervaciji Vašeg ekskluzivnog termina.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden texture-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-sage-900">Gde nas <span className="text-gold-500 italic">pronaći</span></h2>
                <div className="w-16 h-1 bg-gold-200" />
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Naša lokacija',
                    content: 'Oca Justina Popovića 3, 17500 Vranje, Srbija',
                    sub: 'Centar grada, preko puta gradskog parka'
                  },
                  {
                    icon: Phone,
                    title: 'Rezervacije',
                    content: '+381 (0)17 404 404',
                    sub: 'Dostupni smo i na Viberu: +381 62 44 33 22'
                  },
                  {
                    icon: Clock,
                    title: 'Radno vreme',
                    content: 'Pon - Sub: 10:00 - 21:00',
                    sub: 'Nedelja: Isključivo po zakazivanju'
                  }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-6 p-8 bg-sage-50 rounded-[2.5rem] border border-transparent hover:border-gold-200 hover:bg-white hover:shadow-gold-glow transition-all duration-500">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:bg-gold-500 transition-colors duration-500">
                      <item.icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-sage-900 mb-1">{item.title}</h4>
                      <p className="text-sage-700 font-medium leading-tight">{item.content}</p>
                      <p className="text-sage-400 text-xs uppercase tracking-wider mt-2">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Immersive Placeholder */}
              <div className="relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl group border-[10px] border-sage-50">
                <div className="absolute inset-0 bg-sage-200 animate-pulse-soft" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-sage-900/10 backdrop-blur-[2px] z-10 p-8 text-center group-hover:backdrop-blur-0 transition-all duration-700">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-glow mb-4">
                    <MapPin className="w-8 h-8 text-gold-600" />
                  </div>
                  <h4 className="font-serif text-2xl text-sage-900 mb-2">Interaktivna Mapa</h4>
                  <p className="text-sage-600 text-sm">Kliknite ovde za navigaciju do salona</p>
                  <Button variant="outline" size="lg" className="mt-6 border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-white rounded-full">
                    Otvori Google Maps
                  </Button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop"
                  alt="Map Location"
                  className="w-full h-full object-cover grayscale opacity-30"
                />
              </div>
            </div>

            {/* Booking Form Card */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white rounded-[4rem] shadow-2xl p-10 md:p-16 border border-sage-100 relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-50 rounded-full -mr-[150px] -mt-[150px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-sage-50 rounded-full -ml-[100px] -mb-[100px] opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-gold-glow">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-sage-900">Brza Rezervacija</h3>
                      <p className="text-sage-500 uppercase tracking-widest text-xs mt-1">Odgovaramo u roku od 30 minuta</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-sage-400 ml-1">Vaše Ime</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-8 py-5 rounded-3xl bg-sage-50 border-none focus:ring-2 focus:ring-gold-200 outline-none transition-all placeholder:text-sage-300 font-light"
                          placeholder="npr. Marija Marković"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-sage-400 ml-1">E-mail Adresa</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-8 py-5 rounded-3xl bg-sage-50 border-none focus:ring-2 focus:ring-gold-200 outline-none transition-all placeholder:text-sage-300 font-light"
                          placeholder="marija@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-sage-400 ml-1">Odaberite Uslugu</label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-8 py-5 rounded-3xl bg-sage-50 border-none focus:ring-2 focus:ring-gold-200 outline-none transition-all appearance-none font-light text-sage-700"
                          required
                        >
                          <option value="">Izaberite jednu od premium usluga</option>
                          <option value="masaze">Ekskluzivne Masaže</option>
                          <option value="tretmani-lica">Dermatološki Tretmani Lica</option>
                          <option value="tretmani-tela">Skulpturisanje Tela</option>
                          <option value="frizerske">Art Frizerske Usluge</option>
                          <option value="vauceri">Vaučeri i Pokloni</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-5 h-5 text-sage-300 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-sage-400 ml-1">Vaše Želje i Pitanja</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-8 py-5 rounded-[2.5rem] bg-sage-50 border-none focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none placeholder:text-sage-300 font-light"
                        placeholder="Kako možemo učiniti Vašu posetu nezaboravnom?"
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="2xl"
                        className="w-full bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500 group"
                      >
                        Pošaljite Upit
                        <div className="ml-3 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </Button>
                      <p className="text-center text-xs text-sage-400 uppercase tracking-[0.2em] mt-8 font-bold">
                        Potvrda termina stiže putem telefona
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Support CTA */}
      <section className="py-24 bg-sage-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/texture-silk.jpg')] bg-cover" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[4rem] p-12 md:p-20 border border-white/10 text-center space-y-10 group">
            <h2 className="font-serif text-4xl md:text-6xl text-white">Treba li Vam <span className="text-gold-400 italic">odmah </span> asistencija?</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a
                href="tel:+38162443322"
                className="flex items-center gap-6 px-12 py-6 bg-gold-600 rounded-full text-white shadow-gold-glow hover:scale-105 transition-all duration-500"
              >
                <Phone className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-white/70">Pozovite nas</p>
                  <p className="text-2xl font-bold">+381 62 44 33 22</p>
                </div>
              </a>
              <div className="w-12 h-px bg-white/20 hidden md:block" />
              <div className="text-left space-y-1">
                <p className="text-sage-400 text-sm">Pratite nas za vesti i popuste</p>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook'].map((social) => (
                    <a key={social} href="#" className="text-white hover:text-gold-400 transition-colors font-bold uppercase tracking-widest text-xs">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

