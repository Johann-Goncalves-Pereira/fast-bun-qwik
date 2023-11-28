import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

import postcssCustomMedia from "postcss-custom-media";
import postcssInlineSvg from "postcss-inline-svg";
import postcssPresetEnv from "postcss-preset-env";
import postcssVwh from "postcss-vwh";

import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";
import tailwindNesting from "tailwindcss/nesting";

export default {
  plugins: [
    autoprefixer,
    cssnano({
      preset: [
        "default",
        {
          cssDeclarationSorter: false,
          reduceIdents: false,
        },
      ],
    }),
    postcssCustomMedia,
    postcssInlineSvg,
    postcssPresetEnv({
      precalculate: false,
      features: {
        "logical-properties-and-values": false,
      },
    }),
    postcssVwh,
    tailwind(tailwindConfig),
    tailwindNesting,
  ],
};
