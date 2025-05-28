// components/NotFound.tsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center space-y-4">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="text-2xl font-semibold text-gray-800">Page Not Found</p>
          <p className="text-gray-500">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
