import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'e2e/**/*.test.{ts,js}',
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
  },
  video: false,
});

