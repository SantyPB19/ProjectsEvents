import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // 🔹 Rutas públicas (NO requieren login)
  const publicRoutes = ["/login", "/register"];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // 🔒 Si no hay token → login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // 🔓 Decodificar token
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );

    const role = payload.role;

    // 🔹 Protección por roles
    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      pathname.startsWith("/dashboard/solicitante") &&
      role !== "solicitante"
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      pathname.startsWith("/dashboard/colaborador") &&
      role !== "colaborador"
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Token inválido
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// 🔥 IMPORTANTE: Define dónde aplica el middleware
export const config = {
  matcher: ["/dashboard/:path*"],
};