/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content2.rozetka.com.ua'
      },
      {
        protocol: 'https',
        hostname: 'content.rozetka.com.ua'
      },
      {
        protocol: 'https',
        hostname: 'content1.rozetka.com.ua'
      },
    ]
  }
};

export default config;
