import { boolean, pgTable, text, unique, uuid } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import type { z } from "zod";

export const usersTable = pgTable(
  "users",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    name: text().notNull(),
    email: text().notNull(),
    emailVerified: boolean(),
    avatarUrl: text("avatar_url"),
  },
  (table) => [unique("users_email_key").on(table.email)],
);

export const selectUserSchema = createSelectSchema(usersTable);

export const insertUserSchema = createInsertSchema(usersTable);

export const updateUserSchema = createUpdateSchema(usersTable);

export const patchUserSchema = insertUserSchema.partial();

export type SelectUser = z.infer<typeof selectUserSchema>;

export type InsertUser = z.infer<typeof insertUserSchema>;

export type UpdateUser = z.infer<typeof updateUserSchema>;
