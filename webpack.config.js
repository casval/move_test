const path=require('path')

// for html
const HtmlWebpackPlugin = require('html-webpack-plugin')

// for typescript - typescript 빌드시 성능 향상
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: {
    // 'js/app': ['./src/App.jsx'],   // for jsx
    'js/app': ['./src/App.tsx'],   // for TypeScript
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // test:/\.(js|jsx)$/,    // for jsx
        test:/\.(ts|tsx)$/,       // for TypeScript
        use:['babel-loader',
          {  // for TypeScript
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude:/node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    // for TypeScript
    new ForkTsCheckerWebpackPlugin(),
  ],
}