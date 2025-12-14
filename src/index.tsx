
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- Console Identity ---
console.log('%c French Master v13.0 ', 'background: #0055A4; color: #fff; padding: 4px; border-radius: 4px; font-weight: bold;');
console.log('Build: Fresh Application Deployment');

// 1. 强制注销所有 Service Workers (防止旧缓存干扰新域名，虽然新域名通常没这个问题)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
