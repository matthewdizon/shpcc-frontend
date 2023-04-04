import Layout from "../../../../components/dashboard/Layout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/userContext";
import Link from "next/link";

function RegularLoanHistory() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/regular/history/` +
            user.email,
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
    }

    fetchData();
  }, [user]);

  return (
    <Layout>
      <div className="p-24 min-h-screen">
        <div className="pb-4">
          <Link
            href={`/dashboard/loan/regular`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Date
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
              {data?.map((loan, index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {loan.loanNumber ?? "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {loan.dateSubmitted &&
                        Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(loan.dateSubmitted))}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {loan.firstName} {loan.lastName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <p
                        className={`${
                          loan.status === "Approved"
                            ? "bg-green-600"
                            : loan.status === "Pending"
                            ? "bg-shpccYellow text-black"
                            : "bg-red-600"
                        } p-2 rounded-md max-w-max text-white`}
                      >
                        {loan.isDraft ? "Draft" : loan.status}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <Link
                        href={`/dashboard/loan/regular/${loan._id}`}
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
          {data.length === 0 && (
            <div className="text-center font-light text-shpccRed text-3xl uppercase italic">
              No Data
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default RegularLoanHistory;
