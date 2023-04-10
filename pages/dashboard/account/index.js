import Layout from "../../../components/dashboard/Layout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import AccountOverview from "../../../components/dashboard/AccountOverview";

function Account() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState({});
  const [associateMembershipData, setAssociateMembershipData] = useState({});
  const [regularMembershipData, setregularMembershipData] = useState({});

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

    async function fetchAssociateMembershipData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/` +
            user.email,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setAssociateMembershipData(data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    async function fetchRegularMembershipData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/` +
            user.email,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setregularMembershipData(data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
    fetchAssociateMembershipData();
    fetchRegularMembershipData();
  }, [user]);

  return (
    <Layout>
      <div className="p-24">
        <AccountOverview
          data={data}
          gintongButilLoanApplications={data?.gintongButilLoanApplications}
          regularLoanApplications={data?.regularLoanApplications}
          associateMembershipData={associateMembershipData}
          regularMembershipData={regularMembershipData}
        />
      </div>
    </Layout>
  );
}

export default Account;
