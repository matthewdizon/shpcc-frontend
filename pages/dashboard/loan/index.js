import Layout from "../../../components/dashboard/Layout";
import Link from "next/link";

function Loan() {
  return (
    <Layout>
      <div className="p-24 h-screen">
        <p className="pb-12 font-extrabold text-3xl">
          What type of loan are you applying for?
        </p>
        <div className="grid grid-cols-2 gap-8 h-1/2">
          <Link
            href={"/dashboard/loan/gintong-butil"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              1
            </span>
            <p className="font-extralight">Lorem ipsum</p>
            <p className="flex flex-col text-2xl font-bold">
              Apply for <span className="text-3xl">Gintong Butil</span>
            </p>
          </Link>
          <Link
            href={"/dashboard/loan/regular"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              2
            </span>
            <p className="font-extralight">Lorem ipsum</p>
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
