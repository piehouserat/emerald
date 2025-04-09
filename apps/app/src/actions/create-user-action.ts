"use server";

import { revalidatePath } from "next/cache";
import { actionClient } from "./safe-action";
import { createUserSchema } from "./schema";
import { createUser } from "@/lib/api";

export const createUserAction = actionClient
  .schema(createUserSchema)
  .action(async ({ parsedInput: { name, email } }) => {
    const userToCreate = {
      name: name,
      email: email,
    };

    await createUser(userToCreate);

    revalidatePath("/users");
  });
