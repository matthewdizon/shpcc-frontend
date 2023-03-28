function EmploymentDetails({
  info,
  onChange,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Employment Details
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.pensioner && !info?.pensioner ? "text-red-500" : ""
            }`}
          >
            Pensioner *
          </label>
          <input
            type="text"
            value={info?.pensioner}
            onChange={(e) => onChange("pensioner", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.pensioner && !info?.pensioner
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("pensioner")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.sss && !info?.sss ? "text-red-500" : ""
            }`}
          >
            SSS *
          </label>
          <input
            type="text"
            value={info?.sss}
            onChange={(e) => onChange("sss", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.sss && !info?.sss ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("sss")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.gsis && !info?.gsis ? "text-red-500" : ""
            }`}
          >
            GSIS *
          </label>
          <input
            type="text"
            value={info?.gsis}
            onChange={(e) => onChange("gsis", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.gsis && !info?.gsis ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("gsis")}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid items-center gap-4 w-full">
        <div className="grid grid-cols-4 gap-4 bg-[#F6F6F6] p-4 rounded-lg border-2 border-[#D9D9D9]">
          <label className=" font-medium text-gray-400 text-sm col-span-4">
            Employment Type
          </label>
          <div
            className="grid col-span-4"
            onChange={(e) => onChange("employmentType", e.target.value)}
          >
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="employmentType"
                value="employedAndOrBusinessOwner"
                checked={info?.employmentType === "employedAndOrBusinessOwner"}
                disabled={isDisabled}
              />
              Locally Employed and/or Business Owner
            </label>
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="employmentType"
                value="ofw"
                checked={info?.employmentType === "ofw"}
                disabled={isDisabled}
              />
              OFW
            </label>
          </div>
          {info?.employmentType === "employedAndOrBusinessOwner" ? (
            <div className="flex flex-wrap gap-4 col-span-4">
              <label className="flex gap-2 font-medium text-gray-400 text-sm items-center w-full">
                <input
                  type="checkbox"
                  name="isEmployee"
                  value="ofw"
                  checked={info?.isEmployee}
                  onChange={(e) => onChange("isEmployee", !info?.isEmployee)}
                  disabled={isDisabled}
                />
                Employee
              </label>
              {info?.isEmployee && (
                <>
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
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.companyAddress && !info?.companyAddress
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Address *
                    </label>
                    <input
                      type="text"
                      value={info?.companyAddress}
                      onChange={(e) =>
                        onChange("companyAddress", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.companyAddress && !info?.companyAddress
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("companyAddress")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.companyContactNumber &&
                        !info?.companyContactNumber
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Contact Number *
                    </label>
                    <input
                      type="text"
                      value={info?.companyContactNumber}
                      onChange={(e) =>
                        onChange("companyContactNumber", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.companyContactNumber &&
                        !info?.companyContactNumber
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("companyContactNumber")}
                      disabled={isDisabled}
                    />
                  </div>
                </>
              )}
              <label className="flex gap-2 font-medium text-gray-400 text-sm items-center w-full">
                <input
                  type="checkbox"
                  name="isBusinessOwner"
                  value="ofw"
                  checked={info?.isBusinessOwner}
                  onChange={(e) =>
                    onChange("isBusinessOwner", !info?.isBusinessOwner)
                  }
                  disabled={isDisabled}
                />
                Own Business
              </label>
              {info?.isBusinessOwner && (
                <>
                  <div className="flex flex-col">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.businessType && !info?.businessType
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Type of Business *
                    </label>
                    <input
                      type="text"
                      value={info?.businessType}
                      onChange={(e) => onChange("businessType", e.target.value)}
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.businessType && !info?.businessType
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("businessType")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.businessName && !info?.businessName
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={info?.businessName}
                      onChange={(e) => onChange("businessName", e.target.value)}
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.businessName && !info?.businessName
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("businessName")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.businessLocation &&
                        !info?.businessLocation
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Location *
                    </label>
                    <input
                      type="text"
                      value={info?.businessLocation}
                      onChange={(e) =>
                        onChange("businessLocation", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.businessLocation &&
                        !info?.businessLocation
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("businessLocation")}
                      disabled={isDisabled}
                    />
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 col-span-4">
              <div className="flex flex-col flex-grow">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.ofwCompanyName && !info?.ofwCompanyName
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  value={info?.ofwCompanyName}
                  onChange={(e) => onChange("ofwCompanyName", e.target.value)}
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.ofwCompanyName && !info?.ofwCompanyName
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("ofwCompanyName")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.ofwCompanyAddress && !info?.ofwCompanyAddress
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Address *
                </label>
                <input
                  type="text"
                  value={info?.ofwCompanyAddress}
                  onChange={(e) =>
                    onChange("ofwCompanyAddress", e.target.value)
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.ofwCompanyAddress && !info?.ofwCompanyAddress
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("ofwCompanyAddress")}
                  disabled={isDisabled}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
