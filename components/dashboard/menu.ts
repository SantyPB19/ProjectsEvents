export const menuByRole = {
  admin: [
    { name: "Inicio", path: "/dashboard/admin" },
    { name: "Proyectos", path: "/dashboard/admin/proyectos" },
    { name: "Usuarios", path: "/dashboard/admin/usuarios" },
  ],
  solicitante: [
    { name: "Mis solicitudes", path: "/dashboard/solicitante" },
    { name: "Nueva solicitud", path: "/dashboard/solicitante/nueva" },
  ],
  colaborador: [
    { name: "Proyectos asignados", path: "/dashboard/colaborador" },
  ],
};