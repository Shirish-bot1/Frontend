import React from 'react';
import useGetDailyDonations from '../api/donationApi/useDailyDonations';
import useGetTotalDonations from '../api/donationApi/useGetTotalDonation';
import useGetHighestDonor from '../api/donationApi/useGetHighestDonor';

const DonationStatspanel = () => {
  const { data: dailyDonations, isLoading: dailyLoading, isError: dailyError } = useGetDailyDonations();
  const { data: totalDonations, isLoading: totalLoading, isError: totalError } = useGetTotalDonations();
  const { data: highestDonor, isLoading: highestLoading, isError: highestError } = useGetHighestDonor();

  if (dailyLoading || totalLoading || highestLoading) return <div>Loading...</div>;
  if (dailyError || totalError || highestError) return <div>Error fetching data</div>;

  return (
    <div className="admin-panel">
      <h2 className="text-indigo-900 text-2xl mb-4">Admin Panel</h2>
      <div className="border-2 border-indigo-600 rounded-lg mb-4">
        <h3 className="bg-indigo-600 text-white py-2 px-4 rounded-t-lg">Daily Donations</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2 border border-white">Date</th>
              <th className="p-2 border border-white">Total Amount</th>
              <th className="p-2 border border-white">Donors</th>
            </tr>
          </thead>
          <tbody>
            {dailyDonations.map((donation, index) => (
              <tr key={index} className="bg-white text-purple-600">
                <td className="p-2 border border-indigo-600">{donation.date}</td>
                <td className="p-2 border border-indigo-600">{donation.totalAmount}</td>
                <td className="p-2 border border-indigo-600">{donation.donors.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-2 border-indigo-600 rounded-lg mb-4">
        <h3 className="bg-indigo-600 text-white py-2 px-4 rounded-t-lg">Total Donations</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2 border border-white">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-purple-600">
              <td className="p-2 border border-indigo-600">{totalDonations.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-2 border-indigo-600 rounded-lg mb-4">
        <h3 className="bg-indigo-600 text-white py-2 px-4 rounded-t-lg">Highest Donor</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2 border border-white">Name</th>
              <th className="p-2 border border-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-purple-600">
              <td className="p-2 border border-indigo-600">{highestDonor.name}</td>
              <td className="p-2 border border-indigo-600">{highestDonor.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationStatspanel;
