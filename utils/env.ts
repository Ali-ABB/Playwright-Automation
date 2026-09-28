import dotenv from 'dotenv';
import path from 'path';

// 1. Determine target environment (defaults to 'qa')
const ENV = process.env.ENV || 'qa';

// 2. Load the corresponding .env file
dotenv.config({
  path: path.resolve(__dirname, `../config/.env.${ENV}`),
});

// 3. Export a strongly-typed object with fallback safety
export const config = {
  env: process.env.ENV || 'qa',
  baseUrl: process.env.BASE_URL || 'https://practicetestautomation.com/practice-test-login/',
  apiBaseUrl: process.env.API_BASE_URL || 'https://api-staging.example.com',
  userEmail: process.env.TEST_USER_EMAIL || '',
  userPassword: process.env.TEST_USER_PASSWORD || '',
  isCI: !!process.env.CI,
};

// 4. Validate that critical variables exist before tests run
const requiredEnvVars = ['BASE_URL', 'TEST_USER_EMAIL', 'TEST_USER_PASSWORD'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.warn(`⚠️ Warning: Environment variable \({envVar} is missing in .env.\){ENV}`);
  }
}