import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const __dirname = path.resolve();

export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-ui': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-slider'],
          },
        },
      },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})