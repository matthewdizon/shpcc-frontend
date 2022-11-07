import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sacred Heart Parish Credit Cooperative</title>
      </Head>
      <Navbar />
      <div className="bg-white min-h-screen text-black">
        <main className="px-24">{children}</main>
      </div>
      <Footer />
    </>
  );
}
