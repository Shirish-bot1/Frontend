// src/components/AdminDonations.js
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllDonations,updateTrackingStatus,deleteDonation } from '../api/itemdonation/donations';

const AdminDonations = () => {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState('');

  // Fetch all donations
  const { data: donations, error, isLoading } = useQuery('donations', getAllDonations);

  // Update donation status
  const updateStatusMutation = useMutation(updateTrackingStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries('donations');
    },
  });

  // Delete donation
  const deleteDonationMutation = useMutation(deleteDonation, {
    onSuccess: () => {
      queryClient.invalidateQueries('donations');
    },
  });

  const filteredDonations = donations?.filter((donation) =>
    donation.itemName.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching donations</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Donations</h1>
      <input
        type="text"
        placeholder="Filter donations"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Item Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.map((donation) => (
            <tr key={donation.id}>
              <td className="py-2 px-4 border-b">{donation.itemName}</td>
              <td className="py-2 px-4 border-b">{donation.category}</td>
              <td className="py-2 px-4 border-b">{donation.trackingStatus}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => updateStatusMutation.mutate({ id: donation.id, status: 'received' })}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Mark as Received
                </button>
                <button
                  onClick={() => deleteDonationMutation.mutate(donation.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDonations;
