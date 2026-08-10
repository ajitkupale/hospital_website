import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules\/(react|react-dom|react-router)/,
              priority: 20,
            },
            {
              name: 'vendor-mui',
              test: /node_modules\/(@mui|@emotion)/,
              priority: 15,
            },
            {
              name: 'vendor-fonts',
              test: /node_modules\/@fontsource/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})


