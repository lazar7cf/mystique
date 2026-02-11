
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProdavnicaPage() {
  const partners = ['DR. TEMT', 'REVLON', 'MALU WILZ', 'OPI', 'PANDHY\'S']

  return (
    <>
      {/* Premium Shop Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-sage-200/40 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="animate-slide-up max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs">
                Samo najbolje za Vašu kožu
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sage-900 leading-[1.1] mb-8">
              Svet Premium <span className="text-gold-500 italic">Kozmetike</span>
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed font-light max-w-2xl">
              Istinski luksuz je u detaljima. Istražite našu selekciju najprestižnijih
              svetskih brendova koje koristimo u tretmanima i nudimo za Vašu kućnu negu.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Marquee/Grid */}
      <section className="py-12 bg-white border-y border-sage-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-sage-400 mb-10 font-bold">Naši Ekskluzivni Partneri</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-serif text-2xl md:text-4xl text-sage-900 hover:text-gold-500 transition-colors duration-500 cursor-default tracking-tighter"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - 3D Card Style */}
      <section className="py-24 md:py-32 relative bg-white texture-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">

            {/* Natural Oils Card */}
            <div className="group relative perspective-1000">
              <div className="relative bg-sage-900 rounded-[4rem] p-10 md:p-16 overflow-hidden transition-transform duration-1000 preserve-3d group-hover:rotate-y-6 shadow-2xl">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('/pozadina.JPG')] bg-cover mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px]" />

                <div className="relative z-10 space-y-8 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gold-600 rounded-[2.5rem] flex items-center justify-center shadow-gold-glow">
                      <Leaf className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-white">Prirodna Ulja <span className="text-gold-400 italic font-normal">&</span> Aromaterapija</h3>
                    <p className="text-sage-300 text-lg font-light leading-relaxed">
                      Uspostavite psihofizički balans i podignite nivo energije čitavog tela kroz
                      moć 100% prirodnih ekatrakata. Naša kolekcija ulja i krema za masažu
                      predstavlja vrhunac holističke nege.
                    </p>
                  </div>

                  <div className="pt-8">
                    <ul className="grid grid-cols-2 gap-4 mb-10">
                      {['Etarska ulja', 'Ulja za masažu', 'Aroma sveće', 'Biljni eliksiri'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sage-400 text-xs uppercase tracking-widest font-bold">
                          <div className="w-1 h-1 bg-gold-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="xl" className="border-white/40 text-white hover:bg-white hover:text-sage-900 bg-transparent group/btn">
                      Otkrijte Kolekciju
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Care Card */}
            <div className="group relative perspective-1000">
              <div className="relative bg-gold-500 rounded-[4rem] p-10 md:p-16 overflow-hidden transition-transform duration-1000 preserve-3d group-hover:-rotate-y-6 shadow-2xl">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pozadina.JPG')] bg-cover mix-blend-overlay" />

                <div className="relative z-10 space-y-8 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-white rounded-[2.5rem] flex items-center justify-center shadow-xl">
                      <ShoppingBag className="w-10 h-10 text-gold-600" />
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-white">Profesionalna Nega <span className="italic font-normal">kod Kuće</span></h3>
                    <p className="text-white/80 text-lg font-light leading-relaxed">
                      Sve što Vam je potrebno da svakog dana izgledate kao da ste upravo izašli iz salona.
                      Pristupite profesionalnim alatima, farbama i preparatima koje koriste naši eksperti.
                    </p>
                  </div>

                  <div className="pt-8">
                    <ul className="grid grid-cols-2 gap-4 mb-10">
                      {['Nega kose', 'Pribor za depilaciju', 'Stilizovanje', 'Muška kozmetika'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest font-bold">
                          <div className="w-1 h-1 bg-white rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button size="xl" className="bg-white text-gold-600 hover:bg-sage-50 shadow-xl group/btn">
                      Pogledaj Katalog
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Brand Narrative */}
      <section className="py-24 md:py-40 relative bg-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal-on-scroll">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white">
                <img
                  src="/prodavnica-2.jpg"
                  alt="Premium ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-glow z-20 animate-float hidden md:block">
                <div className="space-y-2">
                  <p className="text-4xl font-serif text-gold-500">100%</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-sage-400">Autentični Brendovi</p>
                </div>
              </div>
            </div>

            <div className="space-y-10 reveal-on-scroll animate-delay-200">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-6xl text-sage-900 leading-tight">Garantovana <span className="text-gold-500 italic">Autentičnost</span> i Kvalitet</h2>
                <div className="w-20 h-1 bg-gold-400" />
              </div>
              <div className="prose prose-sage prose-xl text-sage-600 font-light leading-relaxed">
                <p>
                  Naš cilj je da svim našim klijentima omogućimo uživanje u kupovini i potpunu
                  sigurnost kada je izbor pravih proizvoda u pitanju.
                </p>
                <p>
                  Prateći svetske trendove, nastojimo da svakodnevno proširujemo asortiman,
                  nudeći Vam samo proizvode koji su prošli rigorozne testove kvaliteta
                  u našem salonu.
                </p>
              </div>
              <div className="pt-4 flex gap-8 items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-sage-200 overflow-hidden">
                      <img src={`/slide-${i}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sage-500 text-sm font-medium italic">Više od 5000 zadovoljnih korisnika naših proizvoda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-900 rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('/pozadina.JPG')] bg-cover" />
            <div className="relative z-10 space-y-10">
              <Sparkles className="w-16 h-16 text-gold-500 mx-auto" />
              <h2 className="font-serif text-4xl md:text-7xl text-white leading-tight">
                Pronađite svoj <span className="text-gold-400 italic">ritual </span> lepote
              </h2>
              <p className="text-sage-300 text-xl max-w-2xl mx-auto font-light">
                Posetite naš salon i prepustite se savetima naših stručnjaka koji će za Vas kreirati personalizovanu korpu proizvoda.
              </p>
              <div className="pt-6">
                <Button
                  asChild
                  size="2xl"
                  className="bg-gold-600 hover:bg-gold-500 text-white shadow-gold-glow transition-all duration-500"
                >
                  <Link to="/kontakt">Zakažite konsultaciju</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

