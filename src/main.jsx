// main.jsx أو index.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Radix UI
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// private css
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
