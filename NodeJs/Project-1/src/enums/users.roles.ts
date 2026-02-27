export const rol = ["ADMIN", "USER"] as const;

export type UserRole = typeof rol[number];
