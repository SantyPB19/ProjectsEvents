"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { menuByRole } from "./menu";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

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

  // ✅ FIX SonarQube (sin ternarios anidados)
  let roleName: string;

  if (role === "admin") {
    roleName = "Administrador";
  } else if (role === "solicitante") {
    roleName = "Solicitante";
  } else if (role === "colaborador") {
    roleName = "Colaborador";
  } else {
    roleName = "Usuario";
  }

  const menu = menuByRole[role as keyof typeof menuByRole] || [];

  return (
    <div className="flex min-h-screen bg-[#fdf6f9]">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#ffe4ec] p-5 flex flex-col justify-between shadow-md">
        
        <div>
          <h2 className="text-xl font-bold mb-6">{roleName}</h2>

          {/* MENÚ */}
          <nav className="flex flex-col gap-2">
            {menu.map((item) => (
              <Link
                key={item.path}
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