import Link from "next/link";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";

import {
  handleChange,
  handleChangeArray,
  handleAddItem,
  handleRemoveItem,
} from "../../../utils/helpers";

import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import AccountInformation from "./AccountInformation";
import BeneficiariesDependents from "./BeneficiariesDependents";
import TermsAndConditions from "../TermsAndConditions";

function AssociateApplication({ data, formData, setFormData }) {
  const { user } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.personalInformation,
      ...formData.companyInformation,
      ...formData.accountInformation,
      ...formData.beneficiariesDependents,
      user: user.email,
      isDraft: false,
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

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.personalInformation,
      ...formData.companyInformation,
      ...formData.accountInformation,
      ...formData.beneficiariesDependents,
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

  return (
    <div className="bg-white p-8 rounded-3xl">
      <h1 className="font-black text-3xl">Associate Membership Application</h1>
      <div>
        <PersonalInformation
          info={formData?.personalInformation}
          onChange={(field, value) =>
            handleChange("personalInformation", field, value, setFormData)
          }
        />
        <hr className="mt-4" />
        <CompanyInformation
          info={formData?.companyInformation}
          onChange={(field, value) =>
            handleChange("companyInformation", field, value, setFormData)
          }
        />
        <hr className="mt-4" />
        <AccountInformation
          info={formData?.accountInformation}
          onChange={(field, value) =>
            handleChange("accountInformation", field, value, setFormData)
          }
          onChangeArray={(field, subfield, value, index) =>
            handleChangeArray(
              "accountInformation",
              field,
              subfield,
              value,
              index,
              setFormData
            )
          }
          addRow={(field, newRow) =>
            handleAddItem("accountInformation", field, newRow, setFormData)
          }
          removeRow={(field, index) =>
            handleRemoveItem("accountInformation", field, index, setFormData)
          }
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
        />
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
              className="bg-shpccRed text-white p-2 rounded-lg my-4 px-8 hover:bg-shpccDarkRed active:bg-red-800"
              onClick={() => setShowModal(true)}
            >
              Next
            </button>
          </div>
        </div>
        {showModal && (
          <TermsAndConditions
            setShowModal={setShowModal}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default AssociateApplication;
