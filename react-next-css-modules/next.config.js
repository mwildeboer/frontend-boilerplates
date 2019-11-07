const withSass = require('@zeit/next-sass')
const dev = process.env.NODE_ENV !== "production";

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    modules: {
      mode: 'local',
      localIdentName: dev ? "[local]_[hash:base64:5]" : "[hash:base64:5]",
    },
  },
  webpack(config) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js')
      }
      return entries
    }

    config.module.rules.push({
      enforce: "pre",
      test: /\.scss$/,
      loader: 'style-resources-loader',
      options: {
          patterns: [
            './src/styles/variables.scss',
            './src/styles/mixins.scss'
          ]
      }
    })

    return config
  }
})