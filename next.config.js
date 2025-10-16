/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    images: {
        domains: [
            "media.graphassets.com",
            "res.cloudinary.com",
            "media.dev.to",
            "eu-central-1-shared-euc1-02.graphassets.com"
        ],
    },
};

module.exports = nextConfig;
