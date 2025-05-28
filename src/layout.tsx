import Providers from "./providers";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Providers>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </Providers>
  );
};

export default Layout;
