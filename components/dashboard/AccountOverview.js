import { useState } from "react";
import Link from "next/link";

function AccountOverview({
  data,
  gintongButilLoanApplications,
  regularLoanApplications,
  associateMembershipData,
  regularMembershipData,
  isAdmin,
}) {
  const {
    email,
    firstName,
    lastName,
    contactNumber,
    address,
    facebookName,
    isAdmin: memberIsAdmin,
    department,
    associateAccountNumber,
    regularAccountNumber,
    membershipType,
  } = data;
  const [showUpdateModal, setShowUpdateModal] = useState(null);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(null);

  const UserApplications = () => {
    return (
      <div className="py-4 grid gap-4 lg:grid-cols-2">
        <div className="bg-white rounded-2xl p-8">
          <div className="flex flex-col gap-4 xl:flex-row justify-between items-center pb-4 text-center">
            <p className="font-bold text-lg">
              Associate Membership Application
            </p>
            {isAdmin && !associateMembershipData?.dateSubmitted ? null : (
              <Link
                href={`${
                  isAdmin
                    ? `/dashboard/admin/membership/associate/${email}`
                    : "/dashboard/membership/associate-application"
                }`}
                className="bg-shpccRed text-white p-2 px-4 rounded-md hover:underline text-xs w-full xl:max-w-max"
              >
                {!associateMembershipData ? "Apply" : "View"}
              </Link>
            )}
          </div>
          {!associateMembershipData ? (
            <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
              No Application Data
            </dd>
          ) : associateMembershipData.isDraft === true ? (
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center md:col-span-2">
              <dt class="order-last text-xs font-medium text-gray-400">
                Status
              </dt>

              <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                Draft
              </dd>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-2">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center md:col-span-2">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Status
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {associateMembershipData.status}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Submission Date
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {associateMembershipData?.dateSubmitted &&
                    Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(associateMembershipData.dateSubmitted))}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Associate Account Number
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {associateMembershipData.accountNumber
                    ? associateMembershipData.accountNumber
                    : "-"}
                </dd>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-2xl p-8">
          <div className="flex flex-col gap-4 xl:flex-row justify-between items-center pb-4 text-center">
            <p className="font-bold text-lg">Regular Membership Application</p>
            {isAdmin &&
            !regularMembershipData?.dateSubmitted ? null : membershipType !==
              "Associate" ? null : (
              <Link
                href={`${
                  isAdmin
                    ? `/dashboard/admin/membership/regular/${email}`
                    : "/dashboard/membership/regular-application"
                }`}
                className="bg-shpccRed text-white p-2 px-4 rounded-md hover:underline text-xs w-full xl:max-w-max"
              >
                {!regularMembershipData ? "Apply" : "View"}
              </Link>
            )}
          </div>
          {!regularMembershipData ? (
            <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
              No Application Data
            </dd>
          ) : regularMembershipData.isDraft === true ? (
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center md:col-span-2">
              <dt class="order-last text-xs font-medium text-gray-400">
                Status
              </dt>

              <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                Draft
              </dd>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-2">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center md:col-span-2">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Status
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {regularMembershipData.status}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Submission Date
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {regularMembershipData?.dateSubmitted &&
                    Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(regularMembershipData.dateSubmitted))}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Regular Account Number
                </dt>

                <dd class="text-3xl font-extrabold text-shpccRed md:text-xl">
                  {regularMembershipData.accountNumber
                    ? regularMembershipData.accountNumber
                    : "-"}
                </dd>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-2xl p-8">
          <p className="font-bold text-lg">Gintong Butil Loan Applications</p>
          <div className="grid divide-y-2 h-64 pr-4 overflow-auto">
            {gintongButilLoanApplications?.length === 0 ? (
              <dd class="text-4xl font-extrabold text-shpccRed md:text-xl pt-4">
                No Loan Data
              </dd>
            ) : (
              gintongButilLoanApplications?.map((gbloan, index) => {
                const { _id, dateSubmitted, status, amount } = gbloan;
                if (isAdmin && !dateSubmitted) {
                  return null;
                }
                return (
                  <Link
                    key={index}
                    className="py-1 hover:bg-gray-100 p-2"
                    href={`${
                      isAdmin
                        ? `/dashboard/admin/loan/gintong-butil/${_id}`
                        : `/dashboard/loan/gintong-butil/${_id}`
                    }`}
                  >
                    <div className={`flex justify-between text-sm font-thin`}>
                      <p className="text-shpccDarkRed">
                        {dateSubmitted
                          ? Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(dateSubmitted))
                          : "Draft"}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>{status}</p>
                      <p>₱{amount?.toLocaleString()}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8">
          <p className="font-bold text-lg">Regular Loan Applications</p>
          <div className="grid divide-y-2 h-64 pr-4 overflow-auto">
            {regularLoanApplications?.length === 0 ? (
              <dd class="text-4xl font-extrabold text-shpccRed md:text-xl pt-4">
                No Loan Data
              </dd>
            ) : (
              regularLoanApplications?.map((loan, index) => {
                const { _id, dateSubmitted, status, amount } = loan;
                if (isAdmin && !dateSubmitted) {
                  return null;
                }
                return (
                  <Link
                    key={index}
                    className="py-1 hover:bg-gray-100 p-2"
                    href={`${
                      isAdmin
                        ? `/dashboard/admin/loan/regular/${_id}`
                        : `/dashboard/loan/regular/${_id}`
                    }`}
                  >
                    <div className={`flex justify-between text-sm font-thin`}>
                      <p className="text-shpccDarkRed">
                        {dateSubmitted
                          ? Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(dateSubmitted))
                          : "Draft"}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>{status}</p>
                      <p>₱{amount?.toLocaleString()}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };

  const UpdateModal = ({
    setShowUpdateModal,
    currFirstName,
    currLastName,
    currContactNumber,
    currAddress,
    currFacebookName,
    // Admin Info
    currMemberIsAdmin,
    currDepartment,
    currAssociateAccountNumber,
    currRegularAccountNumber,
  }) => {
    const [firstName, setFirstName] = useState(currFirstName);
    const [lastName, setLastName] = useState(currLastName);
    const [contactNumber, setContactNumber] = useState(currContactNumber);
    const [address, setAddress] = useState(currAddress);
    const [facebookName, setFacebookName] = useState(currFacebookName);
    // Admin Info
    const [memberIsAdmin, setMemberIsAdmin] = useState(currMemberIsAdmin);
    const [department, setDepartment] = useState(currDepartment);
    const [associateAccountNumber, setAssociateAccountNumber] = useState(
      currAssociateAccountNumber
    );
    const [regularAccountNumber, setRegularAccountNumber] = useState(
      currRegularAccountNumber
    );

    const handleSubmit = async (e) => {
      e.preventDefault();

      const jwt = localStorage.getItem("accessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/` + email,
        {
          method: "PATCH",
          body: JSON.stringify({
            firstName,
            lastName,
            contactNumber,
            address,
            facebookName,
            // Admin Info
            isAdmin: memberIsAdmin,
            department,
            associateAccountNumber,
            regularAccountNumber,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.ok) {
        console.log(res);
        window.location.reload();
      }
    };

    return (
      <div
        className={`fixed inset-0 flex items-center justify-center p-8 z-40`}
        style={{ background: "rgba(50, 50, 50, 0.8)" }}
      >
        <form
          className="bg-white px-12 py-8 rounded-2xl relative"
          onSubmit={handleSubmit}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShowUpdateModal(false)}
            className="absolute top-6 right-6 hover:cursor-pointer"
          >
            <path
              d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              fill="currentColor"
            />
          </svg>
          <p className="font-bold text-xl">Edit Profile</p>
          <div className="grid gap-4 py-8">
            <div className="grid sm:grid-cols-2 items-center">
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="First Name"
                className="px-4 py-2 rounded-xl border-2 border-gray-200"
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Last Name"
                className="px-4 py-2 rounded-xl border-2 border-gray-200"
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>Contact Number</p>
              <input
                type="text"
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
                placeholder="Contact Number"
                className="px-4 py-2 rounded-xl border-2 border-gray-200"
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>Address</p>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Address"
                className="px-4 py-2 rounded-xl border-2 border-gray-200"
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>Facebook Name</p>
              <input
                type="text"
                onChange={(e) => setFacebookName(e.target.value)}
                value={facebookName}
                placeholder="Facebook Name"
                className="px-4 py-2 rounded-xl border-2 border-gray-200"
              />
            </div>
            {isAdmin && (
              // this checks if the currently logged in user is an admin
              <>
                <p className="font-bold text-xl">Admin Settings</p>
                <p className="uppercase text-xs">Previous Member Data</p>
                <div className="grid sm:grid-cols-2 items-center">
                  <p>Associate Account Number</p>
                  <input
                    type="text"
                    onChange={(e) => setAssociateAccountNumber(e.target.value)}
                    value={associateAccountNumber}
                    placeholder="Associate Account #"
                    className="px-4 py-2 rounded-xl border-2 border-gray-200"
                  />
                </div>
                <div className="grid sm:grid-cols-2 items-center">
                  <p>Regular Account Number</p>
                  <input
                    type="text"
                    onChange={(e) => setRegularAccountNumber(e.target.value)}
                    value={regularAccountNumber}
                    placeholder="Regular Account #"
                    className="px-4 py-2 rounded-xl border-2 border-gray-200"
                  />
                </div>
                <p className="uppercase text-xs">Admin Privileges</p>
                <div className="grid grid-cols-2">
                  <p>Set As Admin</p>
                  <input
                    type="checkbox"
                    onChange={(e) => setMemberIsAdmin(!memberIsAdmin)}
                    checked={memberIsAdmin}
                    className="px-4 py-2 rounded-xl border-2 border-gray-200"
                  />
                </div>
                {memberIsAdmin && (
                  <>
                    <div className="grid sm:grid-cols-2 items-center">
                      <p>Department</p>
                      <select
                        className={`border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option value="none" defaultValue>
                          None
                        </option>
                        <option value="Loans">Loans</option>
                        <option value="Memberships">Memberships</option>
                      </select>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-shpccRed text-[#fffffe] px-4 py-2 rounded-lg hover:shadow-lg uppercase"
            >
              Edit Profile
            </button>
          </div>
        </form>
      </div>
    );
  };

  const ChangePasswordModal = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [touchedFields, setTouchedFields] = useState({
      oldPassword: true,
      newPassword: true,
      confirmNewPassword: true,
    });

    const handleSubmit = async (event) => {
      event.preventDefault();

      const jwt = localStorage.getItem("accessToken");

      // Check if new password matches confirm new password
      if (newPassword !== confirmNewPassword) {
        setError("New password and confirm new password must match");
        return;
      }

      // Call API to update password
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/users/updatePassword/` +
          email,
        {
          method: "PATCH",
          body: JSON.stringify({
            oldPassword,
            newPassword,
            confirmNewPassword,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setError("");
      } else {
        setError(data.error);
      }
    };

    return (
      <div
        className={`fixed inset-0 flex items-center justify-center p-8 z-40`}
        style={{ background: "rgba(50, 50, 50, 0.8)" }}
      >
        <form
          className="bg-white px-12 py-8 rounded-2xl relative"
          onSubmit={handleSubmit}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShowChangePasswordModal(false)}
            className="absolute top-6 right-6 hover:cursor-pointer"
          >
            <path
              d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              fill="currentColor"
            />
          </svg>
          {message && <p>{message}</p>}
          {error && <p className="text-shpccRed">{error}</p>}
          <div className="grid gap-4 py-8">
            <div className="grid sm:grid-cols-2 items-center">
              <p>Old Password</p>
              <input
                type="password"
                value={oldPassword}
                required
                onChange={(event) => setOldPassword(event.target.value)}
                placeholder="Old Password"
                className={`px-4 py-2 rounded-xl border-2 border-gray-200 ${
                  touchedFields.oldPassword && !oldPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>New Password</p>
              <input
                type="password"
                value={newPassword}
                required
                onChange={(event) => setNewPassword(event.target.value)}
                placeholder="New Password"
                className={`px-4 py-2 rounded-xl border-2 border-gray-200 ${
                  touchedFields.newPassword && !newPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
            </div>
            <div className="grid sm:grid-cols-2 items-center">
              <p>Confirm New Password</p>
              <input
                type="password"
                value={confirmNewPassword}
                required
                onChange={(event) => setConfirmNewPassword(event.target.value)}
                placeholder="Confirm New Password"
                className={`px-4 py-2 rounded-xl border-2 border-gray-200 ${
                  touchedFields.confirmNewPassword && !confirmNewPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-shpccRed text-[#fffffe] px-4 py-2 rounded-lg hover:shadow-lg uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {showUpdateModal && (
        <UpdateModal
          setShowUpdateModal={setShowUpdateModal}
          currFirstName={firstName}
          currLastName={lastName}
          currContactNumber={contactNumber}
          currAddress={address}
          currFacebookName={facebookName}
          currMemberIsAdmin={memberIsAdmin}
          currDepartment={department}
          currAssociateAccountNumber={associateAccountNumber}
          currRegularAccountNumber={regularAccountNumber}
        />
      )}
      {showChangePasswordModal && <ChangePasswordModal />}
      <div className="bg-white p-8 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pb-8">
          <p className="font-bold text-3xl">Profile Overview</p>
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            <div
              className="bg-gray-200 text-black p-2 px-6 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center hover:cursor-pointer w-full lg:w-auto"
              onClick={() => setShowUpdateModal(true)}
            >
              Edit Profile
            </div>
            <div
              className="bg-gray-200 text-black p-2 px-6 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 text-center w-full lg:w-auto"
              onClick={() => setShowChangePasswordModal(true)}
            >
              Change Password
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <p className="font-bold text-2xl">
            {firstName && lastName ? firstName + " " + lastName : "-"}
          </p>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Email</p>
            <p className="font-light">{email ? email : "-"}</p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Contact Number</p>
            <p className="font-light">{contactNumber ? contactNumber : "-"}</p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Address</p>
            <p className="font-light">{address ? address : "-"}</p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Facebook Name</p>
            <p className="font-light">{facebookName ? facebookName : "-"}</p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Membership Type</p>
            <p className="font-light">
              {membershipType ? membershipType : "-"}
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Associate Account Number</p>
            <p className="font-light">
              {associateAccountNumber ? associateAccountNumber : "-"}
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <p className="font-bold">Regular Account Number</p>
            <p className="font-light">
              {regularAccountNumber ? regularAccountNumber : "-"}
            </p>
          </div>
        </div>
      </div>
      <UserApplications />
    </div>
  );
}

export default AccountOverview;
