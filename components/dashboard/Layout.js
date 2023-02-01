import SideNav from "./SideNav";
import Head from "next/head";

export default function Layout({ children }) {
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
