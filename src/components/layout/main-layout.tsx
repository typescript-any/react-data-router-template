import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
