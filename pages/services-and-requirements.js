import Layout from "../components/Layout";
import Image from "next/image";

function ServicesAndRequirements() {
  return (
    <Layout>
      <div
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative"
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
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
              Regular Member
            </h2>
            <ol className="list-disc pl-4">
              <li>A Filipino Citizen</li>
              <li>18 to 65 Years Old</li>
              <li>Has An Occupation</li>
              <li>Lives Within The Area Of District 4 To 6 Of Quezon City</li>
              <li>Attended Pre-Membership Seminars</li>
              <li>Lifetime Membership of Php 100.00</li>
              <li>Seminar Fee Of Php 50.00</li>
              <li>Approved membership application by the Board of Directors</li>
            </ol>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
              Must be submitted with the membership application
            </h2>
            <ol className="list-disc pl-4">
              <li>2 Pcs. 1x1 And 2x2 Picture</li>
              <li>Government Issued ID And TIN</li>
              <li>Barangay Clearance</li>
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
              <li>Certificate Of Employment</li>
              <li>2 Months Lates Pay Slip</li>
            </ol>
            <h3 className="font-bold text-xl my-4">Owns A Business</h3>
            <ol className="list-disc pl-4">
              <li>Business PErmit</li>
              <li>SEC, DTI Permit / Certificate</li>
              <li>CR & OR Of Vehicles</li>
            </ol>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Associate Membership
            </h2>
            <h3 className="font-bold text-xl mb-4">
              Adult, Kabataan And Special Depositors
            </h3>
            <div className="flex gap-6">
              <div>
                <h4 className="italic font-semibold">Membership Fee</h4>
                <p>Adult Savings</p>
                <p>Kabataan Savings</p>
              </div>
              <div>
                <h4 className="italic font-semibold">
                  Initial Savings Deposit
                </h4>
                <p>Adult Savings Php 100.00</p>
                <p>Kabataan Savings Php 50.00</p>
              </div>
            </div>
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
            <p className="font-bold">Wednesday and Thursday</p>
            <p className="font-bold">2:00 To 4:00 pm</p>
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
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative"
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
      <div className="grid lg:grid-cols-2 py-16 gap-16">
        <div>
          <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
            Low-Interest Loans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="list-disc grid gap-4 pl-4">
              <div>
                <li className="font-bold">Loan Products</li>
                <p className="indent-6">Basic Loans</p>
                <p className="indent-6">Productive</p>
                <p className="indent-6">Provident</p>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 48 Months
                </p>
              </div>
              <div>
                <li className="font-bold">Additional Loans</li>
                <p className="indent-6">Appliance</p>
                <p className="indent-6">Educational</p>
                <p className="indent-6">House Repair</p>
                <p className="indent-6">Transport Repair</p>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 48 Months
                </p>
              </div>
              <div>
                <li className="font-bold">Bridge Fund</li>
                <p className="indent-6">Minimum Loan Of Php 2,000</p>
                <p className="indent-12 italic">
                  *Repayment Term - Max. Of 1 Month
                </p>
                <p className="indent-6">Maximum Loan Of Php 20,000</p>
                <p className="indent-12 italic">
                  *Repayment Term - Max. Of 6 Months
                </p>
              </div>
            </div>
            <div className="grid px-4 md:px-0">
              <div>
                <li className="font-bold">Back To Back/Scured Loan</li>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 12 Months
                </p>
              </div>
              <div>
                <li className="font-bold">Business Opportunity Loan</li>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 48 Months
                </p>
              </div>
              <div>
                <li className="font-bold">Credit Line</li>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 48 Months
                </p>
              </div>
              <div>
                <li className="font-bold">Pangkabuhayan/Investment</li>
                <p className="indent-6">
                  Max. Of Php 1.5 Million Loanable Amount
                </p>
                <p className="indent-6 italic">
                  *Repayment Term - Max. Of 12 Months
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-shpccDarkRed font-bold text-3xl mb-6">
            High Interest On Deposits
          </h2>
          <div className="grid pl-4">
            <div>
              <li className="font-bold">Savings Deposit</li>
              <p className="indent-6 italic">
                Higher By .15% From Banks (Computed Quarterly)
              </p>
            </div>
            <div>
              <li className="font-bold">Time Deposit</li>
              <p className="indent-6 italic">
                From 0.06 To 1.00% Per Annum Depending On The Amount
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative"
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
                Group yearly Renewable Term Insurance (GYRT) And Pondong Damayan
              </h2>
              <p className="capitalize">
                Donating and helping families of deceased members. The maximum
                benefit amount is Php 40,000.00 from CISP and first aid to
                owners based on membership duration.
              </p>
            </div>
          </div>
          <div className="grid gap-16">
            <div>
              <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
                Loan Protection Plan Insurance (LPPI)/Loan Guarantee Fund (LGF)
              </h2>
              <p className="capitalize">
                All members who are indebted are provided with LGF or insurance
                for the amount owed. This is to provide protection to the member
                and the surviving family while he or she is in debt which is
                paid based on the repayment term.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Taunang Medical Mission
            </h2>
            <p className="capitalize">
              Provides free medical, dental, and optical check-ups for all
              members including all residents within the cooperative’s area of
              ​​operation. It is held on the anniversary of the cooperative and
              on other important occasions in collaboration with some
              professional members and the local barangays.
            </p>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              Scholarship Assistance
            </h2>
            <p className="capitalize">
              For qualified members or their children who want to study in
              college, technical, or vocational courses at any state
              universities or colleges.
            </p>
          </div>
          <div>
            <h2 className="text-shpccDarkRed font-bold text-3xl mb-4">
              On-The-Job Training (OJT)
            </h2>
            <p className="capitalize">
              The cooperative welcomes students who wish to serve as trainees to
              expand and hone their office skills and introduce them to the
              cooperative movement.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesAndRequirements;
