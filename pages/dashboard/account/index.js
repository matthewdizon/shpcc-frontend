import Layout from "../../../components/dashboard/Layout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import AccountOverview from "../../../components/dashboard/AccountOverview";

function Account() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/` + user.email,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setData(data[0]);
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [user]);

  return (
    <Layout>
      <div className="p-24">
        <AccountOverview data={data} />
      </div>
    </Layout>
  );
}

export default Account;
