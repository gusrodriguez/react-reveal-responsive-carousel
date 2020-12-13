module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    // eslint-disable-next-line quotes
    "\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
  },
};
