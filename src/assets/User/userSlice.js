import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const userExists = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  user: userExists ? JSON.parse(userExists) : null,
  message: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isSuccess = false;
      });
  },
});

export default userSlice.reducer;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.register(userData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", async (userData) => {});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});