import AdminProtectedRoute from "../../components/AdminProtectedRoute";
import Dashboard from "./dashboard";

export default function AdminIndexPage() {
  return (
    <AdminProtectedRoute>
      <Dashboard />
    </AdminProtectedRoute>
  );
}
