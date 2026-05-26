"use client";

export default function SolicitanteDashboard() {
  const solicitudes = [
    "Solicitud 1",
    "Solicitud 2",
  ];

  const nuevaSolicitud = () => {
    alert("Nueva solicitud creada");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Mis solicitudes
      </h1>

      <button
        onClick={nuevaSolicitud}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Nueva solicitud
      </button>

      <ul className="list-disc ml-6">
        {solicitudes.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}