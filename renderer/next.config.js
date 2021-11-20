module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!process.env.BUILD_WEB) {
        config.target = 'electron-renderer';
      }
    }

    return config;
  },
};
