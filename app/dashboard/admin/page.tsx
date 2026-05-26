"use client";

export default function AdminDashboard() {
  const proyectosPendientes = [
    "Proyecto A",
    "Proyecto B",
    "Proyecto C",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel Administrador</h1>

      {/* Resumen */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Resumen general</h2>
        <p>Total proyectos: 10</p>
        <p>Usuarios registrados: 5</p>
      </div>

      {/* Proyectos pendientes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Proyectos pendientes
        </h2>

        <ul className="list-disc ml-6">
          {proyectosPendientes.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}