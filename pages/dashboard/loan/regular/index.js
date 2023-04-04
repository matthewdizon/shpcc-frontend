import Layout from "../../../../components/dashboard/Layout";
import RegularLoanApplication from "../../../../components/forms/RegularLoanApplication";
import { useState } from "react";
import Link from "next/link";

function RegularLoan() {
  const [formData, setFormData] = useState({
    financialInformation: {
      business: "",
      companyName: "",
      monthlyIncome: "",
      spouseBusiness: "",
      spouseCompanyName: "",
      spouseMonthlyIncome: "",
    },
    loanDetails: {
      date: "",
      amount: "",
      duration: "",
      paymentInterval: "",
      reason: "",
    },
    collateralDetails: {
      collaterals: [
        {
          gamitPanagot: "",
          datePurchased: "",
          collateralAmount: "",
          serialNumber: "",
        },
      ],
    },
    chattelMortgage: {
      mortgages: [
        {
          vehicle: "",
          model: "",
          motorNumber: "",
        },
      ],
    },
  });

  return (
    <Layout>
      <div className="p-24 min-h-screen">
        <div className="flex justify-between pb-4">
          <Link
            href={`/dashboard/loan`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
          <Link
            href={`/dashboard/loan/regular/history`}
            className="bg-white p-2 px-4 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition duration-200"
          >
            History
          </Link>
        </div>
        <RegularLoanApplication formData={formData} setFormData={setFormData} />
      </div>
    </Layout>
  );
}

export default RegularLoan;
