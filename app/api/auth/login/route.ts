import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Lista de usuarios (simulación BD)
    const users = [
      {
        id: 1,
        name: "Admin",
        email: "admin@test.com",
        password: "12345678",
        role: "admin",
      },
      {
        id: 2,
        name: "Colaborador",
        email: "colab@test.com",
        password: "12345678",
        role: "colaborador",
      },
      {
        id: 3,
        name: "Solicitante",
        email: "soli@test.com",
        password: "12345678",
        role: "solicitante",
      },
    ];

    // Buscar usuario correcto
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    // Si no existe
    if (!user) {
      return NextResponse.json(
        { message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    // Token 
    const SECRET = "mi_secreto_prueba_123";

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      SECRET,
      { expiresIn: "7d" }
    );

    // Respuesta
    const response = NextResponse.json({
      message: "Login exitoso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Cookies
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

   response.cookies.set("role", user.role, {
  httpOnly: false,
  path: "/",
});

    return response;

  } catch (error) {
    console.error("Error en login:", error);

    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}