import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Sparkles, Droplets, Shield, Heart, Check, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HomePage() {
  const [activeServiceTab, setActiveServiceTab] = useState('osnovno')
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    '/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg',
    '/slide-5.jpg', '/slide-6.jpg', '/slide-7.jpg', '/slide-8.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const benefits = [
    {
      icon: Sparkles,
      title: 'Posvetljuje ten',
      description: 'Revitalizuje kožu za zdrav sjaj i mladalački izgled.',
      image: '/tretmani-lica-1.jpg'
    },
    {
      icon: Droplets,
      title: 'Duboko hidrira',
      description: 'Održava kožu mekom, hidriranom i negovanom ceo dan.',
      image: '/tretmani-lica-2.jpg'
    },
    {
      icon: Shield,
      title: 'Poboljšava teksturu',
      description: 'Ujednačava površinu kože za glatki i baršunasti osećaj.',
      image: '/usluge-7.jpg'
    }
  ]

  const services = [
    {
      id: 'osnovno',
      label: 'Glavne Usluge',
      items: [
        { name: 'Frizerske usluge', duration: 'Po dogovoru', price: 'Premium', image: '/frizerske-usluge.jpg', slug: 'frizerske-usluge' },
        { name: 'Kozmetičarske usluge', duration: '60+ min', price: 'od 1.200 RSD', image: '/kozmeticarske-usluge.jpg', slug: 'kozmeticarske-usluge' },
        { name: 'Tretmani lica', duration: '60-90 min', price: 'od 3.500 RSD', image: '/tretmani-lica-3.jpg', slug: 'tretmani-lica' },
        { name: 'Masaže', duration: '30-90 min', price: 'od 2.500 RSD', image: '/usluge-1.jpg', slug: 'masaze' },
      ]
    },
    {
      id: 'specijalno',
      label: 'Specijalni Tretmani',
      items: [
        { name: 'Epilacija diodnim laserom', duration: 'Brzo', price: 'Kontakt', image: '/epilacija-1.jpg', slug: 'epilacija' },
        { name: 'Tretmani tela', duration: '45-90 min', price: 'od 3.000 RSD', image: '/liposukcija.jpg', slug: 'tretmani-tela' },
        { name: 'Šminka', duration: '60 min', price: 'od 4.500 RSD', image: '/sminka.jpg', slug: 'sminka' },
        { name: 'Solarijum', duration: '15 min', price: '400 RSD', image: '/solarijum.jpg', slug: 'solarijum' },
      ]
    },
    {
      id: 'spa',
      label: 'Wellness & Relax',
      items: [
        { name: 'SPA DAY - paketi', duration: '3-5 sati', price: 'od 8.000 RSD', image: '/spa-day.jpg', slug: 'spa-day' },
        { name: 'Hidromasažna kada', duration: '30-45 min', price: '1.500 RSD', image: '/hidromasazna-kada.jpg', slug: 'hidromasazna-kada' },
        { name: 'Sauna & Hamam', duration: '30+ min', price: 'od 800 RSD', image: '/sauna.jpg', slug: 'sauna' },
      ]
    },
  ]

  const testimonials = [
    {
      name: 'Ana M.',
      text: 'Najbolji salon u Vranju! Profesionalno osoblje, prelepa atmosfera i vrhunski tretmani. Svaki put izađem osećajući se kao nova.',
      rating: 5,
      avatar: '/logo-m.png'
    },
    {
      name: 'Marija K.',
      text: 'Već godinama dolazim u Mystique i uvek sam oduševljena. Njihova pažnja prema detaljima i kvalitet usluge su neprevaziđeni.',
      rating: 5,
      avatar: '/logo-m.png'
    },
    {
      name: 'Jovana P.',
      text: 'Preporučujem svima koji žele da se opuste i neguju svoju kožu. Tretmani lica su fantastični, a masaže su čista magija!',
      rating: 5,
      avatar: '/logo-m.png'
    }
  ]

  const ingredients = [
    { name: 'Hijaluronska kiselina', benefit: 'Duboka hidratacija' },
    { name: 'Vitamin C', benefit: 'Posvetljivanje tena' },
    { name: 'Retinol', benefit: 'Anti-age efekat' },
    { name: 'Aloe Vera', benefit: 'Smirenje kože' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-100/30 rounded-full blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sage-200/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up relative z-20">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-gold-500" />
                  <p className="text-gold-600 font-medium tracking-widest uppercase text-xs">
                    Salon lepote i zdravlja
                  </p>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sage-900 leading-[1.1] tracking-tight">
                  Otkrijte svoju<br />
                  <span className="text-gold-500 italic font-normal serif">prirodnu lepotu</span>
                </h1>
                <p className="text-lg md:text-xl text-sage-600 max-w-lg leading-relaxed font-light">
                  Prepustite se veštim rukama naših terapeuta i doživite harmoniju tela i duha.
                  Godine predanog rada i najnovija tehnologija garantuju vrhunsku negu.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-700 text-white shadow-gold-glow transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  <Link to="/kontakt">
                    <span className="relative z-10 flex items-center">
                      Zakažite termin
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="2xl"
                  className="border-sage-300 text-sage-800 hover:text-sage-900 hover:bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-gold-400"
                >
                  <Link to="/usluge/frizerske-usluge">
                    Istražite usluge
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-soft overflow-hidden bg-sage-100 flex items-center justify-center">
                      <User className="w-6 h-6 text-sage-400" />
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-xs uppercase tracking-wider text-sage-500 font-medium">Poverenje hiljada zadovoljnih klijenata</p>
                </div>
              </div>
            </div>

            {/* Hero Interactive Media - Layered Slideshow */}
            <div className="relative h-[500px] md:h-[650px] perspective-1000 z-10">
              <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                {/* Main Large Image (Slideshow) */}
                <div className="relative w-[85%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl z-20 transition-transform duration-1000 hover:rotate-y-2">
                  {slides.map((src, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${currentSlide === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <img
                        src={src}
                        alt="Mystique Spa"
                        className="w-full h-full object-cover scale-105 animate-pulse-soft"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                    </div>
                  ))}
                </div>

                {/* Smaller Decorative Frame */}
                <div className="absolute top-[10%] right-[-5%] w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-xl z-30 border-8 border-white animate-float animate-delay-200">
                  <img src="/tretmani-lica-2.jpg" className="w-full h-full object-cover" alt="Detail" />
                </div>

                {/* Floating Floating Element (Botton Right) */}
                <div className="absolute bottom-[5%] left-[-10%] w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-xl z-30 border-8 border-white animate-float">
                  <img src="/usluge-7.jpg" className="w-full h-full object-cover" alt="Detail" />
                </div>

                {/* Organic Decorative shapes */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-200/40 rounded-full blur-[60px] animate-pulse-soft" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-sage-300/30 rounded-full blur-[80px]" />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 right-[10%] glass dark:glass-dark rounded-2xl p-5 shadow-glow z-40 animate-float animate-delay-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-sage-900 leading-none">Premium</p>
                    <p className="text-xs text-sage-500 uppercase tracking-tighter mt-1">Sertifikovana Nega</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/50 -skew-x-12 transform origin-top translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-4">Vaša lepota, naša strast</p>
            <h2 className="font-serif text-4xl md:text-6xl text-sage-900 mb-8 leading-tight">
              Formulisano sa <span className="text-gold-500 italic">prirodnim</span> sastojcima za negu vaše kože
            </h2>
            <div className="w-24 h-1 bg-gold-200 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[2.5rem] p-8 shadow-soft hover:shadow-gold-glow transition-all duration-700 hover:-translate-y-3 border border-sage-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[3]" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-8 border border-sage-50 group-hover:bg-gold-500 transition-colors duration-500">
                    <benefit.icon className="w-8 h-8 text-gold-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-sage-900 mb-4">{benefit.title}</h3>
                  <p className="text-sage-600 leading-relaxed text-base font-light mb-8">{benefit.description}</p>

                  <div className="relative h-48 rounded-3xl overflow-hidden shadow-inner">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-sage-50 texture-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Images Collage - Enhanced */}
            <div className="relative h-[550px] md:h-[700px] animate-fade-in">
              <div className="absolute top-0 left-[10%] w-[70%] h-[80%] rounded-[4rem] overflow-hidden shadow-2xl z-10 rotate-[-2deg] transition-transform duration-[2s] hover:rotate-0">
                <img
                  src="/sminka.jpg"
                  alt="Mystique Makeup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[5%] right-0 w-[60%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-[12px] border-white rotate-[3deg] transition-transform duration-[2s] hover:rotate-0">
                <img
                  src="/parno-kupatilo.jpg"
                  alt="Mystique Hamam"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute top-[20%] left-0 w-24 h-24 bg-gold-200/40 rounded-full blur-2xl z-0 animate-pulse-soft" />
              <div className="absolute bottom-[20%] right-[-5%] w-40 h-40 bg-sage-300/30 rounded-full blur-3xl z-0" />

              <div className="absolute top-[40%] left-[-5%] glass p-4 rounded-2xl shadow-glow z-30 animate-float">
                <p className="font-serif text-gold-600 text-3xl font-bold leading-none">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-sage-500 mt-1">Godina Iskustva</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-gold-400" />
                  <p className="text-gold-600 font-medium tracking-widest uppercase text-xs">
                    Suština našeg postojanja
                  </p>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-sage-900 leading-tight">
                  Spoj nauke i prirode za vašu <span className="text-gold-500 italic">bezvremensku</span> lepotu
                </h2>
                <p className="text-sage-600 text-lg md:text-xl leading-relaxed font-light">
                  U samom centru Vranja, Mystique salon odiše svežinom i pruža osećaj mira,
                  ravnoteže i perfekcionizma. Naša tajna leži u harmoniji između modernih
                  aparata i najfinijih prirodnih esencija.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50 hover:border-gold-200 transition-colors">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-gold-glow">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-serif text-xl text-sage-900">Naša misija</h4>
                  <p className="text-sage-600 text-sm leading-relaxed">Pristupačna premium nega za svakog, promovišući zdravu, srećnu kožu kroz individualni pristup.</p>
                </div>
                <div className="space-y-3 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50 hover:border-gold-200 transition-colors">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-gold-glow">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-serif text-xl text-sage-900">Naša vizija</h4>
                  <p className="text-sage-600 text-sm leading-relaxed">Inovacije u svetu kozmetike i wellnessa uz prirodne formulacije koje transformišu duh i telo.</p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="xl"
                className="group border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-white transition-all duration-500"
              >
                <Link to="/o-nama">
                  Upoznajte naš tim
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sage-500 font-medium tracking-wider uppercase text-sm mb-4">
              Naše usluge
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">
              Odaberite tretman po svojoj meri
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceTab(service.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeServiceTab === service.id
                  ? 'bg-sage-600 text-white shadow-glow'
                  : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                  }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.find(s => s.id === activeServiceTab)?.items.map((item, index) => (
              <div
                key={index}
                className="group bg-sage-50 rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-sage-800 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sage-500">{item.duration}</span>
                    <span className="font-semibold text-sage-700">{item.price}</span>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-sage-600 hover:bg-sage-700 text-white rounded-full text-sm"
                  >
                    <Link to={`/usluge/${item.slug}`}>
                      Zakažite
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section - Interactive Spotlight */}
      <section className="py-24 md:py-32 bg-neutral-900 relative overflow-hidden texture-silk">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="space-y-12">
              <div className="animate-slide-up">
                <p className="text-gold-400 font-medium tracking-widest uppercase text-xs mb-4">
                  Čista priroda
                </p>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                  Sastojci iza vaše <br /> <span className="text-gold-400 italic">blistave</span> kože
                </h2>
                <p className="text-sage-200 text-lg md:text-xl font-light leading-relaxed">
                  Koristimo samo najkvalitetnije prirodne sastojke koji su dermatološki testirani
                  i bezbedni za vašu kožu. Svaka kap je pažljivo odabrana.
                </p>
              </div>

              <div className="grid gap-6">
                {ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-6 bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-500">
                      <Sparkles className="w-7 h-7 text-gold-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors">{ingredient.name}</h4>
                      <p className="text-sage-300 text-sm font-light mt-1 uppercase tracking-wider">{ingredient.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Image Spotlight */}
            <div className="relative group perspective-1000">
              <div className="relative w-full aspect-square max-w-lg mx-auto transform transition-transform duration-1000 group-hover:rotate-y-12">
                <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-3xl animate-pulse-soft" />
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white/5 backdrop-blur-sm">
                  <img
                    src="/prodavnica-1.jpg"
                    alt="Natural Ingredients"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  {/* Spotlight Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/40 via-transparent to-white/10" />
                </div>

                {/* Floating Tags */}
                <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-glow animate-float">
                  <Heart className="w-6 h-6 text-gold-500 mb-2" />
                  <p className="text-[10px] uppercase font-bold text-sage-800">100% Vegan</p>
                </div>
                <div className="absolute -bottom-8 -left-8 glass p-5 rounded-3xl shadow-glow animate-float animate-delay-200">
                  <Shield className="w-6 h-6 text-gold-500 mb-2" />
                  <p className="text-[10px] uppercase font-bold text-sage-800">No Paraben</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Refined Masonry-like Grid */}
      <section id="gallery" className="py-24 md:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-4">
              Vizuelno putovanje
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-sage-900 mb-6">
              Trenuci <span className="text-gold-500 italic">relaksacije</span> i lepote
            </h2>
            <div className="w-24 h-1 bg-gold-200 mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {[
              '/hidromasazna-kada.jpg',
              '/tretmani-lica-1.jpg',
              '/sauna.jpg',
              '/kozmeticarske-usluge.jpg',
              '/tretmani-lica-2.jpg',
              '/solarijum.jpg',
              '/usluge-7.jpg',
              '/usluge-1.jpg',
            ].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] shadow-soft transition-all duration-700 hover:shadow-gold-glow hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' :
                  index === 5 ? 'lg:col-span-2 lg:row-span-1' : ''
                  }`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 font-serif text-white text-xl border border-white/30 backdrop-blur-sm px-6 py-2 rounded-full">
                    Pogledaj
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-white transition-all duration-500"
            >
              <Link to="/galerija">
                Celokupna galerija
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Marquee Effect */}
      <section className="py-24 md:py-32 bg-sage-50 relative overflow-hidden texture-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-4">
              Poverenje klijenata
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-sage-900">
              Vasa iskustva u <span className="text-gold-500 italic">Mystique</span>-u
            </h2>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="flex overflow-hidden relative group">
          <div className="flex animate-marquee gap-8 py-8 px-4 whitespace-normal group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white rounded-[2.5rem] p-10 shadow-soft border border-white hover:border-gold-200 transition-all duration-500 hover:shadow-gold-glow"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sage-700 text-lg italic mb-8 font-light leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-gold-100 bg-sage-100 flex items-center justify-center overflow-hidden">
                      <User className="w-8 h-8 text-sage-400" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-sage-900">{testimonial.name}</p>
                      <p className="text-xs text-sage-500 uppercase tracking-tighter mt-1">Verifikovan klijent</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gold-50 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-gold-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Final */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center relative z-10">
          <div className="bg-[#1C1C22] rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl text-white">
                Spremni za vašu <br /> <span className="text-gold-400 italic">transformaciju</span>?
              </h2>
              <p className="text-sage-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Započnite svoje putovanje ka savršenoj koži i potpunom miru već danas.
                Naš tim vas čeka u srcu Vranja.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500 hover:scale-105"
                >
                  <Link to="/kontakt">Zakažite odmah</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="2xl"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm transition-all"
                >
                  <Link to="/proizvodi">Pogledaj prodavnicu</Link>
                </Button>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

    </>
  )
}
