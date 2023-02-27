import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', '*.ttf', '*.png', '*.jpg', '*.jpeg', 'images/*.svg'],
      manifest: {
        name: 'Advice Generator',
        short_name: 'AdviceGenerator',
        description: 'A mini-app to generate advice',
        theme_color: '#1f2632',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    
    })
  ]
})