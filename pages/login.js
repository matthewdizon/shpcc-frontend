import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <div className="h-[90vh] !bg-[url('/images/login.svg')] bg-cover -mx-24 px-24 py-24 items-center flex">
        <div className="grid grid-cols-[2fr_1.2fr] items-center gap-24">
          <div>
            <h2 className="font-bold text-5xl">Lorem ipsum dolor sit amet</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quisquam cum? Quisquam saepe nostrum ipsum libero.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <p className="font-bold text-3xl">Log into SHPCC</p>
            <form action="" className="grid gap-3 my-8">
              <div className="grid">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
              <div className="grid">
                <input
                  type="password"
                  placeholder="Password (6-20 characters)"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>

              <button className="bg-shpccDarkRed rounded-lg text-white text-xl py-2 mt-4 font-thin">
                Log In
              </button>
            </form>
            <div>
              Don&apos;t have an account?{" "}
              <span className="text-shpccRed">Sign Up</span>
            </div>
            <div>Forgot Password?</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
