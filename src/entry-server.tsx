import {renderToString} from 'react-dom/server'

import Root from './Root'

// Used only at build time by scripts/prerender.js.
export const render = () => renderToString(<Root />)
