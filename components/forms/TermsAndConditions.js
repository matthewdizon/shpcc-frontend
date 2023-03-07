import { useState } from "react";

function TermsAndConditions({ setShowModal, handleSubmit }) {
  const [agree, setAgree] = useState(false);

  return (
    <div className="w-full h-full fixed left-0 top-0 bg-[rgba(0,0,0,.5)] z-30 overflow-hidden grid items-center">
      <div className="bg-white rounded-2xl shadow-xl transform transition-all absolute m-6 md:m-12">
        <div className="text-center p-8">
          <span className="text-3xl font-black">Terms and Conditions</span>
          <div className="overflow-auto h-[30rem] md:h-[40rem]">
            <div className="mt-6 text-gray-500 grid gap-2 text-left">
              <p>
                Ako ay sumasang-ayon na maging Kasaping Depositor ng SACRED
                HEART PARISH CREDIT COOPERATIVE dito ay tinutukoy na SHPCC. Ako
                ay nabigyan ng kaalaman tungkol sa SHPCC at dahil dito,
                naunawaan ko ang layunin at hangarin ng ating samahan.
              </p>
              <p>
                Bilang kasaping depositor ng SHPCC, ako ay
                nangangakongsasailalim sa mga sumusunod:
              </p>
              <ol className="list-decimal ml-8 grid gap-2">
                <li>
                  Susunod ng buong katapatan sa lahat ng mga regulasyong
                  nakasaad sa Artikulo ng Kooperasyon, Saligang Batas ng SHPCC,
                  at mga Resolusyong ipinasa ng Lupon ng Patnugutan at maaaring
                  dadalo sa Pangkalahatang Kapulungan sa itinakdang Sabado ng
                  Marso bawat taon.
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
                  daan at limampung piso (P250.00) sa ikalawang taon ng pagsapi
                  at maaaring magiging regular na kasapi pagkatapos ng dalawang
                  taon.
                </li>
                <li>
                  Lalahok sa pagpapalago ng kapital ng SHPCC sa pamamagitan ng
                  pagdagdag ng deposito.
                </li>
                <li>
                  Walang pasubali at di-mababawi na pangangalagaan ko ang lahat
                  ng mga lihim at “confidential” na impormasyon ng SHPCC bilang
                  pagsunod sa mga probisyon ng “Philippine Bank Secrecy Laws” na
                  nakasaad sa Batas Pambansa Blg. 1405, 6426 at 8791;
                </li>
                <li>
                  Hihikayatin ang aking kapamilya o kaibigan na sumapi sa SHPCC;
                </li>
                <li>
                  Susunod sa lahat ng mga kondisyong nakasaad sa kasunduan para
                  sa pagsapi at pag-ambag ng deposito;
                </li>
                <li>
                  Sakaling ako ay lumabag sa anumang batas na itinakda ng SHPCC,
                  tatanggapin ko ang kaparusahan na maaaring ipataw sa akin
                  tulad ng multa, suspensyon o pagpapatalsik bilang kasapi.{" "}
                </li>
              </ol>
              <p>
                Ang mga probisyong nakasaad sa Kasunduang ito, ang Artikulo para
                sa Kooperasyon at Saligang Batas ng SHPCC ay naipaliwanag sa
                akin at nauunawaan ko at ako ay sumasang-ayon at nakahandang
                tuparin ang lahat ng ito.
              </p>
              <p>
                Matapos basahin ang Kasunduang ito, nalalaman ko na ang Lupon ng
                Patnugutan at ang pamunuan ng SHPCC ay maaari akong patawan ng
                kaparusahan o gumawa ng anumang hakbanging naaayon sa batas
                sakaling ako ay may nilabag sa anumang probisyong nakasaad sa
                kasunduang ito na hindi na kinakailangan pang idulog sa korte.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-between items-center rounded-2xl">
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => setAgree(!agree)}
          >
            <input type="checkbox" checked={agree} />
            <label className="uppercase font-bold text-xs">
              I agree to the opening of this account and shall abide by the
              rules and regulations of the Sacred Heart Parish Credit
              Cooperative
            </label>
          </div>
          <div className="flex gap-2 items-center py-2">
            <span className="lex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </span>
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                className={`${
                  agree
                    ? "hover:bg-shpccDarkRed active:bg-red-800"
                    : "opacity-50"
                } inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-shpccRed text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:border-red-700 focus:shadow-outline-red`}
                disabled={agree ? false : true}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
