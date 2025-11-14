import Axios from "axios";

const API_BASE_URL = "https://nlog-backend.onrender.com";

export const axios = Axios.create({ baseURL: API_BASE_URL });

const userApi = {
  login: (formData) =>
    axios.post("/auth/login", formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }),
  signUp: (data) => axios.post("/auth/signup", data),
};

const notesApi = {
  createNote: (data, token) =>
    axios.post("/notes", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  fetchNotes: (token) =>
    axios.get("/notes", { headers: { Authorization: `Bearer ${token}` } }),
  modifyNote: (noteId, newNote, token) =>
    axios.put(`/notes/${noteId}`, newNote, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteNote: (noteId, newNote, token) =>
    axios.delete(`/notes/${noteId}`, newNote, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const api = { userApi, notesApi };
