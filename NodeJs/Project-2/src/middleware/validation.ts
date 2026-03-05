import type { RequestHandler } from "express"
import { safeParse, type BaseSchema, type InferOutput } from "valibot";


/**
 * Creates an Express middleware that validates a selected request segment
 * (`body`, `params`, or `query`) against a Valibot schema.
 * On success, it replaces `req[target]` with the parsed output.
 * On failure, it responds with HTTP 400 and the validation issues.
 *
 * @template T - Valibot schema type used for validation.
 * @template K - Request segment to validate: `"body"`, `"params"`, or `"query"`.
 * @param schema - Schema used to validate and parse `req[target]`.
 * @param target - Request segment key to validate.
 * @returns Express request handler that validates `req[target]`.
 */
export const validate = <
    T extends BaseSchema<any, any, any>,
    K extends "body" | "params" | "query"
>(schema: T,target: K): RequestHandler => {
    return (req, res, next) => {
        const result = safeParse(schema, req[target]);

        if (!result.success) {
        return res.status(400).json({
            error: `Invalid ${target}`,
            details: result.issues,
        });
        }

        req[target] = result.output as InferOutput<T>;
        next();
    };
};