import Layout from "../../../components/dashboard/Layout";
import PersonalInformation from "../../../components/associate-application/PersonalInformation";
import CompanyInformation from "../../../components/associate-application/CompanyInformation";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";

function AssociateApplication() {
  const { user } = useContext(UserContext);

  // grab initial form data if there's a draft
  const [data, setData] = useState(null);
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
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [user]);

  console.log("data", data);

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
  });

  function handlePersonalInfoChange(field, value) {
    setFormData((prevData) => ({
      ...prevData,
      personalInformation: {
        ...prevData.personalInformation,
        [field]: value,
      },
    }));
  }

  function handleCompanyInfoChange(field, value) {
    setFormData((prevData) => ({
      ...prevData,
      companyInformation: {
        ...prevData.companyInformation,
        [field]: value,
      },
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.personalInformation,
      ...formData.companyInformation,
      user: user.email,
      isDraft: true,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate`,
      {
        method: "POST",
        body: JSON.stringify(applicationDetails),
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
      <div className="p-24 min-h-screen">
        <div className="bg-white p-8 rounded-3xl">
          <h1 className="font-black text-3xl">
            Associate Membership Application
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <PersonalInformation
              personalInfo={formData.personalInformation}
              onChange={handlePersonalInfoChange}
            />
            <hr className="mt-4" />
            <CompanyInformation
              companyInfo={formData.companyInformation}
              onChange={handleCompanyInfoChange}
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-black p-2 rounded-lg my-4 px-8 hover:opacity-40"
                //   onClick={handleSaveDraft}
              >
                Cancel
              </button>
              <div className="flex gap-4">
                <button
                  className="bg-shpccRed opacity-80 text-white p-2 rounded-lg my-4 px-8 hover:opacity-40"
                  onClick={handleSaveDraft}
                >
                  Save Draft
                </button>
                <button
                  className="bg-shpccRed text-white p-2 rounded-lg my-4 px-8 hover:opacity-40"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AssociateApplication;
