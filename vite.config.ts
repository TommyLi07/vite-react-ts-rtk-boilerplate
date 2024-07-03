import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import removeConsole from 'vite-plugin-remove-console'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole(), ViteImageOptimizer(), viteCompression(), visualizer({ open: true })],
  build: {
    minify: false, // 这个是设置打包后的文件不压缩，方便查看
    rollupOptions: {
      output: {
        // 打包输出的配置
        manualChunks: id => {
          // 这个ID，就是所有文件的绝对路径
          if (id.includes('node_modules')) {
            // 因为 node_modules 中的依赖通常是不会改变的
            // 所以直接单独打包出去
            // 这个return 的值就是打包的名称
            return 'vendor'
          }
          return 'main'
        }
      }
    }
  }
})
