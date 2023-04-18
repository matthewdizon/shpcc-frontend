import Layout from "../../../../../components/dashboard/Layout";
import Loading from "../../../../../components/dashboard/Loading";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import RegularApplication from "../../../../../components/forms/RegularMemberApplication";
import Link from "next/link";
import { handleChange } from "../../../../../utils/helpers";
import { UserContext } from "../../../../../context/userContext";

function RegularApplicationView() {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  // grab initial form data if there's a draft
  useEffect(() => {
    async function fetchData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/` +
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
              nickname: data?.nickname || "",
              gender: data?.gender || "",
              civilStatus: data?.civilStatus || "",
              associateAccountNumber: data?.associateAccountNumber || "",
              // ---current residence
              houseNumber: data?.houseNumber || "",
              street: data?.street || "",
              barangay: data?.barangay || "",
              city: data?.city || "",
              zipCode: data?.zipCode || "",
              // ---province?
              // houseNumber*
              // street*
              // barangay
              // city
              // zipCode*
              dateOfBirth: data?.dateOfBirth || "",
              placeOfBirth: data?.placeOfBirth || "",
              religion: data?.religion || "",
              educationalAttainment: data?.educationalAttainment || "",
              undergraduateDegree: data?.undergraduateDegree || "",
              yearGraduated: data?.yearGraduated || "",
              schoolName: data?.schoolName || "",
              schoolAddress: data?.schoolAddress || "",
              contactNumber: data?.contactNumber || "",
              emailAddress: data?.emailAddress || "",
              facebookName: data?.facebookName || "",
              // ---type of residence
              residenceType: data?.residenceType || "homeAndLandOwner",
              yearsInResidence: data?.yearsInResidence || "",
              residenceOwnerName: data?.residenceOwnerName || "",
              residenceAddress: data?.residenceAddress || "",
            },
            spouseInformation: {
              // ---spouse's information
              spouseLastName: data?.spouseLastName || "",
              spouseFirstName: data?.spouseFirstName || "",
              spouseMiddleName: data?.spouseMiddleName || "",
              spouseSuffix: data?.spouseSuffix || "",
              spouseContactNumber: data?.spouseContactNumber || "",
              spouseTin: data?.spouseTin || "",
              spousePensioner: data?.spousePensioner || "",
              spouseSss: data?.spouseSss || "",
              spouseGsis: data?.spouseGsis || "",
              spouseEmploymentType:
                data?.spouseEmploymentType || "employedAndOrBusinessOwner",
              spouseIsEmployee: data?.spouseIsEmployee || false,
              spouseIsBusinessOwner: data?.spouseIsBusinessOwner || false,
              spouseCompanyName: data?.spouseCompanyName || "",
              spouseCompanyAddress: data?.spouseCompanyAddress || "",
              spouseCompanyContactNumber:
                data?.spouseCompanyContactNumber || "",
              spouseBusinessType: data?.spouseBusinessType || "",
              spouseBusinessName: data?.spouseBusinessName || "",
              spouseBusinessLocation: data?.spouseBusinessLocation || "",
              spouseOfwCompanyName: data?.spouseOfwCompanyName || "",
              spouseOfwCompanyAddress: data?.spouseOfwCompanyAddress || "",
            },
            beneficiariesDependents: {
              children: data?.children || [
                {
                  childFullName: data?.childFullName || "",
                  childDateOfBirth: data?.childDateOfBirth || "",
                  childContactNumber: data?.childContactNumber || "",
                },
              ],
              otherRelatives: data?.otherRelatives || [
                {
                  relativeFullName: data?.relativeFullName || "",
                  relativeRelationship: data?.relativeRelationship || "",
                  relativeContactNumber: data?.relativeContactNumber || "",
                },
              ],
            },
            employmentDetails: {
              pensioner: data?.pensioner || "",
              sss: data?.sss || "",
              gsis: data?.gsis || "",
              employmentType:
                data?.employmentType || "employedAndOrBusinessOwner",
              isEmployee: data?.isEmployee || false,
              companyName: data?.companyName || "",
              companyAddress: data?.companyAddress || "",
              companyContactNumber: data?.companyContactNumber || "",
              isBusinessOwner: data?.isBusinessOwner || false,
              businessType: data?.businessType || "",
              businessName: data?.businessName || "",
              businessLocation: data?.businessLocation || "",
              ofwCompanyName: data?.ofwCompanyName || "",
              ofwCompanyAddress: data?.ofwCompanyAddress || "",
            },
            incomeInformation: {
              monthlySalary:
                data?.monthlySalary === 0 ? 0 : data?.monthlySalary,
              businessIncome:
                data?.businessIncome === 0 ? 0 : data?.businessIncome,
              otherIncomeSource:
                data?.otherIncomeSource === 0 ? 0 : data?.otherIncomeSource,
              spouseMonthlySalary:
                data?.spouseMonthlySalary === 0 ? 0 : data?.spouseMonthlySalary,
              spouseBusinessIncome:
                data?.spouseBusinessIncome === 0
                  ? 0
                  : data?.spouseBusinessIncome,
              spouseOtherIncomeSource:
                data?.spouseOtherIncomeSource === 0
                  ? 0
                  : data?.spouseOtherIncomeSource,
            },
            // TODO: this still has to be edited, it was just copied from the Associate Application
            adminInformation: {
              pmesAttendanceAuthenticatedBy:
                data?.pmesAttendanceAuthenticatedBy || "",
              pmesAttendanceAuthenticatedDate:
                data?.pmesAttendanceAuthenticatedDate || "",
              backgroundInvestigationAuthenticatedBy:
                data?.backgroundInvestigationAuthenticatedBy || "",
              backgroundInvestigationAuthenticatedDate:
                data?.backgroundInvestigationAuthenticatedDate || "",
              commonShare: data?.commonShare || "",
              preferredShare: data?.preferredShare || "",
              savingsDeposit: data?.savingsDeposit || "",
              membershipFee: data?.membershipFee || "",
              seminarFee: data?.seminarFee || "",
              damayan: data?.damayan || "",
              gyrt: data?.gyrt || "",
              accountNumber: data?.accountNumber || "",
              orNumber: data?.orNumber || "",
              dateEncoded: data?.dateEncoded || "",
              encodedBy: data?.encodedBy || "",
              boardResolutionNumber: data?.boardResolutionNumber || "",
              boardDateEncoded: data?.boardDateEncoded || "",
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

  const handleStep1 = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
      // authenticatedBy: user.email,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/${data.user}`,
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

  const handleStep2 = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/${data.user}`,
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

  const handleStep3 = async (e, decision) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const adminDetails = {
      ...formData.adminInformation,
      approvedBy: user.email,
      status: decision,
      approvedDate: new Date(),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/${data.user}`,
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

  const total =
    parseInt(formData?.adminInformation.commonShare) +
    parseInt(formData?.adminInformation.preferredShare) +
    parseInt(formData?.adminInformation.savingsDeposit) +
    parseInt(formData?.adminInformation.membershipFee) +
    parseInt(formData?.adminInformation.seminarFee) +
    parseInt(formData?.adminInformation.damayan) +
    parseInt(formData?.adminInformation.gyrt);

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
            href={`/dashboard/admin/membership/regular`}
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
          <RegularApplication formData={formData} isDisabled={true} />
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
                1. Initial Checks{" "}
                {data?.pmesAttendanceAuthenticatedBy && (
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
                <p className="font-bold text-lg flex items-center gap-2">
                  PMES Attendance
                </p>
                <div className="grid grid-cols-2 items-center">
                  <label>Authenticated By</label>
                  <input
                    type="text"
                    className={`${
                      data?.pmesAttendanceAuthenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={data?.pmesAttendanceAuthenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "pmesAttendanceAuthenticatedBy",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={
                      formData?.adminInformation.pmesAttendanceAuthenticatedBy
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Date</label>
                  <input
                    type="date"
                    className={`${
                      data?.pmesAttendanceAuthenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={data?.pmesAttendanceAuthenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "pmesAttendanceAuthenticatedDate",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={
                      formData?.adminInformation.pmesAttendanceAuthenticatedDate
                    }
                  />
                </div>
                <p className="font-bold text-lg flex items-center gap-2">
                  Bakcground/Social Investigation
                </p>
                <div className="grid grid-cols-2 items-center">
                  <label>Authenticated By</label>
                  <input
                    type="text"
                    className={`${
                      data?.pmesAttendanceAuthenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={data?.pmesAttendanceAuthenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "backgroundInvestigationAuthenticatedBy",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={
                      formData?.adminInformation
                        .backgroundInvestigationAuthenticatedBy
                    }
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label>Date</label>
                  <input
                    type="date"
                    className={`${
                      data?.pmesAttendanceAuthenticatedBy
                        ? "bg-gray-200"
                        : "bg-white"
                    } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                    disabled={data?.pmesAttendanceAuthenticatedBy}
                    onChange={(e) =>
                      handleChange(
                        "adminInformation",
                        "backgroundInvestigationAuthenticatedDate",
                        e.target.value,
                        setFormData
                      )
                    }
                    value={
                      formData?.adminInformation
                        .backgroundInvestigationAuthenticatedDate
                    }
                  />
                </div>
                {data?.pmesAttendanceAuthenticatedBy ? (
                  <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                    <label>Authenticated By:</label>
                    <p>{data?.pmesAttendanceAuthenticatedBy}</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="bg-shpccRed text-white p-2 rounded-lg hover:bg-shpccDarkRed active:bg-red-900 w-full"
                    onClick={(e) => handleStep1(e)}
                  >
                    Confirm
                  </button>
                )}
              </form>
            </div>
            {data?.pmesAttendanceAuthenticatedBy ? (
              <form className="bg-white rounded-xl p-4 shadow-lg">
                <p className="font-bold text-2xl flex items-center gap-2">
                  2. Account Information
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
                    <label>Common Share</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "commonShare",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.commonShare}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Preferred Share</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "preferredShare",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.preferredShare}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Savings Deposit</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "savingsDeposit",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.savingsDeposit}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Membership Fee</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "membershipFee",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.membershipFee}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Seminar Fee</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "seminarFee",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.seminarFee}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Damayan</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "damayan",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.damayan}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>GYRT</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="PHP 0.00"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "gyrt",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.gyrt}
                    />
                  </div>
                  <p
                    className={`text-center text-lg font-bold italic ${
                      isNaN(total) ? "text-shpccRed" : ""
                    }`}
                  >
                    Total:{" "}
                    {isNaN(total)
                      ? "Invalid Amount"
                      : `PHP ${total.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}`}
                  </p>
                  <div className="grid grid-cols-2 items-center">
                    <label>Account Number</label>
                    <input
                      type="text"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
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
                    <label>OR Number</label>
                    <input
                      type="text"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
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
                    <label>Date Encoded</label>
                    <input
                      type="date"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "dateEncoded",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.dateEncoded}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Encoded By</label>
                    <input
                      type="text"
                      className={`${
                        data?.encodedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.encodedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "encodedBy",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.encodedBy}
                    />
                  </div>
                </div>
                {data?.encodedBy ? (
                  <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                    <label>Encoded By:</label>
                    <p>{data?.encodedBy}</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="bg-shpccRed text-white p-2 rounded-lg hover:bg-shpccDarkRed active:bg-red-900 w-full"
                    onClick={(e) => handleStep2(e)}
                  >
                    Confirm
                  </button>
                )}
              </form>
            ) : (
              <div>
                Before moving on to Step 2, a Member Care Assistant needs to
                confirm the initial checks
              </div>
            )}
            {data?.encodedBy ? (
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4">
                <p className="font-bold text-2xl flex items-center gap-2">
                  3. Form Decision{" "}
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
                    <label>Board Resolution No.</label>
                    <input
                      type="text"
                      className={`${
                        data?.approvedBy ? "bg-gray-200" : "bg-white"
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      disabled={data?.approvedBy}
                      onChange={(e) =>
                        handleChange(
                          "adminInformation",
                          "boardResolutionNumber",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.boardResolutionNumber}
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <label>Date Encoded</label>
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
                          "dateEncoded",
                          e.target.value,
                          setFormData
                        )
                      }
                      value={formData?.adminInformation.dateEncoded}
                    />
                  </div>
                  {data?.approvedBy ? (
                    <>
                      <div className="grid grid-cols-2 text-sm text-green-600 items-center">
                        <label>Authenticated By:</label>
                        <p>{data?.approvedBy}</p>
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
                        onClick={(e) => handleStep3(e, "Rejected")}
                      >
                        Reject
                      </button>
                      <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 active:bg-green-700"
                        onClick={(e) => handleStep3(e, "Approved")}
                      >
                        Approve
                      </button>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div>
                {data?.pmesAttendanceAuthenticatedBy && (
                  <div>
                    Before moving on to Step 3, a Member Care Assistant needs to
                    confirm the account information
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RegularApplicationView;
