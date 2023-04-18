import Layout from "../../../../../components/dashboard/Layout";
import Loading from "../../../../../components/dashboard/Loading";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import AssociateApplication from "../../../../../components/forms/AssociateApplication";
import Link from "next/link";
import { handleChange } from "../../../../../utils/helpers";
import { UserContext } from "../../../../../context/userContext";

function AssociateApplicationView() {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
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
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/` +
            slug,
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
            personalInformation: {
              lastName: data?.lastName || "",
              firstName: data?.firstName || "",
              middleName: data?.middleName || "",
              suffix: data?.suffix || "",
              maidenName: data?.maidenName || "",
              address: data?.address || "",
              dateOfBirth: data?.dateOfBirth || "",
              age: data?.age || "",
              placeOfBirth: data?.placeOfBirth || "",
              gender: data?.gender || "",
              civilStatus: data?.civilStatus || "",
              contactNumber: data?.contactNumber || "",
              facebookName: data?.facebookName || "",
              viberMessenger: data?.viberMessenger || "",
              religion: data?.religion || "",
              educationalAttainment: data?.educationalAttainment || "",
              inTrustFor: data?.inTrustFor || "",
            },
            companyInformation: {
              business: data?.business || "",
              companyName: data?.companyName || "",
              companyAddress: data?.companyAddress || "",
              companyIdNumber: data?.companyIdNumber || "",
              companyIdValidUntil: data?.companyIdValidUntil || "",
            },
            accountInformation: {
              accountType: data?.accountType || "",
              monthlyIncome: data?.monthlyIncome || "",
              sssGsisNumber: data?.sssGsisNumber || "",
              tinNumber: data?.tinNumber || "",
              barangay: data?.barangay || "",
              voterId: data?.voterId || "",
              idType: data?.idType || "",
              idNumber: data?.idNumber || "",
              idValidUntil: data?.idValidUntil || "",
              otherSourcesOfIncome: data?.otherSourcesOfIncome || [
                {
                  source: "",
                  amountPerMonth: "",
                },
              ],
            },
            beneficiariesDependents: {
              beneficiaries: data?.beneficiaries || [
                {
                  fullName: "",
                  address: "",
                  relationship: "",
                  age: "",
                  dateOfBirth: "",
                },
              ],
              shpccFamilyMembers: data?.shpccFamilyMembers || [
                {
                  name: "",
                },
              ],
            },
            adminInformation: {
              accountNumber: data?.accountNumber || "",
              codeNumber: data?.codeNumber || "",
              orNumber: data?.orNumber || "",
              initialDeposit: data?.initialDeposit || "",
              authenticatedBy: data?.authenticatedBy || "",
              brNumber: data?.brNumber || "",
              approvedBy: data?.approvedBy || "",
              approvedDate: data?.approvedDate || "",
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

  const handleAuthenticate = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
      authenticatedBy: user.email,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/${data.user}`,
      {
        method: "PATCH",
        body: JSON.stringify(adminDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (res.ok) {
      window.location.reload();
    }
  };

  const handleDecision = async (e, decision) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
      approvedBy: user.email,
      status: decision,
      approvedDate: new Date(),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/${data.user}`,
      {
        method: "PATCH",
        body: JSON.stringify(adminDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (res.ok) {
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
        <div className="pb-4">
          <Link
            href={`/dashboard/admin/membership/associate`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <p className="font-black text-md sm:text-xl lg:text-3xl bg-white p-8 rounded-3xl mb-8 flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-4">
          Viewing Application: {slug}{" "}
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
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 relative">
          <AssociateApplication formData={formData} isDisabled={true} />
          <div className="grid gap-8 lg:sticky lg:top-12 h-max">
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
                Form Authentication{" "}
                {formData?.adminInformation.authenticatedBy && (
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
                  <label>Account No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.authenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.authenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "accountNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={formData?.adminInformation.accountNumber}
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Code No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.authenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.authenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "codeNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={formData?.adminInformation.codeNumber}
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>O.R. No.</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.authenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.authenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "orNumber",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={formData?.adminInformation.orNumber}
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Initial Deposit</label>
                  <input
                    type="text"
                    className={`${
                      formData?.adminInformation.authenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={formData?.adminInformation.authenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "initialDeposit",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={formData?.adminInformation.initialDeposit}
                  />
                </div>
                {formData?.adminInformation.authenticatedBy ? (
                  <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                    <label>Authenticated By:</label>
                    <p>{formData?.adminInformation.authenticatedBy}</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="bg-shpccYellow text-black p-2 rounded-lg hover:bg-yellow-400 active:bg-yellow-500 w-full"
                    onClick={(e) => handleAuthenticate(e)}
                  >
                    Authenticate
                  </button>
                )}
              </form>
            </div>
            {formData?.adminInformation.authenticatedBy ? (
              <form className="bg-white rounded-xl p-4 shadow-lg">
                <p className="font-bold text-2xl flex items-center gap-2">
                  Form Decision{" "}
                  {formData?.adminInformation.approvedBy && (
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
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-center">
                    <label>B.R. No.</label>
                    <input
                      type="text"
                      className={`${
                        formData?.adminInformation.approvedBy
                          ? "bg-gray-200"
                          : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={formData?.adminInformation.approvedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "brNumber",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.brNumber}
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
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "approvedDate",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.approvedDate}
                    />
                  </div>
                </div>
                {formData?.adminInformation.approvedBy ? (
                  <>
                    <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                      <label>Approved By:</label>
                      <p>{formData?.adminInformation.approvedBy}</p>
                    </div>
                    <div
                      className={`grid grid-cols-2 text-sm items-center ${
                        data?.status === "Approved"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      <label>Decision:</label>
                      <p>{data?.status}</p>
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    <Link
                      href={`/dashboard/admin/membership`}
                      className="bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="bg-shpccRed text-white p-2 rounded-lg hover:bg-shpccDarkRed active:bg-red-800"
                      onClick={(e) => handleDecision(e, "Rejected")}
                    >
                      Reject
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 active:bg-green-700"
                      onClick={(e) => handleDecision(e, "Approved")}
                    >
                      Approve
                    </button>
                  </div>
                )}
              </form>
            ) : (
              <div>
                Before finalizing the form decision, a Member Care Assistant
                needs to authenticate the details
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AssociateApplicationView;
