import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // 🔴 Si no hay token → fuera
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🛡️ Protección por roles
  if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/dashboard/solicitante") && role !== "solicitante") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/dashboard/colaborador") && role !== "colaborador") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// 🔥 SOLO proteger dashboard
export const config = {
  matcher: ["/dashboard/:path*"],
};