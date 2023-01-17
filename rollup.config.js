// rollup.config.js
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output:{
		file: "bundle.mini.js",
		format: "iife"
	},
  plugins: [
	terser()
  ]
};