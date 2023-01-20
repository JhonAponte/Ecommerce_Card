// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'main.ts',
  output: {
    dir: './bundle.type',
    format: 'iife'
  },
  plugins: [typescript()]
};