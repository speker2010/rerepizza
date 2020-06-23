const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },  
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: 'local',
              localsConvention: 'camelCase'
            }
          },
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <body>
            <div id="root"></div>
            <div id="modal-portal"></div>
          </body>
        </html>
      `
    }), 
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ]
};