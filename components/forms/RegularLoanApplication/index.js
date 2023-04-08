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
    remainingLoanBalance: true,
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
    { subObjectName: "loanDetails", fieldName: "remainingLoanBalance" },
    { subObjectName: "loanDetails", fieldName: "reason" },
    {
      subObjectFn: () => formData.collateralDetails.collaterals,
      fieldName: "gamitPanagot",
    },
    {
      subObjectFn: () => formData.collateralDetails.collaterals,
      fieldName: "datePurchased",
    },
    {
      subObjectFn: () => formData.collateralDetails.collaterals,
      fieldName: "collateralAmount",
    },
    {
      subObjectFn: () => formData.collateralDetails.collaterals,
      fieldName: "serialNumber",
    },
    {
      subObjectFn: () => formData.chattelMortgage.mortgages,
      fieldName: "vehicle",
    },
    {
      subObjectFn: () => formData.chattelMortgage.mortgages,
      fieldName: "model",
    },
    {
      subObjectFn: () => formData.chattelMortgage.mortgages,
      fieldName: "motorNumber",
    },
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
                <ol className="list-decimal ml-8 grid gap-2">
                  <li>
                    Sa sandaling ang halagang aking inutang ay hindi ko
                    mabayaran ayon sa Katibayan sa Pagkakautang at Pangako sa
                    Pagbabayad, ang saping puhunan, deposito at anumang
                    benepisyo na nakatalaga sa aking pangalan ay maaaring ibawas
                    sa aking pagkakautang ayon sa batas at patakaran ng
                    kooperatiba. Ang kabuuan ng natitirang balanse ay dapat
                    mabayaran kong lahat, hindi lamang ang naantalang hulog
                    kundi pati na rin ang multa at interes na hindi pa
                    nababayaran o babawasin ito sa susunod na utang.
                  </li>
                  <li>
                    Kung sakaling hindi ko maiayos ang pagbabayad sa loob ng
                    isang buwan kahit hindi pa umabot sa maturity date ang aking
                    utang, binibigyan ko ng kapangyarihan ang SHPCC na gawin ang
                    sumusunod: a) bawasin sa anumang aking inimpok na Guarantee
                    Time Deposit (GTD), time/term at savings deposit ang
                    naantalang hulog b) awasin ang naantalang halaga sa impok ng
                    aking mga anak na menor de edad na nasa aking pangangalaga
                    kung meron man hanggang sa buong halaga ng aking
                    pagkakautang at c) kung hindi ito mabayaran ay maaaring
                    ilitin/kunin ang mga nabanggit na gamit o ng anumang
                    kasangkapan / ari-arian na katumbas ng aking pagkakautang
                    pagkatapos ng maturity date.
                  </li>
                  <li>
                    Sa pagkukulang ko sa pagbabayad ayon sa kasunduang ito,
                    magbabayad ako ng 1% multa sa naantalang hulog, 3% multa at
                    dagdag na 1% - 3% interes sa balanse pagkalampas ng due date
                    hanggang mabayaran ang utang ayon sa itinakdang patakaran ng
                    Kooperatiba.
                  </li>
                  <li>
                    Kapag hindi ako nakabayad sa takdang panahon, binibigyan ko
                    ng karapatan ang SHPCC na gumawa ng anumang hakbanging legal
                    at pananagutan ko ang anumang gugol sa abogado na hindi
                    bababa sa 20% ng kabuuan ng natitirang pagkakautang kasama
                    ang multa at di nabayarang tubo o pakinabang. Binibigyan ko
                    rin ng pahintulot ang SHPCC na makipag-ugnayan sa mga ibang
                    kooperatiba na ibigay o ilathala ang anumang impormasyon
                    tungkol sa mga hindi ko mabayarang utang ng hindi lumalabag
                    sa aking karapatang pantao.
                  </li>
                  <li>
                    Kung ang aking inutang na back- to- back loan ay dadagdagan
                    ko, ang interes ng aking utang ay magiging katulad ng
                    regular loan.
                  </li>
                  <li>
                    Nabasa ko, naintindihan at sumasang-ayon sa lahat ng
                    nasasaad dito at kusang-loob na lumagda sa kasunduang ito.
                  </li>
                  <li>
                    Narito sa baba ang aking lagda, kasama ng aking asawa /
                    co-signor at bilang patunay ng aming pagsang-ayon.
                  </li>
                </ol>
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
