import { useState, useEffect } from 'react'
import { MessageCircle, Mail, MapPin, Clock, Star, ChevronDown, Sparkles, Menu, X } from 'lucide-react'
import './App.css'

function InstagramIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

// CONFIG — personnaliser avec les vraies infos de Tessa
const CONFIG = {
  instagram: 'https://instagram.com/linstant_tessa',
  whatsapp:  'https://wa.me/33605572104',
  email:     'contact@linstant-tessa.fr',
  location:  'Aix-en-Provence, (13)',
  phone:     '+33 6 05 57 21 04',
}

const SERVICES = [
  { name: 'Pose complète gel',  price: 'à partir de 50€', duration: '1h30', emoji: '✨' },
  { name: 'Remplissage',        price: 'à partir de 35€', duration: '1h',   emoji: '💅' },
  { name: 'Pose capsules',      price: 'à partir de 45€', duration: '1h15', emoji: '🌸' },
  { name: 'Nail art',           price: 'sur devis',        duration: '—',    emoji: '🎨' },
  { name: 'Dépose seule',       price: '15€',              duration: '30min', emoji: '🪄' },
  { name: 'Manucure naturelle', price: '25€',              duration: '45min', emoji: '🤍' },
]

const GALLERY_COLORS = [
  '#f4b8c8', '#eda882', '#f2d9c5', '#e8a0b4', '#f5c4aa', '#f9ede3',
]

const HORAIRES = [
  { day: 'Lundi – Vendredi', hours: '9h00 – 19h00' },
  { day: 'Samedi',           hours: '9h00 – 17h00' },
  { day: 'Dimanche',         hours: 'Fermé' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-cream font-sans text-[#3a2e2a]">

      {/* SKIP LINK accessibilité */}
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>

      {/* NAVBAR */}
      <nav role="navigation" aria-label="Navigation principale" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="font-serif text-xl font-semibold text-nude-500 tracking-wide">
            L'instant Tessa
          </button>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button onClick={() => scrollTo('services')} className="text-[#5a4a44] hover:text-nude-500 transition-colors">Prestations</button>
            <button onClick={() => scrollTo('galerie')}  className="text-[#5a4a44] hover:text-nude-500 transition-colors">Galerie</button>
            <button onClick={() => scrollTo('contact')}  className="text-[#5a4a44] hover:text-nude-500 transition-colors">Contact</button>
            <a href={`mailto:${CONFIG.email}`} className="px-4 py-2 rounded-full bg-nude-400 text-white text-sm font-medium hover:bg-nude-500 transition-colors">
              Prendre RDV
            </a>
          </div>
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden p-2 text-nude-500">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream/98 backdrop-blur border-t border-nude-100 px-5 py-4 flex flex-col gap-4 text-sm font-medium">
            <button onClick={() => scrollTo('services')} className="text-left text-[#5a4a44]">Prestations</button>
            <button onClick={() => scrollTo('galerie')}  className="text-left text-[#5a4a44]">Galerie</button>
            <button onClick={() => scrollTo('contact')}  className="text-left text-[#5a4a44]">Contact</button>
            <a href={`mailto:${CONFIG.email}`} className="mt-1 px-4 py-2.5 rounded-full bg-nude-400 text-white text-center font-medium">
              Prendre RDV
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <main id="main-content">
      <section id="hero" aria-label="Présentation" className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-light via-cream to-nude-50" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-petal/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-peach-mid/20 blur-3xl" />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 text-nude-500 text-sm font-medium mb-6 shadow-sm">
            <Sparkles size={14} />
            Prothésiste ongulaire
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#3a2e2a] leading-tight mb-2">
            L'instant <span className="text-nude-400 italic">Tessa</span>
          </h1>
          <p className="text-nude-400 font-serif text-lg italic mb-6">Ongles & Beauté</p>
          <p className="text-[#6b5a54] text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Révélez la beauté de vos mains avec des ongles sublimés, du nude élégant au nail art créatif.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`mailto:${CONFIG.email}`} className="px-7 py-3.5 rounded-full bg-nude-400 text-white font-medium hover:bg-nude-500 transition-all shadow-md hover:shadow-lg">
              Prendre rendez-vous
            </a>
            <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border-2 border-nude-300 text-nude-500 font-medium hover:bg-nude-50 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
        <button onClick={() => scrollTo('services')} className="absolute bottom-8 text-nude-400 animate-bounce" aria-label="Voir les prestations">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* À PROPOS */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-peach-light to-nude-200 flex items-center justify-center">
              <div className="text-center text-nude-400">
                <Sparkles size={48} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm opacity-50">Photo de Tessa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-nude-400 font-serif italic text-sm mb-2 tracking-wider uppercase">À propos</p>
            <h2 className="font-serif text-3xl font-bold text-[#3a2e2a] mb-4 leading-tight">
              Une expérience beauté personnalisée
            </h2>
            <p className="text-[#6b5a54] leading-relaxed mb-4">
              Passionnée par l'art de l'ongle depuis plusieurs années, je mets mon savoir-faire au service de votre beauté dans un cadre chaleureux et intime.
            </p>
            <p className="text-[#6b5a54] leading-relaxed mb-6">
              Chaque pose est réalisée avec soin, des produits de qualité professionnelle et une attention particulière à la santé de vos ongles naturels.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-peach-warm text-peach-warm" />
              ))}
              <span className="text-sm text-[#6b5a54] ml-1">5/5 sur les avis clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-5 bg-nude-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-nude-400 font-serif italic text-sm mb-2 tracking-wider uppercase">Prestations</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a2e2a]">Mes services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-nude-100">
                <span className="text-2xl mb-3 block">{s.emoji}</span>
                <h3 className="font-semibold text-[#3a2e2a] mb-1">{s.name}</h3>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-nude-100">
                  <span className="text-nude-500 font-semibold text-sm">{s.price}</span>
                  <span className="text-xs text-[#9a8880] bg-nude-50 px-2 py-1 rounded-full">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#9a8880] mt-6 italic">
            * Tarifs indicatifs. Devis personnalisé disponible sur demande.
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-nude-400 font-serif italic text-sm mb-2 tracking-wider uppercase">Réalisations</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a2e2a]">Galerie</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_COLORS.map((color, i) => (
              <div key={i} className="aspect-square rounded-2xl flex items-center justify-center text-4xl" style={{ backgroundColor: color + '55' }}>
                💅
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#9a8880] mt-4 italic">Remplacer par les vraies photos de réalisations</p>
          <div className="text-center mt-6">
            <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-rose-soft text-rose-deep font-medium hover:bg-rose-petal/20 transition-colors">
              <InstagramIcon size={18} />
              Voir plus sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA RDV */}
      <section className="py-20 px-5 bg-gradient-to-br from-peach-light to-nude-200">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a2e2a] mb-4">
            Prête pour de beaux ongles ?
          </h2>
          <p className="text-[#6b5a54] mb-8 leading-relaxed">
            Contactez-moi par email ou WhatsApp pour convenir d'un créneau.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`mailto:${CONFIG.email}`}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-nude-400 text-white font-medium hover:bg-nude-500 transition-all shadow-md">
              <Mail size={16} />
              Envoyer un email
            </a>
            <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-nude-500 font-medium hover:bg-nude-50 border border-nude-200 transition-all">
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & HORAIRES */}
      <section id="contact" className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-nude-400 font-serif italic text-sm mb-2 tracking-wider uppercase">Infos pratiques</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a2e2a]">Contact & Horaires</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-nude-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-[#3a2e2a] mb-4">Nous contacter</h3>
              <a href={`mailto:${CONFIG.email}`} className="flex items-center gap-3 text-[#6b5a54] hover:text-nude-500 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-nude-400" />
                </div>
                <span className="text-sm">{CONFIG.email}</span>
              </a>
              <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#6b5a54] hover:text-nude-500 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-nude-400" />
                </div>
                <span className="text-sm">{CONFIG.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-[#6b5a54]">
                <div className="w-9 h-9 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-nude-400" />
                </div>
                <span className="text-sm">{CONFIG.location}</span>
              </div>
              <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#6b5a54] hover:text-nude-500 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={16} className="text-nude-400" />
                </div>
                <span className="text-sm">{CONFIG.instagram.replace('https://instagram.com/', '@')}</span>
              </a>
            </div>
            <div className="bg-nude-50 rounded-2xl p-6">
              <h3 className="font-semibold text-[#3a2e2a] mb-4 flex items-center gap-2">
                <Clock size={16} className="text-nude-400" />
                Horaires
              </h3>
              <div className="space-y-3">
                {HORAIRES.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-nude-100 last:border-0">
                    <span className="text-sm text-[#6b5a54]">{h.day}</span>
                    <span className={`text-sm font-medium ${h.hours === 'Fermé' ? 'text-rose-deep' : 'text-nude-500'}`}>{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#9a8880] italic">Rendez-vous uniquement sur réservation.</p>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer role="contentinfo" className="py-8 px-5 bg-[#3a2e2a] text-center">
        <p className="font-serif italic text-nude-300 text-lg mb-1">L'instant Tessa</p>
        <p className="text-nude-400 text-xs mb-4">Prothésiste ongulaire · {CONFIG.location}</p>
        <div className="flex justify-center gap-4">
          <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300">
            <InstagramIcon size={18} />
          </a>
          <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300">
            <MessageCircle size={18} />
          </a>
          <a href={`mailto:${CONFIG.email}`} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300">
            <Mail size={18} />
          </a>
        </div>
        <p className="mt-6 text-xs text-nude-500">© {new Date().getFullYear()} L'instant Tessa</p>
      </footer>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <a
        href={CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  )
}
