
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function GalerijaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('Sve')

  const galleryImages = [
    { src: '/hidromasazna-kada.jpg', alt: 'Masaža', category: 'Masaže' },
    { src: '/tretmani-lica-1.jpg', alt: 'Tretman lica', category: 'Tretmani lica' },
    { src: '/sauna.jpg', alt: 'Sauna', category: 'Wellness' },
    { src: '/kozmeticarske-usluge.jpg', alt: 'Manikir', category: 'Nega' },
    { src: '/tretmani-lica-2.jpg', alt: 'Kozmetički tretman', category: 'Tretmani lica' },
    { src: '/solarijum.jpg', alt: 'Solarijum', category: 'Wellness' },
    { src: '/usluge-7.jpg', alt: 'Nega ruku', category: 'Nega' },
    { src: '/usluge-1.jpg', alt: 'Relaks masaža', category: 'Masaže' },
    { src: '/prodavnica-1.jpg', alt: 'Prirodni sastojci', category: 'Proizvodi' },
    { src: '/frizerske-usluge.jpg', alt: 'Frizerske usluge', category: 'Frizerske usluge' },
    { src: '/kozmeticarske-usluge.jpg', alt: 'Kozmetičarske usluge', category: 'Nega' },
    { src: '/tretmani-lica.jpg', alt: 'Tretmani lica', category: 'Tretmani lica' },
    { src: '/liposukcija.jpg', alt: 'Tretmani tela', category: 'Tretmani tela' },
    { src: '/sminka.jpg', alt: 'Šminka', category: 'Šminka' },
    { src: '/epilacija-1.jpg', alt: 'Epilacija', category: 'Epilacija' },
    { src: '/solarijum.jpg', alt: 'Solarijum', category: 'Wellness' },
    { src: '/sauna.jpg', alt: 'Sauna', category: 'Wellness' },
    { src: '/hidromasazna-kada.jpg', alt: 'Hidromasažna kada', category: 'Wellness' },
    { src: '/spa-day.jpg', alt: 'SPA Day', category: 'SPA' },
  ]

  const categories = ['Sve', ...new Set(galleryImages.map(img => img.category))]

  const filteredImages = activeFilter === 'Sve'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      {/* Premium Gallery Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-28 overflow-hidden bg-sage-50 texture-silk">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-gold-100 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="animate-slide-up text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs">
                Umetnost Vizuelne Harmonije
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sage-900 leading-[1.1] mb-8">
              Galerija <span className="text-gold-500 italic">Preobražaja</span>
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed font-light">
              Zaronite u vizuelni svet Mystique-a. Svaka fotografija priča priču o
              pažnji, preciznosti i lepoti koju stvaramo za Vas.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Masonry Grid Section */}
      <section className="py-24 md:py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Elegant Filter System */}
          <div className="flex flex-wrap justify-center gap-3 mb-20 animate-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${activeFilter === cat
                  ? 'bg-gold-600 text-white border-gold-600 shadow-gold-glow scale-105'
                  : 'bg-white text-sage-500 border-sage-100 hover:border-gold-300 hover:text-gold-600 shadow-soft'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
            {filteredImages.map((image, index) => {
              // Custom spanning logic for Masonry effect
              const isLarge = index % 7 === 0 || index % 11 === 0
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-soft hover:shadow-gold-glow transition-all duration-700 hover:-translate-y-2 animate-fade-in border border-sage-50 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <p className="text-gold-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">{image.category}</p>
                      <h4 className="text-white font-serif text-2xl md:text-3xl">{image.alt}</h4>
                      <div className="w-12 h-1 bg-gold-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300" />
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-[360deg]">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-sage-900/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* UI Elements */}
          <div className="absolute top-8 left-8 flex items-center gap-4 text-white/50">
            <span className="font-serif text-6xl text-gold-500/30">{(selectedImage + 1).toString().padStart(2, '0')}</span>
            <div className="h-10 w-px bg-white/10" />
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest font-bold text-white/80">{filteredImages[selectedImage].category}</p>
              <h3 className="font-serif text-2xl text-white">{filteredImages[selectedImage].alt}</h3>
            </div>
          </div>

          {/* Controls */}
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-all transform hover:rotate-90 p-4 bg-white/5 rounded-full z-20"
            onClick={closeLightbox}
          >
            <X className="w-10 h-10" />
          </button>

          <button
            className="absolute left-8 text-white/30 hover:text-gold-400 transition-all transform hover:scale-125 p-4 z-20 group"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-16 h-16 md:w-24 md:h-24 stroke-[1px]" />
          </button>

          <button
            className="absolute right-8 text-white/30 hover:text-gold-400 transition-all transform hover:scale-125 p-4 z-20 group"
            onClick={goToNext}
          >
            <ChevronRight className="w-16 h-16 md:w-24 md:h-24 stroke-[1px]" />
          </button>

          {/* Large Image Container */}
          <div
            className="relative max-w-7xl max-h-[75vh] group/image"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold-400/20 blur-[120px] rounded-full opacity-50 group-hover/image:opacity-80 transition-opacity duration-1000" />

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="relative z-10 max-w-full max-h-[75vh] object-contain rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-white/10"
            />
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center reveal-on-scroll">
            <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">Mystique Visual Journey &copy; 2024</p>
          </div>
        </div>
      )}
    </>
  )
}

