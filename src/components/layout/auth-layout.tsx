import { Outlet } from "react-router";

// This layout is used for authentication-related pages like login and register
const AuthLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <section className="flex flex-col items-center justify-center ">
        <h1>Auth Layout</h1>
        <p>
          Modify this layout to include your authentication-related components
          You can also add a logo or any other branding elements here.
        </p>
      </section>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
