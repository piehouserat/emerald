import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
});

export const deleteUserSchema = z.object({
  id: z.string(),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;
