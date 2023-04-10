import SideNav from "./SideNav";
import SEO from "../SEO";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";

export default function Layout({ children }) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    if (event.target === ref.current) {
      setIsOpen(false);
    }
  };

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
    <div>
      <SEO />
      <SideNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        reference={ref}
        handleClick={handleClick}
      />
      <nav className="block bg-shpccRed px-6 md:px-12 relative z-20 text-white">
        <div className="flex justify-between items-center">
          <Link
            href={user?.isAdmin ? "/dashboard/admin/home" : "/dashboard/home"}
            className="relative flex items-center gap-4"
          >
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </Link>
          <button
            className={`focus:ring-2 focus:ring-shpccRed rounded-lg p-2`}
            onClick={() => setIsOpen(true)}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="currentColor"
              />
              <path
                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                fill="currentColor"
              />
              <path
                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="bg-[#F1F1F2] text-black min-h-screen w-full relative">
        <main>{children}</main>
      </div>
    </div>
  );
}
