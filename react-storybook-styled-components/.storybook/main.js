const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  stories: ['../src/stories/**/*.(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: prop => {
            // Currently not working, prop.parent is always null.
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules/@types/react/');
            }
            return true;
          },
        },
      },
    },
    "@storybook/addon-docs",
    "@storybook/addon-knobs"
  ], 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }]
        ],
        plugins: [
          "babel-plugin-styled-components"
        ]
      },
    });
    
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config;
  }
}