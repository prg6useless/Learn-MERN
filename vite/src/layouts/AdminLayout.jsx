import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminSidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
