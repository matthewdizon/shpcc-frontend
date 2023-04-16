import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../../../components/dashboard/Layout";
import AccountOverview from "../../../../components/dashboard/AccountOverview";
import Loading from "../../../../components/dashboard/Loading";

function UserView() {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [associateMembershipData, setAssociateMembershipData] = useState({});
  const [regularMembershipData, setregularMembershipData] = useState({});

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
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    }

    async function fetchAssociateMembershipData() {
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
          setAssociateMembershipData(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    }

    async function fetchRegularMembershipData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/` +
            slug,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setregularMembershipData(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    }

    fetchData();
    fetchAssociateMembershipData();
    fetchRegularMembershipData();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
        <div className="pb-4">
          <Link
            href={`/dashboard/admin/users`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <AccountOverview
          data={data}
          gintongButilLoanApplications={data?.gintongButilLoanApplications}
          regularLoanApplications={data?.regularLoanApplications}
          associateMembershipData={associateMembershipData}
          regularMembershipData={regularMembershipData}
          isAdmin={true}
        />
      </div>
    </Layout>
  );
}

export default UserView;
