import Logo from "../assets/images/logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={`bg-shpccRed flex justify-between px-12`}>
      <div className="relative flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={60} height={60} />
        <h1 className="text-xl font-semibold">
          Sacred Heart Parish Credit Cooperative
        </h1>
      </div>
      <div className="flex text-center items-center uppercase font-semibold">
        <p className="hover:bg-[#AC0F15] hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8">
          Home
        </p>
        <p className="hover:bg-[#AC0F15] hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8">
          Services and Requirements
        </p>
        <p className="hover:bg-[#AC0F15] hover:text-shpccYellow hover:cursor-pointer h-full flex items-center px-8">
          Contact Us
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
