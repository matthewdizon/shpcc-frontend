import Layout from "../../../../components/dashboard/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AssociateApplicationView() {
  const [data, setData] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function fetchData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/` +
            slug,
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
  }, [slug]);

  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl">
          Viewing Application: {slug}
        </p>
      </div>
    </Layout>
  );
}

export default AssociateApplicationView;
