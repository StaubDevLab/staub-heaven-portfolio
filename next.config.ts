import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'staub-heaven-portfolio.s3.eu-west-3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb", // Augmente à 10 Mo (ou plus si nécessaire)
        },
    },
    api: {
        bodyParser: {
            sizeLimit: "10mb", // Augmente également pour les API Routes
        },
    },
};

export default nextConfig;
