import Layout from "../../../../components/dashboard/Layout";
import Link from "next/link";

function MembershipAdmin() {
  // detect the membership type of the currently logged in user
  // should show which links are disabled/enabled
  return (
    <Layout>
      <div className="p-24 h-screen">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl mb-12">
          Membership
        </p>
        <div className="grid grid-cols-2 gap-8 h-1/2">
          <Link
            href={"/dashboard/admin/membership/associate"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              1
            </span>
            <p className="font-extralight"></p>
            <p className="flex flex-col text-2xl font-bold">
              Reviewing Applications for{" "}
              <span className="text-3xl">Associate Membership</span>
            </p>
          </Link>
          <Link
            href={"/dashboard/admin/membership/regular"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
            // className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden opacity-40"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              2
            </span>
            <p className="font-extralight"></p>
            <p className="flex flex-col text-2xl font-bold">
              Reviewing Applications for{" "}
              <span className="text-3xl">Regular Membership</span>
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default MembershipAdmin;
