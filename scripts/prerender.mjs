/**
 * Static-generates the landing page (`/`) as the last step of `bun run build`.
 *
 * By this point `vite build` has produced the SPA client bundle in `dist/`, and
 * `vite build --ssr src/entry-server.tsx --outDir dist-ssr` has produced a
 * Node-runnable bundle of just the landing page's render tree. This script:
 *
 *   1. Copies the built `dist/index.html` to `dist/app.html` *before* touching it —
 *      that untouched copy is the plain SPA shell every `/app/*` route serves
 *      (see the `/app*` redirect in netlify.toml), so the prerendered landing
 *      markup below never collides with the game routes.
 *   2. Renders the landing page to an HTML string and injects it into
 *      `dist/index.html`'s `<div id="root"></div>`, so `/` paints real content
 *      before any JS runs.
 *   3. Removes the temporary `dist-ssr/` bundle.
 */
import { copyFile, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, '../dist');
const ssrEntry = path.resolve(scriptDir, '../dist-ssr/entry-server.js');
const indexHtmlPath = path.join(distDir, 'index.html');
const appHtmlPath = path.join(distDir, 'app.html');

const EMPTY_ROOT = '<div id="root"></div>';

async function main() {
  const { renderLandingPage } = await import(ssrEntry);
  const landingHtml = renderLandingPage();

  await copyFile(indexHtmlPath, appHtmlPath);

  const shell = await readFile(indexHtmlPath, 'utf8');
  if (!shell.includes(EMPTY_ROOT)) {
    throw new Error(
      `prerender.mjs: expected to find ${JSON.stringify(EMPTY_ROOT)} in dist/index.html, but it wasn't there. ` +
        'Did the #root markup in index.html change?',
    );
  }
  const withLanding = shell.replace(EMPTY_ROOT, `<div id="root">${landingHtml}</div>`);
  await writeFile(indexHtmlPath, withLanding);

  await rm(path.resolve(scriptDir, '../dist-ssr'), { recursive: true, force: true });

  console.log(
    'prerender.mjs: injected static landing HTML into dist/index.html, dist/app.html is the SPA shell.',
  );
}

main().catch((err) => {
  console.error('prerender.mjs failed:', err);
  process.exit(1);
});
