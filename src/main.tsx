import {createRoot, hydrateRoot} from 'react-dom/client'

import './index.css'
import Root from './Root'

const container = document.getElementById('root') as HTMLElement

// In production the HTML is prerendered, so React attaches to it (hydration).
// In `npm run dev` the root only holds the <!--app-html--> placeholder comment,
// so React renders from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, <Root />)
} else {
  createRoot(container).render(<Root />)
}

// The old Create React App build registered a service worker that may still be
// serving a cached copy to returning visitors. Remove it so they get this version.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister())
  })
}
