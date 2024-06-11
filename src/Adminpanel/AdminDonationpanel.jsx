import React, { useState } from 'react';
import useGetAllDonations from '../api/donationApi/useGetAllDonations';
import useDeleteDonation from '../api/donationApi/useDeleteDonations';

const AdminDonationPanel = () => {
  const { data: donations, isLoading, isError, error } = useGetAllDonations();
  const deleteDonationMutation = useDeleteDonation(); 
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div>Loading...</div>; // 
  if (isError) return <div>Error: {error.message}</div>; 


  const filteredDonations = donations.filter(donation =>
    donation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleDelete = (id) => {
    deleteDonationMutation.mutate(id);
  };

  return (
    <div className="admin-donation-panel">
      <h2 style={{ color: 'purple', fontSize: '24px', marginBottom: '16px' }}>Admin Donations Panel</h2>
      <div className="search-box" style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', border: '1px solid purple' }}
        />
      </div>
      <div className="donation-box" style={{ border: '1px solid purple', borderRadius: '8px' }}>
        {filteredDonations.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'purple', color: 'white' }}>
                <th style={{ padding: '12px', border: '1px solid white' }}>Amount</th>
                <th style={{ padding: '12px', border: '1px solid white' }}>Name</th>
                <th style={{ padding: '12px', border: '1px solid white' }}>Email</th>
                <th style={{ padding: '12px', border: '1px solid white' }}>Actions</th> {/* Add Actions column */}
              </tr>
            </thead>
            <tbody>
              {filteredDonations.map(donation => (
                <tr key={donation.id} style={{ backgroundColor: 'white', color: 'purple' }}>
                  <td style={{ padding: '12px', border: '1px solid purple' }}>{donation.amount}</td>
                  <td style={{ padding: '12px', border: '1px solid purple' }}>{donation.name}</td>
                  <td style={{ padding: '12px', border: '1px solid purple' }}>{donation.email}</td>
                  <td style={{ padding: '12px', border: '1px solid purple' }}>
                    <button
                      onClick={() => handleDelete(donation.id)}
                      style={{ backgroundColor: 'red', color: 'white', padding: '8px', borderRadius: '4px' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', padding: '16px', backgroundColor: 'purple', color: 'white', borderRadius: '8px' }}>No donations found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDonationPanel;
