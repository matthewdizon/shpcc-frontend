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
        <p className="font-bold text-3xl">Users</p>
        <div>
          {data.map((user, index) => {
            console.log(user);
            return (
              <div key={index}>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Users;
