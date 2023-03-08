function AccountInformation({
  info,
  onChange,
  onChangeArray,
  addRow,
  removeRow,
  isDisabled,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Account Information
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col">
          <label className="font-light text-gray-400 text-sm">
            Type of Accuont
          </label>
          <select
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            disabled={isDisabled}
            value={info?.accountType}
            onChange={(e) => onChange("accountType", e.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="single">Single</option>
            <option value="joint">Joint</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Total Monthly Income
          </label>
          <input
            type="text"
            value={info?.monthlyIncome}
            onChange={(e) => onChange("monthlyIncome", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            SSS/GSIS No.
          </label>
          <input
            type="text"
            value={info?.sssGsisNumber}
            onChange={(e) => onChange("sssGsisNumber", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Tin No.</label>
          <input
            type="text"
            value={info?.tinNumber}
            onChange={(e) => onChange("tinNumber", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Barangay</label>
          <input
            type="text"
            value={info?.barangay}
            onChange={(e) => onChange("barangay", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Voter&apos;s ID
          </label>
          <input
            type="text"
            value={info?.voterId}
            onChange={(e) => onChange("voterId", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-light text-gray-400 text-sm">
            Type of Valid ID
          </label>
          <select
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            disabled={isDisabled}
            value={info?.idType}
            onChange={(e) => onChange("idType", e.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="driversLicense">Driver&apos;s License</option>
            <option value="passport">Passport</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">ID Number</label>
          <input
            type="text"
            value={info?.idNumber}
            onChange={(e) => onChange("idNumber", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Valid Until
          </label>
          <input
            type="date"
            value={info?.idValidUntil}
            onChange={(e) => onChange("idValidUntil", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <label className=" font-medium text-gray-400 text-sm">
            Income Sources
          </label>
          {!isDisabled && (
            <button
              type="button"
              onClick={() =>
                addRow("otherSourcesOfIncome", {
                  source: "",
                  amountPerMonth: "",
                })
              }
              className="bg-gray-200 rounded-xl p-2 px-6 hover:opacity-50"
            >
              Add Another Source
            </button>
          )}
        </div>
        {info?.otherSourcesOfIncome.map((source, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap w-full items-center gap-4"
            >
              <div className="flex flex-col flex-grow">
                <label className=" font-light text-gray-400 text-sm">
                  Source of Income
                </label>
                <input
                  type="text"
                  value={source?.source}
                  onChange={(e) =>
                    onChangeArray(
                      "otherSourcesOfIncome",
                      "source",
                      e.target.value,
                      index
                    )
                  }
                  className={`${
                    isDisabled ? "bg-gray-200" : "bg-white"
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-light text-gray-400 text-sm">
                  Amount <span className="italic">(per month)</span>
                </label>
                <input
                  type="text"
                  value={source?.amountPerMonth}
                  onChange={(e) =>
                    onChangeArray(
                      "otherSourcesOfIncome",
                      "amountPerMonth",
                      e.target.value,
                      index
                    )
                  }
                  className={`${
                    isDisabled ? "bg-gray-200" : "bg-white"
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  disabled={isDisabled}
                />
              </div>
              {!isDisabled && info?.otherSourcesOfIncome.length > 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removeRow("otherSourcesOfIncome", index)}
                  className="hover:cursor-pointer text-shpccRed hover:opacity-50"
                >
                  <path
                    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountInformation;
