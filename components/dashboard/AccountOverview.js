import Link from "next/link";

function AccountOverview({
  data,
  gintongButilLoanApplications,
  regularLoanApplications,
  associateMembershipData,
  regularMembershipData,
  isAdmin,
}) {
  const { email, firstName, lastName, contactNumber, address, facebookName } =
    data;

  const UserApplications = () => {
    return (
      <div className="py-4 grid gap-4 grid-cols-2">
        <div className="bg-white rounded-2xl p-8">
          <div className="flex justify-between items-center pb-4">
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
                className="bg-shpccRed text-white p-2 px-4 rounded-md hover:underline text-xs"
              >
                {!associateMembershipData ? "Apply" : "View"}
              </Link>
            )}
          </div>
          {!associateMembershipData ? (
            <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
              No Application Data
            </dd>
          ) : associateMembershipData.isDraft === true ? (
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center col-span-2">
              <dt class="order-last text-xs font-medium text-gray-400">
                Status
              </dt>

              <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
                Draft
              </dd>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center col-span-2">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Status
                </dt>

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
                  {associateMembershipData.status}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Submission Date
                </dt>

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
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

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
                  {associateMembershipData.accountNumber
                    ? associateMembershipData.accountNumber
                    : "-"}
                </dd>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-2xl p-8">
          <div className="flex justify-between items-center pb-4">
            <p className="font-bold text-lg">Regular Membership Application</p>
            {isAdmin && !regularMembershipData?.dateSubmitted ? null : (
              <Link
                href={`${
                  isAdmin
                    ? `/dashboard/admin/membership/regular/${email}`
                    : "/dashboard/membership/regular-application"
                }`}
                className="bg-shpccRed text-white p-2 px-4 rounded-md hover:underline text-xs"
              >
                {!regularMembershipData ? "Apply" : "View"}
              </Link>
            )}
          </div>
          {!regularMembershipData ? (
            <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
              No Application Data
            </dd>
          ) : regularMembershipData.isDraft === true ? (
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center col-span-2">
              <dt class="order-last text-xs font-medium text-gray-400">
                Status
              </dt>

              <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
                Draft
              </dd>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center col-span-2">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Status
                </dt>

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
                  {regularMembershipData.status}
                </dd>
              </div>
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-xs font-medium text-gray-400">
                  Submission Date
                </dt>

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
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
                  Associate Account Number
                </dt>

                <dd class="text-4xl font-extrabold text-shpccRed md:text-xl">
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
            {firstName && lastName ? firstName + " " + lastName : "-"}
          </p>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Email</p>
            <p className="font-light">{email ? email : "-"}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Contact Number</p>
            <p className="font-light">{contactNumber ? contactNumber : "-"}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Address</p>
            <p className="font-light">{address ? address : "-"}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <p className="font-bold">Facebook Name</p>
            <p className="font-light">{facebookName ? facebookName : "-"}</p>
          </div>
        </div>
      </div>
      <UserApplications />
    </div>
  );
}

export default AccountOverview;
