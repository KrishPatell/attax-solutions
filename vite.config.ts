import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to resolve figma:asset/ imports outside of Figma's environment.
// Uses the \0 virtual module prefix so Vite's asset pipeline skips these IDs.
const figmaAssetPlugin = {
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) return '\0figma-asset:' + id;
  },
  load(id: string) {
    if (id.startsWith('\0figma-asset:')) return 'export default ""';
  },
};

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin,
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
