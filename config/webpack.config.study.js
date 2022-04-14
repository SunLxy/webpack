const path = require("path")
const json5 = require("json5")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  mode: "development",
  // entry: path.join(process.cwd(), "src/index.js"),
  entry: {
    main: path.join(process.cwd(), "src/index.js"),
    print: path.join(process.cwd(), "src/print.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(process.cwd(), "dist"),
    // 清理 dist 文件夹
    clean: true,
  },
  module: {
    rules: [
      /** 加载 css  */
      {
        test: /\.css$/,
        /** 执行顺序  先执行 `css-loader` 在执行 `style-loader` **/
        use: ["style-loader", "css-loader"]
      },
      /**  加载 图片  */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /**加载 xml文件**/
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      /** 使用 parser  加载 json5 文件**/
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
    }),
    new WebpackManifestPlugin({
      fileName: "assets-manifest.json",
      publicPath: "./"
    })

  ],
}