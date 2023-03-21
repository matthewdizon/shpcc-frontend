import Layout from "../components/Layout";
import Image from "next/image";

function ContactUs() {
  return (
    <Layout>
      <div className="-mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative bg-gray-600">
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/contact_us.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-50"
          />
        </div>
        <div className="text-white pb-6 grid gap-4 z-20 relative">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl">
            For all inquiries, please email us using the form below
          </p>
        </div>
        <div className="bg-white md:max-w-max p-4 sm:p-8 rounded-xl z-20 relative">
          <form
            action="https://formspree.io/f/mwkjnvyr"
            method="POST"
            className="grid gap-3"
          >
            <div className="grid md:grid-cols-2 gap-6 text-black">
              <div className="grid">
                <label className="font-bold text-lg">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Juan"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
              <div className="grid">
                <label className="font-bold text-lg">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Dela Cruz"
                  onChange={(e) => console.log(e.target.value)}
                  className="bg-white border-gray-400 border rounded-lg p-2"
                />
              </div>
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@gmail.com"
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Type Of Concern</label>
              <input
                type="text"
                name="concernType"
                required
                placeholder="E.g. Question, Suggestion, Compliment, Others"
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="grid">
              <label className="font-bold text-lg">Message</label>
              <textarea
                type="text"
                name="message"
                required
                placeholder="Type your Message Here..."
                onChange={(e) => console.log(e.target.value)}
                className="bg-white border-gray-400 border rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between item-stretch">
              <div className="grid">
                <label className="font-bold text-lg">Are you a member?</label>
                <div className="flex gap-8">
                  <label className="flex gap-2">
                    <input type="radio" name="isMember" />
                    Yes
                  </label>
                  <label className="flex gap-2">
                    <input type="radio" name="isNotMember" />
                    No
                  </label>
                </div>
              </div>
              <button className="bg-shpccDarkRed rounded-full text-white font-bold text-xl md:max-w-max px-12 py-2 md:py-0">
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
