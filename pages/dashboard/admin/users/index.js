import Layout from "../../../../components/dashboard/Layout";
import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl">Users</p>
        <div className="flex gap-4 py-4">
          <div className="bg-white rounded-md shadow-md max-w-max p-2 px-4 hover:cursor-pointer">
            <span className="font-thin text-sm">Find a member</span>
          </div>
          <div className="bg-white rounded-md shadow-md max-w-max p-2 px-4 hover:cursor-pointer">
            <span className="font-thin text-sm">Sort by: Account Number</span>
          </div>
        </div>
        <div class="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
          <table class="min-w-full divide-y-2 divide-gray-200">
            <thead>
              <tr>
                <th class="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Email
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Name
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Cellphone No.
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-black text-gray-900">
                  Account Type
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((user, index) => {
                console.log(user);
                return (
                  <tr key={index}>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      Name
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      Cellphone No.
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      Account Type
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
