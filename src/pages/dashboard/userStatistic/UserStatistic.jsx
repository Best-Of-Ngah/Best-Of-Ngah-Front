import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Delete, Add } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

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

const createUser = async (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateUser = async (formData) => {
  return axios.put(`${API_URL}/${formData.get("userId")}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default function CrudUser() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState("");

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

  const handleEdit = (user) => {
    setEditUser(user);
    setIsEditing(true);
    setImageFile(null);
    setPassword("");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleCreate = () => {
    setEditUser({
      id: "",
      email: "",
      password: "",
      image: "",
    });
    setIsCreating(true);
    setImageFile(null);
    setPassword("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("userId", editUser.id || "");
    formData.append("email", editUser.email);
    formData.append("password", password);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    console.log(formData);

    try {
      if (isCreating) {
        await createUser(formData);
      } else {
        await updateUser(formData);
      }
      loadUsers();
      setIsEditing(false);
      setIsCreating(false);
      setEditUser(null);
      setImageFile(null);
      setPassword("");
    } catch (error) {
      console.error("Error updating or creating user:", error);
    }
  };

  return (
    <Grid container minHeight={"90vh"} className="w-100wh" position="relative">
      <div className="p-1" style={{ position: "relative", zIndex: 10 }}>
        {(isEditing || isCreating) && editUser && (
          <div
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-4"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 20,
            }}
          >
            <h2 className="text-lg font-semibold mb-4">
              {isCreating ? "Create User" : "Edit User"}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600">ID</label>
                <input
                  type="text"
                  value={editUser.id}
                  readOnly
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  value={editUser.email}
                  onChange={(e) =>
                    setEditUser({ ...editUser, email: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Image</label>
                <input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {isCreating ? "Create" : "Save"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setIsCreating(false);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
        <div className="overflow-x-auto mt-20">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-main border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">image</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.id}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.status ? "Active" : "Inactive"}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {user.image}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <IconButton onClick={() => handleEdit(user)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)}>
                      <Delete color="secondary" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            <Add /> New User
          </button>
          <div>
            <button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
}
