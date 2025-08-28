import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
   webpack: (config, { isServer }) => {
    // Exclude three.js and related libraries from server-side rendering
    if (isServer) {
      config.externals.push('three', '@react-three/fiber', 'lamina', 'gsap');
    }

    config.externals.push({
      'supports-color': 'supports-color',
    });
    return config;
  }
};

export default nextConfig;
