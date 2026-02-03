import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'dipfin-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/dipfin' || req.url === '/dipfin/') {
            const dipfinHtml = fs.readFileSync(
              path.resolve(__dirname, 'public/dipfin/index.html'),
              'utf-8'
            )
            res.setHeader('Content-Type', 'text/html')
            res.end(dipfinHtml)
            return
          }
          next()
        })
      }
    }
  ],
})