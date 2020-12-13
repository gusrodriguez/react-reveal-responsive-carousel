module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/tsconfig.jest.json',
    },
  },
  setupFiles: [
    '<rootDir>/jest.setup.ts',
  ],
};
