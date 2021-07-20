module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files

  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/fileMock.js',
    verbose: true,
    // https://github.com/developit/workerize-loader/issues/48
    'workerize-loader!./downloadWorker': '<rootDir>/__setups__/workerize-jest.js',
  },
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  testURL: 'https://localhost',
  setupFilesAfterEnv: [],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\](?!(@capacitor)/)'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
