"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SolicitanteDashboard() {
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState<string[]>([
    "Solicitud 1",
    "Solicitud 2",
  ]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Mis solicitudes</h1>

      {/* 🔥 BOTÓN CORRECTO */}
      <button
        onClick={() => router.push("/dashboard/solicitante/nueva")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Nueva solicitud
      </button>

      <ul>
        {solicitudes.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}