import { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [seconds, setSeconds] = useState(120);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleResend = () => {
    setSeconds(120);
    setIsActive(true);
  };

  return (
    <div className="flex items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-medium text-center text-gray-900">
          Verify Your Email
        </h1>
        <p className="text-base font-medium text-center text-gray-600 mt-5">
          A verification link has been sent to your email. Please check your
          inbox and follow the instructions.
        </p>
        {seconds <= 0 ? (
          <button
            className="w-full mt-5 py-2 bg-shpccRed hover:bg-shpccDarkRed text-white font-medium rounded-lg focus:outline-none"
            onClick={handleResend}
          >
            Resend Link
          </button>
        ) : (
          <p className="text-base font-medium text-center text-gray-600 mt-5">
            You can resend the link in {seconds} seconds.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
