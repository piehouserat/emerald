import { eq } from "drizzle-orm";
import { db } from "../database";
import { type InsertUser, type UpdateUser, usersTable } from "./users.schema";

export const getAllUsers = async () => {
  return db.query.usersTable.findMany();
};

export const getUserById = async (userId: string) => {
  return db.query.usersTable.findFirst({
    where: eq(usersTable.id, userId),
  });
};

export const getUserByEmail = async (email: string) => {
  return db.query.usersTable.findFirst({
    where: eq(usersTable.email, email),
  });
};

export const createUser = async (user: InsertUser) => {
  return db
    .insert(usersTable)
    .values(user)
    .returning()
    .then((res) => res[0]);
};

export const updateUser = async (user: UpdateUser, userId: string) => {
  return db
    .update(usersTable)
    .set(user)
    .where(eq(usersTable.id, userId))
    .returning()
    .then((res) => res[0]);
};

export const removeUser = async (userId: string) => {
  return db
    .delete(usersTable)
    .where(eq(usersTable.id, userId))
    .returning()
    .then((res) => res[0]);
};
