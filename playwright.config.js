// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30 * 1000,
  use: {
    baseURL: 'https://www.funbug.xyz/',
    browserName: 'chromium',
    headless: true,
  },
});
