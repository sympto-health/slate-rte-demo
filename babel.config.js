module.exports = {
  plugins: [
  ],
  presets: [
    ['@babel/preset-env',
      { targets: { node: 'current' } },
    ],
    '@babel/preset-react',
    'jest',
    '@babel/preset-flow',
  ],
  only: [
    './**/*.js',
    './**/*.jsx',
    'node_modules/jest-runtime',
  ],
};
