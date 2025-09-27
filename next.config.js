module.exports = {
  reactStrictMode: true,
  // output: 'export',
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  // Disable powered-by header for security
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],    
  }
}
