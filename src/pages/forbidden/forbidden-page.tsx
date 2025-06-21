import { Link } from "react-router";

export default function ForbiddenPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
        <p className="text-xl text-gray-600 mb-6">Access Forbidden - You don't have permission to view this page</p>
        <Link to="/" className="text-blue-500 hover:underline">← Go back to Home</Link>
      </div>
    </div>
  );
}
