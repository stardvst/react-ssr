module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  cache: false,
};
