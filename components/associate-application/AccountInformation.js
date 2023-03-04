function AccountInformation({ accountInfo, onChange, onChangeArray }) {
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
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full"
            value={accountInfo?.accountType}
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
            value={accountInfo?.monthlyIncome}
            onChange={(e) => onChange("monthlyIncome", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            SSS/GSIS No.
          </label>
          <input
            type="text"
            value={accountInfo?.sssGsisNumber}
            onChange={(e) => onChange("sssGsisNumber", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Tin No.</label>
          <input
            type="text"
            value={accountInfo?.tinNumber}
            onChange={(e) => onChange("tinNumber", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Barangay</label>
          <input
            type="text"
            value={accountInfo?.barangay}
            onChange={(e) => onChange("barangay", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Voter&apos;s ID
          </label>
          <input
            type="text"
            value={accountInfo?.voterId}
            onChange={(e) => onChange("voterId", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-light text-gray-400 text-sm">
            Type of Valid ID
          </label>
          <select
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full"
            value={accountInfo?.idType}
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
            value={accountInfo?.idNumber}
            onChange={(e) => onChange("idNumber", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Valid Until
          </label>
          <input
            type="date"
            value={accountInfo?.idValidUntil}
            onChange={(e) => onChange("idValidUntil", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        {accountInfo?.otherSourcesOfIncome.map((source, index) => {
          return (
            <div key={index} className="flex justify-between w-full">
              <div className="flex flex-col">
                <label className=" font-light text-gray-400 text-sm">
                  Other Sources of Income
                </label>
                <input
                  type="text"
                  value={source?.source}
                  onChange={(e) =>
                    onChangeArray(
                      "otherSourcesOfIncome",
                      "source",
                      e.target.value
                    )
                  }
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
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
                      e.target.value
                    )
                  }
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountInformation;
