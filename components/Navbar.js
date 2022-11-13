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
          <Link href={"/"}>Home</Link>
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
        <Link
          href={"/services-and-requirements"}
          className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8"
        >
          Services and Requirements
        </Link>
        <Link
          href={"/contact-us"}
          className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
