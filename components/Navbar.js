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
        <Link
          href={"/"}
          className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8"
        >
          Home
        </Link>
        <Link
          href={"/services-and-requirements"}
          className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8"
        >
          Services and Requirements
        </Link>
        <Link
          href={"/"}
          className="hover:bg-shpccDarkRed hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
