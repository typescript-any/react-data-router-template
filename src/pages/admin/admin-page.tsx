import MetaData from "@/components/meta-data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function AdminPage() {
  return (
    <>
      <MetaData />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-xl shadow-md text-center space-y-4 max-w-md">
          <h1 className="text-3xl font-bold text-blue-600">
            Welcome, Admin 👋
          </h1>
          <p className="text-gray-700">
            You have access to the admin panel and settings.
          </p>
          <p className="text-sm text-gray-500">
            Use the navigation to manage users, posts, and site settings.
          </p>
          <Link to="/">
            <Button variant="link">Return to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
