const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  // Disable eslint for now
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  // compile templates on runtime
  runtimeCompiler: true,
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()]
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:   `
          @import "@/styles/setup/_mixins.scss";
        `
      }
    }
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  },
}

