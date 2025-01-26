const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/entry-server.tsx",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // ここを追加
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      fs: false,
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
    },
  },
  mode: "production",
  stats: {
    errorDetails: true,
  },
};
