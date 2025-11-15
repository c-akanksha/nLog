import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/apis";
import { getDetails } from "../utils/util";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  signedUp: false,
};

const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      const data = new URLSearchParams();
      data.append("username", userName);
      data.append("password", password);
      const response = await api.userApi.login(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

const signUpUser = createAsyncThunk(
  "user/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.userApi.signUp({ name, email, password });
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      state.signedUp = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = getDetails(action.payload["access_token"]);
      state.token = action.payload["access_token"];
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.signedUp = true;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export { loginUser, signUpUser };
export default userSlice.reducer;
