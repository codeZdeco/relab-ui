import Ts from "rollup-plugin-typescript2";

const instance = {
  input: ["src/components/core/index.tsx"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    plugins: [],
  },
  plugins: [
    Ts(),
  ],
  external: ["react"],
};

export default instance;
