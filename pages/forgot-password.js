import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/forgot-password`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      Router.push("/login");
    } else {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm mx-auto p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-medium text-center text-gray-900">
          Reset Your Password
        </h1>
        <p className="text-base font-medium text-center text-gray-600 mt-5">
          Enter your email and we&apos;ll send you instructions on how to reset
          your password.
        </p>
        <form className="grid py-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 text-black"
          />
          <button className="bg-shpccDarkRed rounded-lg text-white text-xl py-2 mt-4 font-thin hover:cursor-pointer">
            Send Instructions
          </button>
        </form>
        <p className="text-gray-400 text-sm italic">
          Go back to{" "}
          <Link href={`/login`} className="underline text-black">
            Login Page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
