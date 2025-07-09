
const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
    '<rootDir>/tests/unit/**/*.test.{js,jsx}',
    '<rootDir>/tests/integration/**/*.test.{js,jsx}'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e/',
    '<rootDir>/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
};

export default config;