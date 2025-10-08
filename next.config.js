module.exports = {
  reactStrictMode: true,
  output: 'export',  
  trailingSlash: true,  
  poweredByHeader: false,
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images/',
          outputPath: 'static/images/',
        },
      },
    });

    return config;
  },  
}
