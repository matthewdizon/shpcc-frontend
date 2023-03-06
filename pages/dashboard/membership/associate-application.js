import Layout from "../../../components/dashboard/Layout";
import PersonalInformation from "../../../components/associate-application/PersonalInformation";
import CompanyInformation from "../../../components/associate-application/CompanyInformation";
import AccountInformation from "../../../components/associate-application/AccountInformation";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";

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
  });

  function handleChange(subObject, field, value) {
    setFormData((prevData) => ({
      ...prevData,
      [subObject]: {
        ...prevData[subObject],
        [field]: value,
      },
    }));
  }

  function handleChangeArray(subObject, field, subfield, value, index) {
    console.log(subObject, field, value);
    setFormData((prevData) => ({
      ...prevData,
      [subObject]: {
        ...prevData[subObject],
        [field]: prevData[subObject][field].map((item, i) => {
          if (i !== index) {
            return item;
          }
          return {
            ...item,
            [subfield]: value,
          };
        }),
      },
    }));
  }

  const handleAddItem = (subObject, field, newRow) => {
    setFormData((prevData) => ({
      ...prevData,
      [subObject]: {
        ...prevData[subObject],
        [field]: [...prevData[subObject][field], newRow],
      },
    }));
  };

  const handleRemoveItem = (subObject, field, indexToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      [subObject]: {
        ...prevData[subObject],
        [field]: prevData[subObject][field].filter(
          (_, index) => index !== indexToRemove
        ),
      },
    }));
  };

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
      ...formData.accountInformation,
      user: user.email,
      isDraft: true,
    };

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_SERVER
      }/api/memberApplications/associate/${data ? user.email : ""}`,
      {
        method: data ? "PATCH" : "POST",
        body: JSON.stringify(applicationDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(res);
  };

  //   console.log(formData.personalInformation);
  //   console.log(formData.companyInformation);
  console.log(formData.accountInformation);
  console.log("data", data);

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
              onChange={(field, value) =>
                handleChange("personalInformation", field, value)
              }
            />
            <hr className="mt-4" />
            <CompanyInformation
              companyInfo={formData.companyInformation}
              onChange={(field, value) =>
                handleChange("companyInformation", field, value)
              }
            />
            <hr className="mt-4" />
            <AccountInformation
              accountInfo={formData.accountInformation}
              onChange={(field, value) =>
                handleChange("accountInformation", field, value)
              }
              onChangeArray={(field, subfield, value, index) =>
                handleChangeArray(
                  "accountInformation",
                  field,
                  subfield,
                  value,
                  index
                )
              }
              addRow={(field, newRow) =>
                handleAddItem("accountInformation", field, newRow)
              }
              removeRow={(field, index) =>
                handleRemoveItem("accountInformation", field, index)
              }
            />
            <div className="flex justify-between">
              <Link
                href={`/dashboard/membership`}
                className="bg-gray-200 text-black p-2 rounded-lg my-4 px-8 hover:opacity-40"
              >
                Back
              </Link>
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
