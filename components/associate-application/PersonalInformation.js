function PersonalInformation({ personalInfo, onChange }) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">
        Personal Information
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Last Name</label>
          <input
            type="text"
            value={personalInfo?.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            First Name
          </label>
          <input
            type="text"
            value={personalInfo?.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Middle Name
          </label>
          <input
            type="text"
            value={personalInfo?.middleName}
            onChange={(e) => onChange("middleName", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col w-16">
          <label className=" font-light text-gray-400 text-sm">Suffix</label>
          <input
            type="text"
            value={personalInfo?.suffix}
            onChange={(e) => onChange("suffix", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Maiden Name <span className="italic">(if married)</span>
          </label>
          <input
            type="text"
            value={personalInfo?.maidenName}
            onChange={(e) => onChange("maidenName", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col w-[40%] flex-grow">
          <label className=" font-light text-gray-400 text-sm">Address</label>
          <input
            type="text"
            value={personalInfo?.address}
            onChange={(e) => onChange("address", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col w-[20%]">
          <label className=" font-light text-gray-400 text-sm">
            Date of Birth
          </label>
          <input
            type="date"
            value={personalInfo?.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col w-16">
          <label className=" font-light text-gray-400 text-sm">Age</label>
          <input
            type="text"
            value={personalInfo?.age}
            onChange={(e) => onChange("age", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Place of Birth
          </label>
          <input
            type="text"
            value={personalInfo?.placeOfBirth}
            onChange={(e) => onChange("placeOfBirth", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-light text-gray-400 text-sm">Gender</label>
          <select
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full"
            value={personalInfo?.gender}
            onChange={(e) => onChange("gender", e.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonBinary">Non-Binary</option>
            <option value="nonConforming">Non-Conforming</option>
            <option value="secret">Prefer not to respond</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-light text-gray-400 text-sm">
            Civil Status
          </label>
          <select
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full"
            value={personalInfo?.civilStatus}
            onChange={(e) => onChange("civilStatus", e.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="separated">Separated</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Contact No.
          </label>
          <input
            type="text"
            value={personalInfo?.contactNumber}
            onChange={(e) => onChange("contactNumber", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Facebook Name / Link
          </label>
          <input
            type="text"
            value={personalInfo?.facebookName}
            onChange={(e) => onChange("facebookName", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">
            Viber / Messenger
          </label>
          <input
            type="text"
            value={personalInfo?.viberMessenger}
            onChange={(e) => onChange("viberMessenger", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" font-light text-gray-400 text-sm">Religion</label>
          <input
            type="text"
            value={personalInfo?.religion}
            onChange={(e) => onChange("religion", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
        <div className="flex flex-col w-[20%]">
          <label className="font-light text-gray-400 text-sm">
            Educational Attainment
          </label>
          <select
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full"
            value={personalInfo?.educationalAttainment}
            onChange={(e) => onChange("educationalAttainment", e.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="elementary">Elementary</option>
            <option value="highSchool">High School</option>
            <option value="college">College</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>
        <div className="flex flex-col flex-grow">
          <label className=" font-light text-gray-400 text-sm">
            Held in Trust For
          </label>
          <input
            type="text"
            value={personalInfo?.inTrustFor}
            onChange={(e) => onChange("inTrustFor", e.target.value)}
            className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
