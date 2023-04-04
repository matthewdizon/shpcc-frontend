import Link from "next/link";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";

import {
  handleChange,
  handleChangeArray,
  handleBlur,
  handleAddItem,
  handleRemoveItem,
} from "../../../utils/helpers";

import FinancialInformation from "./FinancialInformation";
import LoanDetails from "./LoanDetails";
import TermsAndConditions from "../TermsAndConditions";
import CollateralDetails from "./CollateralDetails";
import ChattelMortgage from "./ChattelMortgage";

function RegularLoanApplication({ data, formData, setFormData, isDisabled }) {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    // Financial Info
    business: true,
    companyName: true,
    monthlyIncome: true,
    // Loan Details
    date: true,
    amount: true,
    duration: true,
    paymentInterval: true,
    reason: true,
    // Collateral Details
    gamitPanagot: true,
    datePurchased: true,
    collateralAmount: true,
    serialNumber: true,
    // Chattel Mortgage
    vehicle: true,
    model: true,
    motorNumber: true,
  });

  const handleSaveDraft = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.financialInformation,
      ...formData.loanDetails,
      ...formData.collateralDetails,
      ...formData.chattelMortgage,
      user: user.email,
      isDraft: true,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/regular/${
        data ? data._id : ""
      }`,
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
      // user should be redirected to the route of the ID of the loan
      window.location.reload();
    }

    console.log(res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("accessToken");

    const applicationDetails = {
      ...formData.financialInformation,
      ...formData.loanDetails,
      ...formData.collateralDetails,
      ...formData.chattelMortgage,
      user: user.email,
      isDraft: false,
      dateSubmitted: new Date(),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/loans/regular/${
        data ? data._id : ""
      }`,
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
      setShowModal(false);
      window.location.reload();
    }

    console.log(res);
  };

  const requiredFields = [
    { subObjectName: "financialInformation", fieldName: "business" },
    { subObjectName: "financialInformation", fieldName: "companyName" },
    { subObjectName: "financialInformation", fieldName: "monthlyIncome" },
    { subObjectName: "loanDetails", fieldName: "date" },
    { subObjectName: "loanDetails", fieldName: "amount" },
    { subObjectName: "loanDetails", fieldName: "duration" },
    { subObjectName: "loanDetails", fieldName: "paymentInterval" },
    { subObjectName: "loanDetails", fieldName: "reason" },
  ];

  let isFormValid;

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
      <h1 className="font-black text-3xl">Regular Loan Application</h1>
      {isDisabled && <span className="font-thin italic">View Only</span>}
      <form>
        <FinancialInformation
          info={formData?.financialInformation}
          onChange={(field, value) =>
            handleChange("financialInformation", field, value, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <hr className="mt-4" />
        <LoanDetails
          info={formData?.loanDetails}
          onChange={(field, value) =>
            handleChange("loanDetails", field, value, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <CollateralDetails
          info={formData?.collateralDetails}
          onChangeArray={(field, subfield, value, index) =>
            handleChangeArray(
              "collateralDetails",
              field,
              subfield,
              value,
              index,
              setFormData
            )
          }
          addRow={(field, newRow) =>
            handleAddItem("collateralDetails", field, newRow, setFormData)
          }
          removeRow={(field, index) =>
            handleRemoveItem("collateralDetails", field, index, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
        <ChattelMortgage
          info={formData?.chattelMortgage}
          onChangeArray={(field, subfield, value, index) =>
            handleChangeArray(
              "chattelMortgage",
              field,
              subfield,
              value,
              index,
              setFormData
            )
          }
          addRow={(field, newRow) =>
            handleAddItem("chattelMortgage", field, newRow, setFormData)
          }
          removeRow={(field, index) =>
            handleRemoveItem("chattelMortgage", field, index, setFormData)
          }
          isDisabled={isDisabled}
          handleBlur={(name) =>
            handleBlur(name, touchedFields, setTouchedFields)
          }
          touchedFields={touchedFields}
        />
      </form>
      {!isDisabled && (
        <div className="flex flex-wrap justify-end">
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
                  Ako ay nangangako na ang aking hinihiraming pondo na may
                  tubong ISANG porsiyento (1%) kada buwan ay aking babayaran at
                  huhulugan. Sumasang-ayon rin ako na agarang iaawas sa aking
                  uutangin ang isang porsiyentong (1%) tubo at karapatang
                  insurance. Ito ay papatawan ng dalawang porsiyentong (2%)
                  multa kada buwan kung hindi mababayaran sa takdang buwanang
                  hulog. Nakasaad din sa aking isusumite ang paggagamitan ng
                  hihiraming halaga.
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

export default RegularLoanApplication;
