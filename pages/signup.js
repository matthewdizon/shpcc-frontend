import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let isEqual = false;

  if (password === confirmPassword) {
    isEqual = true;
  } else {
    isEqual = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email,
      password,
    };

    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/signup`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Verifying Credentials",
      }
    );

    if (res.ok) {
      toast.success("Successfuly Created Account");
      setTimeout(async () => {
        const json = await res.json();
        const { email } = json.user;
        localStorage.setItem("email", email);
        Router.push("/verifyEmail");
      }, 2000);
    } else {
      console.log(res);
      toast.error("Invalid Account");
      // Set error message
      // setMessage("Error: Invalid email or password");
      // setShowMessage(true);
    }
  };

  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="h-[90vh] -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 items-center flex relative">
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/signup.jpg"}
            layout="fill"
            objectFit="cover"
            className="opacity-40 brightness-50"
          />
        </div>
        <div className="grid lg:grid-cols-[2fr_1.2fr] items-center gap-8 lg:gap-24 w-full z-20">
          <div className="text-center lg:text-left grid gap-2">
            <h2 className="font-bold text-3xl lg:text-5xl">
              Together we fulfill our{" "}
              <span className="text-shpccDarkRed">dreams</span>
            </h2>
            <p className="text-xl">
              Sign up to become a member and start your journey with us today!
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <p className="font-bold text-3xl">Create your Account</p>
            <form action="" className="grid gap-3 my-8" onSubmit={handleSubmit}>
              <div className="grid">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid">
                <input
                  type="password"
                  placeholder="Password (6-20 characters)"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>

              <div className="grid">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>

              {isEqual ? (
                ""
              ) : (
                <p className="text-sm text-shpccRed italic">
                  Passwords do not match
                </p>
              )}

              <button
                disabled={!isEqual}
                className={`bg-shpccDarkRed rounded-lg text-white text-xl py-2 mt-4 font-thin ${
                  !isEqual ? "opacity-50" : "hover:cursor-pointer"
                }`}
              >
                Create Account
              </button>
            </form>
            <div>
              Already have an account?{" "}
              <Link className="text-shpccRed hover:underline" href={"/login"}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
