
import path from "path";
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { dirname } from "node:path";
import { fileURLToPath } from "url";
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 export default merge(common, {
   mode: "development",
   module: {
     rules: [
       {
         test: /\.s[ac]ss$/i,
         use: ["style-loader", "css-loader", "sass-loader"],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: "asset/resource",
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: "asset/resource",
       },
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader",
           options: {
             presets: ["@babel/preset-env"],
           },
         },
       }
     ],
   },
   devtool: "inline-source-map",
   devServer: {
     static: "./dist",
     hot: true,
   },
   output: {
     filename: "./js/[name].bundle.js",
     path: path.resolve(__dirname, "dist"),
     clean: true,
   },
 });
