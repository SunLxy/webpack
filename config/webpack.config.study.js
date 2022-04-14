const path = require("path")
module.exports = {
  mode: "development",
  entry: path.join(process.cwd(), "src/index.js"),
  output: {
    filename: "main.js",
    path: path.join(process.cwd(), "dist")
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
    ]
  }
}