import { config } from "dotenv";
import { maxValue, minLength, minValue, number, object, parse, picklist, pipe, regex, safeParse, startsWith, string, transform} from "valibot";

const isDevelopment = process.env.APP_STAGE === 'dev';
const isTesting = process.env.APP_STAGE === 'test';
const NODE_ENVS = ['production', 'development', 'test'] as const;
const APP_STAGES = ['production', 'dev', 'test'] as const;

config({
    path: isTesting ? '.env.test' : isDevelopment ? '.env' : undefined,
});

const envSchema = object({
    NODE_ENV: picklist(NODE_ENVS),
    APP_STAGE: picklist(APP_STAGES),
    PORT: pipe(string(), transform(Number), number(), minValue(1), maxValue(65535)),
    DATABASE_URL: pipe(string(), startsWith('postgresql://')),
    JWT_SECRET: pipe(string(), minLength(32, 'JWT_SECRET must be at least 32 characters long')),
    JWT_EXPIRES_IN: pipe(string(), regex(/^\d+[mhd]$/, 'JWT_EXPIRES_IN must be a string like "1h", "30m", etc.')),
    BYCRYPT_SALT_ROUNDS: pipe(string(), transform(Number), number(), minValue(10), maxValue(20)),
});

const result = safeParse(envSchema, process.env);

if (!result.success) {
  console.error("Environment variable validation failed:");
  console.error(result.issues);
  process.exit(1); // With this we 'kill' the server
}

const env = result.output;

/**
 * Returns whether the current application stage is production.
 *
 * @returns `true` when `APP_STAGE` is `production`, otherwise `false`.
 */
export const isProd = () => env.APP_STAGE === 'production';

/**
 * Returns whether the current application stage is development.
 *
 * @returns `true` when `APP_STAGE` is `dev`, otherwise `false`.
 */
export const isDev = () => env.APP_STAGE === 'dev';

/**
 * Returns whether the current application stage is test.
 *
 * @returns `true` when `APP_STAGE` is `test`, otherwise `false`.
 */
export const isTest = () => env.APP_STAGE === 'test';

export {env};