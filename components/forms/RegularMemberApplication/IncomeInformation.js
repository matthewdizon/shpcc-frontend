function IncomeInformation({ info, onChange, isDisabled, handleBlur }) {
  const applicantTotal =
    parseFloat(info?.monthlySalary) +
    parseFloat(info?.businessIncome) +
    parseFloat(info?.otherIncomeSource);

  const spouseTotal =
    parseFloat(info?.spouseMonthlySalary) +
    parseFloat(info?.spouseBusinessIncome) +
    parseFloat(info?.spouseOtherIncomeSource);

  const total = applicantTotal + spouseTotal;

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="grid gap-2 py-2">
        <h2 className="text-gray-500 font-bold text-xl py-4">
          Applicant&apos;s Monthly Income
        </h2>
        <div className="grid gap-4">
          <div className="flex flex-col">
            <label className={`font-light text-gray-400 text-sm`}>Salary</label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.monthlySalary}
              onChange={(e) => onChange("monthlySalary", e.target.value)}
              className={`${
                isDisabled ? "bg-gray-200" : "bg-white"
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("monthlySalary")}
              disabled={isDisabled}
            />
          </div>
          <div className="flex flex-col">
            <label className={`font-light text-gray-400 text-sm`}>
              Business Income
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.businessIncome}
              onChange={(e) => onChange("businessIncome", e.target.value)}
              className={`${
                isDisabled ? "bg-gray-200" : "bg-white"
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("businessIncome")}
              disabled={isDisabled}
            />
          </div>
          <div className="flex flex-col">
            <label className={`font-light text-gray-400 text-sm`}>
              Other sources of Income
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.otherIncomeSource}
              onChange={(e) => onChange("otherIncomeSource", e.target.value)}
              className={`${
                isDisabled ? "bg-gray-200" : "bg-white"
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("otherIncomeSource")}
              disabled={isDisabled}
            />
          </div>
          <p
            className={`font-light italic ${
              isNaN(applicantTotal) ? "text-shpccRed" : ""
            }`}
          >
            Total:{" "}
            {isNaN(applicantTotal)
              ? "Invalid Amount"
              : `PHP ${applicantTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
          </p>
        </div>
      </div>
      <div className="grid gap-2 py-2">
        <h2 className="text-gray-500 font-bold text-xl py-4">
          Spouse&apos;s Monthly Income
        </h2>
        <div className="grid gap-4">
          <div className="flex flex-col">
            <label className={`font-light text-gray-400 text-sm`}>Salary</label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.spouseMonthlySalary}
              onChange={(e) => onChange("spouseMonthlySalary", e.target.value)}
              className={`${
                isDisabled ? "bg-gray-200" : "bg-white"
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("spouseMonthlySalary")}
              disabled={isDisabled}
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`font-light text-gray-400 text-sm""
              }`}
            >
              Business Income
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.spouseBusinessIncome}
              onChange={(e) => onChange("spouseBusinessIncome", e.target.value)}
              className={`${isDisabled ? "bg-gray-200" : "bg-white"} ""
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("spouseBusinessIncome")}
              disabled={isDisabled}
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`font-light text-gray-400 text-sm""
              }`}
            >
              Other sources of Income
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="PHP 0.00"
              value={info?.spouseOtherIncomeSource}
              onChange={(e) =>
                onChange("spouseOtherIncomeSource", e.target.value)
              }
              className={`${isDisabled ? "bg-gray-200" : "bg-white"} ""
              } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
              onBlur={() => handleBlur("spouseOtherIncomeSource")}
              disabled={isDisabled}
            />
          </div>
          <p
            className={`font-light italic ${
              isNaN(spouseTotal) ? "text-shpccRed" : ""
            }`}
          >
            Total:{" "}
            {isNaN(spouseTotal)
              ? "Invalid Amount"
              : `PHP ${spouseTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
          </p>
        </div>
      </div>
      <p
        className={`col-span-2 text-center text-2xl font-bold italic ${
          isNaN(total) ? "text-shpccRed" : ""
        }`}
      >
        Grand Total:{" "}
        {isNaN(total)
          ? "Invalid Amount"
          : `PHP ${total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
      </p>
    </div>
  );
}

export default IncomeInformation;
