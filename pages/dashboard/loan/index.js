import Layout from "../../../components/dashboard/Layout";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

function Loan() {
  const { user } = useContext(UserContext);
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen flex flex-col">
        <p className="font-extrabold text-3xl">
          What type of loan are you applying for?
        </p>
        <p className="py-6 italic">
          Note: You need to be a{" "}
          <Link href={`/dashboard/membership`} className="font-bold underline">
            Regular Member
          </Link>{" "}
          to apply for loans
        </p>
        <div className="grid md:grid-cols-2 gap-8 flex-grow">
          <Link
            href={
              user?.membershipType === "Regular"
                ? "/dashboard/loan/gintong-butil"
                : "/dashboard/loan"
            }
            className={`bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden ${
              user?.membershipType === "Regular"
                ? "hover:shadow-2xl hover:cursor-pointer"
                : "opacity-40 hover:cursor-not-allowed"
            }`}
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              1
            </span>
            <p></p>
            <p className="flex flex-col text-2xl font-bold">
              Apply for <span className="text-3xl">Gintong Butil</span>
            </p>
          </Link>
          <Link
            href={
              user?.membershipType === "Regular"
                ? "/dashboard/loan/regular"
                : "/dashboard/loan"
            }
            className={`bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden ${
              user?.membershipType === "Regular"
                ? "hover:shadow-2xl hover:cursor-pointer"
                : "opacity-40 hover:cursor-not-allowed"
            }`}
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              2
            </span>
            <p></p>
            <p className="flex flex-col text-2xl font-bold">
              Apply for a <span className="text-3xl">Regular Loan</span>
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Loan;
