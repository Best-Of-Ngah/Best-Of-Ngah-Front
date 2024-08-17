import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

const API_URL = "http://localhost:8086/projects";

const fetchProjects = async () => {
  return axios.get(API_URL);
};

const updateProject = async (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default function CrudProject() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await fetchProjects();
      const projectsData = response.data.items || [];
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("typeId", editingProject.typeId);
    formData.append("userId", editingProject.userId);
    formData.append("status", editingProject.status);
    formData.append("budget", editingProject.budget);
    formData.append("description", editingProject.description);
    formData.append("requestDate", new Date(editingProject.requestDate).toISOString());
    formData.append("realisationDate", new Date(editingProject.realisationDate).toISOString());
    if (editingProject.file) {
      formData.append("file", editingProject.file);
    }

    try {
      await updateProject(editingProject.id, formData);
      loadProjects();
      setEditingProject(null);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (

    <div className="p-4" style={{ position: 'relative', zIndex: 10 }}>
      {editingProject && (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-4" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 }}>
          <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Type ID</label>
              <input
                type="text"
                value={editingProject.typeId}
                onChange={(e) => setEditingProject({ ...editingProject, typeId: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">User ID</label>
              <input
                type="text"
                value={editingProject.userId}
                onChange={(e) => setEditingProject({ ...editingProject, userId: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Status</label>
              <input
                type="checkbox"
                checked={editingProject.status}
                onChange={(e) => setEditingProject({ ...editingProject, status: e.target.checked })}
                className="p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Budget</label>
              <input
                type="number"
                value={editingProject.budget}
                onChange={(e) => setEditingProject({ ...editingProject, budget: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Description</label>
              <textarea
                value={editingProject.description}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Request Date</label>
              <input
                type="datetime-local"
                value={new Date(editingProject.requestDate).toISOString().slice(0, 16)}
                onChange={(e) => setEditingProject({ ...editingProject, requestDate: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Realisation Date</label>
              <input
                type="datetime-local"
                value={new Date(editingProject.realisationDate).toISOString().slice(0, 16)}
                onChange={(e) => setEditingProject({ ...editingProject, realisationDate: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Image</label>
              <input
                type="file"
                onChange={(e) => setEditingProject({ ...editingProject, file: e.target.files[0] })}
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
              onClick={() => setEditingProject(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <Grid container minHeight={"90vh"} className="ml-4" width={"100vw"} position="relative">
        <div className="overflow-x-auto mt-0 " >
          <table className="min-w-full  bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-main border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Image</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Budget</th>
                <th className="px-4 py-2 text-left text-gray-600">Description</th>
                <th className="px-4 py-2 text-left text-gray-600">Request Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Realisation Date</th>
                <th className="px-4 py-2 text-left text-gray-600"></th>
                <th className="px-4 py-2 text-left text-gray-600"></th>
                <th className="px-4 py-2 text-left text-gray-600"></th>
                <th className="px-4 py-2 text-left text-gray-600"></th>
              </tr>
            </thead>  
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-4 py-2">{project.id}</td>
                  <td className="px-4 py-2">
                    {project.file && <img src={URL.createObjectURL(project.file)} alt="Project" className="w-24 h-24 object-cover" />}
                  </td>
                  <td className="px-4 py-2">{project.status ? "Active" : "Inactive"}</td>
                  <td className="px-4 py-2">{project.budget}</td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2">{new Date(project.requestDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{new Date(project.realisationDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">
                    <IconButton onClick={() => handleEdit(project)}>
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
