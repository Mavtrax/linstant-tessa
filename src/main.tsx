import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/parisienne/latin.css'
import '@fontsource/parisienne/latin-ext.css'
import '@fontsource/playfair-display/latin-400.css'
import '@fontsource/playfair-display/latin-500.css'
import '@fontsource/playfair-display/latin-600.css'
import '@fontsource/playfair-display/latin-700.css'
import '@fontsource/playfair-display/latin-400-italic.css'
import '@fontsource/playfair-display/latin-500-italic.css'
import '@fontsource/playfair-display/latin-ext-400.css'
import '@fontsource/playfair-display/latin-ext-500.css'
import '@fontsource/playfair-display/latin-ext-600.css'
import '@fontsource/playfair-display/latin-ext-700.css'
import '@fontsource/playfair-display/latin-ext-400-italic.css'
import '@fontsource/playfair-display/latin-ext-500-italic.css'
import '@fontsource/dm-sans/latin-300.css'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/dm-sans/latin-ext-300.css'
import '@fontsource/dm-sans/latin-ext-400.css'
import '@fontsource/dm-sans/latin-ext-500.css'
import '@fontsource/dm-sans/latin-ext-600.css'
import './index.css'
import App from './App.tsx'
import MentionsLegales from './MentionsLegales.tsx'
import PolitiqueConfidentialite from './PolitiqueConfidentialite.tsx'

const path = window.location.pathname

let page
if (path === '/mentions-legales') {
  page = <MentionsLegales />
} else if (path === '/confidentialite') {
  page = <PolitiqueConfidentialite />
} else {
  page = <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
