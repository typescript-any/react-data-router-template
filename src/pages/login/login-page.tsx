import MetaData from "@/components/meta-data";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <>
      <MetaData />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login to Your Account
          </h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
