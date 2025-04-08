import { createClient } from "@openauthjs/openauth/client";
import { cookies as getCookies } from "next/headers";
export { subjects } from "@emerald/auth-utils/subjects";

export const client = createClient({
  clientID: "nextjs",
  issuer: process.env.AUTH_URL,
});

export async function setTokens(access: string, refresh: string) {
  const cookies = await getCookies();

  cookies.set({
    name: "access_token",
    value: access,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  });
  cookies.set({
    name: "refresh_token",
    value: refresh,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 34560000,
  });
}
