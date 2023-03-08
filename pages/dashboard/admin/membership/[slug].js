import Layout from "../../../../components/dashboard/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AssociateApplication from "../../../../components/forms/AssociateApplication";

function AssociateApplicationView() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function fetchData() {
      if (slug) {
        // Retrieve the JWT from local storage
        const jwt = localStorage.getItem("accessToken");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/memberApplications/associate/` +
            slug,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        try {
          const data = await res.json();
          setData(data);
          setFormData({
            personalInformation: {
              lastName: data?.lastName || "",
              firstName: data?.firstName || "",
              middleName: data?.middleName || "",
              suffix: data?.suffix || "",
              maidenName: data?.maidenName || "",
              address: data?.address || "",
              dateOfBirth: data?.dateOfBirth || "",
              age: data?.age || "",
              placeOfBirth: data?.placeOfBirth || "",
              gender: data?.gender || "",
              civilStatus: data?.civilStatus || "",
              contactNumber: data?.contactNumber || "",
              facebookName: data?.facebookName || "",
              viberMessenger: data?.viberMessenger || "",
              religion: data?.religion || "",
              educationalAttainment: data?.educationalAttainment || "",
              inTrustFor: data?.inTrustFor || "",
            },
            companyInformation: {
              business: data?.business || "",
              companyName: data?.companyName || "",
              companyAddress: data?.companyAddress || "",
              companyIdNumber: data?.companyIdNumber || "",
              companyIdValidUntil: data?.companyIdValidUntil || "",
            },
            accountInformation: {
              accountType: data?.accountType || "",
              monthlyIncome: data?.monthlyIncome || "",
              sssGsisNumber: data?.sssGsisNumber || "",
              tinNumber: data?.tinNumber || "",
              barangay: data?.barangay || "",
              voterId: data?.voterId || "",
              idType: data?.idType || "",
              idNumber: data?.idNumber || "",
              idValidUntil: data?.idValidUntil || "",
              otherSourcesOfIncome: data?.otherSourcesOfIncome || [
                {
                  source: "",
                  amountPerMonth: "",
                },
              ],
            },
            beneficiariesDependents: {
              beneficiaries: data?.beneficiaries || [
                {
                  fullName: "",
                  address: "",
                  relationship: "",
                  age: "",
                  dateOfBirth: "",
                },
              ],
              shpccFamilyMembers: data?.shpccFamilyMembers || [
                {
                  name: "",
                },
              ],
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [slug]);

  return (
    <Layout>
      <div className="p-24">
        <p className="font-black text-3xl bg-white p-8 rounded-3xl mb-8">
          Viewing Application: {slug}
        </p>
        <div className="grid grid-cols-[2fr_1fr] gap-8 relative">
          <AssociateApplication formData={formData} isDisabled={true} />
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg p-4 h-max sticky top-12">
            <p className="font-bold text-2xl">Member Care Assistant</p>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 items-center">
                <label>Type of Account</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Account No.</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Code No.</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>O.R. No.</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Initial Deposit</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Authenticated By</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Approved By</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label>Approved Data</label>
                <input
                  type="text"
                  className="bg-white border-gray-400 border rounded-lg pl-2 py-2 lg:p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200">
                Cancel
              </button>
              <button className="bg-shpccRed text-white p-2 rounded-lg hover:bg-shpccDarkRed active:bg-red-800">
                Reject
              </button>
              <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 active:bg-green-700">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AssociateApplicationView;
