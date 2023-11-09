import React from 'react'
import ReactDOM from 'react-dom/client'
import { HausThemeProvider } from '@daohaus/ui';
import App from './App.tsx'
import './index.css'
import { customTheme } from './components/theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HausThemeProvider themeOverrides={customTheme}>
      <App />
    </HausThemeProvider>
  </React.StrictMode>,
)
