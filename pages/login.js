import { useState, useContext } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { UserContext } from "../context/userContext";
import Link from "next/link";

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

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/login`,
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
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
      setUser({ email, firstName, lastName, isAdmin, membershipType, status });

      // Redirect the user to the home page
      isAdmin
        ? Router.push("/dashboard/admin/home")
        : Router.push("/dashboard/home");
    } else {
      // Set error message
      // setMessage("Error: Invalid email or password");
      // setShowMessage(true);
    }
  };

  return (
    <Layout>
      <div className="h-[90vh] !bg-[url('/images/login.svg')] bg-cover -mx-24 px-24 py-24 items-center flex">
        <div className="grid grid-cols-[2fr_1.2fr] items-center gap-24">
          <div>
            <h2 className="font-bold text-5xl">Lorem ipsum dolor sit amet</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quisquam cum? Quisquam saepe nostrum ipsum libero.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <p className="font-bold text-3xl">Log into SHPCC</p>
            <form action="" className="grid gap-3 my-8" onSubmit={handleSubmit}>
              <div className="grid">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
              <div className="grid">
                <input
                  type="password"
                  placeholder="Password (6-20 characters)"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
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
