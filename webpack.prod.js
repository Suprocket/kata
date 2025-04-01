
import path from "path";
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { dirname } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 export default merge(common, {
   mode: "production",
   module: {
     rules: [
       {
         test: /\.s[ac]ss$/i,
         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: "asset/resource",
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: "asset/resource",
       },
     ],
   },
   plugins: [new MiniCssExtractPlugin()],
   devtool: "source-map",
   output: {
     filename: "[name].[contenthash].bundle.js",
     path: path.resolve(__dirname, "dist"),
     clean: true,
   },
 });
