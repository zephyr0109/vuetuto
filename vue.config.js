const path = require("path");

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
    devtool: "source-map",
  },
  devServer: {
    overlay: false,
  },
};
