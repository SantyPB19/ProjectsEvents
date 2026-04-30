"use client";

import { useState } from "react";
import Layout from "@/components/dashboard/layout";

export default function SolicitanteDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [solicitudes, setSolicitudes] = useState([
    "Solicitud 1 - Pendiente",
    "Solicitud 2 - Aprobada",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre) return;

    const nueva = `${nombre} - Pendiente`;

    setSolicitudes([...solicitudes, nueva]);

    setNombre("");
    setDescripcion("");
    setShowForm(false);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Mis solicitudes</h1>

      {/* BOTÓN FUNCIONAL */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        + Nueva solicitud
      </button>

      {/* FORMULARIO */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow-sm border mb-4 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Nombre de la solicitud"
            className="border p-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <textarea
            placeholder="Descripción"
            className="border p-2 rounded"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <button className="bg-green-400 hover:bg-green-500 text-white p-2 rounded">
            Guardar
          </button>
        </form>
      )}

      {/* LISTA */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <ul>
          {solicitudes.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}