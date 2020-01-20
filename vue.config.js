module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  devServer: {
    // 路由 history 模式配置
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080"
      }
    }
  }
};
