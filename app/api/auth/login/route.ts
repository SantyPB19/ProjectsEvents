import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const usuarios = [
      {
        id: 1,
        nombre: "Admin",
        email: "admin@test.com",
        password: "12345678",
        role: "admin",
      },
      {
        id: 2,
        nombre: "Colaborador",
        email: "colab@test.com",
        password: "12345678",
        role: "colaborador",
      },
      {
        id: 3,
        nombre: "Solicitante",
        email: "soli@test.com",
        password: "12345678",
        role: "solicitante",
      },
    ];

    const usuario = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (!usuario) {
      return NextResponse.json(
        { mensaje: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    const SECRET = process.env.JWT_SECRET;

    if (!SECRET) {
      throw new Error("JWT_SECRET no está definido");
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        role: usuario.role,
      },
      SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      mensaje: "Login exitoso",
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        role: usuario.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    response.cookies.set("role", usuario.role, {
      httpOnly: false,
      path: "/",
    });

    return response;

  } catch (error: unknown) {

    console.error("Error durante el login:", error);

    return NextResponse.json(
      {
        mensaje: "Error interno del servidor",
      },
      {
        status: 500,
      }
    );
  }
}