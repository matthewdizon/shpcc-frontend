import Logo from "../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-shpccRed text-white justify-between px-12 relative xl:flex hidden z-30`}
      >
        <Link href={"/"} className="relative flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={60} height={60} />
          <h1 className="text-xl font-semibold">
            Sacred Heart Parish Credit Cooperative
          </h1>
        </Link>
        <div className="text-center items-center uppercase font-semibold flex">
          <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-4 group relative">
            <Link href={"/"} className="h-full flex items-center">
              Home
            </Link>
            <div className="group-hover:block hidden hover:cursor-default absolute top-[5.5rem] left-0 bg-[#FAFAFA] py-4 px-6 text-shpccDarkRed text-left normal-case min-w-max">
              <div className="grid divide-y-[1px] divide-shpccDarkRed">
                <Link
                  href="/#history"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  History
                </Link>
                <Link
                  href="/#vision-mission"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  Vision & Mission
                </Link>
                <Link
                  href="/#member-stories"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  Member Stories
                </Link>
              </div>
            </div>
          </div>
          <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-4 group relative">
            <Link
              href={"/services-and-requirements"}
              className="h-full flex items-center"
            >
              Services and Requirements
            </Link>
            <div className="group-hover:block hidden hover:cursor-default absolute top-[5.5rem] left-0 bg-[#FAFAFA] py-4 px-12 text-shpccDarkRed text-left normal-case min-w-max">
              <div className="grid divide-y-[1px] divide-shpccDarkRed">
                <Link
                  href="/services-and-requirements#requirements"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  Requirements
                </Link>
                <Link
                  href="/services-and-requirements#products-services"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  Products & Services
                </Link>
                <Link
                  href="/services-and-requirements#benefits-services"
                  className="py-2 hover:cursor-pointer hover:underline"
                >
                  Community Benefits & Services
                </Link>
              </div>
            </div>
          </div>
          <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-4 group relative">
            <Link href={"/contact-us"} className="h-full flex items-center">
              Contact Us
            </Link>
          </div>
          {/* <button>
            <Link
              href={"/login"}
              className="uppercase bg-white text-shpccDarkRed py-2 px-6 rounded-lg mx-4 hover:bg-shpccYellow font-bold"
            >
              Login
            </Link>
          </button> */}
        </div>
      </nav>
      {/* mobile nav */}
      <nav className="xl:hidden block bg-shpccRed px-6 md:px-12 relative z-30 text-white">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="relative flex items-center gap-4">
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </Link>
          <button
            className={`focus:ring-2 focus:ring-shpccRed rounded-lg p-2`}
            onClick={() => setOpen(!open)}
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
          <div
            className={`${
              open ? "block" : "hidden"
            } flex flex-col absolute top-[86px] left-0 w-full bg-shpccRed gap-4 py-8 px-6 md:px-12 z-20`}
          >
            {/* <div className="flex justify-end">
              <Link
                href={"/login"}
                className="text-white border-2 border-white py-2 px-6 rounded-lg hover:bg-white hover:text-shpccDarkRed font-bold max-w-max"
              >
                Login
              </Link>
            </div> */}
            <Link
              href={"/"}
              className="bg-white text-shpccDarkRed py-2 px-6 rounded-lg hover:bg-shpccYellow font-bold"
            >
              Home
            </Link>
            <Link
              href={"/services-and-requirements"}
              className="bg-white text-shpccDarkRed py-2 px-6 rounded-lg hover:bg-shpccYellow font-bold"
            >
              Services and Requirements
            </Link>
            <Link
              href={"/contact-us"}
              className="bg-white text-shpccDarkRed py-2 px-6 rounded-lg hover:bg-shpccYellow font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
