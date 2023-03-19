function AccountOverview({ data }) {
  const { email, firstName, lastName, contactNumber, address, facebookName } =
    data;
  return (
    <div>
      <div className="bg-white p-8 rounded-3xl">
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl pb-4">Profile Overview</p>
          <div className="flex gap-4">
            <div className="bg-gray-200 text-black p-2 px-6 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center">
              Edit Profile
            </div>
            <div className="bg-gray-200 text-black p-2 px-6 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center">
              Change Password
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <p className="font-bold text-2xl">
            {firstName} {lastName}
          </p>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Email</p>
            <p className="font-light">{email}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Contact Number</p>
            <p className="font-light">{contactNumber}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Address</p>
            <p className="font-light">{address}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Facebook Name</p>
            <p className="font-light">{facebookName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview;
