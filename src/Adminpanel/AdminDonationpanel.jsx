import React, { useState } from 'react';
import useGetAllDonations from '../api/donationApi/useGetAllDonations';

const AdminDonationPanel = () => {
  const { data: donations, isLoading, isError, error } = useGetAllDonations();
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const filteredDonations = donations.filter(donation => {
    const donationDate = new Date(donation.timestamp);
    const start = startDate ? new Date(startDate) : new Date('1970-01-01');
    const end = endDate ? new Date(endDate) : new Date();

    return (
      donation.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      donationDate >= start && donationDate <= end
    );
  });

  return (
    <div className="admin-donation-panel">
      <h2 className="text-purple-900 text-2xl mb-4">Admin Donations Panel</h2>
      <div className="filters flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 text-lg border border-purple-600 flex-grow"
        />
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="p-2 text-lg border border-purple-600"
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="p-2 text-lg border border-purple-600"
        />
      </div>
      <div className="donation-box border rounded-lg">
        {filteredDonations.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-4 border border-white">Amount</th>
                <th className="p-4 border border-white">Name</th>
                <th className="p-4 border border-white">Email</th>
                <th className="p-4 border border-white">PhoneNumber</th>
                <th className="p-4 border border-white">Timestamp</th>
                <th className="p-4 border border-white">Pidx</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.map(donation => (
                <tr key={donation.id} className="bg-white text-purple-600">
                  <td className="p-4 border border-purple-600">{donation.amount}</td>
                  <td className="p-4 border border-purple-600">{donation.name}</td>
                  <td className="p-4 border border-purple-600">{donation.email}</td>
                  <td className="p-4 border border-purple-600">{donation.phone}</td>
                  <td className="p-4 border border-purple-600">{new Date(donation.timestamp).toLocaleString()}</td>
                  <td className="p-4 border border-purple-600">{donation.pidx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center p-4 bg-purple-600 text-white rounded-lg">No donations found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDonationPanel;
