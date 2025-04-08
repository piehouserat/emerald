import { issuer } from "@openauthjs/openauth";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";
import { subjects } from "@emerald/auth-utils/subjects";
import { CodeProvider } from "@openauthjs/openauth/provider/code";
import { CodeUI } from "@openauthjs/openauth/ui/code";
import { getUserByEmail } from "@emerald/db/users/users.repository";

async function getUser(email: string) {
  // Get user from database
  // Return user ID
  // return "123";

  const user = await getUserByEmail(email);

  return user;
}

export default issuer({
  subjects: subjects,
  storage: MemoryStorage({
    persist: "./persist.json",
  }),
  providers: {
    code: CodeProvider(
      CodeUI({
        sendCode: async (claims, code) => {
          const user = await getUser(claims.email!);

          if (user) {
            console.log(claims.email, code);
          }
        },
      }),
    ),
  },
  async allow() {
    return true;
  },
  success: async (ctx, value) => {
    if (value.provider === "code") {
      const user = await getUser(value.claims.email!);

      return ctx.subject("user", {
        id: user?.id!,
      });
    }

    throw new Error("Invalid provider");
  },
});
