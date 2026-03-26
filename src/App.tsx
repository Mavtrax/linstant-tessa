import { useState, useEffect } from 'react'
import CursorEffect from './CursorEffect'
import { MessageCircle, Mail, MapPin, Clock, Star, ChevronDown, Sparkles, Menu, X } from 'lucide-react'
import heroBg from './assets/fondprincipal.jpg'
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
  instagram: 'https://instagram.com/linstantessa',
  whatsapp:  'https://wa.me/33605572104',
  email:     'linstantessa@gmail.com',
  location:  '43 Av Mal de Lattre de Tassigny, 13090 Aix-en-Provence',
  phone:     '+33 6 05 57 21 04',
  planity:   'https://www.planity.com/sc-coiffure-linstant-tessa-13090-aix-en-provence',
}

const SERVICE_CATEGORIES = [
  {
    name: 'Beauté des mains',
    emoji: '💅',
    services: [
      { name: 'Beauté des mains + Vernis classique', price: '27€', duration: '30min' },
      { name: 'Beauté des mains',                    price: '20€', duration: '30min' },
      { name: 'Limage + Vernis classique',            price: '14€', duration: '15min' },
    ],
  },
  {
    name: 'Beauté des pieds',
    emoji: '🦶',
    services: [
      { name: 'Beauté des pieds + Vernis classique',  price: '27€', duration: '30min' },
      { name: 'Beauté des pieds',                     price: '20€', duration: '30min' },
      { name: 'Limage + Vernis classique Pieds',      price: '14€', duration: '15min' },
    ],
  },
  {
    name: 'Vernis semi-permanent',
    emoji: '✨',
    services: [
      { name: 'Beauté des mains + VSP Mains',         price: '32€', duration: '40min' },
      { name: 'Dépose + Pose VSP Mains',              price: '40€', duration: '1h10'  },
      { name: 'Beauté des pieds + VSP Pieds',         price: '32€', duration: '40min' },
      { name: 'Dépose + Pose VSP Pieds',              price: '40€', duration: '1h10'  },
      { name: 'Supplément French',                    price: '4€',  duration: '10min' },
    ],
  },
  {
    name: 'Forfaits ongles',
    emoji: '🎀',
    services: [
      { name: 'Beauté mains & pieds + VSP',           price: '60€', duration: '1h15'  },
      { name: 'Beauté mains & pieds + Vernis classique', price: '54€', duration: '1h15' },
      { name: 'Beauté des mains et des pieds',        price: '40€', duration: '1h'    },
      { name: 'Dépose + Pose VSP Mains + Pieds',      price: '76€', duration: '1h45'  },
      { name: 'Dépose + Pose VSP Mains + VSP Pieds',  price: '70€', duration: '1h30'  },
    ],
  },
  {
    name: 'Manucure Homme',
    emoji: '🤍',
    services: [
      { name: 'Beauté des mains – Pour Lui',          price: '20€', duration: '30min' },
      { name: 'Beauté des pieds – Pour Lui',          price: '20€', duration: '30min' },
    ],
  },
  {
    name: 'Dépose',
    emoji: '🪄',
    services: [
      { name: 'Dépose VSP Mains',                     price: '12€', duration: '30min' },
      { name: 'Dépose VSP Pieds',                     price: '12€', duration: '30min' },
    ],
  },
]

const GALLERY_PHOTOS = [
  { src: '/tessa-1.png', alt: 'Pose ongles gel nude — L\'instant Tessa, Aix-en-Provence' },
  { src: '/tessa-2.png', alt: 'Pose ongles capsules — prothésiste ongulaire Aix-en-Provence' },
  { src: '/tessa-3.png', alt: 'Vernis semi-permanent mains — L\'instant Tessa' },
  { src: '/tessa-4.png', alt: 'Manucure french — ongles gel Aix-en-Provence' },
  { src: '/tessa-5.png', alt: 'Réalisation capsules ongles — L\'instant Tessa Aix-en-Provence' },
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
      <CursorEffect />

      {/* SKIP LINK accessibilité */}
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>

      {/* NAVBAR */}
      <nav role="navigation" aria-label="Navigation principale" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="text-2xl text-nude-500" style={{ fontFamily: "'Parisienne', cursive" }}>
            L'instant Tessa
          </button>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button onClick={() => scrollTo('services')} className="text-[#5a4a44] hover:text-nude-500 transition-colors">Prestations</button>
            <button onClick={() => scrollTo('galerie')}  className="text-[#5a4a44] hover:text-nude-500 transition-colors">Galerie</button>
            <button onClick={() => scrollTo('contact')}  className="text-[#5a4a44] hover:text-nude-500 transition-colors">Contact</button>
            <a href={CONFIG.planity} className="px-4 py-2 rounded-full bg-nude-400 text-white text-sm font-medium hover:bg-nude-500 transition-colors">
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
            <a href={CONFIG.planity} className="mt-1 px-4 py-2.5 rounded-full bg-nude-400 text-white text-center font-medium">
              Prendre RDV
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <main id="main-content">
      <section id="hero" aria-label="Présentation" className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns" style={{ backgroundImage: `url(${heroBg})` }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-peach-light/55 via-nude-200/45 to-rose-petal/40" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-petal/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-peach-mid/20 blur-3xl" />
        <div className="relative z-10 max-w-xl">
          <h1 className="sr-only">L'instant Tessa — Prothésiste ongulaire</h1>
          <img
            src="/logo1.webp"
            alt="L'instant Tessa — Prothésiste ongulaire"
            className="w-56 sm:w-72 md:w-80 mx-auto mb-6"
            width="543"
            height="770"
            fetchPriority="high"
          />
          <p className="text-[#6b5a54] text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Révélez la beauté de vos mains avec des ongles sublimés, du nude élégant aux poses en gel et capsules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CONFIG.planity} className="px-7 py-3.5 rounded-full bg-nude-400 text-white font-medium hover:bg-nude-500 transition-all shadow-md hover:shadow-lg">
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
              Prothésiste ongulaire à Aix-en-Provence
            </h2>
            <p className="text-[#6b5a54] leading-relaxed mb-4">
              Passionnée par l'art de l'ongle depuis plusieurs années, je mets mon savoir-faire au service de votre beauté dans un cadre chaleureux et intime, au cœur d'Aix-en-Provence.
            </p>
            <p className="text-[#6b5a54] leading-relaxed mb-6">
              Chaque pose — gel, capsules ou vernis semi-permanent — est réalisée avec soin, des produits de qualité professionnelle et une attention particulière à la santé de vos ongles naturels.
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a2e2a]">Prestations ongulaires à Aix-en-Provence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl shadow-sm border border-nude-100 overflow-hidden">
                <div className="px-5 py-4 bg-nude-50 border-b border-nude-100 flex items-center gap-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-semibold text-[#3a2e2a] text-sm">{cat.name}</h3>
                </div>
                <div className="divide-y divide-nude-100">
                  {cat.services.map((s) => (
                    <div key={s.name} className="px-5 py-3 flex items-center justify-between gap-3 hover:bg-nude-50/50 transition-colors">
                      <span className="text-[#6b5a54] text-sm leading-snug">{s.name}</span>
                      <div className="flex flex-col items-end flex-shrink-0 gap-0.5">
                        <span className="text-nude-500 font-semibold text-sm">{s.price}</span>
                        <span className="text-xs text-[#9a8880]">{s.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#9a8880] mt-6 italic">
            Tarifs issus de Planity. Réservation en ligne disponible.
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
            {GALLERY_PHOTOS.map((photo, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
            <a href={CONFIG.planity} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-nude-400 text-white font-medium hover:bg-nude-500 transition-all shadow-md">
              <Sparkles size={16} />
              Prendre rendez-vous
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
      <footer role="contentinfo" className="bg-[#3a2e2a] text-nude-400 pt-12 pb-6 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Marque */}
          <div>
            <p className="font-serif italic text-nude-300 text-xl mb-2">L'instant Tessa</p>
            <p className="text-xs text-nude-500 mb-4">Prothésiste ongulaire · {CONFIG.location}</p>
            <div className="flex gap-3">
              <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
              <a href={CONFIG.planity} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-nude-300" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
          {/* Informations */}
          <div>
            <p className="text-nude-300 text-xs font-semibold tracking-widest uppercase mb-4">Informations</p>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('hero')} className="hover:text-nude-300 transition-colors">Accueil</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-nude-300 transition-colors">Prestations</button></li>
              <li><button onClick={() => scrollTo('galerie')} className="hover:text-nude-300 transition-colors">Galerie</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-nude-300 transition-colors">Contact</button></li>
            </ul>
          </div>
          {/* Légal */}
          <div>
            <p className="text-nude-300 text-xs font-semibold tracking-widest uppercase mb-4">Légal</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/mentions-legales" className="hover:text-nude-300 transition-colors">Mentions légales</a></li>
              <li><a href="/confidentialite" className="hover:text-nude-300 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-6 text-center text-xs text-nude-500">
          © {new Date().getFullYear()} L'instant Tessa · Tous droits réservés
        </div>
        <div className="max-w-5xl mx-auto text-center mt-3">
          <a
            href="https://maverick64.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-nude-600/50 hover:text-nude-500 transition-colors"
          >
            Réalisé par Maverick Nova
          </a>
        </div>
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
