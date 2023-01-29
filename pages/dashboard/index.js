import Layout from "../../components/dashboard/Layout";
import { UserContext } from "../../context/userContext";
import { useEffect, useContext } from "react";

function Dashboard() {
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
            <div>
              <div className="grid gap-2">
                <h2 className="font-bold text-lg">Paskuhan sa Koop</h2>
                <span className="font-thin">November 5, 2022</span>
                <p className="font-thin">
                  Deserunt nisi aute irure minim et incididunt aliqua.
                  Exercitation non adipisicing voluptate occaecat fugiat magna
                  aute in sit magna Lorem non amet voluptate nisi. Minim cillum
                  occaecat labore commodo aliquip consequat aute.
                </p>
              </div>
            </div>
            <div>
              <div className="grid gap-2">
                <h2 className="font-bold text-lg">Ugnayang Koop Virtual</h2>
                <span className="font-thin">October 12, 2022</span>
                <p className="font-thin">
                  Deserunt nisi aute irure minim et incididunt aliqua.
                  Exercitation non adipisicing voluptate occaecat fugiat magna
                  aute in sit magna Lorem non amet voluptate nisi. Minim cillum
                  occaecat labore commodo aliquip consequat aute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
