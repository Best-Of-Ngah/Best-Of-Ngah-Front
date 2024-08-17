import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

const API_URL = "http://localhost:8086/users";

const fetchUsers = async (
  page = 1,
  size = 10,
  sortBy = "lastName",
  direction = "asc"
) => {
  return axios.get(API_URL, {
    params: { page, size, propertyToSortBy: sortBy, direction },
  });
};

export default function CrudUser() {
  const [users, setUsers] = useState([]);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadUsers();
  }, [currentPage]);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers(currentPage, limit);
      const usersData = response.data.items || [];
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
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
                <th className="px-4 py-2 text-left text-gray-600">Image</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border-b border-gray-200">{user.id}</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt="User"
                        style={{ height: '1.5rem', width: '1.5rem', objectFit: 'cover' }}
                      />
                    ) : "No image"}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">{user.email}</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.status ? "Active" : "Inactive"}
                  </td>
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
