"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { menuByRole } from "./menu";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [role, setRole] = useState("");

  useEffect(() => {
    const roleCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("role="))
      ?.split("=")[1];

    if (roleCookie) setRole(roleCookie);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const roleName =
    role === "admin"
      ? "Administrador"
      : role === "solicitante"
      ? "Solicitante"
      : role === "colaborador"
      ? "Colaborador"
      : "Usuario";

  const menu = menuByRole[role as keyof typeof menuByRole] || [];

  return (
    <div className="flex min-h-screen bg-[#fdf6f9]">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#ffe4ec] p-5 flex flex-col justify-between shadow-md">
        
        <div>
          <h2 className="text-xl font-bold mb-6">{roleName}</h2>

          {/* 🔥 MENÚ DINÁMICO */}
          <nav className="flex flex-col gap-2">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="p-2 rounded-lg hover:bg-pink-200 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-lg"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-6 bg-[#fff7fa]">
        {children}
      </main>
    </div>
  );
}