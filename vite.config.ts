import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const figmaAssetPlugin: Plugin = {
  name: 'figma-asset',
  resolveId(id) {
    if (id.startsWith('figma:asset/')) {
      return '\0' + id
    }
  },
  load(id) {
    if (id.startsWith('\0figma:asset/')) {
      return 'export default ""'
    }
  },
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin,
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
