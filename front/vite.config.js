import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server:{
    port: 5173, //le pont sur lequel tourne le projet react
    proxy: {
      '/api': { //si une requête commence api 
        // rediriger vers l'adresse
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
