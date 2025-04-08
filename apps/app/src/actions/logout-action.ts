"use server";

import { redirect } from "next/navigation";
import { cookies as getCookies } from "next/headers";

export async function logoutAction() {
  const cookies = await getCookies();
  cookies.delete("access_token");
  cookies.delete("refresh_token");

  redirect("/");
}
