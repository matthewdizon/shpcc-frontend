import Layout from "../../../../../components/dashboard/Layout";
import GintongButilLoanApplication from "../../../../../components/forms/GintongButilLoanApplication";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../../../../context/userContext";
import { handleChange } from "../../../../../utils/helpers";

function GintongButilApplicationView() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

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
            adminInformation: {
              loanNumber: data?.loanNumber || "",
              voucherNumber: data?.voucherNumber || "",
              bankAndCheckNumber: data?.bankAndCheckNumber || "",
              approvedDate: data?.approvedDate || "",
              approvedAmount: data?.approvedAmount || "",
              approvedBy: data?.approvedBy || "",
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [slug]);

  const handleApprove = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
      approvedBy: user.email,
      status: "Approved",
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/gbl/${data.user}`,
      {
        method: "PATCH",
        body: JSON.stringify(adminDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(res);
  };

  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl mb-8 flex justify-between items-center">
          Viewing Application:{" "}
          {`${slug?.substring(0, 4)}...${slug?.substring(slug?.length - 4)}`}{" "}
          <span
            className={`${
              data?.status === "Approved"
                ? "bg-green-600"
                : data?.status === "Pending"
                ? "bg-shpccYellow text-black"
                : "bg-red-600"
            } p-2 rounded-md max-w-max text-white text-sm uppercase`}
          >
            {data?.status}
          </span>
        </p>
        <div className="grid grid-cols-[2fr_1fr] gap-8 relative">
          <GintongButilLoanApplication formData={formData} isDisabled={true} />
          <div className="grid gap-8 sticky top-12 h-max">
            {data?.dateSubmitted && (
              <p className="text-sm font-light">
                Application Submission Date:{" "}
                {Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }).format(new Date(data?.dateSubmitted))}
              </p>
            )}
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
              <p className="font-bold text-2xl flex items-center gap-2">
                Loan Approval{" "}
                {formData?.adminInformation?.approvedBy && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </p>
              <form className="grid gap-4 py-4">
                <div className="grid grid-cols-2 items-center">
                  <label>Loan No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.approvedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.approvedBy}
                    value={formData?.adminInformation.loanNumber}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "loanNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Paid under Voucher No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.approvedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.approvedBy}
                    value={formData?.adminInformation.voucherNumber}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "voucherNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Bank and Check No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.approvedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.approvedBy}
                    value={formData?.adminInformation.bankAndCheckNumber}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "bankAndCheckNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Approved Date</label>
                  <input
                    type="date"
                    className={`${
                      formData?.adminInformation.approvedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.approvedBy}
                    value={formData?.adminInformation.approvedDate}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "approvedDate",
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Approved Amount</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.approvedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.approvedBy}
                    value={formData?.adminInformation.approvedAmount}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "approvedAmount",
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                </div>
                {formData?.adminInformation?.approvedBy ? (
                  <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                    <label>Approved By:</label>
                    <p>{formData?.adminInformation.approvedBy}</p>
                  </div>
                ) : (
                  <div className="flex justify-end gap-4">
                    <Link
                      href={`/dashboard/admin/loan/gintong-butil`}
                      className="bg-gray-200 text-black p-2 px-6 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="bg-shpccRed text-white p-2 px-6 rounded-lg hover:bg-shpccDarkRed active:bg-red-800"
                      onClick={(e) => handleApprove(e)}
                    >
                      Approve
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GintongButilApplicationView;
