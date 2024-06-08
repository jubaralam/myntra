import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    nodeResolve({
      preferBuiltins: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    },
    mainFields: ['module', 'main']
  }
});
