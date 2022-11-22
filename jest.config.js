const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "components", "utils"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
