import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  const user = localStorage.getItem("user");
  if (!user || user === "undefined") return null;
  return JSON.parse(user);
};

const storedUser = getUserFromStorage();

const storedToken = localStorage.getItem("token");
const initialState = {
  token: storedToken || null,
  user: storedUser || null,
  isLoggedIn: !!storedToken,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;

      localStorage.removeItem("token");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;