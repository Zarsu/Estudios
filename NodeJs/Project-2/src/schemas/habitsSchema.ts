import { maxLength, minLength, number, object, pipe, string, transform } from "valibot";

export const creationSchema = object({
    name: string(),
    age: number()
});

export const completeParamsSchema = object({
    id: pipe(
        string(), 
        minLength(1, 'ID must be a non-empty string that can be converted to a number'),
        maxLength(3, 'ID must be a string that can be converted to a number with up to 3 digits'),
        transform(Number), 
        number() 
    )
});

export const completeSchema = object({
    habitId: number()
});