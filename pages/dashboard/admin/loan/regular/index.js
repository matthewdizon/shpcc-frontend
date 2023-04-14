import Layout from "../../../../../components/dashboard/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

function RegularLoanAdmin() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    async function fetchData() {
      // Retrieve the JWT from local storage
      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/regular/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      try {
        setLoading(false);
        const data = await res.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function handleSearchAndFilterCriteriaChange(search, status) {
    setSearch(search);

    // Check if the new status value is the same as the current filter status
    const newFilterStatus = status === filterStatus ? "" : status;
    setFilterStatus(newFilterStatus);

    const filteredData = data?.filter((data) => {
      const searchContext =
        `${data.firstName} ${data.lastName} ${data.user}`.toLowerCase();
      const hasSearchMatch = searchContext.includes(search.toLowerCase());

      // Only apply the filter if the status value is not empty
      const hasFilterMatch =
        newFilterStatus === "" || data.status.includes(newFilterStatus);

      return hasSearchMatch && hasFilterMatch;
    });

    setFilteredData(filteredData);
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
        <div className="pb-4">
          <Link
            href={`/dashboard/admin/loan`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <p className="font-black text-3xl pb-8">
          Regular Loan Application Overview
        </p>
        <p className="pb-2 italic text-gray-500 text-sm">
          Showing {filteredData?.length} of {data?.length} results
        </p>
        <div className="grid lg:grid-cols-[3fr_1fr] gap-8">
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4 h-max">
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
                {filteredData?.map((loan, index) => {
                  return (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {loan.loanNumber ?? "-"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(loan.dateSubmitted))}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {loan.user}
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
                          {loan.status}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <Link
                          href={`/dashboard/admin/loan/regular/${loan._id}`}
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
            {loading && (
              <div className="text-center font-light text-shpccRed text-3xl uppercase italic">
                Loading Data...
              </div>
            )}
            {!loading && filteredData?.length === 0 && (
              <div className="text-center font-light text-shpccRed text-3xl uppercase italic">
                No Data
              </div>
            )}
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4 lg:sticky lg:top-12 h-max order-first lg:-order-first">
            <p className="font-bold text-xl">Search and Filter</p>
            <input
              type="text"
              placeholder="Search Application"
              className="border-gray-400 border rounded-sm pl-2 py-2 my-2 lg:p-2 w-full"
              value={search}
              onChange={(e) =>
                handleSearchAndFilterCriteriaChange(
                  e.target.value,
                  filterStatus
                )
              }
            />
            <div className="grid gap-2">
              <span className="text-gray-400">Statuses</span>
              <div
                className={`flex justify-between px-4 py-2 rounded-lg items-center hover:bg-gray-200 hover:cursor-pointer ${
                  filterStatus === "Approved" ? "bg-gray-200" : ""
                }`}
                onClick={() =>
                  handleSearchAndFilterCriteriaChange(search, "Approved")
                }
              >
                <p>Approved</p>
                <p className="rounded-lg bg-gray-300 py-1 px-3">
                  {data?.filter((data) => data.status === "Approved").length}
                </p>
              </div>
              <div
                className={`flex justify-between px-4 py-2 rounded-lg items-center hover:bg-gray-200 hover:cursor-pointer ${
                  filterStatus === "Pending" ? "bg-gray-200" : ""
                }`}
                onClick={() =>
                  handleSearchAndFilterCriteriaChange(search, "Pending")
                }
              >
                <p>Pending</p>
                <p className="rounded-lg bg-gray-300 py-1 px-3">
                  {data?.filter((data) => data.status === "Pending").length}
                </p>
              </div>
              <div
                className={`flex justify-between px-4 py-2 rounded-lg items-center hover:bg-gray-200 hover:cursor-pointer ${
                  filterStatus === "Rejected" ? "bg-gray-200" : ""
                }`}
                onClick={() =>
                  handleSearchAndFilterCriteriaChange(search, "Rejected")
                }
              >
                <p>Rejected</p>
                <p className="rounded-lg bg-gray-300 py-1 px-3">
                  {data?.filter((data) => data.status === "Rejected").length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RegularLoanAdmin;
