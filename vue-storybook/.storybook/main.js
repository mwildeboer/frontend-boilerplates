const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  stories: ['../src/stories/**/*.(js|ts)'],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs"
  ], 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: "ts-loader",
      options: { appendTsSuffixTo: [/\.vue$/] }
    });
    config.resolve.extensions.push(".ts", ".tsx");
  
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              './src/styles/variables.scss',
              './src/styles/mixins.scss'
            ]
          }
        },
      ]
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config;
  }
}