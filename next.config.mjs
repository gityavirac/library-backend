/** @type {import('next').NextConfig} */
const nextConfig = {
  // API-only backend: no necesitamos optimización de imágenes ni telemetría extra.
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;
