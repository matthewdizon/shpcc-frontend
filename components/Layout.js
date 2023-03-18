import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Navbar />
      <div className="bg-white text-black">
        <main className="px-6 md:px-12 lg:px-24">{children}</main>
      </div>
      <Footer />
    </>
  );
}
