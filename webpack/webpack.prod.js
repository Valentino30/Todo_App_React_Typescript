const webpack = require("webpack");

module.exports = {
    mode: "production",
    devServer: {
        hot: true,
        open: true,
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.author": JSON.stringify("Valentino30")
        }),
    ]
}