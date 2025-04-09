"use server";

import { revalidatePath } from "next/cache";
import { actionClient } from "./safe-action";
import { deleteUserSchema } from "./schema";
import { deleteUser } from "@/lib/api";

export const deleteUserAction = actionClient
  .schema(deleteUserSchema)
  .action(async ({ parsedInput: { id } }) => {
    await deleteUser(id);

    revalidatePath("/users");
  });
