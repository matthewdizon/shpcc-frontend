import Layout from "../components/Layout";
import Image from "next/image";

function ServicesAndRequirements() {
  return (
    <Layout>
      <div
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative bg-gray-600"
        id="requirements"
      >
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/requirements.JPG"}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            className="brightness-50"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold z-20">Requirements</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-16 gap-16">
        <div className="grid gap-8">
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Associate Member
            </h2>
            <h3 className="font-bold text-xl mb-4">
              Young Adults, Adults And Special Depositors
            </h3>
            <div className="grid gap-6">
              <div>
                <h4 className="italic font-semibold">Membership Fee</h4>
                <p>Young Adults Savings/Held in Trust - Php 50.00</p>
                <p>Adult Savings - Php 50.00</p>
              </div>
              <div>
                <h4 className="italic font-semibold">
                  Initial Savings Deposit
                </h4>
                <p>Young Adults Savings - Php 50.00</p>
                <p>Adult Savings - Php 100.00</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
              Regular Member
            </h2>
            <ol className="list-disc pl-4">
              <li>A Filipino citizen</li>
              <li>18 to 64 years old</li>
              <li>Has an occupation or business</li>
              <li>Lives or works within NCR</li>
              <li>Attended the Pre-Membership Seminar</li>
              <li>Lifetime Membership Fee of Php 100.00</li>
              <li>Approved membership application by the Board of Directors</li>
              <li>Minimum Savings of P1,000.00</li>
              <li>Minimum Share Capital of P4,000.00</li>
              <li>Preferred Share Capital of P500.00</li>
              <li>Damayan Fund of P300.00</li>
            </ol>
          </div>
        </div>
        <div className="grid gap-8">
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Additional Requirements
            </h2>
            <h3 className="font-bold text-xl mb-4">Employee</h3>
            <ol className="list-disc pl-4">
              <li>Certificate of Employment</li>
              <li>2 months latest payslip</li>
            </ol>
            <h3 className="font-bold text-xl my-4">Owns A Business</h3>
            <ol className="list-disc pl-4">
              <li>DTI/SEC Certificate, Mayor&apos;s/Business Permit</li>
            </ol>
            <h3 className="font-bold text-xl my-4">PUJ/TNVS Operator</h3>
            <ol className="list-disc pl-4">
              <li>CR & OR of vehicle</li>
              <li>Certificate of Public Conveyance/Franchise</li>
            </ol>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
              Must be submitted with the membership application
            </h2>
            <ol className="list-disc pl-4">
              <li>2 pcs. ID Picture (1x1 and 2x2)</li>
              <li>Government-issued ID and TIN</li>
              <li>Barangay Clearance</li>
            </ol>
          </div>
        </div>
        <div className="border border-shpccDarkRed text-center grid gap-8 mb-auto py-4">
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl">
              Pre-Membership Seminars
            </h2>
            <p className="text-shpccDarkRed italic">
              (Cooperative Membership Seminar)
            </p>
          </div>
          <div>
            <p className="font-bold">Wednesday and Friday</p>
            <p className="font-bold">2:00 - 4:00 pm</p>
          </div>
          <div>
            <p className="font-bold">Every Saturday</p>
            <p className="font-bold">10:00 AM</p>
          </div>
          <p className="font-semibold italic">
            *Special PMES as requested to EDCOM
          </p>
        </div>
      </div>
      <div
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative bg-gray-600"
        id="products-services"
      >
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/products.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-50"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold z-20">
          Products & Services
        </h1>
      </div>
      <div className="grid py-16 gap-16">
        <div>
          <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
            Low-Interest Loans
          </h2>
          <div className="grid gap-8">
            <div className="list-decimal grid lg:grid-cols-3 gap-4">
              <div>
                <p className="font-bold">Basic Loans</p>
                <li className="ml-4">Productive</li>
                <li className="ml-4">Provident</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 48 Months
                </p>
                <li className="ml-4">Back To Back/Scured Loan</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 12 Months
                </p>
                <li className="ml-4">Pangkabuhayan/Investment</li>
                <p className="ml-12 italic">
                  Maximum of Php 2.0 Million Loanable Amount
                </p>
                <p className="ml-16 italic">
                  *Repayment Term - maximum of 48 Months
                </p>
              </div>
              <div>
                <p className="font-bold">On-Top Loans</p>
                <li className="ml-4">Appliance</li>
                <li className="ml-4">Educational</li>
                <li className="ml-4">House Repair</li>
                <li className="ml-4">Transport Repair</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 12 months
                </p>
                <li className="ml-4">Bridge Fund</li>
                <p className="ml-12 italic">
                  Minimum Loan of Php 2,000.00 (1st cycle)
                </p>
                <p className="ml-16 italic">
                  *Repayment Term - maximum of 1 month
                </p>
                <p className="ml-12 italic">Maximum Loan of Php 30,000.00</p>
                <p className="ml-16 italic">
                  *Repayment Term - maximum of 6 months
                </p>
                <li className="ml-4">Gintong Butil Loan</li>
                <p className="ml-12 italic">Maximum Loan of Php 45,000.00</p>
                <p className="ml-16 italic">
                  *Repayment Term - maximum of 6 months
                </p>
                <li className="ml-4">Business Opportunity Loan</li>
                <p className="ml-12 italic">
                  Capacity-based loan (with business plan)
                </p>
                <p className="ml-12 italic">Maximum Loan of Php 250,000.00</p>
                <p className="ml-16 italic">
                  *Repayment Term - maximum of 48 months
                </p>
                <li className="ml-4">Memorial Loan</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 12 months
                </p>
              </div>
              <div>
                <p className="font-bold">Special Loans</p>
                <li className="ml-4">Credit Line</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 48 Months
                </p>
                <li className="ml-4">Construction Loan/Housing Loan</li>
                <p className="ml-12 italic">
                  *Repayment Term - maximum of 120 Months
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
            High Interest On Deposits
          </h2>
          <div className="grid gap-4">
            <div>
              <p className="font-bold">Savings Deposit</p>
              <p className="ml-4 italic">
                higher by .15% from banks (computed quarterly)
              </p>
            </div>
            <div>
              <p className="font-bold">Time Deposit</p>
              <p className="ml-4 italic">depending on the amount and term</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative bg-gray-600"
        id="benefits-services"
      >
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/community.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-50"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold z-20">
          Community Benefits & Services
        </h1>
      </div>
      <div className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="grid gap-16">
            <div>
              <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
                Group Yearly Renewable Term Insurance (GYRT) and Pondong Damayan
              </h2>
              <div className="list-disc">
                <li>Donating and helping families of deceased members</li>
                <li>The maximum benefit amount for GYRT is Php 40,000.00</li>
                <li>
                  The maximum benefit amount for Damayan depends on length of
                  membership with the fund
                </li>
              </div>
            </div>
          </div>
          <div className="grid gap-16">
            <div>
              <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
                Loan Protection Plan Insurance (LPPI)
              </h2>
              <p>
                All loans are insured with SHPCC’s accredited insurance
                providers to protect the member and his family in case of death
                of insured/member.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Taunang Medical Mission
            </h2>
            <p>
              Provides free medical, dental and optical check-ups for all
              members Including all residents within the cooperative’s area of
              ​operation. It is held on the Anniversary month of the cooperative
              and on other important occasions. This is in collaboration with
              some professional members and the Local Government Units.
            </p>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Scholarship Assistance
            </h2>
            <p>
              For qualified members or their children who want to study in
              college, technical or vocational courses at any state universities
              or colleges.
            </p>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              On-The-Job Training (OJT)
            </h2>
            <p>
              The cooperative welcomes students who wish to serve as trainees to
              expand and hone their office skills and introduce them to the
              cooperative movement.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="relative flex items-center justify-center gap-4 bg-shpccYellow px-4 py-3 text-black rounded-md">
            <p className="text-sm font-medium text-center px-8 italic">
              The information on this page is intended to be accurate and
              up-to-date, but may be subject to change or revision.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesAndRequirements;
