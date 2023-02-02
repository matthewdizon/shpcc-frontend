import SideNav from "./SideNav";
import Head from "next/head";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const { user, setUser } = useContext(UserContext);

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

  return (
    <div className="flex">
      <Head>
        <title>Sacred Heart Parish Credit Cooperative</title>
      </Head>
      <SideNav />
      <div className="bg-[#F1F1F2] text-black min-h-screen w-[85vw] ml-[15vw]">
        <main>{children}</main>
      </div>
    </div>
  );
}
