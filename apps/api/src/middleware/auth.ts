import { createClient } from "@openauthjs/openauth/client";
import { bearerAuth } from "hono/bearer-auth";
import { subjects } from "@emerald/auth-utils/subjects";

const client = createClient({
  clientID: "api",
  issuer: "http://localhost:3000",
});

export const auth = bearerAuth({
  verifyToken: async (token, c) => {
    const verified = await client.verify(subjects, token);

    return !verified.err;
  },
});
