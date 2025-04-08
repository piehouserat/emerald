import { drizzle } from "drizzle-orm/neon-http";
import * as usersSchema from "./users/users.schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: { ...usersSchema },
});
