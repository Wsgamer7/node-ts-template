import { fixImportsPlugin } from 'esbuild-fix-imports-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'], // keep all files structure
  //entry: ['src/index.ts'], // single file
  // sourcemap: true,
  outDir: 'dist',
  clean: true,
  format: 'esm',
  bundle: false,
  esbuildPlugins: [fixImportsPlugin()],
})
