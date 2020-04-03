const { EnvironmentPlugin } = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require("path")
const glob = require("glob")

const entries = {
  application: glob.sync("./pages/**/*.js", { ignore: ["./pages/admin-new/**"] }),
}


module.exports = {
  devtool: "cheap-module-inline-source-map",
  entry: entries,
  output: {
    filename: "[name].bundle.css",
    path: path.resolve(__dirname, "static"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: [
                ["module-resolver", {
                  "root": ["./"],
                  "alias": {
                    "highline": "./",
                  },
                  "extensions": [".js", ".svg"],
                }],
              ],
              presets: [
                "@babel/preset-env",
                ["@babel/preset-stage-2", { "decoratorsLegacy": true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "styles"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                localIdentName: "[local]",
                minimize: false,
                modules: true,
              },
            },
            "postcss-loader",
          ],
        }),
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, "styles"), /* Vendor files */
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: false,
                modules: false,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].bundle.css", {
      ignoreOrder: true,
    }),
    new EnvironmentPlugin(process.env),
  ],
}
