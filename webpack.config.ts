import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/**
 * Parameters passed through command-line
 * 
 * [
 *   '/usr/local/bin/node',
 *   'portfolio/node_modules/.bin/webpack-dev-server',
 *   '--mode',
 *   'development',
 *   '--hot'
 * ]
 */
const mode = process.argv[3]

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName:
                  mode === 'production' ? '[hash:base64]' : '[path][local]',
              },
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|svg|pdf)$/i,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}

export default config
