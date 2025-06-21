import MetaData from "@/components/meta-data";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <MetaData />
      <LoginForm />
    </div>
  );
}
