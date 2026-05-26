"use client";

import { useState, useEffect } from "react";
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

  const [errors, setErrors] = useState({
    nombre: "",
    descripcion: "",
    objetivo: "",
    beneficios: "",
    tiempo: "",
  });

  // 🔥 VALIDACIONES EN TIEMPO REAL
  useEffect(() => {
    setErrors({
      nombre: form.nombre ? "" : "El nombre es obligatorio",
      descripcion: form.descripcion ? "" : "La descripción es obligatoria",
      objetivo: form.objetivo ? "" : "El objetivo es obligatorio",
      beneficios: form.beneficios ? "" : "Los beneficios son obligatorios",
      tiempo:
        !form.tiempo
          ? "El tiempo es obligatorio"
          : Number(form.tiempo) <= 0 || Number(form.tiempo) > 36
          ? "Debe ser entre 1 y 36 meses"
          : "",
    });
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hasErrors = Object.values(errors).some((e) => e !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasErrors) return;

    console.log(form);

    alert("Solicitud enviada correctamente");

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
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre}</p>
            )}
          </div>

          {/* Descripción */}
          <div>
            <textarea
              name="descripcion"
              placeholder="Descripción"
              value={form.descripcion}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.descripcion && (
              <p className="text-red-500 text-sm">{errors.descripcion}</p>
            )}
          </div>

          {/* Objetivo */}
          <div>
            <textarea
              name="objetivo"
              placeholder="Objetivo"
              value={form.objetivo}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.objetivo && (
              <p className="text-red-500 text-sm">{errors.objetivo}</p>
            )}
          </div>

          {/* Beneficios */}
          <div>
            <textarea
              name="beneficios"
              placeholder="Beneficios"
              value={form.beneficios}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.beneficios && (
              <p className="text-red-500 text-sm">{errors.beneficios}</p>
            )}
          </div>

          {/* Tiempo */}
          <div>
            <input
              type="number"
              name="tiempo"
              placeholder="Tiempo estimado (meses)"
              value={form.tiempo}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.tiempo && (
              <p className="text-red-500 text-sm">{errors.tiempo}</p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={hasErrors}
            className={`w-full py-2 rounded text-white ${
              hasErrors ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}