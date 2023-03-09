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

function AssociateApplication({ data, formData, setFormData, isDisabled }) {
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
      {isDisabled && <span className="font-thin italic">View Only</span>}
      <div>
        <PersonalInformation
          info={formData?.personalInformation}
          onChange={(field, value) =>
            handleChange("personalInformation", field, value, setFormData)
          }
          isDisabled={isDisabled}
        />
        <hr className="mt-4" />
        <CompanyInformation
          info={formData?.companyInformation}
          onChange={(field, value) =>
            handleChange("companyInformation", field, value, setFormData)
          }
          isDisabled={isDisabled}
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
          isDisabled={isDisabled}
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
        />
      </div>
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
              className="bg-shpccRed text-white p-2 rounded-lg my-4 px-8 hover:bg-shpccDarkRed active:bg-red-800"
              onClick={() => setShowModal(true)}
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
    </div>
  );
}

export default AssociateApplication;
