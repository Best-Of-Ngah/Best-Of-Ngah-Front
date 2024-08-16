import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <h1>Client Space</h1>
      <Outlet />
    </>
  );
};

export default ClientLayout;
