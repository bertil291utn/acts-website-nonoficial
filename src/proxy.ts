import { localeHintFromCountry } from "@/lib/geo-locale";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/** Matches next-intl default in `receiveRoutingConfig`. */
const LOCALE_COOKIE = "NEXT_LOCALE";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!request.cookies.has(LOCALE_COOKIE) && pathname === "/") {
    const country = request.headers.get("x-vercel-ip-country");
    const hint = localeHintFromCountry(country);
    if (hint === "es") {
      return NextResponse.redirect(new URL("/es", request.url));
    }
    if (hint === "sv") {
      return NextResponse.redirect(new URL("/sv", request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
