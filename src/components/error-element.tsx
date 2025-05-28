// components/ErrorElement.tsx
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorElement() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg p-8 rounded-lg text-center space-y-4 max-w-md">
          <h1 className="text-3xl font-bold text-red-600">
            Error {error.status}
          </h1>
          <p className="text-gray-700">{error.statusText}</p>
          {error.data?.message && (
            <p className="text-sm text-gray-500">{error.data.message}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center space-y-4 max-w-md">
        <h1 className="text-3xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="text-gray-700">
          {(error as Error)?.message || "Unknown error occurred."}
        </p>
      </div>
    </div>
  );
}
