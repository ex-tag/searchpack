// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';

import App from 'src/components/App';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root: Root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
