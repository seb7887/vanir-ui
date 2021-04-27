import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), mdx()],
})
