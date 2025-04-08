import { db } from "../database";
import { usersTable } from "./users.schema";

export async function seedUsers() {
  await db.insert(usersTable).values({
    name: "Martin Tomaszczyk",
    email: "martin.tomaszczyk@gmail.com",
    emailVerified: true,
  });

  console.log("Seeded users!");
}
