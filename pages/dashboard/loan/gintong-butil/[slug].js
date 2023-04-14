import Layout from "../../../../components/dashboard/Layout";
import GintongButilLoanApplication from "../../../../components/forms/GintongButilLoanApplication";
import Loading from "../../../../components/dashboard/Loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function GintongButilHistoryView() {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
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
  });

  // grab initial form data if there's a draft
  useEffect(() => {
    async function fetchData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/gbl/` + slug,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setData(data);
          setLoading(false);
          setFormData({
            financialInformation: {
              business: data?.business || "",
              companyName: data?.companyName || "",
              monthlyIncome: data?.monthlyIncome || "",
              spouseBusiness: data?.spouseBusiness || "",
              spouseCompanyName: data?.spouseCompanyName || "",
              spouseMonthlyIncome: data?.spouseMonthlyIncome || "",
            },
            loanDetails: {
              date: data?.date || "",
              amount: data?.amount || "",
              duration: data?.duration || "",
              paymentInterval: data?.paymentInterval || "",
              reason: data?.reason || "",
            },
          });
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (data && !data?.isDraft) {
    return (
      <Layout>
        <div className="p-4 sm:p-6 md:p-12 lg:p-16">
          <div className="pb-4">
            <Link
              href={`/dashboard/loan/gintong-butil/history`}
              className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
            >
              Back
            </Link>
          </div>
          <p className="pb-8 italic">
            Your form has been submitted and is being reviewed by SHPCC, please
            wait for further instructions. Thank you!
          </p>
          <GintongButilLoanApplication
            data={data}
            formData={formData}
            setFormData={setFormData}
            isDisabled={true}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen">
        <div className="pb-4">
          <Link
            href={`/dashboard/loan/gintong-butil/history`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <GintongButilLoanApplication
          data={data}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </Layout>
  );
}

export default GintongButilHistoryView;
