import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
