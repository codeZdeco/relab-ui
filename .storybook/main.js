const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  plugins: [],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'components': path.resolve(__dirname, '../src/components/'),
        '@lodash': path.resolve(__dirname, '../src/@lodash'),
      },
    },
  }),
  core: {
    builder: 'webpack5',
  },
};
