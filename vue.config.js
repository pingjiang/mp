module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  // chainWebpack: config => {
  //   // Exclude quill assets from file-loader
  //   config.module
  //     .rule("svg")
  //       .exclude
  //         .add(/node_modules[\\/]quill/)
  //         .end();

  //   // Add rule to load quill svg images as raw strings
  //   config.module
  //     .rule('quill-svg')
  //       .include
  //         .add(/node_modules[\\/]quill/)
  //         .end()
  //       .test(/\.(svg)(\?.*)?$/)
  //       .use('raw-loader')
  //         .loader('raw-loader');
  // }
};
