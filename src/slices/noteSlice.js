import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isTokenExpired } from "../utils/util";
import { logout } from "./userSlice";
import { api } from "../api/apis";

const initialState = {
  notes: [],
  loading: false,
  error: false,
};

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const token = getState().user.token;
    if (isTokenExpired(token)) {
      dispatch(logout());
      return rejectWithValue("Token expired");
    }
    try {
      const response = await api.notesApi.fetchNotes(token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (note, { getState, dispatch, rejectWithValue }) => {
    const token = getState().user.token;
    if (isTokenExpired(token)) {
      dispatch(logout());
      return rejectWithValue("Token expired");
    }
    try {
      const response = await api.notesApi.createNote(note, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async ({ noteId, note }, { getState, dispatch, rejectWithValue }) => {
    const token = getState().user.token;
    if (isTokenExpired(token)) {
      dispatch(logout());
      return rejectWithValue("Token expired");
    }
    try {
      const response = await api.notesApi.updateNote(noteId, note, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async ({ noteId, note }, { getState, dispatch, rejectWithValue }) => {
    const token = getState().user.token;
    if (isTokenExpired(token)) {
      dispatch(logout());
      return rejectWithValue("Token expired");
    }
    try {
      const response = await api.notesApi.deleteNote(noteId, note, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(createNote.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createNote.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createNote.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateNote.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateNote.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateNote.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteNote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteNote.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default noteSlice.reducer;
