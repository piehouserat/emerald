import { NextResponse, type NextRequest } from "next/server";
import { client, setTokens, subjects } from "./lib/auth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/callback")) {
    return NextResponse.next({ request });
  }

  try {
    const accessToken = request.cookies.get("access_token");
    if (accessToken) {
      const refreshToken = request.cookies.get("refresh_token");
      const verified = await client.verify(subjects, accessToken.value, {
        refresh: refreshToken?.value,
      });
      if (!verified.err) {
        if (verified.tokens)
          setTokens(verified.tokens.access, verified.tokens.refresh);

        return NextResponse.next({ request });
      }
    }
  } catch (e) {}

  const { url } = await client.authorize(
    `${new URL(request.url).origin}/api/callback`,
    "code",
  );
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
