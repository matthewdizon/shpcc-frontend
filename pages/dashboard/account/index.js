import Layout from "../../../components/dashboard/Layout";
import Loading from "../../../components/dashboard/Loading";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import AccountOverview from "../../../components/dashboard/AccountOverview";
import { getAnnouncements } from "../../../lib/api";
import Link from "next/link";

function Account({ announcements }) {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
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
          setLoading(false);
          const data = await res.json();
          setData(data[0]);
        } catch (error) {
          setLoading(false);
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
          setLoading(false);
          const data = await res.json();
          setAssociateMembershipData(data);
        } catch (error) {
          setLoading(false);
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
          setLoading(false);
          const data = await res.json();
          setregularMembershipData(data);
        } catch (error) {
          setLoading(false);
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
      <div className="flex flex-col-reverse lg:flex-row justify-between min-h-screen">
        <div className="p-4 sm:p-6 md:p-12 lg:p-16 flex-grow">
          {loading ? (
            <Loading />
          ) : (
            <AccountOverview
              data={data}
              gintongButilLoanApplications={data?.gintongButilLoanApplications}
              regularLoanApplications={data?.regularLoanApplications}
              associateMembershipData={associateMembershipData}
              regularMembershipData={regularMembershipData}
            />
          )}
        </div>
        <div className="bg-[#D9D9D9] p-8 lg:w-[30vw]">
          <Link
            href={"/dashboard/announcements"}
            className="font-bold text-2xl"
          >
            Announcements
          </Link>
          <hr className="bg-black h-[2px] my-2" />
          <div className="grid gap-4">
            {announcements?.slice(0, 2)?.map((announcement, index) => {
              const { title, dateAndTime, description, slug } = announcement;
              return (
                <Link key={index} href={`/dashboard/announcements/${slug}`}>
                  <div className="grid gap-2 hover:bg-gray-200 rounded-lg p-2">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <span className="font-thin">
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      }).format(new Date(dateAndTime))}
                    </span>
                    <p className="font-thin">{description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Account;

export async function getServerSideProps() {
  const announcements = (await getAnnouncements()) ?? [];

  return {
    props: {
      announcements,
    },
  };
}
