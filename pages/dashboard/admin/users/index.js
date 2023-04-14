import Layout from "../../../../components/dashboard/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      // Retrieve the JWT from local storage
      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/users`,
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

  function handleSearchCriteriaChange(search) {
    setSearch(search);

    const filteredData = data?.filter((data) => {
      const isAdminString = data.isAdmin ? "admin" : "";
      const searchContext =
        `${data.email} ${data.firstName} ${data.lastName} ${data.contactNumber} ${data.membershipType} ${data.associateAccountNumber} ${data.regularAccountNumber} ${data.department} ${isAdminString}`.toLowerCase();
      const hasSearchMatch = searchContext.includes(search.toLowerCase());

      return hasSearchMatch;
    });

    setFilteredData(filteredData);
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl">Users</p>
        <div className="flex gap-4 py-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white rounded-md shadow-md max-w-max p-2 px-4"
            value={search}
            onChange={(e) => handleSearchCriteriaChange(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Cellphone No.
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Account Type
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Admin
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData?.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {user.contactNumber ? user.contactNumber : "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {user.membershipType === "none"
                        ? "-"
                        : user.membershipType === "Associate"
                        ? `${user.membershipType}: ${
                            user.associateAccountNumber
                              ? user.associateAccountNumber
                              : ""
                          }`
                        : `${user.membershipType}: ${
                            user.regularAccountNumber
                              ? user.regularAccountNumber
                              : ""
                          }`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {user.isAdmin
                        ? user.department === "none"
                          ? "Admin"
                          : `${user.department} Officer`
                        : "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <Link
                        href={`/dashboard/admin/users/${user.email}`}
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
          {!loading && data.length === 0 && (
            <div className="text-center font-light text-shpccRed text-3xl uppercase italic">
              No Data
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Users;
