
import { Link } from 'react-router-dom'
import { Clock, BookOpen, Award, Users, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EdukacijePage() {
  return (
    <>
      {/* Academy Premium Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 overflow-hidden bg-sage-900">
        {/* Background Image with Parallax effect (CSS) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/tretmani-lica-4.jpg"
            alt="Academy Background"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900 via-sage-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="animate-slide-up max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs">
                Mystique Academy of Wellness
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
              Postanite <br /><span className="text-gold-500 italic">Ekspert</span> Wellness-a
            </h1>
            <p className="text-xl text-sage-200 leading-relaxed font-light max-w-2xl">
              Steknite stručna znanja i veštine od najboljih u industriji. Naši programi
              su kapija ka Vašoj uspešnoj karijeri u svetu lepote i zdravlja.
            </p>

            <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/10 pt-12">
              <div className="space-y-1">
                <p className="text-3xl font-serif text-white">500+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Sertifikovanih Polaznika</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="space-y-1">
                <p className="text-3xl font-serif text-white">10+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Godina Iskustva</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-serif text-white">4.9</span>
                  <Award className="w-5 h-5 text-gold-500" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Prosečna Ocena</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-6xl text-sage-900 mb-6">Programi <span className="text-gold-500 italic">Edukacije</span></h2>
            <div className="h-1 w-24 bg-gold-400 mx-auto mb-8" />
            <p className="text-sage-500 text-lg font-light">
              Nudimo strukturirane nivoe učenja prilagođene svim fazama Vašeg razvoja –
              od prvih koraka do naprednih specijalističkih tehnika.
            </p>
          </div>

          <div className="grid gap-16 md:gap-32">

            {/* Level 1 Card - Sophisticated Split Layout */}
            <div className="group relative bg-sage-50 rounded-[4rem] overflow-hidden shadow-soft-xl reveal-on-scroll">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 md:p-20 space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-4 text-gold-600 font-bold uppercase tracking-[0.3em] text-xs transition-transform group-hover:translate-x-2 duration-500">
                      <span className="w-8 h-px bg-gold-600" />
                      Nivo 1: Fundamentalna Tehnika
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-sage-900 leading-tight">Uvod u svet <span className="text-gold-600 italic">Relaksacione</span> masaže</h3>
                    <p className="text-sage-600 text-lg font-light leading-relaxed">
                      Idealan za početnike koji žele da pretvore strast u profesiju. Naučite
                      osnovne hvatove, indikacije i anatomiju mekih tkiva.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-sage-200">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold text-sage-400 tracking-widest">Trajanje</p>
                      <p className="font-medium text-sage-900">30 Dana / 3x Nedeljno</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold text-sage-400 tracking-widest">Certifikat</p>
                      <p className="font-medium text-sage-900">Mystique Basic Diploma</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="2xl" className="bg-sage-900 text-white hover:bg-gold-600 shadow-xl transition-all duration-500">
                      <Link to="/kontakt">Rezerviši Mesto</Link>
                    </Button>
                    <div className="px-8 py-4 bg-white rounded-full flex items-center justify-center">
                      <p className="font-serif text-2xl text-gold-600">25.000 <span className="text-sm uppercase font-sans">rsd</span></p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img src="/usluge-1.jpg" alt="Basic Massage" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-sage-900/10 mix-blend-multiply" />
                </div>
              </div>
            </div>

            {/* Level 2 Card - Alternative Side */}
            <div className="group relative bg-[#fdfaf5] rounded-[4rem] overflow-hidden shadow-soft-xl reveal-on-scroll">
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden order-2 lg:order-1">
                  <img src="/hidromasazna-kada.jpg" alt="Therapeutic Massage" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gold-900/10 mix-blend-multiply" />
                </div>
                <div className="p-10 md:p-20 space-y-10 order-1 lg:order-2 bg-white">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-4 text-gold-600 font-bold uppercase tracking-[0.3em] text-xs transition-transform group-hover:-translate-x-2 duration-500">
                      Nivo 2: Specijalistička Nega
                      <span className="w-8 h-px bg-gold-600" />
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-sage-900 leading-tight">Napredna <span className="text-gold-600 italic">Terapeutska</span> Masaža</h3>
                    <p className="text-sage-600 text-lg font-light leading-relaxed">
                      Uđite dublje u rešavanje problema mišićne napetosti. Savladajte
                      trigger point terapiju i poboljšanje mobilnosti zglobova.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-sage-100">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold text-sage-400 tracking-widest">Trajanje</p>
                      <p className="font-medium text-sage-900">4 Nedelje / Intenzivno</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold text-sage-400 tracking-widest">Napomena</p>
                      <p className="font-medium text-gold-600">Popust na oba nivoa</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <ul className="grid gap-3">
                      {['Zaposlenje za najbolje', 'Mala grupa (max 4)', 'Teorija + Intenzivna praksa'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-sage-500 font-medium">
                          <Check className="w-5 h-5 text-gold-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="2xl" className="border-gold-500 text-gold-600 hover:bg-gold-600 hover:text-white transition-all duration-500">
                      <Link to="/kontakt">Prijavi se na Nivo 2</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Stone Card - Floating Card Effect */}
            <div className="group relative perspective-2000 reveal-on-scroll">
              <div className="relative bg-sage-900 rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl transition-transform duration-1000 preserve-3d group-hover:rotate-x-2 group-hover:-rotate-y-2">
                <div className="absolute inset-0 opacity-10 bg-[url('/pozadina.JPG')] bg-cover" />
                <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[120px]" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8">
                    <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center shadow-gold-glow">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-4xl md:text-6xl text-white">Hot Stone <br /><span className="text-gold-400 italic">Weekend</span> Course</h3>
                      <p className="text-sage-300 text-xl font-light leading-relaxed">
                        Savladajte drevnu tradiciju korišćenja toplog vulkanskog kamenja za samo jedan vikend.
                        Obogatite svoju ponudu najtraženijim spa tretmanom.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-4 px-8 bg-white/5 rounded-full border border-white/10 w-fit">
                      <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Jednodnevna Obuka</span>
                      <div className="w-px h-6 bg-white/10" />
                      <span className="text-white font-serif text-2xl">10.000 <span className="text-xs uppercase font-sans text-sage-400">rsd</span></span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl transform rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-[2s]">
                      <img src="/usluge-7.jpg" alt="Hot Stone" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-gold-600 text-white p-8 rounded-[2rem] shadow-gold-glow animate-float z-20">
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-2">Uključeno u cenu</p>
                      <p className="font-serif text-xl">Kompletna Literatura + Oprema</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academy Footer Branding */}
      <section className="py-24 md:py-40 bg-sage-50 text-center relative overflow-hidden texture-silk">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-12">
          <div className="flex justify-center gap-10 opacity-30">
            <Award className="w-12 h-12" />
            <BookOpen className="w-12 h-12" />
            <Users className="w-12 h-12" />
          </div>
          <h2 className="font-serif text-4xl md:text-7xl text-sage-900 leading-tight">
            Kvalitet koji <span className="text-gold-500 italic">postavlja </span> standarde
          </h2>
          <p className="text-sage-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Učite u malim grupama uz potpunu posvećenost instruktora.
            Naši sertifikati su garant stručnosti prepoznat u celom regionu.
          </p>
          <div className="pt-10">
            <Button asChild size="2xl" className="bg-sage-900 hover:bg-gold-600 text-white shadow-2xl transition-all duration-500">
              <Link to="/kontakt">Kontaktirajte Nas za Plan i Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
