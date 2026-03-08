import { ArrowLeft } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-cream font-sans text-[#3a2e2a]">
      <header className="bg-cream/95 backdrop-blur border-b border-nude-100 px-5 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <a href="/" className="p-2 rounded-full hover:bg-nude-50 transition-colors text-nude-400">
            <ArrowLeft size={20} />
          </a>
          <p className="text-2xl text-nude-500" style={{ fontFamily: "'Parisienne', cursive" }}>
            L'instant Tessa
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="font-serif text-3xl font-bold text-[#3a2e2a] mb-2">Mentions légales</h1>
        <p className="text-sm text-[#9a8880] mb-10">Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004.</p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Éditeur du site</h2>
          <div className="space-y-1 text-[#6b5a54] text-sm leading-relaxed">
            <p><strong className="text-[#3a2e2a]">Raison sociale :</strong> L'instant Tessa</p>
            <p><strong className="text-[#3a2e2a]">Statut :</strong> Micro-entreprise</p>
            <p><strong className="text-[#3a2e2a]">Responsable de publication :</strong> Tessa [<span className="italic text-nude-400">Nom de famille à compléter</span>]</p>
            <p><strong className="text-[#3a2e2a]">SIRET :</strong> [<span className="italic text-nude-400">À compléter</span>]</p>
            <p><strong className="text-[#3a2e2a]">Adresse :</strong> Aix-en-Provence (13)</p>
            <p><strong className="text-[#3a2e2a]">Email :</strong> <a href="mailto:linstantessa@gmail.com" className="text-nude-500 hover:underline">linstantessa@gmail.com</a></p>
            <p><strong className="text-[#3a2e2a]">Téléphone :</strong> +33 6 05 57 21 04</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Hébergement</h2>
          <div className="space-y-1 text-[#6b5a54] text-sm leading-relaxed">
            <p><strong className="text-[#3a2e2a]">Hébergeur :</strong> Vercel Inc.</p>
            <p><strong className="text-[#3a2e2a]">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p><strong className="text-[#3a2e2a]">Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:underline">vercel.com</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Propriété intellectuelle</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, visuels) est la propriété exclusive de L'instant Tessa, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, est interdite sans autorisation préalable écrite de l'éditeur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Limitation de responsabilité</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            L'instant Tessa ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site. Les informations présentes sur ce site sont données à titre indicatif et peuvent être modifiées à tout moment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Données personnelles</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            Ce site ne collecte aucune donnée personnelle automatiquement. Les données transmises via le formulaire de contact (email) sont uniquement utilisées pour répondre à votre demande et ne sont pas partagées avec des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant :<br />
            <a href="mailto:linstantessa@gmail.com" className="text-nude-500 hover:underline">linstantessa@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Cookies</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Aucune donnée de navigation n'est collectée ni transmise à des tiers.
          </p>
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-xs text-[#9a8880] border-t border-nude-100">
        © {new Date().getFullYear()} L'instant Tessa · <a href="/" className="hover:text-nude-400 transition-colors">Retour à l'accueil</a>
      </footer>
    </div>
  )
}
