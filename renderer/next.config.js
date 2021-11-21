const basePath = process.env.BUILD_GH_PAGE ? '/greatday-clock-in' : '';
module.exports = {
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  env: {
    BACKEND_URL: basePath,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!process.env.BUILD_WEB && !process.env.BUILD_GH_PAGE) {
        config.target = 'electron-renderer';
      }
    }

    return config;
  },
};
