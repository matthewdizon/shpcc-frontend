import Link from "next/link";

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#474545]">
      <div className="px-4 py-16 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid gap-8">
            <div>
              <span className="text-xl font-bold">Send us a message</span>
              <p className="mt-4 max-w-xs text-sm text-gray-400">
                For inquiries and comments,{" "}
                <Link
                  href={`/contact-us`}
                  className="text-shpccYellow underline"
                >
                  send us a message
                </Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Site Links</p>

              <nav
                aria-label="Footer Nav"
                className="mt-4 flex flex-col space-y-2 text-sm text-gray-400"
              >
                <Link className="hover:opacity-75" href="">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" href="">
                  Terms of Use
                </Link>
                <Link className="hover:opacity-75" href={`/contact-us`}>
                  Contact Us
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Quick Links</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                <Link className="hover:opacity-75" href="/#history">
                  History
                </Link>
                <Link className="hover:opacity-75" href="/#member-stories">
                  Member Stories
                </Link>
                <Link
                  className="hover:opacity-75"
                  href={"/services-and-requirements#requirements"}
                >
                  Requirements
                </Link>
                <Link
                  className="hover:opacity-75"
                  href="/services-and-requirements#products-services"
                >
                  Products & Services
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Affiliations</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                <Link
                  className="hover:opacity-75"
                  href="https://www.woccu.org/ "
                >
                  WCCU
                </Link>
                <Link className="hover:opacity-75" href="https://aaccu.coop/">
                  ACCU
                </Link>
                <Link
                  className="hover:opacity-75"
                  href="https://pfcco-ncr.coop/"
                >
                  PFCCO-NCR
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Contact Information</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                <Link
                  className="hover:opacity-75"
                  href="https://facebook.com/OfficialSHPCC"
                >
                  Facebook
                </Link>
                <Link className="hover:opacity-75" href="tel:0998-867-4382">
                  0998-867-4382
                </Link>
                <Link className="hover:opacity-75" href="tel:0997-705-8346">
                  0997-705-8346
                </Link>
                <Link className="hover:opacity-75" href="tel:8927-78-51">
                  8927-78-51
                </Link>
                <Link className="hover:opacity-75" href="tel:8426-46-72">
                  8426-46-72
                </Link>
                <Link
                  className="hover:opacity-75"
                  href="mailto:shpdevtcoop@gmail.com"
                >
                  shpdevtcoop@gmail.com
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex-col flex lg:flex-row justify-between pt-8">
          <p className="mt-8 text-xs">
            Copyright &copy; 2023 SHPCC - All Rights Reserved.
          </p>
          <p className="mt-8 text-xs font-light">
            17-A Scout Ybardolaza Street Barangay Sacred Heart, Quezon City 1103
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
