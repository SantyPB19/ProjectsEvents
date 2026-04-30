import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Sesión cerrada",
  });

  // 🔥 Elimina cookies
  response.cookies.set("token", "", { expires: new Date(0) });
  response.cookies.set("role", "", { expires: new Date(0) });

  return response;
}