module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.json', '.svg'],
          alias: {
            screens: './src/screens',
            underscore: './src/types',
            assets: './src/assets',
            components: './src/components',
          },
        },
      ],
    ],
  }
}
