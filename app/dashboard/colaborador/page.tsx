"use client";

export default function ColaboradorDashboard() {
  const proyectos = [
    "Proyecto X",
    "Proyecto Y",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Proyectos asignados
      </h1>

      <ul className="list-disc ml-6">
        {proyectos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}