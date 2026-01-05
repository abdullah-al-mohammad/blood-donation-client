import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">{error?.status || 500}</h1>

        <p className="text-xl font-semibold text-gray-800 mb-2">
          {error?.statusText || 'Something went wrong'}
        </p>

        <p className="text-gray-600 mb-6">
          {error?.message || 'Unexpected error occurred. Please try again.'}
        </p>

        <Link
          to="/"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
