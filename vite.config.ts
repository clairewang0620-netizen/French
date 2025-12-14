
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const timestamp = new Date().getTime();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // 强制文件名包含时间戳，彻底避免 CDN 缓存旧文件
        entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        assetFileNames: `assets/[name]-[hash]-${timestamp}.[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        }
      }
    }
  }
});
