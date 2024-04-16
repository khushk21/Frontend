module.exports = {
  // Specify the test environment (usually 'jsdom' for frontend projects)
  testEnvironment: 'jsdom',

  // Specify the directory where Jest should look for test files
  testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // Define how different file types should be transformed
  transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.css$': 'jest-transform-stub'
  },

  // Specify the file extensions Jest will process
  moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'node',
      'css'
  ],

  // Specify files to be run after setting up the test environment
  setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect'
  ],

  // Add any other Jest configurations you need
  // For example, moduleNameMapper for handling static assets imports
};
