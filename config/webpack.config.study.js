const path = require("path")
module.exports = {
  mode: "development",
  entry: path.join(process.cwd(), "src/index.js"),
  output: {
    filename: "main.js",
    path: path.join(process.cwd(), "dist")
  }
}