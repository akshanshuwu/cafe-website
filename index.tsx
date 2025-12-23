import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // If we can't find the root, at least hide the loader so it's not a stuck screen
  const shell = document.getElementById('loading-shell');
  if (shell) shell.classList.add('hidden');
}
