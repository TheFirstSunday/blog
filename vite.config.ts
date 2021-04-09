import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig(({ mode }) => ({
  /**
   * Base public path when served in production.
   * @default '/'
   */
  base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    // include: ['echarts']
  },
  server: {
    host: process.env.VITE_HOST,
    port: Number(process.env.VITE_PORT),
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 反向代理
    proxy: {
      api: {
        target: 'http://www.skillnull.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    // 压缩
    minify: 'esbuild',
    /**
     * Directory relative from `root` where build output will be placed. If the
     * directory exists, it will be removed before the build.
     * @default 'dist'
     */
    outDir: process.env.VITE_OUTPUT_DIR,
    polyfillDynamicImport: true
  },
  // 引用全局 less
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/style/index.css";'
      }
    }
  }
}))
