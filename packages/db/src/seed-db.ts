import { reset } from "drizzle-seed";
import { db } from "./database";

import * as usersSchema from "./users/users.schema";
import { seedUsers } from "./users/users.seed";

const schemasToReset = {
  ...usersSchema,
};

async function main() {
  await reset(db, schemasToReset);
  console.log("Database reset!");

  await seedUsers();
}

main();
