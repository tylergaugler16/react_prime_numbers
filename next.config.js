const { EnvironmentPlugin } = require("webpack")
const fs = require("fs")

module.exports = {
  distDir: "build",

  webpack: (config, options) => {
    config.devtool = options.dev ? "cheap-module-inline-source-map" : "hidden-source-map"

    config.plugins.push(
      new EnvironmentPlugin(process.env),
    )

    if (process.env.ANALYZE_BUNDLE) {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerHost: "127.0.0.1",
          analyzerPort: 8888,
          openAnalyzer: false,
        }),
      )
    }

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: "emit-file-loader",
            options: {
              name: "dist/[path][name].[ext]",
            },
          },
          {
            loader: "skeleton-loader",
            options: {
              procedure() {
                const fileName = `${this._module.userRequest}.json`
                const classNames = fs.readFileSync(fileName, "utf8")

                return `module.exports = ${classNames}`
              },
            },
          },
          "postcss-loader",
        ],
      },
    )

    return config
  },
}
