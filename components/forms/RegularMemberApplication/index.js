import Link from "next/link";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";

import {
  handleChange,
  handleChangeArray,
  handleAddItem,
  handleRemoveItem,
  handleBlur,
} from "../../../utils/helpers";

import TermsAndConditions from "../TermsAndConditions";
import PersonalInformation from "./PersonalInformation";
import SpouseInformation from "./SpouseInformation";
import BeneficiariesDependents from "./BeneficiariesDependents";
import EmploymentDetails from "./EmploymentDetails";

function RegularMemberApplication({ data, formData, setFormData, isDisabled }) {
  const { user } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    // Personal Info
    lastName: true,
    firstName: true,
    nickname: true,
    gender: true,
    civilStatus: true,
    associateAccountNumber: true,
    dateOfBirth: true,
    placeOfBirth: true,

    houseNumber: true,
    street: true,
    zipCode: true,

    religion: true,
    educationalAttainment: true,
    contactNumber: true,
    emailAddress: true,
    facebookName: true,

    yearsInResidence: true,
    residenceOwnerName: true,
    residenceAddress: true,

    // Spouse Info
    spouseLastName: true,
    spouseFirstName: true,
    spouseContactNumber: true,
    spouseTin: true,
    spousePensioner: true,
    spouseSss: true,
    spouseGsis: true,
    spouseEmploymentType: true,
    spouseIsEmployee: true,
    spouseIsBusinessOwner: true,
    spouseCompanyName: true,
    spouseCompanyAddress: true,
    spouseCompanyContactNumber: true,
    spouseBusinessType: true,
    spouseBusinessName: true,
    spouseBusinessLocation: true,
    spouseOfwCompanyName: true,
    spouseOfwCompanyAddress: true,

    // Employment Details
    pensioner: true,
    sss: true,
    gsis: true,
    employmentType: true,
    isCompany: true,
    companyName: true,
    companyAddress: true,
    companyContactNumber: true,
    isBusinessOwner: true,
    businessType: true,
    businessName: true,
    businessLocation: true,
    ofwCompanyName: true,
    ofwCompanyAddress: true,
  });

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.personalInformation,
      ...formData.spouseInformation,
      ...formData.beneficiariesDependents,
      ...formData.employmentDetails,
      // ...formData.beneficiariesDependents,
      user: user.email,
      isDraft: true,
    };

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_SERVER
      }/api/memberApplications/regular/${data ? user.email : ""}`,
      {
        method: data ? "PATCH" : "POST",
        body: JSON.stringify(applicationDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (res.ok) {
      window.location.reload();
    }

    console.log(res);
  };

  const requiredFields = [
    { subObjectName: "personalInformation", fieldName: "lastName" },
    { subObjectName: "personalInformation", fieldName: "firstName" },
    { subObjectName: "personalInformation", fieldName: "nickname" },
    { subObjectName: "personalInformation", fieldName: "gender" },
    { subObjectName: "personalInformation", fieldName: "civilStatus" },
    {
      subObjectName: "personalInformation",
      fieldName: "associateAccountNumber",
    },
    { subObjectName: "personalInformation", fieldName: "dateOfBirth" },
    { subObjectName: "personalInformation", fieldName: "placeOfBirth" },
    { subObjectName: "personalInformation", fieldName: "houseNumber" },
    { subObjectName: "personalInformation", fieldName: "street" },
    { subObjectName: "personalInformation", fieldName: "zipCode" },
    { subObjectName: "personalInformation", fieldName: "religion" },
    {
      subObjectName: "personalInformation",
      fieldName: "educationalAttainment",
    },
    { subObjectName: "personalInformation", fieldName: "contactNumber" },
    { subObjectName: "personalInformation", fieldName: "emailAddress" },
    { subObjectName: "personalInformation", fieldName: "facebookName" },
    { subObjectName: "personalInformation", fieldName: "yearsInResidence" },
    { subObjectName: "spouseInformation", fieldName: "spouseLastName" },
    { subObjectName: "spouseInformation", fieldName: "spouseFirstName" },
    { subObjectName: "spouseInformation", fieldName: "spouseContactNumber" },
    { subObjectName: "spouseInformation", fieldName: "spouseTin" },
    { subObjectName: "spouseInformation", fieldName: "spousePensioner" },
    { subObjectName: "spouseInformation", fieldName: "spouseSss" },
    { subObjectName: "spouseInformation", fieldName: "spouseGsis" },
    { subObjectName: "employmentDetails", fieldName: "pensioner" },
    { subObjectName: "employmentDetails", fieldName: "sss" },
    { subObjectName: "employmentDetails", fieldName: "gsis" },
  ];

  let isFormValid;

  // (add required fields only when they have been selected)
  // this makes sure that the form can still be submitted
  // even if the other radio buttons/checkboxes aren't selected
  if (
    formData.personalInformation.residenceType === "renting" ||
    formData.personalInformation.residenceType === "nakikitira"
  ) {
    requiredFields.push(
      { subObjectName: "personalInformation", fieldName: "residenceOwnerName" },
      { subObjectName: "personalInformation", fieldName: "residenceAddress" }
    );
  }

  if (
    formData.spouseInformation.spouseEmploymentType ===
    "employedAndOrBusinessOwner"
  ) {
    // checks if both checkboxes are left unchecked
    // ensures you can't click Next
    if (
      !formData.spouseInformation.spouseIsEmployee &&
      !formData.spouseInformation.spouseIsBusinessOwner
    ) {
      requiredFields.push({
        subObjectName: "spouseInformation",
        fieldName: "anomaly",
      });
    }
    // if Employee is checked, require these fields
    if (formData.spouseInformation.spouseIsEmployee) {
      requiredFields.push(
        { subObjectName: "spouseInformation", fieldName: "spouseCompanyName" },
        {
          subObjectName: "spouseInformation",
          fieldName: "spouseCompanyAddress",
        },
        {
          subObjectName: "spouseInformation",
          fieldName: "spouseCompanyContactNumber",
        }
      );
    }
    // if Own Business is checked, require these fields
    if (formData.spouseInformation.spouseIsBusinessOwner) {
      requiredFields.push(
        { subObjectName: "spouseInformation", fieldName: "spouseBusinessType" },
        { subObjectName: "spouseInformation", fieldName: "spouseBusinessName" },
        {
          subObjectName: "spouseInformation",
          fieldName: "spouseBusinessLocation",
        }
      );
    }
  } else if (formData.spouseInformation.spouseEmploymentType === "ofw") {
    // if OFW is selected, require these fields
    requiredFields.push(
      { subObjectName: "spouseInformation", fieldName: "spouseOfwCompanyName" },
      {
        subObjectName: "spouseInformation",
        fieldName: "spouseOfwCompanyAddress",
      }
    );
  }

  if (
    formData.employmentDetails.employmentType === "employedAndOrBusinessOwner"
  ) {
    // checks if both checkboxes are left unchecked
    // ensures you can't click Next
    if (
      !formData.employmentDetails.isEmployee &&
      !formData.employmentDetails.isBusinessOwner
    ) {
      requiredFields.push({
        subObjectName: "employmentDetails",
        fieldName: "anomaly",
      });
    }
    // if Employee is checked, require these fields
    if (formData.employmentDetails.isEmployee) {
      requiredFields.push(
        { subObjectName: "employmentDetails", fieldName: "companyName" },
        {
          subObjectName: "employmentDetails",
          fieldName: "companyAddress",
        },
        {
          subObjectName: "employmentDetails",
          fieldName: "companyContactNumber",
        }
      );
    }
    // if Own Business is checked, require these fields
    if (formData.employmentDetails.isBusinessOwner) {
      requiredFields.push(
        { subObjectName: "employmentDetails", fieldName: "businessType" },
        { subObjectName: "employmentDetails", fieldName: "businessName" },
        {
          subObjectName: "employmentDetails",
          fieldName: "businessLocation",
        }
      );
    }
  } else if (formData.employmentDetails.employmentType === "ofw") {
    // if OFW is selected, require these fields
    requiredFields.push(
      { subObjectName: "employmentDetails", fieldName: "ofwCompanyName" },
      {
        subObjectName: "employmentDetails",
        fieldName: "ofwCompanyAddress",
      }
    );
  }

  if (!isDisabled) {
    isFormValid = requiredFields.every(
      ({ subObjectName, subObjectFn, fieldName }) => {
        let subObject;
        if (subObjectName) {
          subObject = eval(`formData.${subObjectName}`);
        } else if (subObjectFn) {
          subObject = subObjectFn();
        }

        if (Array.isArray(subObject)) {
          return subObject.every((item) => Boolean(item[fieldName]));
        }
        const fieldValue = subObject[fieldName];
        return Boolean(fieldValue);
      }
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl">
      <h1 className="font-black text-3xl">Regular Membership Application</h1>
      {isDisabled && <span className="font-thin italic">View Only</span>}
      <form>
        <PersonalInformation
          info={formData?.personalInformation}
          onChange={(field, value) =>
            handleChange("personalInformation", field, value, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <hr className="mt-4" />
        <SpouseInformation
          info={formData?.spouseInformation}
          onChange={(field, value) =>
            handleChange("spouseInformation", field, value, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <hr className="mt-4" />
        <BeneficiariesDependents
          info={formData?.beneficiariesDependents}
          onChange={(field, value) =>
            handleChange("beneficiariesDependents", field, value, setFormData)
          }
          onChangeArray={(field, subfield, value, index) =>
            handleChangeArray(
              "beneficiariesDependents",
              field,
              subfield,
              value,
              index,
              setFormData
            )
          }
          addRow={(field, newRow) =>
            handleAddItem("beneficiariesDependents", field, newRow, setFormData)
          }
          removeRow={(field, index) =>
            handleRemoveItem(
              "beneficiariesDependents",
              field,
              index,
              setFormData
            )
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <hr className="mt-4" />
        <EmploymentDetails
          info={formData?.employmentDetails}
          onChange={(field, value) =>
            handleChange("employmentDetails", field, value, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
      </form>
      {!isDisabled && (
        <div className="flex flex-wrap justify-between">
          <Link
            href={`/dashboard/membership`}
            className="bg-gray-200 text-black p-2 rounded-lg my-4 px-8 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
          >
            Back
          </Link>
          <div className="flex gap-4">
            <button
              className="bg-white text-shpccRed border-shpccRed border-2 p-2 rounded-lg my-4 px-8 hover:opacity-40"
              onClick={handleSaveDraft}
            >
              Save Draft
            </button>
            <button
              className={`bg-shpccRed text-white p-2 rounded-lg my-4 px-8 ${
                isFormValid
                  ? "hover:bg-shpccDarkRed active:bg-red-800"
                  : "hover:cursor-not-allowed opacity-50"
              }`}
              onClick={() => setShowModal(true)}
              disabled={isFormValid ? false : true}
              type="submit"
            >
              Next
            </button>
          </div>
          {showModal && (
            <TermsAndConditions
              setShowModal={setShowModal}
              handleSubmit={handleSubmit}
            >
              <div className="mt-6 text-gray-500 grid gap-2 text-left">
                <p>
                  Ako ay sumasang-ayon na maging Kasaping Depositor ng SACRED
                  HEART PARISH CREDIT COOPERATIVE dito ay tinutukoy na SHPCC.
                  Ako ay nabigyan ng kaalaman tungkol sa SHPCC at dahil dito,
                  naunawaan ko ang layunin at hangarin ng ating samahan.
                </p>
                <p>
                  Bilang kasaping depositor ng SHPCC, ako ay
                  nangangakongsasailalim sa mga sumusunod:
                </p>
                <ol className="list-decimal ml-8 grid gap-2">
                  <li>
                    Susunod ng buong katapatan sa lahat ng mga regulasyong
                    nakasaad sa Artikulo ng Kooperasyon, Saligang Batas ng
                    SHPCC, at mga Resolusyong ipinasa ng Lupon ng Patnugutan at
                    maaaring dadalo sa Pangkalahatang Kapulungan sa itinakdang
                    Sabado ng Marso bawat taon.
                  </li>
                  <li>
                    Magbabayad ng bayad sa pagsapi (membership fee) na
                    nagkakahalaga ng Limampung Piso (Php50.00).
                  </li>
                  <li>
                    Sa unang taon kinakailangan kong bayaran ng dalawang daan at
                    limampung piso (Php 250.00) bilang preferred share at ito ay
                    bibigyan ng interes batay sa ihahayag na interes ng Lupon ng
                    Patnugutan. Ang preferred share na ito ay mananatili habang
                    ako ay depositor ng kooperatiba.
                  </li>
                  <li>
                    Pagbayad ng ikalawang preferred share sa halagang dalawang
                    daan at limampung piso (P250.00) sa ikalawang taon ng
                    pagsapi at maaaring magiging regular na kasapi pagkatapos ng
                    dalawang taon.
                  </li>
                  <li>
                    Lalahok sa pagpapalago ng kapital ng SHPCC sa pamamagitan ng
                    pagdagdag ng deposito.
                  </li>
                  <li>
                    Walang pasubali at di-mababawi na pangangalagaan ko ang
                    lahat ng mga lihim at “confidential” na impormasyon ng SHPCC
                    bilang pagsunod sa mga probisyon ng “Philippine Bank Secrecy
                    Laws” na nakasaad sa Batas Pambansa Blg. 1405, 6426 at 8791;
                  </li>
                  <li>
                    Hihikayatin ang aking kapamilya o kaibigan na sumapi sa
                    SHPCC;
                  </li>
                  <li>
                    Susunod sa lahat ng mga kondisyong nakasaad sa kasunduan
                    para sa pagsapi at pag-ambag ng deposito;
                  </li>
                  <li>
                    Sakaling ako ay lumabag sa anumang batas na itinakda ng
                    SHPCC, tatanggapin ko ang kaparusahan na maaaring ipataw sa
                    akin tulad ng multa, suspensyon o pagpapatalsik bilang
                    kasapi.{" "}
                  </li>
                </ol>
                <p>
                  Ang mga probisyong nakasaad sa Kasunduang ito, ang Artikulo
                  para sa Kooperasyon at Saligang Batas ng SHPCC ay naipaliwanag
                  sa akin at nauunawaan ko at ako ay sumasang-ayon at
                  nakahandang tuparin ang lahat ng ito.
                </p>
                <p>
                  Matapos basahin ang Kasunduang ito, nalalaman ko na ang Lupon
                  ng Patnugutan at ang pamunuan ng SHPCC ay maaari akong patawan
                  ng kaparusahan o gumawa ng anumang hakbanging naaayon sa batas
                  sakaling ako ay may nilabag sa anumang probisyong nakasaad sa
                  kasunduang ito na hindi na kinakailangan pang idulog sa korte.
                </p>
              </div>
            </TermsAndConditions>
          )}
        </div>
      )}
      {!isFormValid && !isDisabled && (
        <p className="italic text-red-500 flex justify-end">
          Please make sure to fill up all required fields.
        </p>
      )}
    </div>
  );
}

export default RegularMemberApplication;
