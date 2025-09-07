/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fyqqmayqexnrqiclpjgw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'imolmpsnlxbnllancufw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/photos/**',
      },
    ],
  },
  webpack: (config) => {
    config.snapshot = { ...config.snapshot, managedPaths: [] };
    config.watchOptions = {
      ignored: ["**/Application Data/**", "**/AppData/**"],
    };
    return config;
  },
};

export default nextConfig;

