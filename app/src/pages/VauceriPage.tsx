
import { Link } from 'react-router-dom'
import { ArrowRight, Gift, Phone, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function VauceriPage() {
  return (
    <>
      {/* Premium Voucher Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-sage-200/40 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="animate-slide-up text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs">
                Savršen Dar za Najdraže
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sage-900 leading-[1.1] mb-8">
              Poklonite <span className="text-gold-500 italic">Vaučer</span> <br />Blagostanja
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed font-light max-w-2xl mx-auto">
              Obradujte voljene osobe poklonom koji ne bledi. Mystique vaučer je
              ulaznica u svet potpunog opuštanja i vrhunske nege.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Voucher Section */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden texture-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* 3D Gift Card Visualizer */}
            <div className="relative group perspective-2000">
              <div className="relative w-full aspect-[1.6/1] bg-sage-900 rounded-[3rem] p-12 overflow-hidden shadow-2xl transition-transform duration-1000 preserve-3d group-hover:rotate-x-6 group-hover:rotate-y-12">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pozadina.JPG')] bg-cover" />

                {/* Gold Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-[100px]" />

                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-400">Gift Card</p>
                      <h3 className="font-serif text-3xl">MYSTIQUE</h3>
                    </div>
                    <Gift className="w-10 h-10 text-gold-500" />
                  </div>

                  <div className="space-y-4">
                    <div className="h-px bg-white/10 w-full" />
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[8px] uppercase tracking-widest text-sage-500 mb-1">Validan za sve tretmane</p>
                        <p className="font-mono text-xl tracking-tighter">PREMIUM WELLNESS PASS</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] uppercase tracking-widest text-sage-500 mb-1">Datum Izdavanja</p>
                        <p className="font-mono">2024 / 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s]" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-5 bg-white p-8 rounded-[2.5rem] shadow-glow z-20 animate-float">
                <Heart className="w-10 h-10 text-gold-500 mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest text-sage-900 leading-tight">Personalizovana <br />Poruka</p>
              </div>
            </div>

            {/* Narrative - How to Order */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl text-sage-900 leading-tight">Idealna prilika za <br /><span className="text-gold-500 italic">originalan </span> poklon</h2>
                <div className="w-16 h-1 bg-gold-400" />
              </div>

              <div className="prose prose-sage prose-xl text-sage-600 font-light leading-relaxed">
                <p>
                  Kupovina poklon vaučera je lep način da obradujete svoje najdraže osobe,
                  klijente, poslovne partnere i zaposlene. Bilo da je u pitanju rođendan,
                  godišnjica ili znak pažnje – budite originalni.
                </p>
              </div>

              {/* Steps */}
              <div className="grid gap-6">
                {[
                  { icon: Gift, title: 'Izaberite Vrednost', desc: 'Možete odabrati konkretan tretman ili novčani iznos.' },
                  { icon: Phone, title: 'Poručite Odmah', desc: 'Pozovite nas ili svratite do salona.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-sage-50 rounded-3xl border border-transparent hover:border-gold-200 hover:bg-white hover:shadow-soft transition-all duration-500 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:bg-gold-500 transition-colors">
                      <step.icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-sage-900 mb-1">{step.title}</h4>
                      <p className="text-sage-500 text-sm font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500"
                >
                  <Link to="/kontakt">
                    Zatražite Vaučer
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Gift,
                title: 'Univerzalnost',
                desc: 'Pogodan za svaku priliku i sve uzraste - od rođendana do korporativnih poklona.'
              },
              {
                icon: Heart,
                title: 'Iskustvo',
                desc: 'Umesto materijalnih poklona, darujte trenutke opuštanja koji ostaju u trajnom sećanju.'
              },
              {
                icon: Phone,
                title: 'Brzina',
                desc: 'Mogućnost preuzimanja u salonu odmah ili slanje na kućnu adresu po dogovoru.'
              }
            ].map((feature, i) => (
              <div key={i} className="text-center group p-10 bg-white rounded-[3rem] shadow-soft hover:shadow-gold-glow transition-all duration-700">
                <div className="w-20 h-20 bg-sage-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 transition-colors duration-500 shadow-inner">
                  <feature.icon className="w-10 h-10 text-gold-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-sage-900 mb-4">{feature.title}</h3>
                <p className="text-sage-500 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding Section */}
      <section className="py-24 md:py-40 bg-white text-center relative overflow-hidden texture-silk">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-12">
          <p className="text-gold-600 font-bold uppercase tracking-[0.4em] text-xs">Poklonite Mystique Magiju</p>
          <h2 className="font-serif text-4xl md:text-7xl text-sage-900 leading-tight">
            Mali gest koji <span className="text-gold-500 italic">govori </span> velika dela
          </h2>
          <div className="flex justify-center gap-6">
            <div className="h-px w-20 bg-gold-200 self-center" />
            <Sparkles className="w-12 h-12 text-gold-500 animate-pulse-soft" />
            <div className="h-px w-20 bg-gold-200 self-center" />
          </div>
          <div className="pt-10">
            <a
              href="tel:+38162443322"
              className="text-3xl md:text-5xl font-serif text-sage-900 hover:text-gold-600 transition-colors decoration-gold-500 underline underline-offset-8"
            >
              +381 62 44 33 22
            </a>
            <p className="mt-6 text-sage-400 uppercase tracking-widest text-xs font-bold">Pozovite nas za instant rezervaciju vaučera</p>
          </div>
        </div>
      </section>
    </>
  )
}

