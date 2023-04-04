import Layout from "../../../../components/dashboard/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

function Users() {
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
        const data = await res.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function handleSearchCriteriaChange(search) {
    setSearch(search);

    const filteredData = data?.filter((data) => {
      const searchContext =
        `${data.email} ${data.firstName} ${data.lastName} ${data.contactNumber} ${data.membershipType}`.toLowerCase();
      const hasSearchMatch = searchContext.includes(search.toLowerCase());

      return hasSearchMatch;
    });

    setFilteredData(filteredData);
  }

  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl">Users</p>
        <div className="flex gap-4 py-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white rounded-md shadow-md max-w-max p-2 px-4"
            value={search}
            onChange={(e) => handleSearchCriteriaChange(e.target.value)}
          />
          <div className="bg-white rounded-md shadow-md max-w-max p-2 px-4 hover:cursor-pointer">
            <span className="font-thin text-sm">Sort by: Account Number</span>
          </div>
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
                      {user.contactNumber ?? "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {user.membershipType === "none"
                        ? "-"
                        : user.membershipType}
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
        </div>
      </div>
    </Layout>
  );
}

export default Users;
