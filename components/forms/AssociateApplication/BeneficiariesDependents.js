function BeneficiariesDependents({
  info,
  onChangeArray,
  addRow,
  removeRow,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Beneficiaries / Dependents
      </h2>
      {!isDisabled && (
        <button
          type="button"
          onClick={() =>
            addRow("beneficiaries", {
              fullName: "",
              address: "",
              relationship: "",
              age: "",
              dateOfBirth: "",
            })
          }
          className="bg-gray-200 rounded-xl p-2 px-6 max-w-max hover:opacity-50"
        >
          Add Another Beneficiary
        </button>
      )}
      <div className="flex flex-wrap justify-between gap-4">
        {info?.beneficiaries.map((beneficiary, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap gap-2 justify-between w-full items-center"
            >
              <div className="flex flex-col">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.fullName && !beneficiary?.fullName
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={beneficiary?.fullName}
                  onChange={(e) =>
                    onChangeArray(
                      "beneficiaries",
                      "fullName",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.fullName && !beneficiary?.fullName
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("fullName")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.address && !beneficiary?.address
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Address *
                </label>
                <input
                  type="text"
                  value={beneficiary?.address}
                  onChange={(e) =>
                    onChangeArray(
                      "beneficiaries",
                      "address",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.address && !beneficiary?.address
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("address")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.relationship && !beneficiary?.relationship
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Relationship *
                </label>
                <input
                  type="text"
                  value={beneficiary?.relationship}
                  onChange={(e) =>
                    onChangeArray(
                      "beneficiaries",
                      "relationship",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.relationship && !beneficiary?.relationship
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("relationship")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col w-16">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.age && !beneficiary?.age ? "text-red-500" : ""
                  }`}
                >
                  Age *
                </label>
                <input
                  type="text"
                  value={beneficiary?.age}
                  onChange={(e) =>
                    onChangeArray("beneficiaries", "age", e.target.value, index)
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.age && !beneficiary?.age
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("age")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.dateOfBirth && !beneficiary?.dateOfBirth
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={beneficiary?.dateOfBirth}
                  onChange={(e) =>
                    onChangeArray(
                      "beneficiaries",
                      "dateOfBirth",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.dateOfBirth && !beneficiary?.dateOfBirth
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("dateOfBirth")}
                  disabled={isDisabled}
                />
              </div>
              {!isDisabled && info?.beneficiaries.length > 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removeRow("beneficiaries", index)}
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
        {!isDisabled && (
          <button
            type="button"
            onClick={() =>
              addRow("shpccFamilyMembers", {
                name: "",
              })
            }
            className="bg-gray-200 rounded-xl p-2 px-6 hover:opacity-50"
          >
            Add Another Family Member
          </button>
        )}
        {info?.shpccFamilyMembers.map((familyMember, index) => {
          return (
            <div key={index} className="flex justify-between w-full">
              <div className="flex flex-col lg:w-1/2">
                <label className=" font-light text-gray-400 text-sm">
                  Name of Family Members Who Are Part Of SHPCC
                </label>
                <input
                  type="text"
                  value={familyMember?.name}
                  onChange={(e) =>
                    onChangeArray(
                      "shpccFamilyMembers",
                      "name",
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
              {!isDisabled && info?.shpccFamilyMembers.length > 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removeRow("shpccFamilyMembers", index)}
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

export default BeneficiariesDependents;
