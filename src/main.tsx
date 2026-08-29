import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
// `/` is prerendered at build time (see src/entry-server.tsx); every other route
// (all of /app/*, and bun run dev) mounts into an empty #root.
const isHydrating = container.hasChildNodes()

const app = (
  <StrictMode>
    <BrowserRouter>
      <App isHydrating={isHydrating} />
    </BrowserRouter>
  </StrictMode>
)

if (isHydrating) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
