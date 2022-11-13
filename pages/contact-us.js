import Layout from "../components/Layout";

function ContactUs() {
  return (
    <Layout>
      <div className="bg-cover !bg-[url('/images/hero.svg')] -mx-24 px-24 py-24">
        <div className="text-white pb-6 grid gap-4">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <p className="text-xl">
            For all inquiries, please email us using the form below
          </p>
        </div>
        <div className="bg-white max-w-max p-8 rounded-xl">
          <form action="" className="grid gap-3">
            <div className="grid grid-cols-2 gap-6 text-black">
              <div className="grid">
                <label className="font-bold text-lg">First Name</label>
                <input
                  type="text"
                  placeholder="Juan"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
              <div className="grid">
                <label className="font-bold text-lg">Last Name</label>
                <input
                  type="text"
                  placeholder="Dela Cruz"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Email Address</label>
              <input
                type="text"
                placeholder="email@gmail.com"
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Type Of Concern</label>
              <input
                type="text"
                placeholder="E.g. Question, Suggestion, Compliment, Others"
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Message</label>
              <textarea
                type="text"
                placeholder="Type your Message Here..."
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="flex justify-between item-stretch">
              <div className="grid">
                <label className="font-bold text-lg">Are you a member?</label>
                <div className="flex gap-8">
                  <label className="flex gap-2">
                    <input type="radio" name="isMember" />
                    Yes
                  </label>
                  <label className="flex gap-2">
                    <input type="radio" name="isMember" />
                    No
                  </label>
                </div>
              </div>
              <button className="bg-shpccDarkRed rounded-full text-white font-bold text-xl max-w-max px-12">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
