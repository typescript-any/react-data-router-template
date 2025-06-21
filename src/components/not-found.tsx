import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Page Not Found - The page you're looking for doesn't exist
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Go back to Home
        </Link>
      </div>
    </div>
  );
}
