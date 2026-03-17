import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // 301-redirect farullsisolering.se → farull.se
  if (host.replace("www.", "").startsWith("farullsisolering.se")) {
    const url = new URL(request.url);
    url.host = "farull.se";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
