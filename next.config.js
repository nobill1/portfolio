module.exports = {
  reactStrictMode: true,
  output: 'export',
  // unoptimized: true,
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  // Disable powered-by header for security
  poweredByHeader: false,
  images: { unoptimized: true }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],    
  // }
}
