import Layout from "../../../components/dashboard/Layout";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

function Membership() {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen flex flex-col">
        <p className="pb-12 font-extrabold text-3xl">
          What type of membership are you applying for?
        </p>
        <div className="grid md:grid-cols-2 gap-8 flex-grow">
          <Link
            href={"/dashboard/membership/associate-application"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-5 md:opacity-20 font-black leading-none">
              1
            </span>
            <p className="font-extralight">I am a new member!</p>
            <p className="flex flex-col text-2xl font-bold">
              Apply as an <span className="text-3xl">Associate</span>
            </p>
          </Link>
          <Link
            href={
              user?.membershipType === "Associate" ||
              user?.membershipType === "Regular"
                ? "/dashboard/membership/regular-application"
                : "/dashboard/membership"
            }
            className={`bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden ${
              user?.membershipType === "Associate" ||
              user?.membershipType === "Regular"
                ? "hover:shadow-2xl hover:cursor-pointer"
                : "opacity-40 hover:cursor-not-allowed"
            }`}
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-5 md:opacity-20 font-black leading-none">
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
