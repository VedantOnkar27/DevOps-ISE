// jest.config.js
module.exports = {
    // Load your setupTests.js after the test framework is installed
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    
    // (If you also have CSS/images mapping, keep that too)
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
  
    testEnvironment: 'jsdom',
  };
  