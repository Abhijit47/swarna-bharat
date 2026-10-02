import contentCollections from '@content-collections/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    contentCollections(),
    ViteImageOptimizer({
      /* pass your config */
      logStats: true,
      ansiColors: true,
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 40,
        compressionLevel: 9,
        progressive: true,
        effort: 4,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 30,
        mozjpeg: true,
        progressive: true,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 30,
        mozjpeg: true,
        progressive: true,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 50,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: false,
        effort: 4,
        quality: 50,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
        effort: 4,
        quality: 50,
      },
      cache: false,
      cacheLocation: './node_modules/.vite-image-optimizer-cache',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modulePath = id.split('node_modules/')[1];
            const topLevelFolder = modulePath.split('/')[0];
            if (topLevelFolder !== '.pnpm') {
              return topLevelFolder;
            }
            const scopedPackageName = modulePath.split('/')[1];
            const chunkName =
              scopedPackageName.split('@')[
                scopedPackageName.startsWith('@') ? 1 : 0
              ];
            return chunkName;
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
