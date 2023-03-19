import Link from "next/link";
import { useState } from "react";

import TermsAndConditions from "../TermsAndConditions";

function RegularMemberApplication({ data, formData, setFormData, isDisabled }) {
  const [showModal, setShowModal] = useState(false);
  let isFormValid;
  return (
    <div className="bg-white p-8 rounded-3xl">
      <h1 className="font-black text-3xl">Associate Membership Application</h1>
      {isDisabled && <span className="font-thin italic">View Only</span>}
      <form>
        <div>hello</div>
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
              //   onClick={handleSaveDraft}
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
