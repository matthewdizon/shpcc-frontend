import Router from "next/router";

function VerificationSuccessful() {
  setTimeout(() => {
    Router.push("/login");
  }, 5000);

  return (
    <div className="flex items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-medium text-center text-gray-900">
          Your email address has been verified
        </h1>
        <p className="text-base font-medium text-center text-gray-600 mt-5">
          Welcome to SHPCC! You can now apply to be a member and be a part of
          our cooperative
        </p>
        <div className="spinner mt-10 flex items-center justify-center gap-4">
          <p className="text-gray-900">Redirecting you to the login page</p>
          <svg
            className="animate-spin -ml-1 mr-3 h-6 w-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default VerificationSuccessful;
