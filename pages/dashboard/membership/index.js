import Layout from "../../../components/dashboard/Layout";
import Link from "next/link";

function Membership() {
  // detect the membership type of the currently logged in user
  // should show which links are disabled/enabled
  return (
    <Layout>
      <div className="p-24 h-screen">
        <p className="pb-12 font-extrabold text-3xl">
          What type of membership are you applying for?
        </p>
        <div className="grid grid-cols-2 gap-8 h-1/2">
          <Link
            href={"/dashboard/membership/associate-application"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              1
            </span>
            <p className="font-extralight">I am a new member!</p>
            <p className="flex flex-col text-2xl font-bold">
              Apply as an <span className="text-3xl">Associate</span>
            </p>
          </Link>
          <Link
            href={"/dashboard/membership/regular-application"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden opacity-40"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              2
            </span>
            <p className="font-extralight">I am an associate member!</p>
            <p className="flex flex-col text-2xl font-bold">
              Apply as a <span className="text-3xl">Regular</span>
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Membership;
