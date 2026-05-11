import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove skip-link injected by browser extensions
if (typeof document !== 'undefined') {
  const removeSkipLink = () => {
    const skipLinks = document.querySelectorAll('.skip-link, a[href="#main"], [class*="skip"], #skip-link');
    skipLinks.forEach(el => el && el.remove());
  };
  removeSkipLink();
  setTimeout(removeSkipLink, 100);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
