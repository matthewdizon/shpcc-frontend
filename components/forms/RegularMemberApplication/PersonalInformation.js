function PersonalInformation({
  info,
  onChange,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Personal Information
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.lastName && !info?.lastName ? "text-red-500" : ""
            }`}
          >
            Last Name *
          </label>
          <input
            type="text"
            value={info?.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.lastName && !info?.lastName ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("lastName")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.firstName && !info?.firstName ? "text-red-500" : ""
            }`}
          >
            First Name *
          </label>
          <input
            type="text"
            value={info?.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.firstName && !info?.firstName
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("firstName")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Middle Name
          </label>
          <input
            type="text"
            value={info?.middleName}
            onChange={(e) => onChange("middleName", e.target.value)}
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
            value={info?.suffix}
            onChange={(e) => onChange("suffix", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.nickname && !info?.nickname ? "text-red-500" : ""
            }`}
          >
            Nickname *
          </label>
          <input
            type="text"
            value={info?.nickname}
            onChange={(e) => onChange("nickname", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.nickname && !info?.nickname ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("gender")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.gender && !info?.gender ? "text-red-500" : ""
            }`}
          >
            Gender *
          </label>
          <select
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.gender && !info?.gender ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("gender")}
            disabled={isDisabled}
            value={info?.gender}
            onChange={(e) => onChange("gender", e.target.value)}
          >
            <option value="" disabled defaultValue></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonBinary">Non-Binary</option>
            <option value="nonConforming">Non-Conforming</option>
            <option value="secret">Prefer not to respond</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.civilStatus && !info?.civilStatus
                ? "text-red-500"
                : ""
            }`}
          >
            Civil Status *
          </label>
          <select
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.civilStatus && !info?.civilStatus
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("civilStatus")}
            disabled={isDisabled}
            value={info?.civilStatus}
            onChange={(e) => onChange("civilStatus", e.target.value)}
          >
            <option value="" disabled defaultValue></option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="separated">Separated</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.associateAccountNumber &&
              !info?.associateAccountNumber
                ? "text-red-500"
                : ""
            }`}
          >
            Associate Account No. *
          </label>
          <input
            type="text"
            value={info?.associateAccountNumber}
            onChange={(e) => onChange("associateAccountNumber", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.associateAccountNumber &&
              !info?.associateAccountNumber
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("civilStatus")}
            disabled={isDisabled}
          />
        </div>
        <div className="grid items-center gap-4 w-full">
          <div className="flex flex-wrap justify-between gap-4 bg-[#F6F6F6] p-4 rounded-lg border-2 border-[#D9D9D9]">
            <label className=" font-medium text-gray-400 text-sm w-full">
              Current Residence
            </label>
            <div className="flex flex-col">
              <label
                className={`font-light text-gray-400 text-sm ${
                  touchedFields.houseNumber && !info?.houseNumber
                    ? "text-red-500"
                    : ""
                }`}
              >
                House No. *
              </label>
              <input
                type="text"
                value={info?.houseNumber}
                onChange={(e) => onChange("houseNumber", e.target.value)}
                className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                  touchedFields.houseNumber && !info?.houseNumber
                    ? "border-red-500"
                    : ""
                } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
                onBlur={() => handleBlur("houseNumber")}
                disabled={isDisabled}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`font-light text-gray-400 text-sm ${
                  touchedFields.street && !info?.street ? "text-red-500" : ""
                }`}
              >
                Street *
              </label>
              <input
                type="text"
                value={info?.street}
                onChange={(e) => onChange("street", e.target.value)}
                className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                  touchedFields.street && !info?.street ? "border-red-500" : ""
                } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
                onBlur={() => handleBlur("street")}
                disabled={isDisabled}
              />
            </div>
            <div className="flex flex-col">
              <label className=" font-light text-gray-400 text-sm">
                Barangay
              </label>
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
              <label className=" font-light text-gray-400 text-sm">City</label>
              <input
                type="text"
                value={info?.city}
                onChange={(e) => onChange("city", e.target.value)}
                className={`${
                  isDisabled ? "bg-gray-200" : "bg-white"
                } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                disabled={isDisabled}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`font-light text-gray-400 text-sm ${
                  touchedFields.zipCode && !info?.zipCode ? "text-red-500" : ""
                }`}
              >
                Zip Code *
              </label>
              <input
                type="text"
                value={info?.zipCode}
                onChange={(e) => onChange("zipCode", e.target.value)}
                className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                  touchedFields.zipCode && !info?.zipCode
                    ? "border-red-500"
                    : ""
                } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
                onBlur={() => handleBlur("zipCode")}
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.dateOfBirth && !info?.dateOfBirth
                ? "text-red-500"
                : ""
            }`}
          >
            Date of Birth *
          </label>
          <input
            type="date"
            value={info?.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.dateOfBirth && !info?.dateOfBirth
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("dateOfBirth")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.placeOfBirth && !info?.placeOfBirth
                ? "text-red-500"
                : ""
            }`}
          >
            Place of Birth *
          </label>
          <input
            type="text"
            value={info?.placeOfBirth}
            onChange={(e) => onChange("placeOfBirth", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.placeOfBirth && !info?.placeOfBirth
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("placeOfBirth")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.religion && !info?.religion ? "text-red-500" : ""
            }`}
          >
            Religion *
          </label>
          <input
            type="text"
            value={info?.religion}
            onChange={(e) => onChange("religion", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.religion && !info?.religion ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("religion")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.educationalAttainment &&
              !info?.educationalAttainment
                ? "text-red-500"
                : ""
            }`}
          >
            Educational Attainment *
          </label>
          <select
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.educationalAttainment &&
              !info?.educationalAttainment
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("educationalAttainment")}
            disabled={isDisabled}
            value={info?.educationalAttainment}
            onChange={(e) => onChange("educationalAttainment", e.target.value)}
          >
            <option value="" disabled defaultValue></option>
            <option value="elementary">Elementary</option>
            <option value="highSchool">High School</option>
            <option value="college">College</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Undergraduate Degree
          </label>
          <input
            type="text"
            value={info?.undergraduateDegree}
            onChange={(e) => onChange("undergraduateDegree", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Year Graduated
          </label>
          <input
            type="text"
            value={info?.yearGraduated}
            onChange={(e) => onChange("yearGraduated", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className=" font-light text-gray-400 text-sm">
            School Name
          </label>
          <input
            type="text"
            value={info?.schoolName}
            onChange={(e) => onChange("schoolName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col w-1/3 flex-grow">
          <label className=" font-light text-gray-400 text-sm">
            School Address
          </label>
          <input
            type="text"
            value={info?.schoolAddress}
            onChange={(e) => onChange("schoolAddress", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.contactNumber && !info?.contactNumber
                ? "text-red-500"
                : ""
            }`}
          >
            Contact Number *
          </label>
          <input
            type="text"
            value={info?.contactNumber}
            onChange={(e) => onChange("contactNumber", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.contactNumber && !info?.contactNumber
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("contactNumber")}
            disabled={isDisabled}
            placeholder="09xx-xxx-xxxx"
            pattern="09[0-9]{2}-[0-9]{3}-[0-9]{4}"
            id="contactNumber"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.emailAddress && !info?.emailAddress
                ? "text-red-500"
                : ""
            }`}
          >
            Email Address *
          </label>
          <input
            type="text"
            value={info?.emailAddress}
            onChange={(e) => onChange("emailAddress", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.emailAddress && !info?.emailAddress
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("emailAddress")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.facebookName && !info?.facebookName
                ? "text-red-500"
                : ""
            }`}
          >
            Facebook Name/Link *
          </label>
          <input
            type="text"
            value={info?.facebookName}
            onChange={(e) => onChange("facebookName", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.facebookName && !info?.facebookName
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("facebookName")}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid items-center gap-4 w-full">
        <div className="grid grid-cols-4 gap-4 bg-[#F6F6F6] p-4 rounded-lg border-2 border-[#D9D9D9]">
          <label className=" font-medium text-gray-400 text-sm col-span-4">
            Type of Residence
          </label>
          <div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 col-span-4"
            onChange={(e) => onChange("residenceType", e.target.value)}
          >
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="residenceType"
                value="homeAndLandOwner"
                checked={info?.residenceType === "homeAndLandOwner"}
                disabled={isDisabled}
              />
              Home and Land Owner
            </label>
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="residenceType"
                value="homeOwner"
                checked={info?.residenceType === "homeOwner"}
                disabled={isDisabled}
              />
              Home Owner
            </label>
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center">
              <input
                type="radio"
                name="residenceType"
                value="renting"
                checked={info?.residenceType === "renting"}
                disabled={isDisabled}
              />
              Renting
            </label>
            <label className="flex gap-2 font-medium text-gray-400 text-sm items-center italic">
              <input
                type="radio"
                name="residenceType"
                value="nakikitira"
                checked={info?.residenceType === "nakikitira"}
                disabled={isDisabled}
              />
              Nakikitira
            </label>
          </div>
          {info?.residenceType === "homeAndLandOwner" ||
          info?.residenceType === "homeOwner" ? (
            <div className="flex flex-col col-span-4 sm:col-span-1">
              <label
                className={`font-light text-gray-400 text-sm ${
                  touchedFields.yearsInResidence && !info?.yearsInResidence
                    ? "text-red-500"
                    : ""
                }`}
              >
                No. of Years in Residence *
              </label>
              <input
                type="text"
                value={info?.yearsInResidence}
                onChange={(e) => onChange("yearsInResidence", e.target.value)}
                className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                  touchedFields.yearsInResidence && !info?.yearsInResidence
                    ? "border-red-500"
                    : ""
                } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                onBlur={() => handleBlur("yearsInResidence")}
                disabled={isDisabled}
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 col-span-4">
              <div className="flex flex-col w-full md:w-auto">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.residenceOwnerName &&
                    !info?.residenceOwnerName
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Name of Owner *
                </label>
                <input
                  type="text"
                  value={info?.residenceOwnerName}
                  onChange={(e) =>
                    onChange("residenceOwnerName", e.target.value)
                  }
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.residenceOwnerName &&
                    !info?.residenceOwnerName
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("residenceOwnerName")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col w-full md:w-auto">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.residenceAddress && !info?.residenceAddress
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Address *
                </label>
                <input
                  type="text"
                  value={info?.residenceAddress}
                  onChange={(e) => onChange("residenceAddress", e.target.value)}
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.residenceAddress && !info?.residenceAddress
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("residenceAddress")}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex flex-col w-full md:w-auto">
                <label
                  className={`font-light text-gray-400 text-sm ${
                    touchedFields.yearsInResidence && !info?.yearsInResidence
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  No. of Years in Residence *
                </label>
                <input
                  type="text"
                  value={info?.yearsInResidence}
                  onChange={(e) => onChange("yearsInResidence", e.target.value)}
                  className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
                    touchedFields.yearsInResidence && !info?.yearsInResidence
                      ? "border-red-500"
                      : ""
                  } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
                  onBlur={() => handleBlur("yearsInResidence")}
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

export default PersonalInformation;
