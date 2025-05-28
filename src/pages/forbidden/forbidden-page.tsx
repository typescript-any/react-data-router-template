// components/Forbidden.tsx
import MetaData from "@/components/meta-data";
import { Link } from "react-router";

export default function ForbiddenPage() {
  return (
    <>
      <MetaData />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md space-y-4">
          <h1 className="text-5xl font-bold text-yellow-500">403</h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            Access Denied
          </h2>
          <p className="text-gray-600">
            You do not have permission to view this page.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
