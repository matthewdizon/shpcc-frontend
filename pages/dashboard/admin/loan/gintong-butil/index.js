import Layout from "../../../../../components/dashboard/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

function GintongButilAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Retrieve the JWT from local storage
      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/gbl/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      try {
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl pb-8">
          Gintong Butil Loan Application Overview
        </p>
        <div className="grid grid-cols-[3fr_1fr] gap-8">
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                    User
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                    Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {data?.map((application, index) => {
                  console.log(application);
                  return (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {application.user}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {application.firstName} {application.lastName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <p
                          className={`${
                            application.status === "Approved"
                              ? "bg-green-600"
                              : application.status === "Pending"
                              ? "bg-shpccYellow text-black"
                              : "bg-red-600"
                          } p-2 rounded-md max-w-max text-white`}
                        >
                          {application.status}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <Link
                          href={`/dashboard/admin/loan/gintong-butil/${application.user}`}
                          className="bg-[#FADB9F] py-2 px-4 rounded-md max-w-max hover:opacity-50 duration-200 transition"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
            <p className="font-bold text-xl">Search and Filter</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GintongButilAdmin;