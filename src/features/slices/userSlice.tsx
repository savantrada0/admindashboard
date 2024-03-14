import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  loading: boolean;
  user: {
    // id: number;
    // username: string;
    // email: string;
    // firstName: string;
    // lastName: string;
    // gender: string;
    // image: string;
    token: string;
  };
  error: string;
  isSuccess: boolean;
};

const userdata = localStorage.getItem("token");

const initialState: InitialState = userdata
  ? {
      loading: false,
      user: {
        token: JSON.parse(userdata),
      },
      isSuccess: true,
      error: "",
    }
  : {
      loading: false,
      user: {
        token: "",
      },
      error: "",
      isSuccess: false,
    };

if (initialState.user.token) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${initialState.user.token}`;
}

export const loginUser: any = createAsyncThunk(
  "/auth/login",
  async (data: object) => {
    const user = await axios.post("/auth/login", data);
    return user.data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Logout: (state) => {
      state.user.token = "";
      axios.defaults.headers.common["Authorization"] = null;
      state.error = "";
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<any>) => {
          localStorage.setItem("token", JSON.stringify(action.payload.token));
          state.user.token = action.payload.token;
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          state.loading = false;
        },
      ),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      });
  },
});

export const { Logout } = userSlice.actions;
export default userSlice.reducer;
