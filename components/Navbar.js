import Logo from "../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={`bg-shpccRed flex justify-between px-12`}>
      <Link href={"/"} className="relative flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={60} height={60} />
        <h1 className="text-xl font-semibold">
          Sacred Heart Parish Credit Cooperative
        </h1>
      </Link>
      <div className="flex text-center items-center uppercase font-semibold">
        <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8 group relative">
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
        <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8 group relative">
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
        <div className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8 group relative">
          <Link href={"/contact-us"} className="h-full flex items-center">
            Contact Us
          </Link>
        </div>
        <button>
          <Link
            href={"/login"}
            className="uppercase bg-white text-shpccDarkRed py-2 px-6 rounded-lg mx-8 hover:bg-shpccYellow font-bold"
          >
            Login
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
