module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files

  moduleNameMapper: {
    '\\.(css|less|scss|ttf)$': '<rootDir>/src/__mocks__/fileMock.js',
    verbose: true,
  },
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  testURL: 'https://localhost',
  setupFilesAfterEnv: [],
  transformIgnorePatterns: ['/node_modules/', '/slate-rte/'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
};
