import Layout from "../../components/dashboard/Layout";
import { UserContext } from "../../context/userContext";
import { useEffect, useContext } from "react";
import { getAnnouncements } from "../../lib/api";
import Link from "next/link";

function Dashboard({ announcements }) {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function getUser() {
      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/user`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      try {
        const data = await res.json();
        if (!data.error) {
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between min-h-screen">
        <div className="w-[70vw] p-24 flex flex-col gap-12">
          <div className="bg-white shadow-xl rounded-xl p-6 grid gap-6">
            <p className="font-extrabold text-4xl">Hello, {user?.email}!</p>
            <p>Welcome back!</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 grid gap-6">
            <p className="text-2xl font-semibold">Track your application</p>
          </div>
        </div>
        <div className="bg-[#D9D9D9] p-8 w-[20vw]">
          <p className="font-bold text-2xl">Announcements</p>
          <hr className="bg-black h-[2px] my-2" />
          <div className="grid gap-4">
            {announcements.map((announcement, index) => {
              const { title, dateAndTime, description, slug } = announcement;
              return (
                <Link key={index} href={`/dashboard/announcements/${slug}`}>
                  <div className="grid gap-2">
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

export default Dashboard;

export async function getServerSideProps() {
  const announcements = (await getAnnouncements()) ?? [];

  return {
    props: {
      announcements,
    },
  };
}
