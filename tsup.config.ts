import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'], // keep all files structure
  //   entry: ['src/index.ts'], // single file
  //   sourcemap: true,
  outDir: 'dist',
  clean: true,
  format: 'esm',
  bundle: false,
  plugins: [
    {
      name: 'alias-plugin',
      renderChunk(_, { code }) {
        if (this.format === 'esm') {
          const regex = /from ["']@\/(.+)["']/g
          return {
            code: code.replace(regex, 'from "./$1.js"'),
          }
        }
      },
    },
  ],
})
