import Layout from "@/components/dashboard/layout";

export default function ColaboradorDashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Proyectos asignados</h1>

      <div className="bg-white p-4 rounded shadow">
        <ul>
          <li>Proyecto X - En progreso</li>
          <li>Proyecto Y - Pendiente</li>
        </ul>
      </div>
    </Layout>
  );
}