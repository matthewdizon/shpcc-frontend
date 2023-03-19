import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../../../components/dashboard/Layout";
import AccountOverview from "../../../../components/dashboard/AccountOverview";

function UserView() {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/` + slug,
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
  }, [slug]);

  return (
    <Layout>
      <div className="p-24">
        <AccountOverview data={data} />
      </div>
    </Layout>
  );
}

export default UserView;
