import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="bg-[#F1F1F2] text-black min-h-screen w-[90vw]">
        <main>{children}</main>
      </div>
    </div>
  );
}
