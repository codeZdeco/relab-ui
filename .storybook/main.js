const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '_comp': path.resolve(__dirname, '../src/components/'),
        '_internal': path.resolve(__dirname, '../src/components/.internal/'),
        '_core': path.resolve(__dirname, '../src/components/core/'),
      },
    },
  }),
};
