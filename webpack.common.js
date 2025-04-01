import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname } from "node:path";
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 export default {
   entry: {
    index: "./src/js/index.js",
  },
   plugins: [
      new HtmlWebpackPlugin({
        title: "Output Management",
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
 };