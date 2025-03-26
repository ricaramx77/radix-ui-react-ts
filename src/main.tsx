import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="jade" grayColor="sand" radius="large" scaling="105%">
      <App />
      <ThemePanel />
    </Theme>   
  </StrictMode>
)
