module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: ['dist'],
};
