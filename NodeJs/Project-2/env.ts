import { config } from "dotenv";
import { maxValue, minValue, number, object, picklist, pipe, startsWith, string, transform} from "valibot";

const isDevelopment = process.env.APP_STAGE === 'dev';
const isTest = process.env.APP_STAGE === 'test';
const NODE_ENVS = ['production', 'development', 'test'] as const;
const APP_STAGES = ['production', 'dev', 'test'] as const;

config({
    path: isTest ? '.env.test' : isDevelopment ? '.env' : undefined,
});

const envSchema = object({
    NODE_ENV: picklist(NODE_ENVS),
    APP_STAGE: picklist(APP_STAGES),
    PORT: pipe(string(), transform(Number), number(), minValue(1), maxValue(65535)),
    DATABASE_URL: pipe(string(), startsWith('postgresql://')),
});
