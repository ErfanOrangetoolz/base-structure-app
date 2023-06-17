import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "../../../app/SliceName";
import { adminLoginState } from "../state/adminLoginState";

const adminSlice = createSlice({
  name: sliceName.admin_login,
  initialState: adminLoginState,
  reducers: {
		handleTogglePasswordShowFlag: state => {
      state.isShowPassword = !state.isShowPassword;
    },
    handleLogin: state => {
      state.isSubmitting = true;
      state.errorMessage = '';
    },
		handleLoginSuccess: (state, action) => {
			state.isSubmitting = false;
      state.errorMessage = '';
      state.token = action.payload.token;
      state.tokenExpireTime = action.payload.tokenExpireTime;
      state.isLoggedIn = true;
		},
		handleLoginFailuer: (state, action) => {
			state.isSubmitting = false;
      state.errorMessage = action.payload;
		},
		handleLogout: state => {
      state.token = null;
      state.tokenExpireTime = null;
      state.isLoggedIn = false;
		}
  },
});

export const {
	handleTogglePasswordShowFlag,
	handleLogin,
	handleLoginSuccess,
	handleLoginFailuer,
	handleLogout
} = adminSlice.actions;

export default adminSlice.reducer;
