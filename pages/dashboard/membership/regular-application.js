import Layout from "../../../components/dashboard/Layout";
import RegularMemberApplication from "../../../components/forms/RegularMemberApplication";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";

function RegularMemberApplicationPage() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState(null);

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
      // ---spouse's information
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
  });

  return (
    <Layout>
      <div className="p-24">
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
