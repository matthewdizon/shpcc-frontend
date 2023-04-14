import { useState, useContext } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { UserContext } from "../context/userContext";
import Link from "next/link";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email,
      password,
    };

    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/login`, {
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
      toast.success("Successful Login");
      // Delay for 3 seconds
      setTimeout(async () => {
        // Get the JWT from the response
        const {
          accessToken,
          firstName,
          lastName,
          isAdmin,
          membershipType,
          status,
        } = await res.json();

        // Set the JWT in local storage
        localStorage.setItem("accessToken", accessToken);

        // Update User Context
        setUser({
          email,
          firstName,
          lastName,
          isAdmin,
          membershipType,
          status,
        });

        // Redirect the user to the home page
        isAdmin
          ? Router.push("/dashboard/admin/users")
          : Router.push("/dashboard/account");
      }, 2000);
    } else {
      console.log("error", res);
      toast.error("Invalid Login");
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
            src={"/images/login.jpg"}
            layout="fill"
            objectFit="cover"
            className="opacity-40 brightness-50"
          />
        </div>
        <div className="grid lg:grid-cols-[2fr_1.2fr] items-center gap-8 lg:gap-24 w-full z-20">
          <div className="text-center lg:text-left grid gap-2">
            <h2 className="font-bold text-3xl lg:text-5xl">
              Welcome back to <span className="text-shpccRed">SHPCC</span>
            </h2>
            <p className="text-xl">
              It’s great to see you again fellow kamay-ari! Log in to access
              your account.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-2xl">
            <p className="font-bold text-3xl">Log into SHPCC</p>
            <form action="" className="grid gap-3 my-8" onSubmit={handleSubmit}>
              <div className="grid">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid">
                <input
                  type="password"
                  placeholder="Password (6-20 characters)"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>

              <button className="bg-shpccDarkRed rounded-lg text-white text-xl py-2 mt-4 font-thin hover:cursor-pointer">
                Log In
              </button>
            </form>
            <div>
              Don&apos;t have an account?{" "}
              <Link className="text-shpccRed hover:underline" href={"signup"}>
                Sign Up
              </Link>
            </div>
            <div className="hover:underline max-w-max hover:cursor-pointer">
              Forgot Password?
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
