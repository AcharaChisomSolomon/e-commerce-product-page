import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global } from '@emotion/react'
import App from './App.jsx'

import GlobalStyles from './globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </StrictMode>,
)
