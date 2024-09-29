// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    // {
    //   file: "dist/index.js",
    //   format: "cjs",
    //   sourcemap: true
    // },
    // {
    //   file: "dist/index.esm.js",
    //   format: "esm",
    //   sourcemap: true
    // }
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    // commonjs(),
    typescript(),
    json(),
    terser(),
  ],
};
