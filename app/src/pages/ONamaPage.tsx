
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ONamaPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-gold-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-0 w-[50%] h-[50%] bg-sage-200 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="max-w-4xl animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs">
                Salon lepote i zdravlja
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sage-900 leading-[1.1] mb-8">
              Tradicija <span className="text-gold-500 italic">perfekcionizma</span> <br />i posvećenosti
            </h1>
            <p className="text-xl md:text-2xl text-sage-600 leading-relaxed font-light max-w-3xl">
              U samom centru Vranja, Mystique je više od salona – to je utočište
              gde se nauka i priroda spajaju u službi vaše lepote.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Story Section - Scroll-Telling */}
      <section className="py-24 md:py-40 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            {/* Collage - Premium Style */}
            <div className="relative h-[600px] md:h-[750px] perspective-1000">
              <div className="absolute top-0 right-[10%] w-[75%] h-[80%] rounded-[4rem] overflow-hidden shadow-2xl z-10 scale-reveal">
                <img
                  src="/o-nama.jpg"
                  alt="Mystique Team"
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-[15px] border-white animate-float">
                <img
                  src="/usluge-9.jpg"
                  alt="Mystique Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-200/40 rounded-full blur-[60px]" />
            </div>

            {/* Content Story */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl text-sage-900">Naša <span className="text-gold-500 italic">priča</span></h2>
                <div className="w-20 h-1 bg-gold-200" />
              </div>

              <div className="prose prose-sage prose-xl text-sage-600 font-light leading-relaxed space-y-8">
                <p className="reveal-on-scroll">
                  Godine predanog rada i usavršavanja u zemlji i inostranstvu, najnovija tehnologija u kozmetici,
                  stalna edukacija osoblja na međunarodnim seminarima i kongresima garantuju stručnost
                  u pružanju vrhunskih kozmetičkih usluga.
                </p>
                <p className="reveal-on-scroll animate-delay-200">
                  Prijatan ambijent, profesionalan i kvalifikovan kadar i preparati najboljih svetskih kozmetičkih kuća
                  su definitivno dobar spoj zbog koga ćete se uvek vraćati u naš salon.
                </p>
                <div className="bg-sage-50 rounded-3xl p-8 border-l-4 border-gold-500 reveal-on-scroll animate-delay-400">
                  <p className="text-sage-700 italic font-medium m-0">
                    "Iskustvom i profesionalnošću održavamo dugogodišnji odnos sa klijentima, na obostrano zadovoljstvo."
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500"
                >
                  <Link to="/kontakt">
                    Postanite deo naše tradicije
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Core Values - Modern Cards */}
          <div className="space-y-20 pt-20 border-t border-sage-100">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-4">Suština našeg rada</p>
              <h2 className="font-serif text-4xl md:text-6xl text-sage-900">Naši stubovi <span className="text-gold-500 italic">izvrsnosti</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Award,
                  title: 'Stručnost',
                  desc: 'Kontinuirana edukacija na svetskom nivou i decenije iskustva u dermatologiji i kozmetici.'
                },
                {
                  icon: Users,
                  title: 'Individualnost',
                  desc: 'Svaki klijent je jedinstven. Kreiramo personalizovane protokole koji odgovaraju vašoj koži.'
                },
                {
                  icon: Sparkles,
                  title: 'Inovacija',
                  desc: 'Najsavremenija aparativna kozmetika i premium preparati najprestižnijih svetskih kuća.'
                }
              ].map((value, i) => (
                <div key={i} className="group relative bg-sage-50 rounded-[3rem] p-12 hover:bg-white hover:shadow-gold-glow transition-all duration-700 border border-transparent hover:border-gold-100">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-8 shadow-soft group-hover:bg-gold-500 transition-colors duration-500 ring-8 ring-white/50">
                    <value.icon className="w-10 h-10 text-gold-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-3xl text-sage-900 mb-6">{value.title}</h3>
                  <p className="text-sage-600 text-lg leading-relaxed font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Visual Impact */}
      <section className="py-24 md:py-32 relative bg-sage-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pozadina.JPG')] bg-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
            {[
              { label: 'Godina iskustva', val: '15+' },
              { label: 'Srećnih klijenata', val: '5k+' },
              { label: 'Ekskluzivnih usluga', val: '50+' },
              { label: 'Nagrada za kvalitet', val: '12' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-7xl font-serif text-gold-400 mb-4 transition-transform duration-500 group-hover:scale-110">
                  {stat.val}
                </div>
                <div className="w-10 h-px bg-white/20 mx-auto mb-4 group-hover:w-20 group-hover:bg-gold-500 transition-all" />
                <p className="text-sage-300 uppercase tracking-widest text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden texture-marble">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12 reveal-on-scroll">
            <Sparkles className="w-12 h-12 text-gold-500 mx-auto animate-pulse-soft" />
            <h2 className="font-serif text-4xl md:text-6xl text-sage-900 leading-tight italic">
              "Naša vizija je da kroz udruženo delovanje nauke, tehnologije i prirode
              otkrijemo i sačuvamo vašu autentičnu lepotu."
            </h2>
            <div className="pt-8">
              <Link to="/usluge/tretmani-lica" className="text-gold-600 font-bold uppercase tracking-widest hover:text-gold-700 transition-colors inline-flex items-center gap-3">
                Istražite naše eksperte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

