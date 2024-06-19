import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </>
  );
};

export default UserLayout;
