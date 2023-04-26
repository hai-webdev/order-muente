module.exports = {
  assetsDir: "static-vue",
  productionSourceMap:false,
  devServer: {
    proxy: {
      "/api.php": {
        target: "https://caratfill.cn/",
      },
      "static/": {
        target: "https://caratfill.cn/",
      },
    },
  },
};
