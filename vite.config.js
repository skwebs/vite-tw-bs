import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../docs'
  },
  server: {
    port: 8080,
    open:"/"
  }
}