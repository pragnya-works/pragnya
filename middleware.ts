import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  
  // 1. Redirect HTTP to HTTPS
  if (protocol === "http") {
    url.protocol = "https";
    return NextResponse.redirect(url, { 
      status: 301,
      headers: {
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
  
  // 2. Redirect non-www to www
  if (hostname === "pragnyaa.in") {
    url.hostname = "www.pragnyaa.in";
    return NextResponse.redirect(url, { 
      status: 301,
      headers: {
        "Cache-Control": "public, max-age=3600"
      }
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
