"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaSolicitud() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    objetivo: "",
    beneficios: "",
    tiempo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form); // 🔥 luego va a BD

    alert("Solicitud enviada");

    // 🔁 volver al dashboard
    router.push("/dashboard/solicitante");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Nueva Solicitud
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Descripción */}
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Objetivo */}
          <textarea
            name="objetivo"
            placeholder="Objetivo"
            value={form.objetivo}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Beneficios */}
          <textarea
            name="beneficios"
            placeholder="Beneficios"
            value={form.beneficios}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Tiempo */}
          <input
            type="number"
            name="tiempo"
            placeholder="Tiempo estimado (meses)"
            value={form.tiempo}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}