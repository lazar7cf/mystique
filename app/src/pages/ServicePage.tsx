
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { servicesData } from '@/data/services'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-sage-800 mb-4">Usluga nije pronađena</h1>
          <Link to="/" className="text-sage-600 hover:underline">
            Nazad na početnu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-28 overflow-hidden bg-sage-900">
        {/* Background Image with Parallax effect (CSS) */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover scale-110 opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sage-900/60 via-sage-900/40 to-sage-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900 via-transparent to-transparent opacity-80" />
        </div>

        {/* Floating Textures */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-400 rounded-full blur-[150px] animate-pulse-soft" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-gold-500" />
                  <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs">
                    Ekskluzivna Usluga
                  </p>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? 'text-gold-400 italic font-normal' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl text-sage-200 max-w-lg leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500 hover:scale-105 active:scale-95 group"
                >
                  <Link to="/kontakt">
                    Zakažite tretman
                    <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-sage-400 mb-2">Trajanje</p>
                  <p className="text-xl text-white font-serif tracking-wide">60 - 90 min</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sage-400 mb-2">Cena od</p>
                  <p className="text-xl text-gold-400 font-serif tracking-wide">3.500 RSD</p>
                </div>
              </div>
            </div>

            {/* Immersive Visual Frame */}
            <div className="relative justify-center hidden lg:flex">
              <div className="relative w-full max-w-md aspect-[3/4] perspective-1000">
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-[100px] animate-pulse-soft" />
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white/5 backdrop-blur-md transform transition-transform duration-1000 hover:rotate-y-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sage-900/30 via-transparent to-white/5" />
                </div>

                {/* Float Badge */}
                <div className="absolute -bottom-10 -left-10 glass p-6 rounded-[2rem] shadow-glow z-20 animate-float">
                  <Sparkles className="w-8 h-8 text-gold-500 mb-3" />
                  <p className="font-serif text-sage-900 text-lg font-bold">Premium Rezultati</p>
                  <p className="text-[10px] uppercase tracking-tighter text-sage-500 mt-1">Sertifikovano Osoblje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Flow Section */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden texture-silk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Main Narrative */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl text-sage-900">
                  Umetnost <span className="text-gold-500 italic">revitalizacije</span>
                </h2>
                <div className="w-20 h-1 bg-gold-200" />
                <div className="prose prose-sage prose-lg max-w-none text-sage-600 font-light leading-relaxed">
                  {service.fullText.split('\n').map((para, i) => (
                    <p key={i} className="mb-6">{para}</p>
                  ))}
                </div>
              </div>

              {/* Visual Process Flow (Mock layout) */}
              <div className="space-y-8 pt-12 border-t border-sage-100">
                <h3 className="font-serif text-2xl text-sage-900">Proces Tretmana</h3>
                <div className="grid gap-8">
                  {service.types ? (
                    service.types.map((type: any, i: number) => (
                      <div key={i} className="flex gap-6 group p-6 bg-sage-50 rounded-3xl border border-transparent hover:border-gold-200 hover:bg-white hover:shadow-soft transition-all duration-500">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-serif text-xl border border-sage-100 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-500">
                          {i + 1}
                        </div>
                        <div className="pt-2">
                          <h4 className="font-bold text-sage-900 text-lg">{type.name}</h4>
                          <p className="text-sage-500 font-light mt-1">{type.desc}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    [
                      { title: 'Konsultacije', desc: 'Analiza vašeg tipa kože i definisanje ciljeva tretmana.' },
                      { title: 'Priprema', desc: 'Dubinsko čišćenje i opuštanje kože lica ili tela.' },
                      { title: 'Tretman', desc: 'Izvođenje odabrane procedure sa premium proizvodima.' },
                      { title: 'Finalizacija', desc: 'Nega i saveti za održavanje rezultata kod kuće.' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center font-serif text-xl border border-sage-100 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-500">
                          {i + 1}
                        </div>
                        <div className="pt-2">
                          <h4 className="font-bold text-sage-900 text-lg">{step.title}</h4>
                          <p className="text-sage-500 font-light mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-sage-50 rounded-[3rem] p-10 border border-sage-100 shadow-soft relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/50 rounded-full -mr-16 -mt-16" />

                <h3 className="font-serif text-3xl text-sage-900 mb-8 relative z-10 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-gold-500" />
                  Benefit tretmana
                </h3>

                <ul className="space-y-6 relative z-10">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white hover:border-gold-300 transition-colors duration-300">
                      <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-gold-glow">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-sage-800 font-medium leading-snug">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 space-y-4">
                  <Button
                    asChild
                    size="2xl"
                    className="w-full bg-sage-900 hover:bg-black text-white shadow-xl"
                  >
                    <Link to="/kontakt">Zakažite ovaj termin</Link>
                  </Button>
                  <p className="text-center text-xs text-sage-400 uppercase tracking-widest">Besplatna konsultacija uključena</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Themed */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gold-500 rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pozadina.JPG')] bg-cover mix-blend-overlay" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                  Poklonite sebi <br /> <span className="italic">trenutak savršenstva</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-light">
                  Svaki naš tretman je ritual posvećen vašem blagostanju.
                  Dozvolite nam da probudimo vašu unutrašnju svetlost.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
                <Button
                  asChild
                  size="2xl"
                  className="bg-white text-gold-600 hover:bg-gold-50 shadow-xl transition-all hover:scale-105"
                >
                  <Link to="/kontakt">Kontaktirajte nas</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="2xl"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent transition-all"
                >
                  <Link to="/cene">Pogledaj cenovnik</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

