import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (development, production, etc.)
  // .env.[mode] will override .env
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  const port = process.env.PORT || '3000';

  return {
    plugins: [react()],
    define: { 'process.env': process.env },
    server: {
      // proxy: {
      //   '/api': {
      //     target: process.env.API_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // },
      port: parseInt(port)
    }
  }
})


