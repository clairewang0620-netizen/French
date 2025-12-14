
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- 核弹级缓存清理 ---
console.log('%c STOP!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%c If you are not seeing v7.0-FIXED in the header, you are viewing a cached version.', 'font-size: 16px;');
console.log('%c Current Bundle Loaded: 2025.01.16 - v7.0-FIXED', 'background: #0055A4; color: #fff; padding: 4px; border-radius: 4px;');

// 1. 强制注销所有 Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      console.log('Unregistering SW:', registration);
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
