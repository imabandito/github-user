import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gitHubClient } from "../api/apiClient";
import { IUserInfo } from "../models/User";

export const getUser = createAsyncThunk(
  "users/username",
  async (username: string, thunkAPI) => {
    try {
      const response = await gitHubClient.get(`/users/${username}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface IUserState {
  loading: boolean;
  error: string | null;
  data: IUserInfo | null;
}

const initialState: IUserState = {
  loading: false,
  error: null,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<IUserInfo>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
