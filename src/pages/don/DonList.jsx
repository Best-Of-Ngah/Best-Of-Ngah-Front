import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

const API_URL = "http://localhost:8086/dons";

const fetchDons = async (
  page = 1,
  size = 10,
  sortBy = "provenanceDate",
  direction = "asc"
) => {
  return axios.get(API_URL, {
    params: { page, size, propertyToSortBy: sortBy, direction },
  });
};

export default function CrudDon() {
  const [dons, setDons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    loadDons();
  }, [currentPage]);

  const loadDons = async () => {
    try {
      const response = await fetchDons(currentPage, limit);
      const donsData = response.data.items || [];
      setDons(donsData);
    } catch (error) {
      console.error("Error fetching dons:", error);
    }
  };

  return (
    <Grid container minHeight={"90vh"} width={"75vw"} position="relative">
      <div className="p-4" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-main border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Provenance</th>
                <th className="px-4 py-2 text-left text-gray-600">Provenance Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                <th className="px-4 py-2 text-left text-gray-600">User ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Project ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Created At</th>
                <th className="px-4 py-2 text-left text-gray-600">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {dons.map((don) => (
                <tr key={don.id}>
                  <td className="px-4 py-2 border-b border-gray-200">{don.id}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{don.provenance}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{new Date(don.provenanceDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{don.amount}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{don.userId}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{don.projectId}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{new Date(don.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{new Date(don.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </Grid>
  );
}
