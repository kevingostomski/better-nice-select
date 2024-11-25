import { defineConfig, devices } from '@playwright/test';
import { promises as fs } from 'fs';
import { join } from 'path';

// before the tests are working we need to get the new builded output files
async function copyFiles(sourceDir: string, destinationDir: string) {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) {
      continue;
    }
    const sourcePath = join(sourceDir, entry.name);
    const destinationPath = join(destinationDir, entry.name);
    await fs.copyFile(sourcePath, destinationPath);
  }
}
copyFiles("dist/js/", "playwright/serve/js/");
copyFiles("dist/css/", "playwright/serve/css/");

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './playwright/tests',
  outputDir: './playwright/results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: './playwright/reports/html', open: "on-failure" }],
  ],
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'http-server ./playwright/serve -p 8080',
    port: 8080,
    reuseExistingServer: true  // Prevents multiple instances
  }
});
