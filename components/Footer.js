import Image from "next/image";
import affiliate1 from "../assets/images/affiliate1.svg";
import affiliate2 from "../assets/images/affiliate2.svg";
import affiliate3 from "../assets/images/affiliate3.svg";

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#474545]">
      <div className="px-4 py-16 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid gap-8">
            <div>
              <span className="text-xl font-bold">Send us a message</span>
              <p className="mt-4 max-w-xs text-sm text-gray-500">
                For inquiries and comments, send us a message or call our Help
                Desk at ‎(+XXX) XXX-XXXXX.
              </p>
            </div>
            <div>
              <span className="font-bold">Affiliations</span>
              <div className="flex gap-4 max-w-max py-4">
                <div className="h-14 w-16 relative">
                  <Image
                    src={affiliate1}
                    alt="Affiliate"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="h-14 w-16 relative">
                  <Image
                    src={affiliate2}
                    alt="Affiliate"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="h-14 w-16 relative">
                  <Image
                    src={affiliate3}
                    alt="Affiliate"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>

              <nav
                aria-label="Footer Nav"
                className="mt-4 flex flex-col space-y-2 text-sm text-gray-500"
              >
                <a className="hover:opacity-75" href="">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Services</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Company Review{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  SEO Optimisation{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Legal</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <p className="mt-8 text-xs">
            Copyright &copy; 2023 SHPCC - All Rights Reserved.
          </p>
          <p className="mt-8 text-xs font-thin">
            17-A Scout Ybardolaza Street Barangay Sacred Heart, Quezon City 1103
            · Telefax: (XX) XXX-XXXX · E-mail: shpcoop@yahoo.com{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
