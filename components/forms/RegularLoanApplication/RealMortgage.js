function RealMortgage({
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
      <h2 className="text-gray-500 font-bold text-xl py-4">Real Mortgage</h2>
      {!isDisabled && (
        <button
          type="button"
          onClick={() =>
            addRow("realMortgages", {
              vehicle: "",
              model: "",
              motorNumber: "",
            })
          }
          className="bg-gray-200 rounded-xl p-2 px-6 max-w-max hover:opacity-50"
        >
          Add Another Mortgage
        </button>
      )}
      <div className="flex flex-wrap justify-between gap-4">
        {info?.realMortgages?.map((mortgage, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap gap-2 justify-between w-full items-center"
            >
              <div className="flex flex-col flex-grow">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.realEstate && !mortgage?.realEstate
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Real Estate *
                </label>
                <input
                  type="text"
                  value={mortgage?.realEstate}
                  onChange={(e) =>
                    onChangeArray(
                      "realMortgages",
                      "realEstate",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.realEstate && !mortgage?.realEstate
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("realEstate")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.tcdNumber && !mortgage?.tcdNumber
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  TCT No. *
                </label>
                <input
                  type="text"
                  value={mortgage?.tcdNumber}
                  onChange={(e) =>
                    onChangeArray(
                      "realMortgages",
                      "tcdNumber",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.tcdNumber && !mortgage?.tcdNumber
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("tcdNumber")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.location && !mortgage?.location
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Location *
                </label>
                <input
                  type="text"
                  value={mortgage?.location}
                  onChange={(e) =>
                    onChangeArray(
                      "realMortgages",
                      "location",
                      e.target.value,
                      index
                    )
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.location && !mortgage?.location
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("location")}
                  disabled={isDisabled}
                />
              </div>
              {!isDisabled && info?.realMortgages.length > 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removeRow("realMortgages", index)}
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

export default RealMortgage;
