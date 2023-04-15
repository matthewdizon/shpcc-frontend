import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";

function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let isEqual = false;

  if (password === confirmPassword) {
    isEqual = true;
  } else {
    isEqual = false;
  }

  const handleSubmit = async () => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/reset-password/` +
        token,
      {
        method: "POST",
        body: JSON.stringify({ newPassword: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      console.log("success");
    } else {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-medium text-center text-gray-900">
          Create New Password
        </h1>
        <form className="grid py-4" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid">
              <input
                type="password"
                placeholder="Password (6-20 characters)"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 text-black"
              />
            </div>

            <div className="grid">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
                className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 text-black"
              />
            </div>
          </div>
          {isEqual ? (
            ""
          ) : (
            <p className="text-sm text-shpccRed italic pt-4">
              Passwords do not match
            </p>
          )}
          <button
            disabled={!isEqual}
            className={`bg-shpccDarkRed rounded-lg text-white text-xl py-2 mt-4 font-thin ${
              !isEqual ? "opacity-50" : "hover:cursor-pointer"
            }`}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
