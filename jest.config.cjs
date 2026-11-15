module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.js"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/test/styleMock.cjs",
  },
  reporters: ["default", ["jest-junit", { outputDirectory: ".", outputName: "junit.xml" }]],
};
