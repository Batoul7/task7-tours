/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/task7-tours/' : '',
    output: 'export',
    images: {
        unoptimized: true, 
      },
};

export default nextConfig;
