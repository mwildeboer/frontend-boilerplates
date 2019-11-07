module.exports = ({ config }) => {
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

  return config;
};