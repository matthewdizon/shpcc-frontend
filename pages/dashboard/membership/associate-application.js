import Layout from "../../../components/dashboard/Layout";
import AssociateApplication from "../../../components/forms/AssociateApplication";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";

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

  if (data && !data?.isDraft) {
    return (
      <Layout>
        <div className="p-24">
          <p className="pb-8 italic">
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
      <div className="p-24 min-h-screen">
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
