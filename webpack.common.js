module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
            "babel-plugin-styled-components"
          ],
          presets: [
            [
              "@babel/env",
              {
                targets: { node: "current" },
                modules: "false"
              }
            ],
            "@babel/react"
          ]
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
            // esModule: false // file-loader version 5.0.2 bug workaround
          }
        }
      }
    ]
  }
};
