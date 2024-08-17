import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

const API_URL = "http://localhost:8086/dons";

const fetchDons = async () => {
  return axios.get(API_URL);
};

const updateDon = async (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData);
};

export default function CrudDon() {
  const [dons, setDons] = useState([]);
  const [editingDon, setEditingDon] = useState(null);

  useEffect(() => {
    loadDons();
  }, []);

  const loadDons = async () => {
    try {
      const response = await fetchDons();
      const donsData = response.data.items || [];
      setDons(donsData);
    } catch (error) {
      console.error("Error fetching dons:", error);
    }
  };

  const handleEdit = (don) => {
    setEditingDon(don);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      provenance: editingDon.provenance,
      provenanceDate: new Date(editingDon.provenanceDate).toISOString().slice(0, 10),
      amount: editingDon.amount,
      userId: editingDon.userId,
      projectId: editingDon.projectId,
    };

    try {
      await updateDon(editingDon.id, formData);
      loadDons();
      setEditingDon(null);
    } catch (error) {
      console.error("Error updating don:", error);
    }
  };

  return (
    <div className="p-4" style={{ position: 'relative', zIndex: 10 }}>
      {editingDon && (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-4" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 }}>
          <h2 className="text-lg font-semibold mb-4">Edit Don</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Provenance</label>
              <input
                type="text"
                value={editingDon.provenance}
                onChange={(e) => setEditingDon({ ...editingDon, provenance: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Provenance Date</label>
              <input
                type="date"
                value={new Date(editingDon.provenanceDate).toISOString().slice(0, 10)}
                onChange={(e) => setEditingDon({ ...editingDon, provenanceDate: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Amount</label>
              <input
                type="number"
                value={editingDon.amount}
                onChange={(e) => setEditingDon({ ...editingDon, amount: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">User ID</label>
              <input
                type="text"
                value={editingDon.userId}
                onChange={(e) => setEditingDon({ ...editingDon, userId: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Project ID</label>
              <input
                type="text"
                value={editingDon.projectId}
                onChange={(e) => setEditingDon({ ...editingDon, projectId: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setEditingDon(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <Grid container minHeight={"90vh"} className="ml-4" width={"100vw"} position="relative">
        <div className="overflow-x-auto mt-0">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-main border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Provenance</th>
                <th className="px-4 py-2 text-left text-gray-600">Provenance Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                <th className="px-4 py-2 text-left text-gray-600">User ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Project ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dons.map((don) => (
                <tr key={don.id}>
                  <td className="px-4 py-2">{don.id}</td>
                  <td className="px-4 py-2">{don.provenance}</td>
                  <td className="px-4 py-2">{new Date(don.provenanceDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{don.amount}</td>
                  <td className="px-4 py-2">{don.userId}</td>
                  <td className="px-4 py-2">{don.projectId}</td>
                  <td className="px-4 py-2">
                    <IconButton onClick={() => handleEdit(don)}>
                      <Edit />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
    </div>
  );
}
