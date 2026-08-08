import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Premium typography — Figtree (headings) + Noto Sans (body)
import '@fontsource/figtree/300.css';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/600.css';
import '@fontsource/figtree/700.css';
import '@fontsource/noto-sans/300.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/700.css';
// Fallback — keep Inter + Roboto loaded for graceful degradation
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Global styles injection
import { globalCSS } from './globalStyles';

// Inject global CSS
const styleTag = document.createElement('style');
styleTag.textContent = globalCSS;
document.head.appendChild(styleTag);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
