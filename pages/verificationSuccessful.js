function VerificationSuccessful() {
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
      </div>
    </div>
  );
}

export default VerificationSuccessful;
