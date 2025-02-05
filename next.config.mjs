/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<system-design-master>',
    assetPrefix: isDev ? '' : '/<system-design-master>',
};

export default nextConfig;