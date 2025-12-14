
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- 核弹级缓存清理 ---
// 1. 强制注销所有 Service Workers (防止 PWA 缓存)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
      console.log('Service Worker Unregistered');
    }
  });
}

// 2. 打印版本日志
console.log('%c FrenchMaster App Loaded - Build 2025.01.16-FINAL', 'background: #0055A4; color: #fff; padding: 4px;');

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
