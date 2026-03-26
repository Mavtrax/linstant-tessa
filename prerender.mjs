/**
 * Script de prerendering — L'instant Tessa
 * Lance un serveur local sur le dossier dist/,
 * visite chaque route avec Playwright, et sauvegarde le HTML rendu.
 */

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/mentions-legales',
  '/confidentialite',
];

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] });
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log('🚀 Démarrage du prerendering L\'instant Tessa...');

  let browser;
  let server;

  try {
    server = await startServer();
    console.log(`✅ Serveur local sur ${BASE_URL}`);

    browser = await chromium.launch();
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForSelector('#root > *', { timeout: 10000 });

      const html = await page.content();

      const outDir = route === '/' ? DIST : join(DIST, route);
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8');

      console.log(`✅ Prerendu : ${route}`);
    }

    console.log(`\n✨ Prerendering terminé — ${ROUTES.length} routes`);
  } catch (err) {
    console.error('⚠️  Prerendering échoué, build SPA conservé :', err.message);
  } finally {
    if (browser) await browser.close();
    if (server) server.close();
  }
}

prerender();
