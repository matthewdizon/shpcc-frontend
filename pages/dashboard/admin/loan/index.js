import Layout from "../../../../components/dashboard/Layout";
import Link from "next/link";

function LoanAdmin() {
  return (
    <Layout>
      <div className="p-24 h-screen">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl mb-12">
          Loan
        </p>
        <div className="grid grid-cols-2 gap-8 h-1/2">
          <Link
            href={"/dashboard/admin/loan/gintong-butil"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              1
            </span>
            <p className="font-extralight"></p>
            <p className="flex flex-col text-2xl font-bold">
              Review Applications for{" "}
              <span className="text-3xl">Gintong Butil</span>
            </p>
          </Link>
          <Link
            href={"/dashboard/admin/loan/regular"}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-2xl hover:cursor-pointer"
          >
            <span className="absolute right-0 -bottom-12 text-[300px] opacity-20 font-black leading-none">
              2
            </span>
            <p className="font-extralight"></p>
            <p className="flex flex-col text-2xl font-bold">
              Review Applications for{" "}
              <span className="text-3xl">Regular Loan</span>
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LoanAdmin;
