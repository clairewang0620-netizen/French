
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 强制每次构建清空输出目录
    emptyOutDir: true,
    // 提高警告限制
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 强制 JS/CSS 文件名包含 Hash，确保内容变化时文件名一定变化
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
          data: [
            './src/data/phrases_new.ts',
            './src/data/grammar_new.ts',
            './src/data/vocabulary_new.ts'
          ]
        }
      }
    }
  }
});
