import Layout from "@/components/dashboard/layout";

export default function AdminDashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Resumen</h1>

      {/* Resumen */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">Usuarios: 12</div>
        <div className="bg-white p-4 rounded shadow">Proyectos Activos: 8</div>
        <div className="bg-white p-4 rounded shadow">Proyectos Pendientes: 4</div>
      </div>

      {/* Pendientes */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl mb-4">Proyectos pendientes</h2>
        <ul>
          <li>Proyecto A</li>
          <li>Proyecto B</li>
          <li>Proyecto C</li>
          <li>Proyecto D</li>
        </ul>
      </div>
    </Layout>
  );
}