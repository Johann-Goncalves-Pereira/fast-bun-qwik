import { defineConfig, loadEnv } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import postcss from "./postcss.config.js";

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    server: {
      host: "0.0.0.0",
      port: 5123,
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    css: {
      postcss,
    },
  };
});
