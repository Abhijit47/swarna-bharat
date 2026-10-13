import contentCollections from '@content-collections/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';
// import { sitemap } from 'vite-plugin-sitemap-ts';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/vision-and-mission', name: 'VisionAndMission' },
  { path: '/awards', name: 'Awards' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
  {
    path: '/project-details/project-shakti-empower-her-empower-india',
    name: 'project-shakti-empower-her-empower-india',
  },
  {
    path: '/project-details/awards-and-recognitions-honouring-excellence',
    name: 'awards-and-recognitions-honouring-excellence',
  },
  {
    path: '/project-details/project-care-healing-with-compassion',
    name: 'project-care-healing-with-compassion',
  },
  {
    path: '/project-details/project-green-bengaluru-plant-today-protect-tomorrow',
    name: 'project-green-bengaluru-plant-today-protect-tomorrow',
  },
  {
    path: '/project-details/project-hope-fulfilling-dreams-supporting-life',
    name: 'project-hope-fulfilling-dreams-supporting-life',
  },
  {
    path: '/project-details/project-jeeva-jala-water-for-the-voiceless',
    name: 'project-jeeva-jala-water-for-the-voiceless',
  },
  {
    path: '/blogs/koti-vriksha-mission-greener-bengaluru',
    name: 'koti-vriksha-mission-greener-bengaluru',
  },
  {
    path: '/blogs/supporting-urban-biodiversity-bengaluru',
    name: 'supporting-urban-biodiversity-bengaluru',
  },
  {
    path: '/blogs/water_for_voiceless_a_simple_step_that_saves_lives',
    name: 'water_for_voiceless_a_simple_step_that_saves_lives',
  },
];

const dynamicRoutes = routes.map((r) => `/${r.path.replace(/^\//, '')}`);

export default defineConfig(({ mode }) => {
  // 1. Load env file based on `mode` in the current working directory.
  // 2. Pass '' as the 3rd argument to load ALL variables, even if they don't have the "VITE_" prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
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
        cache: true,
        cacheLocation: './node_modules/.vite-image-optimizer-cache',
      }),
      Sitemap({
        hostname: `${env.VITE_APP_BASE_URL}`,
        dynamicRoutes,
        generateRobotsTxt: true,
        robots: [
          {
            userAgent: '*',
            allow: [...dynamicRoutes],
            disallow: [
              '/admin',
              '/login',
              '/register',
              '/dashboard',
              '/profile',
              '/settings',
              '/private',
            ],
          },
        ],
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Swarna Bharat Foundation',
            description:
              'Welcome to Swarna Bharat, building a brighter future through community-driven initiatives and sustainable development.',
          },
        },
      }),
    ],
  };
});

// https://vite.dev/config/
// const   defineConfigs({
//   plugins: [
//     react(),
//     contentCollections(),
//     ViteImageOptimizer({
//       /* pass your config */
//       logStats: true,
//       ansiColors: true,
//       test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
//       exclude: undefined,
//       include: undefined,
//       includePublic: true,
//       png: {
//         // https://sharp.pixelplumbing.com/api-output#png
//         quality: 40,
//         compressionLevel: 9,
//         progressive: true,
//         effort: 4,
//       },
//       jpeg: {
//         // https://sharp.pixelplumbing.com/api-output#jpeg
//         quality: 30,
//         mozjpeg: true,
//         progressive: true,
//       },
//       jpg: {
//         // https://sharp.pixelplumbing.com/api-output#jpeg
//         quality: 30,
//         mozjpeg: true,
//         progressive: true,
//       },
//       tiff: {
//         // https://sharp.pixelplumbing.com/api-output#tiff
//         quality: 50,
//       },
//       // gif does not support lossless compression
//       // https://sharp.pixelplumbing.com/api-output#gif
//       gif: {},
//       webp: {
//         // https://sharp.pixelplumbing.com/api-output#webp
//         lossless: false,
//         effort: 4,
//         quality: 50,
//       },
//       avif: {
//         // https://sharp.pixelplumbing.com/api-output#avif
//         lossless: true,
//         effort: 4,
//         quality: 50,
//       },
//       cache: false,
//       cacheLocation: './node_modules/.vite-image-optimizer-cache',
//     }),
//     Sitemap({
//       hostname: 'https://yourdomain.com',
//       dynamicRoutes,
//       generateRobotsTxt: true,
//     }),
//     createHtmlPlugin({
//       minify: true,
//       inject: {
//         data: {
//           title: 'Swarna Bharat',
//           description: 'Default Description',
//         },
//       },
//     }),
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             const modulePath = id.split('node_modules/')[1];
//             const topLevelFolder = modulePath.split('/')[0];
//             if (topLevelFolder !== '.pnpm') {
//               return topLevelFolder;
//             }
//             const scopedPackageName = modulePath.split('/')[1];
//             const chunkName =
//               scopedPackageName.split('@')[
//                 scopedPackageName.startsWith('@') ? 1 : 0
//               ];
//             return chunkName;
//           }
//         },
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });
