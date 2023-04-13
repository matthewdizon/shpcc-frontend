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
        <div className="flex flex-col">
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
          <label className=" font-light text-gray-400 text-sm">
            Maiden Name <span className="italic">(if married)</span>
          </label>
          <input
            type="text"
            value={info?.maidenName}
            onChange={(e) => onChange("maidenName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col w-[40%] flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.address && !info?.address ? "text-red-500" : ""
            }`}
          >
            Address *
          </label>
          <input
            type="text"
            value={info?.address}
            onChange={(e) => onChange("address", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.address && !info?.address ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("address")}
            disabled={isDisabled}
          />
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
        <div className="flex flex-col w-16">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.age && !info?.age ? "text-red-500" : ""
            }`}
          >
            Age *
          </label>
          <input
            type="text"
            value={info?.age}
            onChange={(e) => onChange("age", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.age && !info?.age ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("age")}
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
              touchedFields.contactNumber && !info?.contactNumber
                ? "text-red-500"
                : ""
            }`}
          >
            Contact No. *
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
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Facebook Name / Link
          </label>
          <input
            type="text"
            value={info?.facebookName}
            onChange={(e) => onChange("facebookName", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Viber / Messenger
          </label>
          <input
            type="text"
            value={info?.viberMessenger}
            onChange={(e) => onChange("viberMessenger", e.target.value)}
            className={`${
              isDisabled ? "bg-gray-200" : "bg-white"
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
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
        <div className="flex flex-col flex-grow">
          <label className={`font-light text-gray-400 text-sm`}>
            Held in Trust For
          </label>
          <input
            type="text"
            value={info?.inTrustFor}
            onChange={(e) => onChange("inTrustFor", e.target.value)}
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

export default PersonalInformation;
