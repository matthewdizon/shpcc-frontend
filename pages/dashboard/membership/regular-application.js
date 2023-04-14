import Layout from "../../../components/dashboard/Layout";
import RegularMemberApplication from "../../../components/forms/RegularMemberApplication";
import Loading from "../../../components/dashboard/Loading";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";

function RegularMemberApplicationPage() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // grab initial form data if there's a draft
  useEffect(() => {
    async function fetchData() {
      if (user) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/regular/` +
            user.email,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          setLoading(false);
          const data = await res.json();
          setData(data);
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
          });
        } catch (error) {
          setLoading(false);
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
      nickname: "",
      gender: "",
      civilStatus: "",
      associateAccountNumber: "",

      // ---current residence
      houseNumber: "",
      street: "",
      barangay: "",
      city: "",
      zipCode: "",

      // ---province?
      // houseNumber*
      // street*
      // barangay
      // city
      // zipCode*

      dateOfBirth: "",
      placeOfBirth: "",
      religion: "",
      educationalAttainment: "",
      undergraduateDegree: "",
      yearGraduated: "",
      schoolName: "",
      schoolAddress: "",
      contactNumber: "",
      emailAddress: "",
      facebookName: "",

      // ---type of residence
      residenceType: "homeAndLandOwner",
      yearsInResidence: "",
      residenceOwnerName: "",
      residenceAddress: "",
    },
    spouseInformation: {
      spouseLastName: "",
      spouseFirstName: "",
      spouseMiddleName: "",
      spouseSuffix: "",
      spouseContactNumber: "",
      spouseTin: "",
      spousePensioner: "",
      spouseSss: "",
      spouseGsis: "",
      spouseEmploymentType: "employedAndOrBusinessOwner",
      spouseIsEmployee: false,
      spouseIsBusinessOwner: false,
      spouseCompanyName: "",
      spouseCompanyAddress: "",
      spouseCompanyContactNumber: "",
      spouseBusinessType: "",
      spouseBusinessName: "",
      spouseBusinessLocation: "",
      spouseOfwCompanyName: "",
      spouseOfwCompanyAddress: "",
    },
    beneficiariesDependents: {
      children: [
        { childFullName: "", childDateOfBirth: "", childContactNumber: "" },
      ],
      otherRelatives: [
        {
          relativeFullName: "",
          relativeRelationship: "",
          relativeContactNumber: "",
        },
      ],
    },
    employmentDetails: {
      pensioner: "",
      sss: "",
      gsis: "",
      employmentType: "employedAndOrBusinessOwner",
      isEmployee: false,
      companyName: "",
      companyAddress: "",
      companyContactNumber: "",
      isBusinessOwner: false,
      businessType: "",
      businessName: "",
      businessLocation: "",
      ofwCompanyName: "",
      ofwCompanyAddress: "",
    },
    incomeInformation: {
      monthlySalary: "",
      businessIncome: "",
      otherIncomeSource: "",
      spouseMonthlySalary: "",
      spouseBusinessIncome: "",
      spouseOtherIncomeSource: "",
    },
  });

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
          <RegularMemberApplication
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
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
        <div className="flex justify-between pb-4">
          <Link
            href={`/dashboard/membership`}
            className="bg-gray-200 text-black p-2 rounded-lg px-4 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
        </div>
        <RegularMemberApplication
          data={data}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </Layout>
  );
}

export default RegularMemberApplicationPage;
