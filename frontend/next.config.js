/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5000/api/:path*' // Local Flask server
            : undefined, // Use the same path in production
      },
    ];
  },
};

module.exports = nextConfig;
