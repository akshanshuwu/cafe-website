import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const hideLoader = () => {
  const shell = document.getElementById('loading-shell');
  if (shell) shell.classList.add('hidden');
};

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    hideLoader();
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // As a final backup, hide loader shortly after mounting starts
    setTimeout(hideLoader, 500);
  } catch (err) {
    console.error('Critical initialization error:', err);
    hideLoader();
  }
};

// Modules are deferred by default, but we check readyState just in case
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}