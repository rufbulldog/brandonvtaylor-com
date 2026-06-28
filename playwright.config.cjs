const { basePlaywrightConfig } = require("@rufbulldog/playwright-preset");

export default basePlaywrightConfig({
  baseURL: "http://localhost:4321",
  testDir: "./e2e",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
