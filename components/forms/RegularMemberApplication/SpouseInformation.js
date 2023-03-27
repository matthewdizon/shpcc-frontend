function SpouseInformation({
  info,
  onChange,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Spouse&apos;s Information{" "}
        <span className="italic font-normal text-sm">
          (Maiden name, if applicable)
        </span>
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseLastName && !info?.spouseLastName
                ? "text-red-500"
                : ""
            }`}
          >
            Last Name *
          </label>
          <input
            type="text"
            value={info?.spouseLastName}
            onChange={(e) => onChange("spouseLastName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseLastName && !info?.spouseLastName
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseLastName")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseFirstName && !info?.spouseFirstName
                ? "text-red-500"
                : ""
            }`}
          >
            First Name *
          </label>
          <input
            type="text"
            value={info?.spouseFirstName}
            onChange={(e) => onChange("spouseFirstName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseFirstName && !info?.spouseFirstName
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseFirstName")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Middle Name
          </label>
          <input
            type="text"
            value={info?.spouseMiddleName}
            onChange={(e) => onChange("spouseMiddleName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col w-16">
          <label className=" font-light text-gray-400 text-sm">Suffix</label>
          <input
            type="text"
            value={info?.spouseSuffix}
            onChange={(e) => onChange("spouseSuffix", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseContactNumber && !info?.spouseContactNumber
                ? "text-red-500"
                : ""
            }`}
          >
            Contact Number *
          </label>
          <input
            type="text"
            value={info?.spouseContactNumber}
            onChange={(e) => onChange("spouseContactNumber", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseContactNumber && !info?.spouseContactNumber
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseContactNumber")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseTin && !info?.spouseTin ? "text-red-500" : ""
            }`}
          >
            TIN *
          </label>
          <input
            type="text"
            value={info?.spouseTin}
            onChange={(e) => onChange("spouseTin", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseTin && !info?.spouseTin
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseTin")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spousePensioner && !info?.spousePensioner
                ? "text-red-500"
                : ""
            }`}
          >
            Pensioner *
          </label>
          <input
            type="text"
            value={info?.spousePensioner}
            onChange={(e) => onChange("spousePensioner", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spousePensioner && !info?.spousePensioner
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spousePensioner")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseSss && !info?.spouseSss ? "text-red-500" : ""
            }`}
          >
            SSS *
          </label>
          <input
            type="text"
            value={info?.spouseSss}
            onChange={(e) => onChange("spouseSss", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseSss && !info?.spouseSss
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseSss")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.spouseGsis && !info?.spouseGsis
                ? "text-red-500"
                : ""
            }`}
          >
            GSIS *
          </label>
          <input
            type="text"
            value={info?.spouseGsis}
            onChange={(e) => onChange("spouseGsis", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.spouseGsis && !info?.spouseGsis
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("spouseGsis")}
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
            onChange={(e) => onChange("spouseEmploymentType", e.target.value)}
          >
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="spouseEmploymentType"
                value="employedAndOrBusinessOwner"
                checked={
                  info?.spouseEmploymentType === "employedAndOrBusinessOwner"
                }
                disabled={isDisabled}
              />
              Locally Employed and/or Business Owner
            </label>
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="spouseEmploymentType"
                value="ofw"
                checked={info?.spouseEmploymentType === "ofw"}
                disabled={isDisabled}
              />
              OFW
            </label>
          </div>
          {info?.spouseEmploymentType === "employedAndOrBusinessOwner" ? (
            <div className="flex flex-wrap gap-4 col-span-4">
              <label className="flex gap-2 font-medium text-gray-400 text-sm items-center w-full">
                <input
                  type="checkbox"
                  name="spouseIsEmployee"
                  value="ofw"
                  checked={info?.spouseIsEmployee}
                  onChange={(e) =>
                    onChange("spouseIsEmployee", !info?.spouseIsEmployee)
                  }
                  disabled={isDisabled}
                />
                Employee
              </label>
              {info?.spouseIsEmployee && (
                <>
                  <div className="flex flex-col">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseCompanyName &&
                        !info?.spouseCompanyName
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseCompanyName}
                      onChange={(e) =>
                        onChange("spouseCompanyName", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseCompanyName &&
                        !info?.spouseCompanyName
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseCompanyName")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseCompanyAddress &&
                        !info?.spouseCompanyAddress
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Address *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseCompanyAddress}
                      onChange={(e) =>
                        onChange("spouseCompanyAddress", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseCompanyAddress &&
                        !info?.spouseCompanyAddress
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseCompanyAddress")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseCompanyContactNumber &&
                        !info?.spouseCompanyContactNumber
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Contact Number *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseCompanyContactNumber}
                      onChange={(e) =>
                        onChange("spouseCompanyContactNumber", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseCompanyContactNumber &&
                        !info?.spouseCompanyContactNumber
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseCompanyContactNumber")}
                      disabled={isDisabled}
                    />
                  </div>
                </>
              )}
              <label className="flex gap-2 font-medium text-gray-400 text-sm items-center w-full">
                <input
                  type="checkbox"
                  name="spouseIsBusinessOwner"
                  value="ofw"
                  checked={info?.spouseIsBusinessOwner}
                  onChange={(e) =>
                    onChange(
                      "spouseIsBusinessOwner",
                      !info?.spouseIsBusinessOwner
                    )
                  }
                  disabled={isDisabled}
                />
                Own Business
              </label>
              {info?.spouseIsBusinessOwner && (
                <>
                  <div className="flex flex-col">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseBusinessType &&
                        !info?.spouseBusinessType
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Type of Business *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseBusinessType}
                      onChange={(e) =>
                        onChange("spouseBusinessType", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseBusinessType &&
                        !info?.spouseBusinessType
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseBusinessType")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseBusinessName &&
                        !info?.spouseBusinessName
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseBusinessName}
                      onChange={(e) =>
                        onChange("spouseBusinessName", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseBusinessName &&
                        !info?.spouseBusinessName
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseBusinessName")}
                      disabled={isDisabled}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <label
                      className={`font-light text-gray-400 text-sm ${
                        touchedFields.spouseBusinessLocation &&
                        !info?.spouseBusinessLocation
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Location *
                    </label>
                    <input
                      type="text"
                      value={info?.spouseBusinessLocation}
                      onChange={(e) =>
                        onChange("spouseBusinessLocation", e.target.value)
                      }
                      className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                        touchedFields.spouseBusinessLocation &&
                        !info?.spouseBusinessLocation
                          ? "border-red-500"
                          : ""
                      } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                      onBlur={() => handleBlur("spouseBusinessLocation")}
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
                    touchedFields.spouseOfwCompanyName &&
                    !info?.spouseOfwCompanyName
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  value={info?.spouseOfwCompanyName}
                  onChange={(e) =>
                    onChange("spouseOfwCompanyName", e.target.value)
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.spouseOfwCompanyName &&
                    !info?.spouseOfwCompanyName
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("spouseOfwCompanyName")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.spouseOfwCompanyAddress &&
                    !info?.spouseOfwCompanyAddress
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Address *
                </label>
                <input
                  type="text"
                  value={info?.spouseOfwCompanyAddress}
                  onChange={(e) =>
                    onChange("spouseOfwCompanyAddress", e.target.value)
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.spouseOfwCompanyAddress &&
                    !info?.spouseOfwCompanyAddress
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("spouseOfwCompanyAddress")}
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

export default SpouseInformation;
