import { NextResponse } from "next/server";
import { auth } from "./src/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  //   console.log(request, "request");

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session, "session from bal");

  //   const isLoggedIn = false;

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/mybookings","/addRoom", "/rooms/:path*"],
};
