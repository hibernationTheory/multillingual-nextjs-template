module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
};
