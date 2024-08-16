import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Delete, Add } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

const API_URL = "http://localhost:8086/projects";

const fetchProjects = async (page = 1, size = 10, sortBy = "realisationDate", direction = "asc") => {
  return axios.get(API_URL, { params: { page, size, propertyToSortBy: sortBy, direction } });
};

const createProject = async (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default function CrudProject() {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadProjects();
  }, [currentPage]);

  const loadProjects = async () => {
    try {
      const response = await fetchProjects(currentPage, limit);
      const projectsData = response.data.items || [];
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleEdit = (project) => {
    setEditProject(project);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    console.log("Delete project with ID:", id);
  };

  const handleCreate = () => {
    setEditProject({
      id: '',
      typeId: '',
      userId: '',
      status: false,
      budget: 0,
      description: '',
      requestDate: new Date().toISOString(),
      realisationDate: new Date().toISOString(),
      file: null,
    });
    setIsCreating(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectId", editProject.id);
    formData.append("typeId", editProject.typeId);
    formData.append("userId", editProject.userId);
    formData.append("status", editProject.status);
    formData.append("budget", editProject.budget);
    formData.append("description", editProject.description);
    formData.append("requestDate", new Date(editProject.requestDate).toISOString());
    formData.append("realisationDate", new Date(editProject.realisationDate).toISOString());
    formData.append("file", editProject.file);

    try {
      if (isCreating) {
        await createProject(formData);
      } else {
        await axios.put(`${API_URL}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      loadProjects();
      setIsEditing(false);
      setIsCreating(false);
      setEditProject(null);
    } catch (error) {
      console.error("Error updating or creating project:", error);
    }
  };

  return (
    <Grid container minHeight={"90vh"} position="relative">
      <div className="p-1" style={{ position: 'relative', zIndex: 10 }}>
        {(isEditing || isCreating) && editProject && (
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-4" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 }}>
            <h2 className="text-lg font-semibold mb-4">{isCreating ? "Create Project" : "Edit Project"}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600">ID</label>
                <input
                  type="text"
                  value={editProject.id}
                  readOnly
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Status</label>
                <input
                  type="checkbox"
                  checked={editProject.status}
                  onChange={(e) => setEditProject({ ...editProject, status: e.target.checked })}
                  className="p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Budget</label>
                <input
                  type="number"
                  value={editProject.budget}
                  onChange={(e) => setEditProject({ ...editProject, budget: e.target.value })}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Description</label>
                <textarea
                  value={editProject.description}
                  onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Request Date</label>
                <input
                  type="datetime-local"
                  value={new Date(editProject.requestDate).toISOString().slice(0, 16)}
                  onChange={(e) => setEditProject({ ...editProject, requestDate: e.target.value })}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Realisation Date</label>
                <input
                  type="datetime-local"
                  value={new Date(editProject.realisationDate).toISOString().slice(0, 16)}
                  onChange={(e) => setEditProject({ ...editProject, realisationDate: e.target.value })}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Image</label>
                <input
                  type="file"
                  onChange={(e) => setEditProject({ ...editProject, file: e.target.files[0] })}
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
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Budget</th>
                <th className="px-4 py-2 text-left text-gray-600">Description</th>
                <th className="px-4 py-2 text-left text-gray-600">Request Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Realisation Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Image</th>
                <th className="px-4 py-2 text-left text-gray-600">Created At</th>
                <th className="px-4 py-2 text-left text-gray-600">Updated At</th>
                <th className="px-4 py-2 text-left text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{project.id}</td>
                  <td className="px-4 py-2">{project.status ? "Active" : "Inactive"}</td>
                  <td className="px-4 py-2">{project.budget}</td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2">{new Date(project.requestDate).toLocaleString()}</td>
                  <td className="px-4 py-2">{new Date(project.realisationDate).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    {project.file && (
                      <a href={project.file} target="_blank" rel="noopener noreferrer">
                        View Image
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-2">{new Date(project.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2">{new Date(project.updatedAt).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <IconButton color="primary" onClick={() => handleEdit(project)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(project.id)}>
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Next
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleCreate}
              className="bg-main text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
}
