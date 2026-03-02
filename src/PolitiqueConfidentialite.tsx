import { ArrowLeft } from 'lucide-react'

export default function PolitiqueConfidentialite() {
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
        <h1 className="font-serif text-3xl font-bold text-[#3a2e2a] mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-[#9a8880] mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Responsable du traitement</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            L'instant Tessa, micro-entreprise de prothésie ongulaire basée à Aix-en-Provence (13).<br />
            Contact : <a href="mailto:contact@linstant-tessa.fr" className="text-nude-500 hover:underline">contact@linstant-tessa.fr</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Données collectées</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed mb-3">
            Ce site ne collecte aucune donnée personnelle de manière automatique (pas de cookies de tracking, pas d'analytics).
          </p>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            Les seules données collectées sont celles que vous transmettez volontairement en nous contactant par email ou WhatsApp (nom, prénom, numéro de téléphone, email). Ces données sont utilisées uniquement pour répondre à votre demande de rendez-vous.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Finalité du traitement</h2>
          <ul className="text-[#6b5a54] text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>Répondre à vos demandes de renseignements ou de rendez-vous</li>
            <li>Gérer la relation client (suivi des rendez-vous)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Durée de conservation</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            Vos données sont conservées pour la durée strictement nécessaire à la gestion de votre demande, et au maximum 3 ans à compter du dernier contact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Partage des données</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            Aucune donnée personnelle n'est vendue, louée ou transmise à des tiers à des fins commerciales. Les données transitent via les services WhatsApp (Meta) et email, soumis à leurs propres politiques de confidentialité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Vos droits (RGPD)</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="text-[#6b5a54] text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li><strong className="text-[#3a2e2a]">Accès</strong> : consulter les données vous concernant</li>
            <li><strong className="text-[#3a2e2a]">Rectification</strong> : corriger des données inexactes</li>
            <li><strong className="text-[#3a2e2a]">Suppression</strong> : demander l'effacement de vos données</li>
            <li><strong className="text-[#3a2e2a]">Opposition</strong> : vous opposer à un traitement</li>
          </ul>
          <p className="text-[#6b5a54] text-sm leading-relaxed mt-3">
            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@linstant-tessa.fr" className="text-nude-500 hover:underline">contact@linstant-tessa.fr</a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[#3a2e2a] mb-3 pb-2 border-b border-nude-100">Réclamation</h2>
          <p className="text-[#6b5a54] text-sm leading-relaxed">
            En cas de litige, vous pouvez adresser une réclamation à la CNIL :<br />
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:underline">www.cnil.fr</a>
          </p>
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-xs text-[#9a8880] border-t border-nude-100">
        © {new Date().getFullYear()} L'instant Tessa · <a href="/" className="hover:text-nude-400 transition-colors">Retour à l'accueil</a>
      </footer>
    </div>
  )
}
