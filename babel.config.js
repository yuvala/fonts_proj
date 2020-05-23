  // {
  //   "presets": [
  //     "@babel/preset-env"
  //   ],
  //   "plugins": [
  //     "transform-object-rest-spread"
  //   ]
  // }

  module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          debug: false,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
  };