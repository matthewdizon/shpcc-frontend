import Layout from "../../../components/dashboard/Layout";
import PersonalInformation from "../../../components/associate-application/PersonalInformation";
import CompanyInformation from "../../../components/associate-application/CompanyInformation";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

function AssociateApplication() {
  const { user } = useContext(UserContext);

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
