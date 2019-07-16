module.exports = {
  testRegex: '(<rootDir>/(tests|src)/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', '@testing-library/react/cleanup-after-each'],
};
