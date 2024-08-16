import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <>
      <h1>Login Layout</h1>
      <Outlet />
    </>
  );
}

export default LoginLayout;
