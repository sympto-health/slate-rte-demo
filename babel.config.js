module.exports = {
  plugins: [
    'add-react-displayname',
    ['module-resolver', {
      root: ['./src'],
      alias: {
        test: './test',
        underscore: 'lodash',
      },
    }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-regenerator',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', 'jest'],
  only: [
    './**/*.js',
    './**/*.jsx',
    'node_modules/jest-runtime',
  ],
};
