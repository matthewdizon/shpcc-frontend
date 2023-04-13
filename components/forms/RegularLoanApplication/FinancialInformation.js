function FinancialInformation({
  info,
  onChange,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Financial Information
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col lg:w-1/2">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.business && !info?.business ? "text-red-500" : ""
            }`}
          >
            Occupation / Business *
          </label>
          <input
            type="text"
            value={info?.business}
            onChange={(e) => onChange("business", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.business && !info?.business ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("business")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.companyName && !info?.companyName
                ? "text-red-500"
                : ""
            }`}
          >
            Company Name *
          </label>
          <input
            type="text"
            value={info?.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.companyName && !info?.companyName
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("companyName")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.monthlyIncome && !info?.monthlyIncome
                ? "text-red-500"
                : ""
            }`}
          >
            Monthly Income *
          </label>
          <input
            type="text"
            value={info?.monthlyIncome}
            onChange={(e) => onChange("monthlyIncome", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.monthlyIncome && !info?.monthlyIncome
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("monthlyIncome")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <label className=" font-light text-gray-400 text-sm">
            Spouse&apos;s Occupation / Business
          </label>
          <input
            type="text"
            value={info?.spouseBusiness}
            onChange={(e) => onChange("spouseBusiness", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Spouse&apos;s Company Name
          </label>
          <input
            type="text"
            value={info?.spouseCompanyName}
            onChange={(e) => onChange("spouseCompanyName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Spouse&apos;s Monthly Income
          </label>
          <input
            type="text"
            value={info?.spouseMonthlyIncome}
            onChange={(e) => onChange("spouseMonthlyIncome", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}

export default FinancialInformation;
