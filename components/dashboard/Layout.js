import SideNav from "./SideNav";
import SEO from "../SEO";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/user`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      try {
        const data = await res.json();
        if (!data.error) {
          setUser(data.user);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  if (!user)
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#f1f1f2] text-black">
        <span className="font-bold text-3xl">Unauthorized Content</span>
        <Link
          className="bg-shpccRed text-white p-4 py-2 rounded-lg hover:cursor-pointer"
          href={"/login"}
        >
          Login
        </Link>
      </div>
    );

  if (!user.isAdmin && router.pathname.includes("/admin"))
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#f1f1f2] text-black">
        <span className="font-bold text-3xl">Unauthorized Content!</span>
        <p>You are not an adminstrator</p>
        <Link
          className="bg-shpccRed text-white p-4 py-2 rounded-lg hover:cursor-pointer"
          href={"/dashboard/home"}
        >
          Go Home
        </Link>
      </div>
    );

  if (user.status === "unverified")
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#f1f1f2] text-black">
        <span className="font-bold text-3xl">Unauthorized Content!</span>
        <p>
          Kindly check your email to verify your account and access our
          application.
        </p>
        <p>
          Try to login once again if you have clicked the verification link.
        </p>
        <Link
          className="bg-shpccRed text-white p-4 py-2 rounded-lg hover:cursor-pointer"
          href={"/login"}
        >
          Login
        </Link>
      </div>
    );

  return (
    <div className="flex">
      <SEO />
      <SideNav />
      <div className="bg-[#F1F1F2] text-black min-h-screen w-[85vw] ml-[15vw] relative">
        <main>{children}</main>
      </div>
    </div>
  );
}
