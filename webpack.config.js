const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js",
    },

    plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
