import Layout from "../../../components/dashboard/Layout";
import AssociateApplication from "../../../components/forms/AssociateApplication";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";

function AssociateApplicationPage() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState({});

  // grab initial form data if there's a draft
  useEffect(() => {
    async function fetchData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/` +
            user.email,
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
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [user]);

  const [formData, setFormData] = useState({
    personalInformation: {
      lastName: "",
      firstName: "",
      middleName: "",
      suffix: "",
      maidenName: "",
      address: "",
      dateOfBirth: "",
      age: "",
      placeOfBirth: "",
      gender: "",
      civilStatus: "",
      contactNumber: "",
      facebookName: "",
      viberMessenger: "",
      religion: "",
      educationalAttainment: "",
      inTrustFor: "",
    },
    companyInformation: {
      business: "",
      companyName: "",
      companyAddress: "",
      companyIdNumber: "",
      companyIdValidUntil: "",
    },
    accountInformation: {
      accountType: "",
      monthlyIncome: "",
      sssGsisNumber: "",
      tinNumber: "",
      barangay: "",
      voterId: "",
      idType: "",
      idNumber: "",
      idValidUntil: "",
      otherSourcesOfIncome: [
        {
          source: "",
          amountPerMonth: "",
        },
      ],
    },
    beneficiariesDependents: {
      beneficiaries: [
        {
          fullName: "",
          address: "",
          relationship: "",
          age: "",
          dateOfBirth: "",
        },
      ],
      shpccFamilyMembers: [
        {
          name: "",
        },
      ],
    },
  });

  const TrackingStatus = () => {
    return (
      <div className="bg-white p-8 rounded-3xl">
        <div className="py-16">
          <h2 className="sr-only">Steps</h2>

          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-300">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="grid justify-center items-center gap-2 bg-white p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 rounded-full text-center text-[10px] font-bold leading-6 ${
                    true
                      ? "bg-shpccRed text-white"
                      : "bg-gray-500 text-gray-500"
                  } mx-auto`}
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

                <span className="hidden sm:block"> For Review </span>
              </li>

              <li className="grid justify-center items-center gap-2 bg-white p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 rounded-full text-center text-[10px] font-bold leading-6 ${
                    true
                      ? "bg-shpccRed text-white"
                      : "bg-gray-500 text-gray-500"
                  } mx-auto`}
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

                <span className="hidden sm:block"> Currently Reviewing </span>
              </li>

              <li className="grid justify-center items-center gap-2 bg-white p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 rounded-full text-center text-[10px] font-bold leading-6 ${
                    data?.approvedBy !== ""
                      ? "bg-shpccRed text-white"
                      : "bg-gray-500 text-gray-500"
                  } mx-auto`}
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

                <span className="hidden sm:block">
                  {" "}
                  {data?.status === "Approved"
                    ? "Approved"
                    : data?.status === "Rejected"
                    ? "Rejected"
                    : "Decision"}{" "}
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 p-8 border-[1px] rounded-2xl">
          <p>
            <span className="font-bold">Application Number: </span>XXXX
          </p>
          <p>
            <span className="font-bold">Application Number: </span>XXXX
          </p>
          <p>
            <span className="font-bold">Application Number: </span>XXXX
          </p>
          <p>
            <span className="font-bold">Application Number: </span>XXXX
          </p>
        </div>
      </div>
    );
  };

  if (data && !data?.isDraft) {
    return (
      <Layout>
        <div className="p-4 sm:p-6 md:p-12 lg:p-16">
          {/* <TrackingStatus /> */}
          <div className="flex justify-between">
            <Link
              href={`/dashboard/membership`}
              className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
            >
              Back
            </Link>
          </div>
          <p className="pt-4 pb-8 italic">
            Your form has been submitted and is being reviewed by SHPCC, please
            wait for further instructions. Thank you!
          </p>
          <AssociateApplication
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
        <div className="flex justify-between pb-4">
          <Link
            href={`/dashboard/membership`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <AssociateApplication
          data={data}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </Layout>
  );
}

export default AssociateApplicationPage;
