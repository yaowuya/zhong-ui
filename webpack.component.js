const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");
const { VueLoaderPlugin } = require("vue-loader");

const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    console.log(file);
    const output = file.split(/[/.]/)[2];
    list[output] = `./${file}`;
  }
}

makeList("components/lib", list);

module.exports = {
  entry: list,
  mode: "development",
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "zui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
