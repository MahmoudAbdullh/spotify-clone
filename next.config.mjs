/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.deezer.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'e-cdns-images.dzcdn.net',
          port: '',
        },
      ],}
};

export default nextConfig;
