import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.pragnyaa.in";
const ALLOWED_HOSTS = new Set(["pragnyaa.in", CANONICAL_HOST]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();

  if (!ALLOWED_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get("x-forwarded-proto") || "http";
  const url = request.nextUrl.clone();
  url.hostname = CANONICAL_HOST;

  if (forwardedProto === "http") {
    url.protocol = "https";
    return NextResponse.redirect(url, {
      status: 301,
      headers: { "Cache-Control": "public, max-age=3600" },
    });
  }

  if (hostname === "pragnyaa.in") {
    return NextResponse.redirect(url, {
      status: 301,
      headers: { "Cache-Control": "public, max-age=3600" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip static files and API routes
    "/((?!api/|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};
