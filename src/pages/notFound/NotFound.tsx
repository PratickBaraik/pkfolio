import { Link } from "react-router-dom";

/*
  404 Not Found Page
  Displays when a route does not match any defined route in React Router.
*/

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white px-6">
      {/* Error Code */}
      <h1 className="text-7xl font-bold tracking-tight text-indigo-500">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

      <p className="mt-2 text-neutral-400 text-center max-w-md">
        The page you are looking for doesn't exist or may have been moved.
      </p>

      {/* Navigation Button */}
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium hover:bg-indigo-500 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
