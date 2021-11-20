const basePath = '/greatday-clock-in';
module.exports = {
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!process.env.BUILD_WEB) {
        config.target = 'electron-renderer';
      }
    }

    return config;
  },
};
