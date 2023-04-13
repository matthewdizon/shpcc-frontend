function CompanyInformation({ info, onChange, isDisabled }) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Company Information
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col w-full">
          <label className=" font-light text-gray-400 text-sm">
            Occupation / Business
          </label>
          <input
            type="text"
            value={info?.business}
            onChange={(e) => onChange("business", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 lg:w-1/2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Company Name
          </label>
          <input
            type="text"
            value={info?.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <label className=" font-light text-gray-400 text-sm">
            Company Address
          </label>
          <input
            type="text"
            value={info?.companyAddress}
            onChange={(e) => onChange("companyAddress", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Company ID No.
          </label>
          <input
            type="text"
            value={info?.companyIdNumber}
            onChange={(e) => onChange("companyIdNumber", e.target.value)}
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
            value={info?.companyIdValidUntil}
            onChange={(e) => onChange("companyIdValidUntil", e.target.value)}
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

export default CompanyInformation;
