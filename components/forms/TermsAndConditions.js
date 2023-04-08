import { useState } from "react";

function TermsAndConditions({ setShowModal, handleSubmit, children, isSmall }) {
  const [agree, setAgree] = useState(false);

  return (
    <div className="w-full h-full fixed left-0 top-0 bg-[rgba(0,0,0,.5)] z-30 overflow-hidden grid items-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-xl transform transition-all ${
          isSmall ? "m-6 md:m-12 md:w-1/2 !mx-auto" : "md:m-12"
        }`}
      >
        <div className="text-center p-8">
          <span className="text-3xl font-black">Terms and Conditions</span>
          <div
            className={`overflow-auto ${
              isSmall ? "" : "h-[30rem] md:max-h-[40rem]"
            }`}
          >
            {children}
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
