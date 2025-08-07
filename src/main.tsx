import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';

const theme = import.meta.env.VITE_THEME;

if (theme === 'kiosk') {
  import('./styles/kiosk-theme.css');
} else if (theme === 'serve') {
  import('./styles/serve-theme.css');
} else {
  import('./styles/cpx-theme.css');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
