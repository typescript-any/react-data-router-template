import Providers from "./providers";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default Layout;
